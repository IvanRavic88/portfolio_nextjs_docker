variable "pem_file_path" {
  description = "Path to the PEM file"
  type        = string
}

variable "key_pair_name" {
  description = "Name of the key pair"
  type        = string
  
}

variable "EC2_Instance_Connect" {
  description = "EC2 instance connect IP addresses"
  type        = list(string)
  default     = []
}