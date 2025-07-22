import { useAppSelector } from "@/hooks/redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  isBg: boolean;
  isMusic: boolean;
  isSfx: boolean;
  isRotateOre: boolean;
  volume: number;
}

export type SettingsStateBooleanKey = {
  [K in keyof SettingsState]: SettingsState[K] extends boolean ? K : never;
}[keyof SettingsState];

export type SettingsStateNumberKey = {
  [K in keyof SettingsState]: SettingsState[K] extends number ? K : never;
}[keyof SettingsState];

const initialState: SettingsState = {
  isBg: true,
  isRotateOre: true,
  isMusic: true,
  isSfx: true,
  volume: 0.5,
};

export const statisticsSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {
    toggleSetting(state, action: PayloadAction<SettingsStateBooleanKey>) {
      state[action.payload] = !state[action.payload];
    },
    changeNumberSetting(
      state,
      action: PayloadAction<{ field: SettingsStateNumberKey; value: number }>
    ) {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { toggleSetting, changeNumberSetting } = statisticsSlice.actions;

export const useSettings = () => useAppSelector((state) => state.settings);

export default statisticsSlice.reducer;
