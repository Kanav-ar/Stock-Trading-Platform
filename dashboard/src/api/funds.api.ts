import type { Funds } from "../types/funds.types";
import { api } from "./axios";

export async function getFunds(): Promise<Funds> {
  const response = await api.get("/funds");

  return response.data.data;
}
