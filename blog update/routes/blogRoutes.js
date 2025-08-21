import express from "express"
import { createBlog, getAllBlogs, getBlogById, getBlogsByCategory } from "../controllers/blogController.js"

const router = express.Router()

router.post("/create",createBlog)
router.get("/all",getAllBlogs)
router.get("/:id",getBlogById)
router.get("/category/:category", getBlogsByCategory);



export default router