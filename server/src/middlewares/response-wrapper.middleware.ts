import { Request, Response, NextFunction } from "express"

const responseWrapper = (req: Request, res: Response, next: NextFunction) => {
  res.success = (
    data: any = null,
    message: string = "Success",
    statusCode: number = 200,
  ) => {
    res.status(statusCode).json({
      status: "success",
      message,
      status_code: statusCode,
      data,
    })
  }

  res.error = (
    message: string = "error",
    statusCode: number = 500,
    errors: any = undefined,
    route: string = req.originalUrl,
    method: string = req.method,
  ) => {
    res.status(statusCode).json({
      status: "error",
      message,
      status_code: statusCode,
      route,
      method,
      errors,
    })
  }

  next()
}

export default responseWrapper
