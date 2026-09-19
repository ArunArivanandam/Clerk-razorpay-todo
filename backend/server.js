import "dotenv/config";

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => res.send("Stage 1 API is running"));

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
