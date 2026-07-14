import mongoose, { Schema, Document } from "mongoose";

export interface CompanyDocument extends Document {
  name: string;
  domain?: string;
  subscription: "FREE" | "PRO";
  createdAt: Date;
  updatedAt: Date;
}

const companySchema = new Schema<CompanyDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    domain: {
      type: String,
      trim: true,
      lowercase: true,
    },

    subscription: {
      type: String,
      enum: ["FREE", "PRO"],
      default: "FREE",
    },
  },
  {
    timestamps: true,
  }
);

export const Company = mongoose.model<CompanyDocument>(
  "Company",
  companySchema
);