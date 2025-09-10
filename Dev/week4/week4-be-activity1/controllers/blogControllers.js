const Blog = require("../models/blogModel");

// GET /blogs
const getAllBlogs = async (req, res) => {
    try {
      const blogs = await Blog.find({}).sort({ createdAt: -1 });
      res.status(200).json(blogs);
    } catch (error) {
        console.log({message: error.message});
        res.status(500).json({ message: "Blogs not found" });
    }
  };

//POST /blogs
const createBlog = async (req,res) => {
    try{
        const newBlog = await Blog.create({ ...req.body});
        res.status(201).json(newBlog);
    } catch (error){
        res.status(500).json({ message: error.message });    
    }
};

//GET /blogs/:blogId
const getBlogById = async (req,res) => {
    const { blogId } = req.params;
    try{
        const blog = await Blog.findById(blogId);
        res.status(200).json(blog);
    } catch (error) {
        console.log({ message: error.message });
        res.status(404).json({ message: "Blog not found"});
    }
};

const deleteBlog = async (res,req) => {
    const {blogId} = req.params;
    try{
        const deletedCar = await Blog.findOneAndDelete({_id: blogId});
        res.status(200).json({message:"Blog deleted successfully"});
    } catch {
        console.log({message:error.message});
        res.status(404).json({message:"Blog not found"});
    }
}

module.exports = {
    getAllBlogs,
    createBlog,
    getBlogById,
    deleteBlog,
};
// Similarly, implement createBlog, getBlogById, deleteBlog