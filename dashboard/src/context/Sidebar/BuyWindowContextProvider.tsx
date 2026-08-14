import type { ReactNode } from "react";
import { useState } from "react";
import { BuyWindowContext } from "./BuyWindowContext";
import BuyWindow from "../../components/BuyWindow";

interface BuyWindowContextProviderProps {
  children: ReactNode;
}

export default function BuyWindowContextProvider({
  children,
}: BuyWindowContextProviderProps) {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUid, setSelectedStockUid] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  function openBuyWindow(uid: string, price: number) {
    setIsBuyWindowOpen(true);
    setSelectedStockUid(uid);
    setSelectedStockPrice(price);
  }

  function closeBuyWindow() {
    setIsBuyWindowOpen(false);
    setSelectedStockUid("");
    setSelectedStockPrice(0);
  }

  return (
    <BuyWindowContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
      }}
    >
      {children}
      {isBuyWindowOpen && (
        <>
          <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]" />

          <BuyWindow
            uid={selectedStockUid}
            price={selectedStockPrice}
            onClose={closeBuyWindow}
          />
        </>
      )}
    </BuyWindowContext.Provider>
  );
}
