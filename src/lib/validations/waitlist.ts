import { z } from "zod";
import { WAITLIST_INTERESTS } from "@/lib/waitlist/types";

export const waitlistSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name is too long"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  interest: z.enum(WAITLIST_INTERESTS, {
    message: "Please select your area of interest",
  }),
  goals: z.string().max(500, "Goals must be under 500 characters").optional(),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
