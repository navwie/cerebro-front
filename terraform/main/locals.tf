locals {
  application        = "dnm"
  service_name       = "${local.application}-front1"
  short_service_name = var.environment == "prod" ? "p-fr1" : "d-fr1" # <= 5 symbols

  secret_name = data.terraform_remote_state.infra.outputs.application_env_secrets_names["front"]

  tags = {
    ManagedBy   = "Terraform"
    Application = local.application
    Owner       = local.application
    GitRepo     = "github.com/DiscoverNimbus2/cerebro-front"
    Environment = var.environment
  }
}
