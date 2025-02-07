export class CustomError extends Error {
  public statusCode: number
  public errors: any

  constructor(message: string, statusCode: number, errors?: any) {
    super(message)
    this.statusCode = statusCode
    this.name = "CustomError"
    this.errors = errors
  }
}

export class NotFoundError extends CustomError {
  constructor(message: string = "Not found", errors?: any) {
    super(message, 404, errors)
  }
}

export class BadRequestError extends CustomError {
  constructor(message: string = "Bad request", errors?: any) {
    super(message, 400, errors)
  }
}

export class UnauthorizedError extends CustomError {
  constructor(message: string = "Unauthorized", errors?: any) {
    super(message, 401, errors)
  }
}

export class ForbiddenError extends CustomError {
  constructor(message: string = "Forbidden", errors?: any) {
    super(message, 403, errors)
  }
}

export class ConflictError extends CustomError {
  constructor(message: string = "Conflict", errors?: any) {
    super(message, 409, errors)
  }
}

export class InternalServerError extends CustomError {
  constructor(message: string = "Internal server error", errors?: any) {
    super(message, 500, errors)
  }
}
