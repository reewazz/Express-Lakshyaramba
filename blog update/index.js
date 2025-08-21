import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import User from './model/user.js'
import userRoutes from "./routes/userRoutes.js"
import blogRoutes from "./routes/blogRoutes.js"
import cors from "cors"

dotenv.config()


connectDB()
const app = express()
app.use(express.json())
app.use(cors(
    
))


const port = process.env.PORT || 8000

app.listen(port,()=> console.log("server is running"))

app.get('/hello',(req,res)=>{
    res.send('hello')
})

app.use("/users",userRoutes)
app.use("/blog",blogRoutes)




