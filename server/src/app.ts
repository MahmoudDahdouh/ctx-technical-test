import express, { Request, Response } from "express"
import cors from "cors"
import { Constants } from "./config/constants"
import errorHandlerMiddleware from "./middlewares/error-handler.middleware"
import responseWrapper from "./middlewares/response-wrapper.middleware"
import notFound from "./middlewares/not-found.middleware"
import apiRouter from "./routes/api.router"

const app = express()

// Middleware setup
app.use(express.json({ limit: Constants.MAX_REQUEST_SIZE }))
app.use(
  express.urlencoded({ extended: true, limit: Constants.MAX_REQUEST_SIZE })
)
app.use(cors())

// Response wrapper
app.use(responseWrapper)

// hello world
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!")
})

// API Routes
app.use(`${Constants.API_PREFIX}`, apiRouter)

// Error handling
app.use(notFound)
app.use(errorHandlerMiddleware)

export default app
