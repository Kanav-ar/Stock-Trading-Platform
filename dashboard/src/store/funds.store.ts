import { create } from "zustand";
import type { Funds } from "../types/funds.types";

interface FundsStore {
  funds: Funds | null;
  setFunds: (funds: Funds) => void;
}

export const useFundsStore = create<FundsStore>((set) => ({
  funds: null,

  setFunds: (funds) => {
    set({
      funds,
    });
  },
}));