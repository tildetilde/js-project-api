import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import { Thought } from "../models/Thought.js";

dotenv.config();

const mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost:27017/happyThoughts";
mongoose.connect(mongoUrl);

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
