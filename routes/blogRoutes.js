import express from "express"
import { createBlog, getAllBlogs, getBlogById } from "../controllers/blogController.js"

const router = express.Router()

router.post("/create",createBlog)
router.get("/all",getAllBlogs)
router.get("/:id",getBlogById)



export default router