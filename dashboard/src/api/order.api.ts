import type { Order } from "../types/order.types";
import { api } from "./axios";


export async function getOrders(): Promise<Order[]> {
  const response = await api.get("/orders");

  return response.data.data;
}