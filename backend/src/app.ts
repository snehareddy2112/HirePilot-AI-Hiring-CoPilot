import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import companyRoutes from "./modules/company/company.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());
app.use(
  "/api/companies",
  companyRoutes
);

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "HirePilot API Running 🚀",
  });
});

export default app;