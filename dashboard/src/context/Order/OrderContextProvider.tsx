import type React from "react";
import { OrderContext } from "./OrderContext";
import { useEffect, useState } from "react";
import type { Order } from "../../pages/Orders";

interface OrderContextProviderProps {
  children: React.ReactNode;
}

export default function OrderContextProvider({
  children,
}: OrderContextProviderProps) {
  const [allOrders, setAllOrders] = useState<Order[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("/api/orders");
      const data = await response.json();

      setAllOrders(data.data);
    })();
  }, []);

  function addOrder(order: Order) {
    setAllOrders((prev) => ([ ...prev, order ]));
  }
  return (
    <OrderContext.Provider value={{ allOrders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}
