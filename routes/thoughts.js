// routes/thoughts.js
import express from "express";
import {
  getAllThoughts,
  getThoughtById,
} from "../controllers/thoughtsController.js";

const router = express.Router();

// GET /thoughts – List all thoughts
router.get("/", getAllThoughts);

// GET /thoughts/:id – Get one thought
router.get("/:id", getThoughtById);

export default router;
