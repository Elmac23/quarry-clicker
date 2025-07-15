import { ItemKey, ITEMS, ItemPickaxeKey, ActiveItemKey } from "@/data/items";
import { useAppSelector } from "@/hooks/redux";
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
  selectedPickaxe: ItemPickaxeKey;
}

// const INITIAL_SIZE = 10;
const INITIAL_SIZE = 100;

const START_INVENTORY: ItemArray = Array(INITIAL_SIZE).fill(null);
START_INVENTORY[0] = { id: "woodenPickaxe", quantity: 1 };
START_INVENTORY[1] = { id: "coal", quantity: 10 };
START_INVENTORY[2] = { id: "tinOre", quantity: 15 };
START_INVENTORY[3] = { id: "stone", quantity: 20 };

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
    swapItems(
      state,
      action: PayloadAction<{ indexOne: number; indexTwo: number }>
    ) {
      const { indexOne, indexTwo } = action.payload;
      if (indexOne < 0 || indexOne >= state.size) return state;
      if (indexTwo < 0 || indexTwo >= state.size) return state;

      const temp = state.items[indexOne];
      state.items[indexOne] = state.items[indexTwo];
      state.items[indexTwo] = temp;

      return state;
    },

    deleteItemAtIndex(state, action: PayloadAction<number>) {
      state.items[action.payload] = null;
      return state;
    },

    activeItem(state, action: PayloadAction<ActiveItemKey>) {
      if (ITEMS[action.payload].type === "pickaxe") {
        state.selectedPickaxe = action.payload as ItemPickaxeKey;
        return state;
      }

      state.items = removeItemFromInventory(state.items, action.payload, 1);
    },

    addItem(state, action: PayloadAction<{ item: ItemKey; amount: number }>) {
      const { item: newItem, amount } = action.payload;
      let itemsLeft = amount;

      if (ITEMS[newItem].type === "pickaxe") {
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
      const { amount, item } = action.payload;
      state.items = removeItemFromInventory(state.items, item, amount);
    },
  },
});

function removeItemFromInventory(
  itemList: ItemArray,
  item: ItemKey,
  quantity: number
) {
  let deleteAmount = quantity;
  const newItemList = itemList.map((predicate) => {
    if (!predicate) return null;

    const { id, quantity } = predicate;
    if (predicate.id === item) {
      if (quantity > deleteAmount) {
        return { id, quantity: quantity - deleteAmount };
      } else {
        deleteAmount -= quantity;
        return null;
      }
    }
    return { id, quantity };
  });

  return newItemList;
}

export const { addItem, removeItem, activeItem, deleteItemAtIndex, swapItems } =
  inventorySlice.actions;

export const useInventory = () => useAppSelector((state) => state.inventory);

export const useItem = (itemId: ItemKey) => {
  const totalQuantity = useAppSelector((state) =>
    state.inventory.items.reduce(
      (acc: number, curr) => (curr?.id === itemId ? acc + curr.quantity : acc),
      0
    )
  );
  return {
    totalQuantity,
    ...ITEMS[itemId],
  };
};

export default inventorySlice.reducer;
