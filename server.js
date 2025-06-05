import cors from "cors";
import express from "express";
import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import expressListEndpoints from "express-list-endpoints";
import thoughtsRoutes from "./routes/thoughts.js";

dotenv.config();

const port = process.env.PORT || 8080;
const app = express();

const mongoUrl =
  process.env.MONGO_URL || "mongodb://localhost:27017/happyThoughts";
mongoose
  .connect(mongoUrl)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use(
  cors({
    methods: ["GET", "POST", "PATCH", "DELETE"],
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  const endpoints = expressListEndpoints(app);
  res.json({
    message: "This is an API",
    endpoints,
  });
});

app.use("/thoughts", thoughtsRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
