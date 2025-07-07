import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./inventory";
import mineReducer from "./mine";
import modalReducer from "./modal";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    mine: mineReducer,
    modal: modalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
