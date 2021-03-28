terraform {
  backend "remote" {
    organization = "EATechSolutions"
    workspaces {
      name = "tuune-prod"
    }
  }
}
