import * as Yup from "yup"

export const createNoteSchema = Yup.object({
  title: Yup.string().label("title").trim().min(3).max(255).required(),
  content: Yup.string().label("content").trim().max(5000).required(),
})
