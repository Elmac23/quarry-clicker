import { configureStore } from "@reduxjs/toolkit";
import inventoryReducer from "./inventory";
import mineReducer from "./mine";
import modalReducer from "./modal";
import notificationReducer from "./notification";
import statsReducer from "./stats";
import smeltReducer from "./smelt";
import buffReducer from "./buffs";
import upgradesReducer from "./upgrades";
import settingsReducer from "./settings";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "inventory",
    "statistics",
    "upgrades",
    "mine",
    "settings",
    "smelt",
  ],
};

const rootReducer = combineReducers({
  settings: settingsReducer,
  inventory: inventoryReducer,
  mine: mineReducer,
  modal: modalReducer,
  notification: notificationReducer,
  statistics: statsReducer,
  smelt: smeltReducer,
  buffs: buffReducer,
  upgrades: upgradesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/PURGE",
          "persist/REGISTER",
          "persist/FLUSH",
          "persist/PAUSE",
        ],
        ignoredActionsPaths: ["result", "register"],
        ignoredPaths: ["register"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
