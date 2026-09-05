import { z } from "zod";

export const loginValidationSchema = z
  .object({
    identifier: z.string().trim().min(3, "Username or email is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })
