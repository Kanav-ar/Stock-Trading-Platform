import z from "zod";

export const orderValidationSchema = z.object({
  symbol: z.string().trim().min(1, "Symbol is required").toUpperCase(),

  exchange: z.string().trim().min(1, "Exchange is required").toUpperCase(),

  isin: z.string().trim().optional(),

  name: z.string().trim().min(1, "Stock name is required"),

  qty: z.number().positive("Quantity must be greater than 0"),

  price: z.number().positive("Price must be greater than 0"),

  product: z.enum(["CNC", "MIS"]),
});
