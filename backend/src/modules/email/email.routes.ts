import { Router } from "express";

import { protect } from "../../middleware/auth.middleware.js";
import { Mailbox } from "../mailbox/mailbox.model.js";
import {Email} from "./email.model.js";
import { google } from "googleapis";
import {getEmails} from "./email.controller.js"

const router = Router();

router.get(
  "/sync",
  protect,
  async (req, res) => {
    try {
      const mailbox =
        await Mailbox.findOne({
          userId:
            (req as any).user.userId,
        });

      if (!mailbox) {
        return res.status(404).json({
          success: false,
          message:
            "Mailbox not found",
        });
      }

      const oauth2Client =
        new google.auth.OAuth2();

      oauth2Client.setCredentials({
        access_token:
          mailbox.accessToken,
      });

      const gmail =
        google.gmail({
          version: "v1",
          auth: oauth2Client,
        });

      const response =
        await gmail.users.messages.list(
          {
            userId: "me",
            maxResults: 10,
          }
        );

      const emails = [];

for (const message of
  response.data.messages || []) {
  const email =
    await gmail.users.messages.get({
      userId: "me",
      id: message.id!,
    });

  /*emails.push({
    id: email.data.id,

    snippet:
      email.data.snippet,

    headers:
      email.data.payload?.headers,
  });*/
  const headers =
  email.data.payload?.headers || [];

const subject =
  headers.find(
    (h) => h.name === "Subject"
  )?.value;

const from =
  headers.find(
    (h) => h.name === "From"
  )?.value;

emails.push({
  id: email.data.id,
  subject,
  from,
  snippet: email.data.snippet,
});

await Email.findOneAndUpdate(
  {
    messageId:
      email.data.id,
  },
  {
    mailboxId:
      mailbox._id,

    messageId:
      email.data.id,

    subject,

    from,

    body:
      email.data.snippet,

    receivedAt:
      new Date(),
  },
  {
    upsert: true,
  }
);
}

return res.json({
  success: true,
  data: emails,
});
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message:
          "Internal Server Error",
      });
    }
  }
);

router.get(
    "/",
    protect,
    getEmails
);

export default router;