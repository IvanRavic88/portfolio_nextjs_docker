# Default provider for the AWS region
provider "aws" {
  profile = "default"
  region  = "eu-central-1"
}
# Region for the ECR repository (us-east-1 because ECR public is not available in eu-central-1)
provider "aws" {
  alias = "east"
  profile = "default"
  region = "us-east-1"
}

# (Windows and WSL) Run a local command to fetch the public IP address of the machine that is running Terraform 
resource "null_resource" "my_ip" {
  provisioner "local-exec" {
    command = "curl -s http://checkip.amazonaws.com/ > my_ip.txt"
  }

  provisioner "local-exec" {
    when = destroy
    command = "rm -f my_ip.txt"
    
  }
  triggers = {
    always_run = timestamp()
  }
}

# Read the public IP address of the machine that is running Terraform
data "local_file" "my_ip" {
  depends_on = [null_resource.my_ip]
  filename = "my_ip.txt"
}


# Create an IAM role for allowing EC2 instances to access the ECR repository
resource "aws_iam_role" "ecr_role" {
  name = "ecr_role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}

# Create IAM policy for allowing EC2 instances to access the ECR repository
resource "aws_iam_role_policy" "ecr_policy" {
  name = "ecr_policy"
  role = aws_iam_role.ecr_role.id

  policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:GetDownloadUrlForLayer",
        "ecr:BatchGetImage",
        "ecr:BatchCheckLayerAvailability",
        "ecr:ListImages",
        "ecr:DescribeImages"
      ],
      "Resource": "${aws_ecrpublic_repository.portfolio.arn}"
    }
  ]
}
EOF
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
    from_port = 0
    to_port = 0
    protocol = "-1"
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


# Create an EC2 instance with an IAM role and a security group that allows SSH access from the specified IP addresses
resource "aws_instance" "MyServer" {
  ami           = "ami-098c93bd9d119c051"
  instance_type = "t2.micro"
  key_name = var.key_pair_name

  iam_instance_profile = aws_iam_instance_profile.ecr_profile.name

  tags = {
    Name = "MyServer"
  }

  vpc_security_group_ids = [aws_security_group.SG_MyServer.id]

  root_block_device {
    encrypted = false
    volume_size = 16
  }

# Create a local-exec provisioner for running Ansible playbook
provisioner "local-exec" {
command = "sleep 120; ANSIBLE_HOST_KEY_CHECKING=False ansible-playbook -u ec2-user --private-key ${var.pem_file_path} -i '${aws_instance.MyServer.public_ip},' playbook.yml"
}


}

# Create a public ECR repository
resource "aws_ecrpublic_repository" "portfolio" {
  provider = aws.east
  repository_name = "portfolio_docker_repository"
}