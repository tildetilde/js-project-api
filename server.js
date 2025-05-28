import cors from "cors";
import express from "express";
import fs from "fs";
import expressListEndpoints from "express-list-endpoints";
import thoughtsRoutes from "./routes/thoughts.js";

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
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
