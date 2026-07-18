import dotenv from "dotenv";
dotenv.config();

import { google } from "googleapis";

console.log(
  process.env.GOOGLE_CLIENT_ID
);

export const mailboxOAuthClient =
  new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    //"http://localhost:5000/api/mailbox/google/callback"
     `${process.env.NEXT_PUBLIC_API_URL}/api/mailbox/google/callback`
  );

console.log(
    mailboxOAuthClient
);