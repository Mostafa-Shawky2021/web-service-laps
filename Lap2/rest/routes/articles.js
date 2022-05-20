import express from "express"
import { createArticle, deleteArticle, getAllArticles, getArticle, updateArticle } from "../controllers/article.js"

const router = express.Router()

// TODO::CREATE
router.post("/", createArticle)

// TODO::UPDATE
router.put("/:id", updateArticle)

// TODO::DELETE
router.delete("/:id", deleteArticle)

// TODO::GET
router.get("/:id", getArticle)

// TODO::GET ALL
router.get("/", getAllArticles)

export default router