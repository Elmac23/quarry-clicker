import { Buff, BUFFS, BuffType } from "@/data/buffs";
import { useAppSelector } from "@/hooks/redux";
import { createSlice } from "@reduxjs/toolkit";
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
        if (buff.timeLeft < 2) return null;

        buff.timeLeft--;

        return buff;
      });

      state.activeBuffs = buffsAfterTick.filter(Boolean) as BuffWithTimeLeft[];
    },
  },
});

export const { clearBuffs, tick } = buffSlice.actions;

export const useBuffs = () => {
  const isEmpty = useAppSelector(
    (state) => state.buffs.activeBuffs.length === 0
  );
  return { ...useAppSelector((state) => state.buffs), isEmpty };
};

export const useCheckBuff = (buffType: BuffType) => {
  const { activeBuffs } = useAppSelector((state) => state.buffs);

  return activeBuffs.find((buff) => buff.type == buffType);
};

export default buffSlice.reducer;
