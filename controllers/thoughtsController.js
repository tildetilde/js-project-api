import { v4 as uuidv4 } from "uuid";

// controllers/thoughtsController.js
import loadThoughts from "../utils/loadThoughts.js";
import saveThoughts from "../utils/saveThoughts.js";

// Get all thoughts
export const getAllThoughts = (req, res) => {
  const thoughts = loadThoughts();
  let result = [...thoughts];

  if (req.query.minHearts) {
    const minHearts = parseInt(req.query.minHearts);
    result = result.filter((t) => t.hearts >= minHearts);
  }

  if (req.query.after) {
    const afterDate = new Date(req.query.after);
    result = result.filter((t) => new Date(t.createdAt) > afterDate);
  }

  if (req.query.sortBy) {
    const sortBy = req.query.sortBy;
    const order = req.query.order === "desc" ? -1 : 1;

    const validSortFields = ["hearts", "createdAt"];
    if (!validSortFields.includes(sortBy)) {
      return res.status(400).json({
        success: false,
        message: "Invalid sort field",
      });
    }

    result.sort((a, b) => {
      if (sortBy === "hearts") {
        return (a.hearts - b.hearts) * order;
      } else if (sortBy === "createdAt") {
        return (new Date(a.createdAt) - new Date(b.createdAt)) * order;
      }
      return 0;
    });
  }

  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedThoughts = result.slice(startIndex, endIndex);

  res.json({
    totalThoughts: result.length,
    totalPages: Math.ceil(result.length / limit),
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
