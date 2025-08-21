import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
   title: {
    type:String
   },
   content: {
    type:String
   },
   
author : {
    type:mongoose.Schema.Types.ObjectId,
    ref: "User",
},

category: {
    type: String,
    enum : ["Technology", "Lifestyle","Web Development",]
},

image : {
    type:String

},
tags: [{
    type: Array
}]



}, {timestamps: true})
const Blog = mongoose.model("Blog",blogSchema)
export default Blog