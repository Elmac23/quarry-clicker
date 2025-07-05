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
      coal: 100,
      amethyst: 5,
    },
  },
  test: {
    health: 1,
    name: "Debug Mine",
    drops: {
      standard: "stone",
      amethyst: 490,
      coal: 490,
    },
  },
} as const satisfies Record<string, Mine>;

export type MineKey = keyof typeof MINES;
