import { Request, Response } from "express";
import { Email } from "./email.model.js";

export async function getEmails(
  _req: Request,
  res: Response
) {
  const emails =
    await Email.find()
      .sort({
        createdAt: -1,
      })
      .limit(50);

  return res.json({
    success: true,
    data: emails,
  });
}