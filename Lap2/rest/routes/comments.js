import express from "express"
import { createComment, deleteComment, getAllComments, getComment, updateComment } from "../controllers/comment.js"

const router = express.Router()

// TODO::CREATE
router.post("/:userId/:articleId", createComment)

// TODO::UPDATE
router.put("/:id", updateComment)

// TODO::DELETE
router.delete("/:id/:articleId", deleteComment)

// TODO::GET
router.get("/find/:id", getComment)

// TODO::GET ALL
router.get("/:userId/", getAllComments)

export default router