import { Mailbox } from "./mailbox.model.js";

export async function createMailbox(data: {
  userId: string;
  email: string;
  provider: "GOOGLE";
  accessToken: string;
  refreshToken: string;
}) {
  return Mailbox.create({
    ...data,
    isConnected: true,
  });
}

export async function getMailbox(
  userId: string
) {
  return Mailbox.findOne({
    userId,
  });
}