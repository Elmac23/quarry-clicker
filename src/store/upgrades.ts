import { createSlice } from "@reduxjs/toolkit";
import { activeItem } from "./inventory";
import { ITEMS, ItemUpgradeKey } from "@/data/items";
import { useAppSelector } from "@/hooks/redux";

interface UpgradesState {
  ownedUpgrades: ItemUpgradeKey[];
}

const initialState: UpgradesState = {
  ownedUpgrades: [
    "permitAlpha",
    "permitBeta",
    "permitBeta",
    "permitDelta",
    "permitEpsilon",
    "permitGamma",
    "permitKappa",
    "permitOmega",
    "permitTheta",
    "permitZeta",
    // "silverTray",
    // "palladiumWateringCan",
  ],
};

export const upgradeSlice = createSlice({
  name: "upgrades",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(activeItem, (state, action) => {
      if (ITEMS[action.payload].type !== "upgrade") return state;

      state.ownedUpgrades.push(action.payload as ItemUpgradeKey);
    });
  },
});

export const useUpgrades = () => useAppSelector((state) => state.upgrades);

export default upgradeSlice.reducer;
