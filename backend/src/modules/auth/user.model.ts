import mongoose, { Schema, Document } from "mongoose";

export interface UserDocument extends Document {
  name: string;
  email: string;
  googleId: string;
  avatar?: string;
  companyName?: string;
  mailbox?: string;
}

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    googleId: {
      type: String,
      required: true,
      unique: true,
    },

    avatar: {
      type: String,
    },

    companyName: {
      type: String,
    },

    mailbox: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model<UserDocument>(
  "User",
  userSchema
);