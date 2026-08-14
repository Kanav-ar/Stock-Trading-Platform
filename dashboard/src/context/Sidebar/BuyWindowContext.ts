import { createContext, useContext } from "react";

interface BuyWindowContextType {
  openBuyWindow: (uid: string, price: number) => void;
  closeBuyWindow: () => void;
}

export const BuyWindowContext = createContext<BuyWindowContextType | undefined>(
  undefined,
);

export default function useBuyWindow() {
  const context = useContext(BuyWindowContext);

  if (!context) {
    throw new Error(
      "useBuyWindow must be used inside BuyWindowContextProvider",
    );
  }

  return context;
}
