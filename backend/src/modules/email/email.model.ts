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

  aiSummary?: string;

  score?: number;

  skills?: string[];

  missingSkills?: string[];

  github?: string;

  portfolio?: string;

  shortlist?: boolean;

  recommendation?: string;
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

      aiSummary: {
        type: String,
        default: "",
      },

      score: {
        type: Number,
        default: 0,
      },

      skills: {
        type: [String],
        default: [],
      },

      missingSkills: {
        type: [String],
        default: [],
      },

      github: {
        type: String,
        default: "",
      },

      portfolio: {
        type: String,
        default: "",
      },

      shortlist: {
        type: Boolean,
        default: false,
      },

      recommendation: {
        type: String,
        default: "",
      },
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