// controllers/thoughtsController.js
import loadThoughts from "../utils/loadThoughts.js";

// @desc Get all thoughts
export const getAllThoughts = (req, res) => {
  const thoughts = loadThoughts();
  res.json(thoughts);
};

// @desc Get a single thought by ID
export const getThoughtById = (req, res) => {
  const { id } = req.params;
  const thoughts = loadThoughts();
  const thought = thoughts.find((t) => t._id === id);

  if (!thought) {
    return res.status(404).json({ message: "Thought not found" });
  }

  res.json(thought);
};
