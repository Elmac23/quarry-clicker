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
} as const satisfies Partial<Record<ItemKey, Recipe>>;
