import mongoose, {
  Schema,
  Document,
} from "mongoose";

export interface JobDocument
  extends Document {
  title: string;
  department: string;
  location: string;
  experience: string;
  description: string;
  status: string;
}

const jobSchema =
  new Schema(
    {
      title: String,

      department: String,

      location: String,

      experience: String,

      description: String,

      status: {
        type: String,
        default: "Open",
      },
    },
    {
      timestamps: true,
    }
  );

export const Job =
  mongoose.model(
    "Job",
    jobSchema
  );