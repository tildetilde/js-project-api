// routes/thoughts.js
import express from "express";
import {
  getAllThoughts,
  getThoughtById,
  createThought,
  likeThought,
  deleteThought,
} from "../controllers/thoughtsController.js";

const router = express.Router();

// GET /thoughts – List all thoughts
router.get("/", getAllThoughts);

// GET /thoughts/:id – Get one thought
router.get("/:id", getThoughtById);

// POST /thoughts – Create a new thought
router.post("/", createThought);

// PATCH /thoughts/:id/like – Like a thought
router.patch("/:id/like", likeThought);

// DELETE /thoughts/:id – Delete a thought
router.delete("/:id", deleteThought);

export default router;
