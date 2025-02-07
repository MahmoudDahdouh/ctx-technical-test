import { create, findAll } from "@/controller/note.controller"
import validateRequest from "@/middlewares/validation.middleware"
import { createNoteSchema } from "@/validations/note.validation"
import { Router } from "express"
import expressAsyncHandler from "express-async-handler"

const router = Router()

// GET /api/notes
// find all notes
router.get("/", expressAsyncHandler(findAll))

// POST /api/notes
// create a note
router.post("/", validateRequest(createNoteSchema), expressAsyncHandler(create))

export default router
