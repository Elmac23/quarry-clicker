import { MineKey, MINES } from "@/data/mines";
import { useAppSelector } from "@/hooks/redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface MineState {
  mine: MineKey;
  health: number;
}

const initialState: MineState = {
  mine: "coalMine",
  health: MINES["coalMine"].health,
};

export const mineSlice = createSlice({
  name: "mine",
  initialState,
  reducers: {
    changeMine(state, action: PayloadAction<MineKey>) {
      state.mine = action.payload;
      state.health = MINES[action.payload].health;
    },

    dealDamage(state, action: PayloadAction<number>) {
      state.health -= action.payload;
    },

    resetHealth(state) {
      state.health = MINES[state.mine].health;
      return state;
    },
  },
});

export const { changeMine, dealDamage, resetHealth } = mineSlice.actions;

export const useMine = () => useAppSelector((state) => state.mine);

export default mineSlice.reducer;
