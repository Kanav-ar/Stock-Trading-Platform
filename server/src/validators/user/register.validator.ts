import { z } from "zod";

export const registerValidationSchema = z.object({
  username: z.string().trim().min(3, "Username must be at least 3 characters").toLowerCase(),

  email: z.email("Invalid email address").trim().toLowerCase(),

  fullname: z.string().trim().min(2, "Full name must be at least 2 characters"),

  password: z.string().min(8, "Password must be at least 8 characters"),
});
