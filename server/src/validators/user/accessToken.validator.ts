import z from "zod";

export const accessTokenPayloadSchema = z.object({
  _id: z.string(),
  username: z.string(),
  email: z.string(),
});