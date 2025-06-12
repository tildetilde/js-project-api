// routes/thoughts.js
import express from "express";
import { authenticateUser } from "../middleware/auth.js";
import {
  getAllThoughts,
  getThoughtById,
  createThought,
  likeThought,
  deleteThought,
  updateThought,
} from "../controllers/thoughtsController.js";

const router = express.Router();

// GET /thoughts – List all thoughts
router.get("/", getAllThoughts);

// GET /thoughts/:id – Get one thought
router.get("/:id", getThoughtById);

// POST /thoughts – Create a new thought
router.post("/", authenticateUser, createThought);

// PATCH /thoughts/:id/like – Like a thought
router.patch("/:id/like", likeThought);

// PATCH /thoughts/:id – Update a thought
router.patch("/:id", authenticateUser, updateThought);

// DELETE /thoughts/:id – Delete a thought
router.delete("/:id", authenticateUser, deleteThought);

export default router;
