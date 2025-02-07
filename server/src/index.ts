import app from "./app"
import { Constants } from "./config/constants"

const startServer = () => {
  try {
    app.listen(Constants.PORT, () => {
      console.log(
        `🚀 Server running in ${Constants.NODE_ENV} mode on port ${Constants.PORT}`
      )
      console.log(`👉 http://localhost:${Constants.PORT}`)
    })
  } catch (error) {
    console.error("Error starting server:", error)
    process.exit(1)
  }
}

// Handle uncaught exceptions
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err)
  process.exit(1)
})

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err)
  process.exit(1)
})

startServer()
