import { ItemKey, ItemOreKey, ITEMS } from "@/data/items";
import { useAppSelector } from "@/hooks/redux";
import { oreToBarNameInfer } from "@/lib/oreToBarNameInferer";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type SmeltPosition = {
  result: ItemKey;
  timeLeft: number;
  isDone: boolean;
  totalTime: number;
};

interface SmeltState {
  smeltPositions: Array<SmeltPosition | null>;
  maxSmelters: number;
}

const initialState: SmeltState = {
  smeltPositions: Array(5).fill(null),
  maxSmelters: 5,
};

export const smeltSlice = createSlice({
  name: "smelt",
  initialState,
  reducers: {
    tick(state) {
      state.smeltPositions = state.smeltPositions.map((position) => {
        if (!position) return null;
        return {
          ...position,
          timeLeft: Math.max(position.timeLeft - 0.1, 0),
          isDone: position.timeLeft - 0.1 <= 0,
        };
      });

      return state;
    },

    speedUp(state, action: PayloadAction<number>) {
      const position = state.smeltPositions[action.payload];

      if (!position) return state;

      position.timeLeft = Math.max(position.timeLeft - 1, 0);
      position.isDone = position.timeLeft <= 0;
    },

    clearPosition(state, action: PayloadAction<number>) {
      state.smeltPositions[action.payload] = null;
    },

    addItem(state, action: PayloadAction<{ item: ItemOreKey }>) {
      const isFull = state.smeltPositions.every((position) => !!position);

      if (isFull) return state;

      const freeIndex = state.smeltPositions.findIndex((el) => !el);

      const result = oreToBarNameInfer(action.payload.item);

      if (!result) return state;

      const timer = ITEMS[action.payload.item].smeltTime;

      state.smeltPositions[freeIndex] = {
        isDone: false,
        result,
        timeLeft: timer,
        totalTime: timer,
      };
    },
  },
});

export const { tick, addItem, clearPosition, speedUp } = smeltSlice.actions;

export const useSmelt = () => {
  const data = useAppSelector((state) => state.smelt);
  const isFull = data.smeltPositions.every((position) => !!position);
  const isIdle = data.smeltPositions.every(
    (position) => !position || position.isDone
  );
  return { ...data, isFull, isEmpty: isIdle };
};

export default smeltSlice.reducer;
