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

    /*res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });*/
    res.cookie(
  "token",
  token,
  {
    httpOnly: true,

    secure:
      process.env.NODE_ENV ===
      "production",

    sameSite:
      process.env.NODE_ENV ===
      "production"
        ? "none"
        : "lax",

    maxAge:
      7 * 24 * 60 * 60 * 1000,
  }
);

    /*res.redirect(
      "http://localhost:3000/onboarding"
    );*/
    res.redirect(
     `${process.env.FRONTEND_URL}/onboarding`
   );
  }
);
router.post(
  "/onboarding",
  protect,
  onboardingController
);

export default router;