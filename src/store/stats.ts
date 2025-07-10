import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StatisticsState {
  totalClicks: number;
  totalSmelted: number;
  totalCrafted: number;
  totalMined: number;
}

type StatKeys = keyof StatisticsState;

const initialState: StatisticsState = {
  totalClicks: 0,
  totalSmelted: 0,
  totalCrafted: 0,
  totalMined: 0,
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    updateStat(
      state,
      action: PayloadAction<{ name: StatKeys; value: number }>
    ) {
      state[action.payload.name] = action.payload.value;
      return state;
    },
    incrementStat(state, action: PayloadAction<StatKeys>) {
      state[action.payload]++;
      return state;
    },
  },
});

export const { updateStat, incrementStat } = statisticsSlice.actions;

export default statisticsSlice.reducer;
