import "express"

declare global {
  namespace Express {
    interface Response {
      success: (data?: any, message?: string, statusCode?: number) => void
      error: (
        message?: string,
        statusCode?: number,
        method?: string,
        route?: string,
        data?: any,
      ) => void
    }
    interface Request {
      user?: any
    }
  }
}
