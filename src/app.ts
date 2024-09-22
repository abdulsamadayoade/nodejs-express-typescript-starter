import express, { Express } from "express";
import { createServer } from "http";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes";

dotenv.config();

const port = process.env.PORT || 3000;

const app: Express = express();
const httpServer = createServer(app);

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB connection
// mongoose
//   .connect(process.env.MONGODB_URI as string)
//   .then(() => console.log("Connected to MongoDB"))
//   .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.get("/", (req, res) => {
  res.send("testaa!");
});
app.use("/api", routes);

// Start the server
httpServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
