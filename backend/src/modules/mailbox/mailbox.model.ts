import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface MailboxDocument
  extends Document {
  userId: string;
  email: string;
  provider: "GOOGLE";

  accessToken: string;
  refreshToken: string;

  isConnected: boolean;
}

const mailboxSchema =
  new Schema<MailboxDocument>(
    {
      userId: {
        type: String,
        required: true,
      },

      email: {
        type: String,
        required: true,
        unique: true,
      },

      provider: {
        type: String,
        enum: ["GOOGLE"],
        default: "GOOGLE",
      },

      accessToken: {
        type: String,
      },

      refreshToken: {
        type: String,
      },

      isConnected: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  );

export const Mailbox =
  mongoose.model<MailboxDocument>(
    "Mailbox",
    mailboxSchema
  );