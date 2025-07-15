import { Buff, BUFFS } from "@/data/buffs";
import { MineKey, MINES } from "@/data/mines";
import { useAppSelector } from "@/hooks/redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { activeItem } from "./inventory";
import { ITEMS, PotionItem } from "@/data/items";

type BuffWithTimeLeft = Buff & {
  timeLeft: number;
};

interface BuffState {
  activeBuffs: BuffWithTimeLeft[];
}

const initialState: BuffState = {
  activeBuffs: [],
};

export const buffSlice = createSlice({
  name: "buffs",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(activeItem, (state, action) => {
      if (ITEMS[action.payload].type !== "potion") return state;

      const buffId = (ITEMS[action.payload] as PotionItem).effect;

      state.activeBuffs = state.activeBuffs.filter(
        (buff) => buff.type !== BUFFS[buffId].type
      );

      state.activeBuffs.push({
        ...BUFFS[buffId],
        timeLeft: BUFFS[buffId].duration,
      });
    });
  },
  reducers: {
    clearBuffs: (state) => {
      state.activeBuffs = [];
    },
    tick: (state) => {
      const buffsAfterTick = state.activeBuffs.map((buff) => {
        if (buff.duration < 2) return null;

        buff.timeLeft--;

        return buff;
      });

      state.activeBuffs = buffsAfterTick.filter(Boolean) as BuffWithTimeLeft[];
    },
  },
});

export const { clearBuffs, tick } = buffSlice.actions;

export const useBuffs = () => useAppSelector((state) => state.buffs);

export default buffSlice.reducer;
