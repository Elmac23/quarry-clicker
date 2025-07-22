import { ItemKey, ItemOreKey, ITEMS, ItemUpgradeKey } from "@/data/items";
import { useAppSelector } from "@/hooks/redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { activeItem } from "./inventory";

export type SmeltPosition = {
  result: ItemKey;
  timeLeft: number;
  isDone: boolean;
  totalTime: number;
};

interface SmeltState {
  smeltPositions: Array<SmeltPosition | null>;
  maxSmelters: number;
  speed: number;
}

const INITIAL_FURNACE_COUNT = 5;

const initialState: SmeltState = {
  smeltPositions: Array(INITIAL_FURNACE_COUNT).fill(null),
  maxSmelters: INITIAL_FURNACE_COUNT,
  speed: 1,
};

export const smeltSlice = createSlice({
  name: "smelt",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(activeItem, (state, action) => {
      if (ITEMS[action.payload].type === "upgrade")
        switch (action.payload as ItemUpgradeKey) {
          case "furnaceNewUpgrade":
            state.maxSmelters++;
            state.smeltPositions.push(null);
            break;

          case "furnaceSpeedUpgrade":
            state.speed += 0.15;
            break;
        }
    });
  },
  reducers: {
    tick(state, action: PayloadAction<{ multiplier?: number }>) {
      const mult = (action.payload.multiplier ?? 0) / 100 + 1;
      state.smeltPositions = state.smeltPositions.map((position) => {
        if (!position) return null;
        return {
          ...position,
          timeLeft: Math.max(position.timeLeft - 0.1 * mult * state.speed, 0),
          isDone: position.timeLeft - 0.1 * mult * state.speed <= 0,
        };
      });

      return state;
    },

    speedUp(state, action: PayloadAction<number>) {
      const position = state.smeltPositions[action.payload];

      if (!position) return state;

      position.timeLeft = Math.max(position.timeLeft - state.speed, 0);
      position.isDone = position.timeLeft <= 0;
    },

    clearPosition(state, action: PayloadAction<number>) {
      state.smeltPositions[action.payload] = null;
    },

    addItem(state, action: PayloadAction<{ item: ItemOreKey }>) {
      const isFull = state.smeltPositions.every((position) => !!position);

      if (isFull) return state;

      const freeIndex = state.smeltPositions.findIndex((el) => !el);

      const result = ITEMS[action.payload.item].result.id;

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
