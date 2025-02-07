require("dotenv").config()

class MissingEnvironmentVariableError extends Error {
  constructor(variable: string) {
    super(`Missing required environment variable: ${variable}`)
    this.name = "MissingEnvironmentVariableError"
  }
}

function getEnvVariable(key: string, required: boolean = true): string {
  const value = process.env[key]
  if (!value && required) {
    throw new MissingEnvironmentVariableError(key)
  }
  return value || ""
}

export const Constants = {
  NODE_ENV: getEnvVariable("NODE_ENV", true),
  PORT: parseInt(getEnvVariable("PORT", true)),
  API_PREFIX: getEnvVariable("API_PREFIX", true),

  // Application constants
  MAX_REQUEST_SIZE: "50mb",
  RATE_LIMIT_WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  RATE_LIMIT_MAX_REQUESTS: 100,
} as const

// Validate all required environment variables on startup
Object.entries(Constants).forEach(([key, value]) => {
  if (value === undefined || value === "") {
    throw new MissingEnvironmentVariableError(key)
  }
})

export default Constants
