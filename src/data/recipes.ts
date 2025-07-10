import { ItemKey } from "./items";

export type Ingredients = {
  item: ItemKey;
  quantity: number;
}[];

export type Recipe = {
  recipe: Ingredients;
  quantity: number;
};

export const RECIPES = {
  amethyst: {
    quantity: 1,
    recipe: [
      { item: "coal", quantity: 5 },
      { item: "stone", quantity: 10 },
    ],
  },
  stonePickaxe: {
    quantity: 1,
    recipe: [{ item: "stone", quantity: 15 }],
  },
  // Basic tool recipes
  tinPickaxe: {
    quantity: 1,
    recipe: [
      { item: "tinBar", quantity: 3 },
      { item: "stone", quantity: 5 },
    ],
  },
  copperPickaxe: {
    quantity: 1,
    recipe: [
      { item: "copperBar", quantity: 3 },
      { item: "stone", quantity: 5 },
    ],
  },
  ironPickaxe: {
    quantity: 1,
    recipe: [
      { item: "ironBar", quantity: 3 },
      { item: "coal", quantity: 2 },
    ],
  },
  // Bar smelting recipes
  tinBar: {
    quantity: 1,
    recipe: [
      { item: "tinOre", quantity: 2 },
      { item: "coal", quantity: 1 },
    ],
  },
  copperBar: {
    quantity: 1,
    recipe: [
      { item: "copperOre", quantity: 2 },
      { item: "coal", quantity: 1 },
    ],
  },
  bronzeBar: {
    quantity: 1,
    recipe: [
      { item: "tinBar", quantity: 1 },
      { item: "copperBar", quantity: 1 },
    ],
  },
  ironBar: {
    quantity: 1,
    recipe: [
      { item: "ironOre", quantity: 3 },
      { item: "coal", quantity: 2 },
    ],
  },
  steelBar: {
    quantity: 1,
    recipe: [
      { item: "ironBar", quantity: 2 },
      { item: "coal", quantity: 3 },
    ],
  },
  silverBar: {
    quantity: 1,
    recipe: [
      { item: "silverOre", quantity: 3 },
      { item: "coal", quantity: 2 },
    ],
  },
  goldenBar: {
    quantity: 1,
    recipe: [
      { item: "goldOre", quantity: 4 },
      { item: "coal", quantity: 3 },
    ],
  },
  // Glass making
  glass: {
    quantity: 2,
    recipe: [
      { item: "sand", quantity: 5 },
      { item: "coal", quantity: 1 },
    ],
  },
  // Special items
  gear: {
    quantity: 1,
    recipe: [
      { item: "ironBar", quantity: 2 },
      { item: "copperBar", quantity: 1 },
    ],
  },
  wire: {
    quantity: 3,
    recipe: [{ item: "copperBar", quantity: 1 }],
  },
  torch: {
    quantity: 2,
    recipe: [
      { item: "stone", quantity: 1 },
      { item: "coal", quantity: 1 },
    ],
  },
  // Advanced recipes
  combinerAlpha: {
    quantity: 1,
    recipe: [
      { item: "gear", quantity: 2 },
      { item: "wire", quantity: 3 },
      { item: "ironBar", quantity: 5 },
    ],
  },
  combinerBeta: {
    quantity: 1,
    recipe: [
      { item: "combinerAlpha", quantity: 1 },
      { item: "goldenBar", quantity: 2 },
      { item: "diamond", quantity: 1 },
    ],
  },
  flashlight: {
    quantity: 1,
    recipe: [
      { item: "wire", quantity: 2 },
      { item: "gear", quantity: 1 },
      { item: "glass", quantity: 1 },
    ],
  },
  emerald: {
    quantity: 10,
    recipe: [
      {
        item: "amethyst",
        quantity: 5,
      },
      {
        item: "opal",
        quantity: 5,
      },
    ],
  },
  food: {
    quantity: 1,
    recipe: [
      {
        item: "ruby",
        quantity: 1,
      },
      {
        item: "amethyst",
        quantity: 1,
      },
      {
        item: "emerald",
        quantity: 1,
      },
      {
        item: "topaz",
        quantity: 1,
      },
      {
        item: "diamond",
        quantity: 1,
      },
      {
        item: "sapphire",
        quantity: 1,
      },
      {
        item: "opal",
        quantity: 1,
      },
    ],
  },
} as const satisfies Partial<Record<ItemKey, Recipe>>;
