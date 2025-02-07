import { MissingEnvironmentVariableError } from "./missing-env-variable-error"

export const Constants = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
}

// Validate all required environment variables on startup
Object.entries(Constants).forEach(([key, value]) => {
  if (value === undefined || value === "") {
    throw new MissingEnvironmentVariableError(key)
  }
})

export default Constants
