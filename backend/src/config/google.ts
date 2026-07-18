import dotenv from "dotenv";
dotenv.config();

import { google } from "googleapis";

export const oauth2Client =
  new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.BACKEND_URL}/api/auth/google/callback`
  );

export const mailboxOAuthClient =
  new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    `${process.env.BACKEND_URL}/api/mailbox/google/callback`
  );

console.log(
  "BACKEND_URL:",
  process.env.BACKEND_URL
);

console.log(
  "AUTH CALLBACK:",
  `${process.env.BACKEND_URL}/api/auth/google/callback`
);
