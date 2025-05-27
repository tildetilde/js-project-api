import cors from "cors";
import express from "express";
import fs from "fs";

// Defines the port the app will run on. Defaults to 8080, but can be overridden
// when starting the server. Example command to overwrite PORT env variable value:
// PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());

// Function to load thoughts from a JSON file
const loadThoughts = () => {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
};

// Start defining your routes here
app.get("/", (req, res) => {
  res.send("Hello Technigo!");
});

app.get("/thoughts", (req, res) => {
  const thoughts = loadThoughts();

  res.json(thoughts);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
