import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./inventory";
import mineReducer from "./mine";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    mine: mineReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
