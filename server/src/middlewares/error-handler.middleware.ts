import { CustomError } from "../errors/CustomError"
import { NextFunction, Request, Response } from "express"

const errorHandlerMiddleware = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error)

  const status = error.statusCode || 500
  const message = error.message || "Something went wrong!"
  const errors = error.errors || []
  res.error(message, status, errors)
}

export default errorHandlerMiddleware
