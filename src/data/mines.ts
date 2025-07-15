import { ItemKey } from "./items";

export type MineDrops = {
  standard: ItemKey;
} & Partial<Record<ItemKey, number>>;

export type Mine = {
  name: string;
  drops: MineDrops;
  health: number;
};

export const MINES = {
  coalMine: {
    name: "Coal Mine",
    health: 5,
    drops: {
      standard: "stone",
      coal: 200,
      amethyst: 10,
    },
  },
  copperMine: {
    name: "Copper Mine",
    health: 1000,
    drops: {
      standard: "stone",
      copperOre: 30,
      tinOre: 120,
      coal: 40,
    },
  },
} as const satisfies Record<string, Mine>;

export type MineKey = keyof typeof MINES;
