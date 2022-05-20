import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import usersRoute from "./routes/users.js"
import articlesRoute from "./routes/articles.js"
import commentsRoute from "./routes/comments.js"
import hateoasRoute from "./routes/hateoas.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import { getAllUsers } from "./controllers/user.js"
const app = express()
dotenv.config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from mongoDB!")
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())

// middleware
app.use("/api/v1/", hateoasRoute)
app.use("/api/v1/users", usersRoute)
app.use("/api/v1/articles", articlesRoute)
app.use("/api/v1/comments", commentsRoute)
// TODO::GET ALL COMMENTS OF SPECIFIC USER
app.get("/api/v1/:userId/comments/", getAllUsers)

// error handling middleware
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(8888, () => {
    connect()
    console.log("Connected to API");
})