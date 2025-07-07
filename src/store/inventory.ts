import { ItemKey, ITEMS, ItemToolKey } from "@/data/items";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ItemWithQuantity = {
  id: ItemKey;
  quantity: number;
};

type ItemArray = Array<null | ItemWithQuantity>;

interface InventoryState {
  items: ItemArray;
  maxStackSize: number;
  size: number;
  selectedPickaxe: ItemToolKey;
}

const INITIAL_SIZE = 100;

const START_INVENTORY: ItemArray = Array(INITIAL_SIZE).fill(null);
START_INVENTORY[0] = { id: "woodenPickaxe", quantity: 1 };

const initialState: InventoryState = {
  items: START_INVENTORY,
  maxStackSize: 40,
  size: INITIAL_SIZE,
  selectedPickaxe: "woodenPickaxe",
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    deleteItemAtIndex(state, action: PayloadAction<number>) {
      console.log(action.payload);
      state.items[action.payload] = null;
      return state;
    },

    selectPickaxe(state, action: PayloadAction<{ pickaxe: ItemToolKey }>) {
      state.selectedPickaxe = action.payload.pickaxe;
    },

    addItem(state, action: PayloadAction<{ item: ItemKey; amount: number }>) {
      const { item: newItem, amount } = action.payload;
      let itemsLeft = amount;

      if (ITEMS[newItem].type === "tool") {
        const freeIndex = state.items.findIndex((el) => !el);
        if (freeIndex === -1) return state;
        state.items[freeIndex] = {
          id: newItem,
          quantity: 1,
        };

        return state;
      }

      const itemInInventory = state.items.find((predicate) => {
        if (!predicate) return false;
        return (
          predicate.id === newItem && predicate.quantity < state.maxStackSize
        );
      });

      if (itemInInventory) {
        if (itemInInventory.quantity + itemsLeft <= state.maxStackSize) {
          itemInInventory.quantity += itemsLeft;
          return state;
        } else {
          itemsLeft =
            itemsLeft - (state.maxStackSize - itemInInventory.quantity);
          itemInInventory.quantity = state.maxStackSize;
        }
      }

      while (itemsLeft) {
        const freeIndex = state.items.findIndex((el) => !el);
        if (freeIndex === -1) return state;

        if (itemsLeft < state.maxStackSize) {
          state.items[freeIndex] = { id: newItem, quantity: itemsLeft };
          return state;
        }
        state.items[freeIndex] = {
          id: newItem,
          quantity: state.maxStackSize,
        };
        itemsLeft -= state.maxStackSize;
      }
      return state;
    },

    removeItem(
      state,
      action: PayloadAction<{ item: ItemKey; amount: number }>
    ) {
      let deleteAmount = action.payload.amount;
      state.items = state.items.map((predicate) => {
        if (!predicate) return null;

        const { id, quantity } = predicate;
        if (predicate.id === action.payload.item) {
          if (quantity > deleteAmount) {
            return { id, quantity: quantity - deleteAmount };
          } else {
            deleteAmount -= quantity;
            return null;
          }
        }
        return { id, quantity };
      });

      return state;
    },
  },
});

export const { addItem, removeItem, selectPickaxe, deleteItemAtIndex } =
  inventorySlice.actions;

export default inventorySlice.reducer;
