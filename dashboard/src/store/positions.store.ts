import { create } from "zustand";
import type { Position } from "../types/position.types";

interface PositionStore {
  allPositions: Position[];
  setAllPositions: (positions: Position[]) => void;
}

export const usePositionStore = create<PositionStore>((set) => ({
  allPositions: [],

  setAllPositions: (positions) => {
    set({
      allPositions: positions,
    });
  },
}));