import express from "express"
import { createUser, deleteUser, getAllUser, getUserById } from "../controllers/userController.js"

const router = express.Router()

router.post("/create",createUser)
router.get("/all",getAllUser)
router.get("/:id",getUserById)
router.delete('/:id', deleteUser);



export default router