# -----------------------------------------------------------------------------
# Variables: General
# -----------------------------------------------------------------------------

variable "environment" {
  type        = string
  default     = "local"
  description = "AWS resource namespace/prefix"
}

variable "region" {
  type        = string
  default     = "eu-west-2"
  description = "AWS region"
}

variable "application_name" {
  type        = string
  description = "Resource name for billing purposes"
}

# -----------------------------------------------------------------------------
# Variables: Website
# -----------------------------------------------------------------------------
variable "domain" {
  type        = string
  description = "If specified it creates a cloudfront distribution with route 53 record"
  default     = ""
}

variable "ssl_certificate" {
  type        = string
  description = "Certificate manager created cerificate ARN"
}

variable "route53_hosted_zone_id" {
  type        = string
  description = "Zone ID of the Route 53 hosted zone"
  default     = ""
}

