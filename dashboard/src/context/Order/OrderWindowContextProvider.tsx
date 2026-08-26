import type { ReactNode } from "react";
import { useState } from "react";
import { OrderWindowContext } from "./OrderWindowContext";
import OrderWindow from "../../components/OrderWindow";
import type { OrderDetails } from "../../../types/order";

interface OrderWindowContextProviderProps {
  children: ReactNode;
}

export default function BuyWindowContextProvider({
  children,
}: OrderWindowContextProviderProps) {
  const [selectedStockDetails, setSelectedStockDetails] =
    useState<OrderDetails | null>(null);

  function openOrderWindow(order: OrderDetails) {
    setSelectedStockDetails(order);
  }

  function closeOrderWindow() {
    setSelectedStockDetails(null);
  }

  return (
    <OrderWindowContext.Provider
      value={{
        openOrderWindow,
        closeOrderWindow,
      }}
    >
      {children}
      {/* when there is an order, only then render the order window */}
      {selectedStockDetails && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]" />

          <OrderWindow
            uid={selectedStockDetails.uid}
            price={selectedStockDetails.price}
            mode={selectedStockDetails.mode}
            onClose={closeOrderWindow}
          />
        </>
      )}
    </OrderWindowContext.Provider>
  );
}
