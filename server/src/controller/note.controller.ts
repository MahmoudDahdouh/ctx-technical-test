import { notes } from "@/db"
import { Request, Response } from "express"

export const findAll = async (req: Request, res: Response) => {
  res.success({ notes: [...notes].reverse() })
}

export const create = async (req: Request, res: Response) => {
  const { title, content } = req.body
  notes.push({ title, content })
  res.success({ title, content })
}
