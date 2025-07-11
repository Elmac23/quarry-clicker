import { MineKey, MINES } from "@/data/mines";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface InventoryState {
  mine: MineKey;
  health: number;
}

const initialState: InventoryState = {
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

export default mineSlice.reducer;
