import { ItemKey, ITEMS, ItemSeedKey, ItemUpgradeKey } from "@/data/items";
import { useAppSelector } from "@/hooks/redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { activeItem } from "./inventory";

export type PlantPosition = {
  result: ItemKey;
  quantity: number;
  timeLeft: number;
  isDone: boolean;
  totalTime: number;
};

interface PlantState {
  plantPositions: Array<PlantPosition | null>;
  speed: number;
}

const INITIAL_GARDEN_SIZE = 10;

const initialState: PlantState = {
  plantPositions: Array(INITIAL_GARDEN_SIZE).fill(null),
  speed: 1,
};

export const farmSlice = createSlice({
  name: "farm",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(activeItem, (state, action) => {
      if (ITEMS[action.payload].type === "upgrade")
        switch (action.payload as ItemUpgradeKey) {
        }
    });
  },
  reducers: {
    tick(
      state,
      action: PayloadAction<{ multiplier?: number; isAuto?: boolean }>
    ) {
      const mult = (action.payload.multiplier ?? 0) / 100 + 1;
      state.plantPositions = state.plantPositions.map((position) => {
        if (!position) return null;
        return {
          ...position,
          timeLeft: Math.max(position.timeLeft - 0.1 * mult * state.speed, 0),
          isDone: position.timeLeft - 0.1 * mult * state.speed <= 0,
        };
      });

      return state;
    },

    clearPosition(state, action: PayloadAction<number>) {
      state.plantPositions[action.payload] = null;
    },

    addItem(state, action: PayloadAction<{ item: ItemSeedKey }>) {
      const isFull = state.plantPositions.every((position) => !!position);

      if (isFull) return state;

      const freeIndex = state.plantPositions.findIndex((el) => !el);

      const { id, quantity } = ITEMS[action.payload.item].result;

      if (!id) return state;

      const timer = ITEMS[action.payload.item].growTime;

      state.plantPositions[freeIndex] = {
        isDone: false,
        result: id,
        quantity,
        timeLeft: timer,
        totalTime: timer,
      };
    },
  },
});

export const { tick, addItem, clearPosition } = farmSlice.actions;

export const useFarming = () => {
  const data = useAppSelector((state) => state.farm);
  const isFull = data.plantPositions.every((position) => !!position);
  const isIdle = data.plantPositions.every((position) => !position);
  return { ...data, isFull, isEmpty: isIdle };
};

export default farmSlice.reducer;
