import {
  ItemKey,
  ITEMS,
  ItemPickaxeKey,
  ActiveItemKey,
  TypedItemWithQuantity,
  ItemUpgradeKey,
  ItemConsumableKey,
  ItemDrillKey,
} from "@/data/items";
import { useAppSelector } from "@/hooks/redux";
import { computeChance } from "@/lib/computeChance";
import { randomRange } from "@/lib/randomRange";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ItemArray = Array<null | TypedItemWithQuantity>;

export interface InventoryState {
  items: ItemArray;
  maxStackSize: number;
  selectedTool: ItemPickaxeKey | ItemDrillKey;
  craftedPickaxes: ItemPickaxeKey[];
  craftedUpgrades: ItemUpgradeKey[];
  criticalChance: number;
}

const INITIAL_SIZE = 20;
const INITIAL_MAX_STACK = 30;

const START_INVENTORY: ItemArray = Array(INITIAL_SIZE).fill(null);
START_INVENTORY[0] = { id: "woodenPickaxe", quantity: 1 };
START_INVENTORY[1] = { id: "coal", quantity: 10 };
START_INVENTORY[2] = { id: "tinBar", quantity: 29 };
START_INVENTORY[3] = { id: "coalbudSeeds", quantity: 29 };

for (let i = 4; i < 20; i++) {
  START_INVENTORY[i] = { id: "tinOre", quantity: 30 };
}

const initialState: InventoryState = {
  items: START_INVENTORY,
  maxStackSize: INITIAL_MAX_STACK,
  selectedTool: "woodenPickaxe",
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
      if (indexOne < 0 || indexOne >= state.items.length) return state;
      if (indexTwo < 0 || indexTwo >= state.items.length) return state;

      const itemOne = state.items[indexOne];
      const itemTwo = state.items[indexTwo];

      if (itemOne?.id !== itemTwo?.id || !itemOne || !itemTwo) {
        const temp = state.items[indexOne];
        state.items[indexOne] = state.items[indexTwo];
        state.items[indexTwo] = temp;

        return state;
      }

      const swappedQuantity = Math.min(
        itemOne.quantity,
        state.maxStackSize - itemTwo.quantity
      );

      state.items[indexOne]!.quantity -= swappedQuantity;
      state.items[indexTwo]!.quantity += swappedQuantity;

      if (!state.items[indexOne]?.quantity) {
        state.items[indexOne] = null;
      }
    },

    deleteItemAtIndex(state, action: PayloadAction<number>) {
      state.items[action.payload] = null;
      return state;
    },

    activeItem(state, action: PayloadAction<ActiveItemKey>) {
      const item = ITEMS[action.payload];
      if (item.type === "pickaxe" || item.type === "drill") {
        state.selectedTool = action.payload as ItemPickaxeKey;
        return state;
      }

      if (item.type === "upgrade") {
        switch (ITEMS[action.payload as ItemUpgradeKey].effect) {
          case "criticalChance":
            state.criticalChance += 2;
            break;

          case "maxStack":
            state.maxStackSize += 10;
            break;

          case "moreInventory10":
            const freeSpace10 = Array(10).fill(null);
            state.items = [...state.items, ...freeSpace10];
            break;

          case "moreInventory20":
            const freeSpace20 = Array(20).fill(null);
            state.items = [...state.items, ...freeSpace20];
            break;
        }

        state.items = removeItemFromInventory(state.items, action.payload, 1);
        return state;
      }

      if (item.type === "consumable") {
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

  for (let i = 0; i < itemList.length; i++) {
    if (!itemList[i]) continue;

    const predicate = itemList[i]!;

    if (predicate.id !== item) continue;

    if (predicate.quantity > deleteAmount) {
      predicate.quantity -= deleteAmount;
      return itemList;
    } else {
      const temp = predicate.quantity;
      itemList[i] = null;
      deleteAmount -= temp;
    }
  }

  return itemList;
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
