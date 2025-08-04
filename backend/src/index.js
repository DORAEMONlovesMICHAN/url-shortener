import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import urlRoutes from "./routes/url.js";
import { apiLimiter } from "./middleware/rateLimiter.js";


dotenv.config();
const app = express();



app.use(cors());
app.use(express.json());

app.use("/api", apiLimiter, urlRoutes);
// app.use("/", urlRoutes);

connectDB();
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
