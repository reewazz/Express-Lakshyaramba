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


export const getBlogsByCategory = async (req, res) => {
  try {
    const category = req.params.category;

    const blogs = await Blog.find({ category }).populate("author", "name email");

    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blogs by category" });
  }
};

