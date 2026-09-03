import z from "zod";

export const refreshTokenPayloadSchema = z.object({
  _id: z.string(),
  
});