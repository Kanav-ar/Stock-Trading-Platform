import { create } from "zustand";
import type { Holding } from "../types/holding.types";

interface HoldingStore {
  allHoldings: Holding[];
  setAllHoldings: (holdings: Holding[]) => void;
}

export const useHoldingStore = create<HoldingStore>((set) => ({
  allHoldings: [],

  setAllHoldings: (holdings) => {
    set({ allHoldings: holdings });
  },
}));
