import { CustomError } from "../errors/CustomError"
import { NextFunction, Request, Response } from "express"

const notFound = (req: Request, res: Response, next: NextFunction) => {
  next(new CustomError("Route not found", 404))
}

export default notFound
