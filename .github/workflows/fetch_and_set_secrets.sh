#!/bin/bash

# Initialize and apply Terraform
terraform init
terraform apply -auto-approve

# Fetch Terraform outputs
EIP=$(terraform output -raw MyServer_public_ip)
SG_ID=$(terraform output -raw MyServer_security_group_id)

# Set the GitHub Actions secrets
gh secret set EC2_HOST --body "$EIP"
gh secret set AWS_INSTANCE_SG_ID --body "$SG_ID"
