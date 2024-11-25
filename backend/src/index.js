import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { app, server } from "./lib/socket.js";

import cors from "cors";

import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

import { connectDB } from "./lib/db.js";

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB();
});