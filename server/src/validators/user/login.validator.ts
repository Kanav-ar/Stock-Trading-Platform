import { z } from "zod";

export const loginValidationSchema = z
  .object({
    username: z
      .string()
      .trim()
      .toLowerCase()
      .min(3, "Username must be at least 3 characters")
      .optional(),
    email: z.email("Invalid email address").trim().toLowerCase().optional(),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => Boolean(data.username || data.email), {
    error: "Username or email is required",
    path: ["username"]
  });
