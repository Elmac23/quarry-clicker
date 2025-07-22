import { ItemKey } from "@/data/items";
import { useAppSelector } from "@/hooks/redux";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { activeItem, addItem } from "./inventory";

const NOTIFICATION_DURATION = 5;

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
        (el) => el.itemId === action.payload.id
      );

      if (!existingNotification) {
        state.notifications.push({
          amount: action.payload.quantity,
          itemId: action.payload.id,
          timer: 5,
        });
        return state;
      }

      existingNotification.amount += action.payload.quantity;
      existingNotification.timer = NOTIFICATION_DURATION;

      return state;
    });

    builder.addCase(activeItem, (state, action) => {
      const notification = state.notifications.find(
        (el) => el.itemId === action.payload
      );

      if (notification) {
        notification.timer = 5;
        return state;
      }

      switch (action.payload) {
        case "geode":
          state.notifications.push({
            itemId: "geode",
            customMessage: "Cracked Geode!",
            timer: NOTIFICATION_DURATION,
            amount: 0,
          });
          break;

        case "permitAlpha":
        case "permitBeta":
        case "permitGamma":
        case "permitSigma":
        case "permitOmega":
          state.notifications.push({
            itemId: "gear",
            customMessage: "Unlocked new Mine!",
            timer: NOTIFICATION_DURATION,
            amount: 0,
          });
          break;

        case "furnaceNewUpgrade":
          state.notifications.push({
            itemId: "gear",
            customMessage: "Unlocked new Furnace!",
            timer: NOTIFICATION_DURATION,
            amount: 0,
          });
          break;

        case "furnaceSpeedUpgrade":
          state.notifications.push({
            itemId: "gear",
            customMessage: "Furnaces 15% faster!",
            timer: NOTIFICATION_DURATION,
            amount: 0,
          });
          break;

        case "moreInventory10Upgrade":
          state.notifications.push({
            itemId: "gear",
            customMessage: "+10 Inventory Slots!",
            timer: NOTIFICATION_DURATION,
            amount: 0,
          });
          break;

        case "moreInventory20Upgrade":
          state.notifications.push({
            itemId: "gear",
            customMessage: "+20 Inventory Slots!",
            timer: NOTIFICATION_DURATION,
            amount: 0,
          });
          break;
        case "maxStackUpgrade":
          state.notifications.push({
            itemId: "gear",
            customMessage: "+10 Inventory Stack Size!",
            timer: NOTIFICATION_DURATION,
            amount: 0,
          });
          break;
      }
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

    clearNotifications(state) {
      state.notifications = [];
    },
  },
});

export const { addNotification, removeNotification, tick, clearNotifications } =
  notificationSlice.actions;

export const useNotification = () =>
  useAppSelector((state) => state.notification);

export default notificationSlice.reducer;
