import { Router } from "express";

import passport from "../../config/passport.js";

import { meController } from "./auth.controller.js";

const router = Router();

router.get("/me", meController);

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: false,
    failureRedirect: "/",
  }),
  (_req, res) => {
    res.send("Google Login Successful!");
  }
);

export default router;