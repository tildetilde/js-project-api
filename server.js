import cors from "cors";
import express from "express";
import fs from "fs";
import expressListEndpoints from "express-list-endpoints";

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
  const endpoints = expressListEndpoints(app);
  res.json({
    message: "This is my API",
    endpoints: endpoints,
  });
});

app.get("/thoughts", (req, res) => {
  const thoughts = loadThoughts();

  res.json(thoughts);
});

app.get("/thoughts/:id", (req, res) => {
  const thoughts = loadThoughts();
  const id = req.params.id;

  const thought = thoughts.find((t) => t._id === id);

  if (!thought) {
    return res.status(404).json({ message: "Thought not found" });
  }

  res.json(thought);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
