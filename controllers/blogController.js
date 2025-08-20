import Blog from "../model/blog.js"

export const createBlog = async (req,res)=> {
     try{
        const blog = await Blog.create(req.body)
        // user.create(req.body)
        res.status(201).json(blog)
    }
    catch (err){
        console.log(err)
    }
}

export const getAllBlogs = async (req,res)=> {
     const user = await Blog.find().populate('author')
    res.json(user).status(201)
}

export const getBlogById = async (req,res)=> {
     const blog = await Blog.findById(req.params.id)
    res.json(blog).status(201)
}


