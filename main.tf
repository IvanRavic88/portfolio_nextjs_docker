provider "aws" {
  profile = "default"
  region  = "eu-central-1"
}

resource "aws_instance" "MyServer" {
  ami           = "ami-098c93bd9d119c051"
  instance_type = "t2.micro"

  tags = {
    Name = "MyServer"
  }

  vpc_security_group_ids = [aws_security_group.SG_MyServer.id]

  root_block_device {
    volume_size = 16
  }

  provisioner "local-exec" {
    command = "ansible-playbook -i '${self.public_ip},' -u ec2-user playbook.yml"
  }
}

resource "aws_security_group" "SG_MyServer" {
  name        = "SGMyServer"
  description = "SGMyServer security group"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
