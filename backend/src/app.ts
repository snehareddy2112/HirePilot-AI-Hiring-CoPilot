import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import companyRoutes from "./modules/company/company.routes.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import authRoutes from "./modules/auth/auth.routes.js";
import passport from "./config/passport.js";
import mailboxRoutes from "./modules/mailbox/mailbox.routes.js";
import emailRoutes from "./modules/email/email.routes.js";
import jobRoutes from "./modules/jobs/job.routes.js";

const app = express();

app.use(
  cors({
    origin:
      process.env.FRONTEND_URL,
     
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());
app.use(
  "/api/companies",
  companyRoutes
);

app.use(
  "/api/auth",
  authRoutes
);
app.use("/api/mailbox", mailboxRoutes);
app.use(
    "/api/jobs",
    jobRoutes
);
app.use("/api/emails", emailRoutes);
app.use(passport.initialize());
app.use(errorMiddleware);

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "HirePilot API Running 🚀",
  });
});

export default app;
