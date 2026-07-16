import { Router } from "express";

import { protect } from "../../middleware/auth.middleware.js";
import { mailboxOAuthClient } from "../../config/google.js";
import { Mailbox } from "./mailbox.model.js";

const router = Router();

/*
    Connect Gmail Mailbox
*/

router.get(
  "/connect",
  protect,
  (req, res) => {
    const userId = (req as any).user.userId;

    const url =
      mailboxOAuthClient.generateAuthUrl({
        access_type: "offline",

        scope: [
          "https://www.googleapis.com/auth/gmail.readonly",
        ],

        state: userId,
      });

    res.redirect(url);
  }
);

/*
    Gmail Callback
*/

router.get(
  "/google/callback",
  async (req, res) => {
    try {
      const code = req.query.code as string;

      const userId = req.query.state as string;

      const response = await fetch(
        "https://oauth2.googleapis.com/token",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/x-www-form-urlencoded",
          },

          body: new URLSearchParams({
            code,

            client_id:
              process.env.GOOGLE_CLIENT_ID!,

            client_secret:
              process.env.GOOGLE_CLIENT_SECRET!,

            redirect_uri:
              "http://localhost:5000/api/mailbox/google/callback",

            grant_type:
              "authorization_code",
          }),
        }
      );

      const tokens = await response.json();

      console.log(tokens);

      await Mailbox.findOneAndUpdate(
        {
          userId,
        },
        {
          userId,

          email: "snehareddya@gmail.com",

          provider: "GOOGLE",

          accessToken:
            tokens.access_token,

          refreshToken:
            tokens.refresh_token,

          isConnected: true,
        },
        {
          upsert: true,
          new: true,
        }
      );

      return res.redirect(
        "http://localhost:3000/dashboard/inbox"
      );
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
);

/*
    Get Mailbox
*/

router.get(
  "/",
  protect,
  async (req, res) => {
    const mailbox =
      await Mailbox.findOne({
        userId:
          (req as any).user.userId,
      });

    return res.json({
      success: true,
      message: "Mailbox fetched",
      data: mailbox,
    });
  }
);

export default router;