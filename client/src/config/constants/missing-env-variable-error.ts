export class MissingEnvironmentVariableError extends Error {
  constructor(variable: string) {
    super(`Missing required environment variable: ${variable}`)
    this.name = "MissingEnvironmentVariableError"
  }
}
