import { z } from "zod";

export const completeOnboardingSchema = z.object({
  companyName: z
    .string()
    .min(2)
    .max(100),

  mailbox: z
    .string()
    .email(),
});