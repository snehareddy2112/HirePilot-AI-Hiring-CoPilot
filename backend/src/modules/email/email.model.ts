import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface EmailDocument
  extends Document {
  mailboxId: string;

  messageId: string;

  from: string;

  subject: string;

  body: string;

  receivedAt: Date;
}

const emailSchema =
  new Schema<EmailDocument>(
    {
      mailboxId: String,

      messageId: {
        type: String,
        unique: true,
      },

      from: String,

      subject: String,

      body: String,

      receivedAt: Date,
    },
    {
      timestamps: true,
    }
  );

export const Email =
  mongoose.model<EmailDocument>(
    "Email",
    emailSchema
  );