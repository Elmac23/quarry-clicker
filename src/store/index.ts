import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./inventory";
import mineReducer from "./mine";
import modalReducer from "./modal";
import notificationReducer from "./notification";
import statsReducer from "./stats";

export const store = configureStore({
  reducer: {
    inventory: inventoryReducer,
    mine: mineReducer,
    modal: modalReducer,
    notification: notificationReducer,
    statistics: statsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
