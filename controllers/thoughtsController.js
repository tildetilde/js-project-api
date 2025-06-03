// controllers/thoughtsController.js
import { Thought } from "../models/Thought.js";

// GET /thoughts
export const getAllThoughts = async (req, res) => {
  const {
    minHearts,
    after,
    sortBy = "createdAt",
    order = "desc",
    page = 1,
    limit = 10,
  } = req.query;

  const query = {};
  if (minHearts) {
    query.hearts = { $gte: parseInt(minHearts) };
  }
  if (after) {
    query.createdAt = { $gt: new Date(after) };
  }

  const sortOrder = order === "desc" ? -1 : 1;
  const skip = (parseInt(page) - 1) * parseInt(limit);

  try {
    const totalThoughts = await Thought.countDocuments(query);
    const thoughts = await Thought.find(query)
      .sort({ [sortBy]: sortOrder })
      .skip(skip)
      .limit(parseInt(limit));

    res.json({
      totalThoughts,
      totalPages: Math.ceil(totalThoughts / limit),
      currentPage: parseInt(page),
      thoughts,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to get thoughts",
      error: err.message,
    });
  }
};

// GET /thoughts/:id
export const getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findById(req.params.id);
    if (!thought) return res.status(404).json({ message: "Thought not found" });
    res.json(thought);
  } catch (err) {
    res.status(400).json({ message: "Invalid ID", error: err.message });
  }
};
