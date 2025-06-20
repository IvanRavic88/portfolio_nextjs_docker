# Affter running the terraform init command, the terraform apply command will create the resources in the AWS account and before running GitHub Actions, 
# it is necessary  to insert the public IP address of the machine that is running Terraform in the variable EC2_HOST in the GitHub Secrets, and
# AWS_INSTANCE_SG_ID (that values will be in output after running the terraform apply command) in the GitHub Secrets.

# Also because of the ECR public repository, lifecycle policy for the ECR repository to expire images after 1 day is not implemented in the code.

# The lifecycle policy can be implemented in the AWS Management Console.

###############################################################################################################################################
# Setup prerequisites for main.tf: created hosted zone, added PEM file, and applied chmod 400 permissions
###############################################################################################################################################

# Default provider for the AWS region
provider "aws" {
  profile = "default"
  region  = "eu-central-1"
}

# Region for the ECR repository (us-east-1 because ECR public is not available in eu-central-1)
provider "aws" {
  alias   = "east"
  profile = "default"
  region  = "us-east-1"
}

# (Windows and WSL) Run a local command to fetch the public IP address of the machine that is running Terraform 
resource "null_resource" "my_ip" {
  provisioner "local-exec" {
    command = "curl -s http://checkip.amazonaws.com/ > my_ip.txt"
  }

  provisioner "local-exec" {
    when    = destroy
    command = "rm -f my_ip.txt"   
  }

  triggers = {
    always_run = timestamp()
  }
}

# Read the public IP address of the machine that is running Terraform
data "local_file" "my_ip" {
  depends_on = [null_resource.my_ip]
  filename   = "my_ip.txt"
}

# Create an IAM role for allowing EC2 instances to access the ECR repository
resource "aws_iam_role" "ecr_role" {
  name = "ecr_role"

  assume_role_policy = jsonencode({
    Version   = "2012-10-17"
    Statement = [
      {
        Action    = "sts:AssumeRole"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
        Effect = "Allow"
        Sid    = ""
      }
    ]
  })
}

# Create IAM policy for allowing EC2 instances to access the ECR repository
resource "aws_iam_role_policy" "ecr_policy" {
  name = "ecr_policy"
  role = aws_iam_role.ecr_role.id

  policy = jsonencode({
    Version   = "2012-10-17"
    Statement = [
      {
        Effect   = "Allow"
        Action   = [
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:BatchCheckLayerAvailability",
          "ecr:ListImages",
          "ecr:DescribeImages"
        ]
        Resource = aws_ecrpublic_repository.portfolio.arn
      }
    ]
  })
}

# Create an instance profile
resource "aws_iam_instance_profile" "ecr_profile" {
  name = "ecr_profile"
  role = aws_iam_role.ecr_role.name
}

# Check the public IP address of the machine that is running Terraform
data "http" "my_ip" {
  url = "http://checkip.amazonaws.com/"
}

# Create a security group
resource "aws_security_group" "SG_MyServer" {
  name        = "SGMyServer"
  description = "SGMyServer security group"
  lifecycle {
    create_before_destroy = true
  }
  # Open port 22 for SSH access from the specified IP addresses (EC2_Instance_Connect and the public IP address of the machine that is running Terraform)
  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = concat(var.EC2_Instance_Connect, ["${chomp(data.local_file.my_ip.content)}/32"])
  }

  # Allow all traffic out from the EC2 instance
  egress  {
    description = "Allow all traffic out"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# Create a public ECR repository
resource "aws_ecrpublic_repository" "portfolio" {
  provider          = aws.east 
  repository_name   = "portfolio_docker_repository"
  force_destroy     = true

}

# Create an EC2 instance with an IAM role and a security group that allows SSH access from the specified IP addresses
resource "aws_instance" "MyServer" {
  ami                  = "ami-098c93bd9d119c051"
  instance_type        = "t2.micro"
  key_name             = var.key_pair_name
  iam_instance_profile = aws_iam_instance_profile.ecr_profile.name
  tags                 = { Name = "MyServer" }
  vpc_security_group_ids = [aws_security_group.SG_MyServer.id]

  root_block_device {
    encrypted   = false
    volume_size = 16
  }

  # Create a local-exec provisioner for running Ansible playbook
  provisioner "local-exec" {
    command = "sleep 120; ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -u ec2-user --private-key ${var.pem_file_path} -i '${aws_instance.MyServer.public_ip},' playbook.yml"
  }
}

resource "aws_eip" "MyServer_eip" {
  instance    = aws_instance.MyServer.id
  depends_on  = [aws_instance.MyServer]
}


# Fetch the existing Route 53 hosted zone for the domain
data "aws_route53_zone" "portfolio_domain" {
  name = "ivanravic.com"
}

# A record for ivanravic.com
resource "aws_route53_record" "ivanravic_com" {
  zone_id = data.aws_route53_zone.portfolio_domain.zone_id
  name    = "ivanravic.com"
  type    = "A"
  ttl     = "300"
  records = [aws_eip.MyServer_eip.public_ip]
}

# A record for www.ivanravic.com
resource "aws_route53_record" "www_ivanravic_com" {
  zone_id = data.aws_route53_zone.portfolio_domain.zone_id
  name    = "www.ivanravic.com"
  type    = "A"
  ttl     = "300"
  records = [aws_eip.MyServer_eip.public_ip]
}





output "MyServer_public_ip" {
  value       = aws_eip.MyServer_eip.public_ip
  description = "The Elastic IP address of the EC2 instance"
}

output "MyServer_security_group_id" {
  value       = aws_security_group.SG_MyServer.id
  description = "The ID of the security group"
}
