import { useAppSelector } from "@/hooks/redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { dealDamage, resetHealth } from "./mine";
import { speedUp } from "./smelt";
import { clearPosition } from "./farm";

interface StatisticsState {
  totalClicks: number;
  totalSmelted: number;
  totalCrafted: number;
  totalMined: number;
  totalPlantsCollected: number;
  topCps: number;
}

type StatKeys = keyof StatisticsState;

const initialState: StatisticsState = {
  totalClicks: 0,
  totalSmelted: 0,
  totalCrafted: 0,
  totalPlantsCollected: 0,
  totalMined: 0,
  topCps: 0,
};

export const statisticsSlice = createSlice({
  name: "statistics",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(dealDamage, (state) => {
      state.totalClicks++;
    });

    builder.addCase(resetHealth, (state) => {
      state.totalMined++;
    });

    builder.addCase(speedUp, (state) => {
      state.totalClicks++;
    });

    builder.addCase(clearPosition, (state) => {
      state.totalPlantsCollected++;
    });
  },

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

export const useStatistics = () => useAppSelector((state) => state.statistics);

export default statisticsSlice.reducer;
