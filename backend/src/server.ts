import dotenv from "dotenv";
import dns from "node:dns/promises";
//console.log(await dns.getServers());
//import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);
// [ '127.0.0.53' ]
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/database.js";

const PORT = process.env.PORT || 5000;

async function startServer() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}

startServer();