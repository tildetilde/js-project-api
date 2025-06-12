import mongoose from "mongoose";

const ThoughtSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, "A message is required"],
    minlength: [5, "A message must be at least 5 characters long"],
    maxlength: [140, "A message can't be longer than 140 characters"],
    trim: true,
  },
  hearts: {
    type: Number,
    default: 0,
    min: [0, "Hearts cannot be negative"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Thought = mongoose.model("Thought", ThoughtSchema);
