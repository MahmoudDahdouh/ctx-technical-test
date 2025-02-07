import asyncHandler from "express-async-handler"
import { Request, Response, NextFunction } from "express"
import { Schema, ValidationError } from "yup"
import { BadRequestError } from "../errors/CustomError"

export default function validateRequest(schemas: Schema | Schema[]) {
  return asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      const schemaList = Array.isArray(schemas) ? schemas : [schemas]

      for (const schema of schemaList) {
        const data: any = await schema
          .validate(
            {
              body: req.body,
              query: req.query,
              params: req.params,
              headers: req.headers,
            },
            {
              abortEarly: false,
            }
          )
          .catch((error: ValidationError) => {
            if (error instanceof ValidationError) {
              throw new BadRequestError(error.errors[0], error.errors)
            }
            throw new BadRequestError()
          })
        // replace with the validated data
        req.body = { ...data.body }
        req.query = { ...data.query }
        req.params = { ...data.params }
        req.headers = { ...data.headers }
      }

      next()
    }
  )
}
