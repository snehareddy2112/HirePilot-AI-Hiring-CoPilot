import dotenv from "dotenv";
import dns from "node:dns";
import express from "express";

dotenv.config();

// Optional: Helps if ISP DNS causes Atlas issues
dns.setServers(["1.1.1.1"]);

import app from "./app.js";
import { connectDB } from "./config/database.js";
import { envSchema } from "./shared/validators/env.validation.js";

// Validate env AFTER dotenv loads
envSchema.parse(process.env);

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDB();

  const server = express();
  server.use(app);
  
  server.listen(PORT, () => {
    console.log(
      `🚀 Server running on http://localhost:${PORT}`
    );
  });
}

startServer();