import { ItemKey } from "@/data/items";
import { useAppSelector } from "@/hooks/redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { addItem } from "./inventory";

export type Notification = {
  itemId: ItemKey;
  amount: number;
  customMessage?: string;
};

export type NotificationWithTimer = Notification & {
  timer: number;
};

interface NotificationState {
  notifications: NotificationWithTimer[];
}

const initialState: NotificationState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(addItem, (state, action) => {
      const existingNotification = state.notifications.find(
        (el) => el.itemId === action.payload.item
      );

      if (!existingNotification) {
        state.notifications.push({
          amount: action.payload.amount,
          itemId: action.payload.item,
          timer: 2,
        });
        return state;
      }

      existingNotification.amount += action.payload.amount;
      existingNotification.timer = 2;

      return state;
    });
  },

  reducers: {
    tick(state, action: PayloadAction<string>) {
      const target = state.notifications.find(
        (el) => el.itemId === action.payload
      );

      if (!target) {
        return state;
      }
      target.timer--;
      if (target.timer <= 0)
        state.notifications = state.notifications.filter(
          (el) => el.itemId !== action.payload
        );

      return state;
    },

    addNotification(state, action: PayloadAction<Notification>) {
      const existingNotification = state.notifications.find(
        (el) => el.itemId === action.payload.itemId
      );

      if (!existingNotification) {
        state.notifications.push({ ...action.payload, timer: 5 });
        return state;
      }

      existingNotification.amount += action.payload.amount;
      existingNotification.timer = 5;

      return state;
    },

    removeNotification(state, action: PayloadAction<string>) {
      state.notifications = state.notifications.filter(
        (el) => el.itemId !== action.payload
      );
      return state;
    },
  },
});

export const { addNotification, removeNotification, tick } =
  notificationSlice.actions;

export const useNotification = () =>
  useAppSelector((state) => state.notification);

export default notificationSlice.reducer;
