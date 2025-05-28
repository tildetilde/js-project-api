// controllers/thoughtsController.js
import loadThoughts from "../utils/loadThoughts.js";

// Get all thoughts
export const getAllThoughts = (req, res) => {
  const thoughts = loadThoughts();

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedThoughts = thoughts.slice(startIndex, endIndex);

  res.json({
    totalThoughts: thoughts.length,
    totalPages: Math.ceil(thoughts.length / limit),
    currentPage: page,
    thoughts: paginatedThoughts,
  });
};

// Get a single thought by ID
export const getThoughtById = (req, res) => {
  const { id } = req.params;
  const thoughts = loadThoughts();
  const thought = thoughts.find((t) => t._id === id);

  if (!thought) {
    return res.status(404).json({ message: "Thought not found" });
  }

  res.json(thought);
};
