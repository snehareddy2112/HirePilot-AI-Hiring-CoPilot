import { Router } from "express";

import passport from "../../config/passport.js";

import { meController, onboardingController } from "./auth.controller.js";
import { protect } from "../../middleware/auth.middleware.js";

import { generateToken } from "../../shared/utils/generateToken.js";

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
  (req, res) => {
    const token = generateToken(
      (req.user as any)._id.toString()
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.redirect(
      "http://localhost:3000/onboarding"
    );
  }
);
router.post(
  "/onboarding",
  protect,
  onboardingController
);

export default router;