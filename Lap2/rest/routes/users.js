import express from "express"
import { createUser, deleteUser, getAllUsers, getUser, suspendUser, unsuspendUser } from "../controllers/user.js"

const router = express.Router()

// TODO::CREATE
router.post("/", createUser)

// TODO::SUSPEND
router.post("/:id/suspend", suspendUser)

// TODO::UNSUSPEND
router.post("/:id/unsuspend", unsuspendUser)

// TODO::DELETE
router.delete("/:id", deleteUser)

// TODO::GET
router.get("/:id", getUser)

export default router