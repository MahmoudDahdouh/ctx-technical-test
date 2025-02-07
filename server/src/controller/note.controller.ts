import { notes } from "@/db"
import { Request, Response } from "express"

export const findAll = async (req: Request, res: Response) => {
  res.success({ notes: [...notes].reverse() })
}

export const create = async (req: Request, res: Response) => {
  const { title, content } = req.body
  const note = { title, content }
  notes.push(note)
  res.success({ note })
}
