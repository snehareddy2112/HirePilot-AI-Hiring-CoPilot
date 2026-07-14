import { z } from "zod";

export const envSchema = z.object({
  PORT: z.string(),

  MONGODB_URI: z.string(),

  JWT_SECRET: z.string(),

  JWT_EXPIRES_IN: z.string(),

  FRONTEND_URL: z.string(),
});