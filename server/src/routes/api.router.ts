import { Router } from "express"
import { noteRouter } from "./index"

const router = Router()

// initialize routers
// notes router
router.use("/notes", noteRouter)

export default router
