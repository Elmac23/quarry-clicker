import {
  ItemKey,
  ITEMS,
  ItemPickaxeKey,
  ActiveItemKey,
  TypedItemWithQuantity,
  ItemUpgradeKey,
  ItemConsumableKey,
} from "@/data/items";
import { useAppSelector } from "@/hooks/redux";
import { computeChance } from "@/lib/computeChance";
import { randomRange } from "@/lib/randomRange";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ItemArray = Array<null | TypedItemWithQuantity>;

interface InventoryState {
  items: ItemArray;
  maxStackSize: number;
  size: number;
  selectedPickaxe: ItemPickaxeKey;
  craftedPickaxes: ItemPickaxeKey[];
  craftedUpgrades: ItemUpgradeKey[];
  criticalChance: number;
}

const INITIAL_SIZE = 100;
const INITIAL_MAX_STACK = 40;

const START_INVENTORY: ItemArray = Array(INITIAL_SIZE).fill(null);
START_INVENTORY[0] = { id: "woodenPickaxe", quantity: 1 };
START_INVENTORY[1] = { id: "stone", quantity: 10 };
START_INVENTORY[2] = { id: "platinumOre", quantity: 10 };
START_INVENTORY[3] = { id: "coal", quantity: 10 };
const initialState: InventoryState = {
  items: START_INVENTORY,
  maxStackSize: INITIAL_MAX_STACK,
  size: INITIAL_SIZE,
  selectedPickaxe: "woodenPickaxe",
  craftedPickaxes: [],
  craftedUpgrades: [],
  criticalChance: 0,
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

      if (ITEMS[action.payload].type === "upgrade") {
        switch (action.payload as ItemUpgradeKey) {
          case "criticalChanceUpgrade":
            state.criticalChance += 2;
            break;

          case "maxStackUpgrade":
            state.maxStackSize += 10;
            break;

          case "moreInventory10Upgrade":
            const freeSpace10 = Array(10).fill(null);
            state.items = [...state.items, ...freeSpace10];
            state.size += 10;
            break;

          case "moreInventory20Upgrade":
            const freeSpace20 = Array(20).fill(null);
            state.items = [...state.items, ...freeSpace20];
            state.size += 20;
            break;
        }

        state.items = removeItemFromInventory(state.items, action.payload, 1);
        return state;
      }

      if (ITEMS[action.payload].type === "consumable") {
        const itemId = action.payload as ItemConsumableKey;

        switch (itemId) {
          case "geode":
            const random = computeChance<ItemKey>(
              [
                {
                  chance: 10,
                  data: "amethyst",
                },
                {
                  chance: 10,
                  data: "sapphire",
                },
                {
                  chance: 10,
                  data: "opal",
                },
                {
                  chance: 10,
                  data: "diamond",
                },
                {
                  chance: 10,
                  data: "ruby",
                },
                {
                  chance: 10,
                  data: "topaz",
                },
                {
                  chance: 10,
                  data: "emerald",
                },
              ],
              "coal",
              100
            );
            addItemToInventory(state, {
              id: random(),
              quantity: randomRange(1, 3),
            });
            break;
        }
      }

      state.items = removeItemFromInventory(state.items, action.payload, 1);
    },

    addItem(state, action: PayloadAction<TypedItemWithQuantity>) {
      console.log(action.type);
      const newState = addItemToInventory(state, action.payload);
      return newState;
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

function addToCrafted(state: InventoryState, item: ItemKey) {
  if (ITEMS[item].type === "pickaxe")
    state.craftedPickaxes.push(item as ItemPickaxeKey);
  else if (ITEMS[item].type === "upgrade")
    state.craftedUpgrades.push(item as ItemUpgradeKey);
}

function getFreeIndex(itemList: ItemArray) {
  return itemList.findIndex((el) => !el);
}

function findItemInInventory(state: InventoryState, id: ItemKey) {
  const itemInInventory = state.items.find((predicate) => {
    if (!predicate) return false;
    return predicate.id === id && predicate.quantity < state.maxStackSize;
  });

  return itemInInventory;
}

function addItemToInventory(
  state: InventoryState,
  { id, quantity }: TypedItemWithQuantity
) {
  let itemsLeft = quantity;

  if (["pickaxe", "upgrade"].includes(ITEMS[id].type)) {
    const freeIndex = getFreeIndex(state.items);
    if (freeIndex === -1) return state;
    state.items[freeIndex] = {
      id,
      quantity: 1,
    };

    addToCrafted(state, id);
    return state;
  }

  const itemInInventory = findItemInInventory(state, id);

  if (itemInInventory) {
    if (itemInInventory.quantity + itemsLeft <= state.maxStackSize) {
      itemInInventory.quantity += itemsLeft;
      return state;
    } else {
      itemsLeft = itemsLeft - (state.maxStackSize - itemInInventory.quantity);
      itemInInventory.quantity = state.maxStackSize;
    }
  }

  while (itemsLeft) {
    const freeIndex = getFreeIndex(state.items);
    if (freeIndex === -1) return state;

    if (itemsLeft < state.maxStackSize) {
      state.items[freeIndex] = { id, quantity: itemsLeft };
      return state;
    }
    state.items[freeIndex] = {
      id,
      quantity: state.maxStackSize,
    };
    itemsLeft -= state.maxStackSize;
  }

  return state;
}

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
