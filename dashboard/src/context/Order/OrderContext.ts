import { createContext, useContext } from "react";

interface Order {
  _id: string;
  name: string;
  qty: number;
  price: number;
  mode: "BUY" | "SELL";
}

interface OrderContextType {
  allOrders: Order[];
  addOrder: (order: Order) => void;
}
export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);

export function useOrders() {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useOrders must be used inside OrderContextProvider");
  }

  return context;
}
