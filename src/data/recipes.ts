import { ItemKey, ItemUpgradeKey } from "./items";

export type Ingredients = {
  item: ItemKey;
  quantity: number;
}[];

export type Recipe = {
  recipe: Ingredients;
  requiredUpgrade?: ItemUpgradeKey;
  quantity: number;
};

export const RECIPES = {
  stonePickaxe: {
    quantity: 1,
    recipe: [
      { item: "stone", quantity: 15 },
      { item: "woodenPickaxe", quantity: 1 },
    ],
  },
  tinPickaxe: {
    quantity: 1,
    recipe: [
      {
        item: "tinBar",
        quantity: 15,
      },
      { item: "stonePickaxe", quantity: 1 },
    ],
  },
  copperPickaxe: {
    quantity: 1,
    recipe: [
      {
        item: "copperBar",
        quantity: 20,
      },
      { item: "tinPickaxe", quantity: 1 },
    ],
  },
  bronzePickaxe: {
    quantity: 1,
    recipe: [
      {
        item: "bronzeBar",
        quantity: 25,
      },
      { item: "copperPickaxe", quantity: 1 },
    ],
  },
  leadPickaxe: {
    quantity: 1,
    recipe: [
      {
        item: "leadBar",
        quantity: 25,
      },
      { item: "bronzePickaxe", quantity: 1 },
    ],
  },
  ironPickaxe: {
    quantity: 1,
    recipe: [
      {
        item: "ironBar",
        quantity: 25,
      },
      { item: "leadPickaxe", quantity: 1 },
      { item: "amethyst", quantity: 1 },
    ],
  },
  steelPickaxe: {
    quantity: 1,
    recipe: [
      {
        item: "steelBar",
        quantity: 25,
      },
      { item: "ironPickaxe", quantity: 1 },
      { item: "emerald", quantity: 1 },
    ],
  },
  aluminiumPickaxe: {
    quantity: 1,
    recipe: [
      {
        item: "aluminiumBar",
        quantity: 30,
      },
      { item: "steelPickaxe", quantity: 1 },
      { item: "topaz", quantity: 1 },
    ],
  },
  silverPickaxe: {
    quantity: 1,
    recipe: [
      {
        item: "silverBar",
        quantity: 30,
      },
      { item: "aluminiumPickaxe", quantity: 1 },
      { item: "ruby", quantity: 1 },
      { item: "steelBar", quantity: 5 },
    ],
  },
  goldenPickaxe: {
    quantity: 1,
    recipe: [
      {
        item: "goldenBar",
        quantity: 35,
      },
      { item: "silverPickaxe", quantity: 1 },
      { item: "opal", quantity: 1 },
      { item: "steelBar", quantity: 5 },
    ],
  },
  platinumPickaxe: {
    quantity: 1,
    recipe: [
      {
        item: "platinumBar",
        quantity: 35,
      },
      { item: "goldenPickaxe", quantity: 1 },
      { item: "diamond", quantity: 1 },
      { item: "steelBar", quantity: 5 },
    ],
  },
  emptyBottle: {
    quantity: 1,
    recipe: [
      {
        item: "glass",
        quantity: 6,
      },
    ],
  },
  greaterEmptyBottle: {
    quantity: 1,
    recipe: [
      {
        item: "glass",
        quantity: 12,
      },
      {
        item: "silverBar",
        quantity: 2,
      },
    ],
  },
  wrathPotion: {
    quantity: 1,
    recipe: [
      {
        item: "emptyBottle",
        quantity: 1,
      },
      {
        item: "stone",
        quantity: 1,
      },
    ],
  },
  greedPotion: {
    quantity: 1,
    recipe: [
      {
        item: "emptyBottle",
        quantity: 1,
      },
      {
        item: "goldenBar",
        quantity: 2,
      },
      {
        item: "emerald",
        quantity: 1,
      },
    ],
  },
  fortunePotion: {
    quantity: 1,
    recipe: [
      {
        item: "emptyBottle",
        quantity: 1,
      },
      {
        item: "amethyst",
        quantity: 2,
      },
      {
        item: "silverBar",
        quantity: 1,
      },
    ],
  },
  luckPotion: {
    quantity: 1,
    recipe: [
      {
        item: "emptyBottle",
        quantity: 1,
      },
      {
        item: "ruby",
        quantity: 1,
      },
      {
        item: "topaz",
        quantity: 1,
      },
      {
        item: "copperBar",
        quantity: 3,
      },
    ],
  },
  monsterPotion: {
    quantity: 1,
    recipe: [
      {
        item: "emptyBottle",
        quantity: 1,
      },
      {
        item: "batwing",
        quantity: 5,
      },
      {
        item: "diamond",
        quantity: 1,
      },
      {
        item: "ironBar",
        quantity: 2,
      },
    ],
  },
  smeltingPotion: {
    quantity: 1,
    recipe: [
      {
        item: "emptyBottle",
        quantity: 1,
      },
      {
        item: "coal",
        quantity: 10,
      },
      {
        item: "gear",
        quantity: 2,
      },
      {
        item: "tinBar",
        quantity: 3,
      },
    ],
  },
  permitAlpha: {
    quantity: 1,
    recipe: [
      {
        item: "stone",
        quantity: 1,
      },
    ],
  },
  permitBeta: {
    quantity: 1,
    requiredUpgrade: "permitAlpha",
    recipe: [
      {
        item: "stone",
        quantity: 1,
      },
    ],
  },
  permitGamma: {
    quantity: 1,
    requiredUpgrade: "permitBeta",
    recipe: [
      {
        item: "stone",
        quantity: 1,
      },
    ],
  },
  permitSigma: {
    quantity: 1,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "stone",
        quantity: 1,
      },
    ],
  },
  permitOmega: {
    quantity: 1,
    requiredUpgrade: "permitSigma",
    recipe: [
      {
        item: "stone",
        quantity: 1,
      },
    ],
  },

  // Temporary Upgrade Recipes
  furnaceNewUpgrade: {
    quantity: 1,
    recipe: [{ item: "stone", quantity: 1 }],
  },
  furnaceSpeedUpgrade: {
    quantity: 1,
    recipe: [{ item: "stone", quantity: 1 }],
  },
  criticalChanceUpgrade: {
    quantity: 1,
    recipe: [{ item: "stone", quantity: 1 }],
  },
  maxStackUpgrade: {
    quantity: 1,
    recipe: [{ item: "stone", quantity: 1 }],
  },
  moreInventory10Upgrade: {
    quantity: 1,
    recipe: [{ item: "stone", quantity: 1 }],
  },
  moreInventory20Upgrade: {
    quantity: 1,
    recipe: [{ item: "stone", quantity: 1 }],
  },
} as const satisfies Partial<Record<ItemKey, Recipe>>;
