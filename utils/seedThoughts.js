import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import { Thought } from "../models/Thought.js";

dotenv.config();

const mongoUrl = mongoose
  .connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("🟢 Connected to MongoDB"))
  .catch((err) => console.error("🔴 MongoDB connection error:", err));

const thoughtData = JSON.parse(fs.readFileSync("./data/data.json"));

const seedDatabase = async () => {
  try {
    await Thought.deleteMany();
    await Thought.insertMany(thoughtData);
    console.log(`🌱 Successfully seeded ${thoughtData.length} thoughts!`);
  } catch (err) {
    console.error("❌ Seeding error:", err);
  } finally {
    mongoose.disconnect();
  }
};

seedDatabase();
