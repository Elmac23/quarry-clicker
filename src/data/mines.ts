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
  // Basic mines
  coalMine: {
    name: "Coal Mine",
    health: 5,
    drops: {
      standard: "stone",
      coal: 100,
      amethyst: 10,
    },
  },

  // Ore mines
  tinMine: {
    name: "Tin Mine",
    health: 10,
    drops: {
      standard: "stone",
      tinOre: 150,
      coal: 25,
      amethyst: 5,
    },
  },
  copperMine: {
    name: "Copper Mine",
    health: 15,
    drops: {
      standard: "stone",
      copperOre: 120,
      tinOre: 30,
      coal: 40,
    },
  },
  ironMine: {
    name: "Iron Mine",
    health: 25,
    drops: {
      standard: "stone",
      ironOre: 100,
      copperOre: 25,
      coal: 80,
      amethyst: 3,
    },
  },
  silverMine: {
    name: "Silver Mine",
    health: 40,
    drops: {
      standard: "stone",
      silverOre: 80,
      ironOre: 40,
      emerald: 15,
      ruby: 10,
    },
  },
  goldMine: {
    name: "Gold Mine",
    health: 60,
    drops: {
      standard: "stone",
      goldOre: 60,
      silverOre: 30,
      diamond: 8,
      emerald: 12,
      topaz: 20,
    },
  },
  platinumMine: {
    name: "Platinum Mine",
    health: 100,
    drops: {
      standard: "stone",
      platinumOre: 40,
      goldOre: 20,
      diamond: 15,
      sapphire: 12,
      opal: 10,
    },
  },

  // Gem caves
  crystalCave: {
    name: "Crystal Cave",
    health: 30,
    drops: {
      standard: "stone",
      amethyst: 80,
      emerald: 60,
      ruby: 40,
      sapphire: 30,
      topaz: 25,
      geode: 25,
    },
  },
  diamondCave: {
    name: "Diamond Cave",
    health: 80,
    drops: {
      standard: "stone",
      diamond: 25,
      emerald: 30,
      ruby: 25,
      sapphire: 20,
      amethyst: 40,
      opal: 15,
    },
  },

  // Special mines
  deepMine: {
    name: "Deep Mine",
    health: 150,
    drops: {
      standard: "stone",
      aluminiumOre: 30,
      leadOre: 25,
      platinumOre: 20,
      diamond: 10,
      gear: 15,
      wire: 20,
    },
  },
  forgottenCave: {
    name: "Forgotten Cave",
    health: 200,
    drops: {
      standard: "stone",
      combinerAlpha: 5,
      combinerBeta: 5,
      money: 30,
      torch: 40,
      flashlight: 15,
      batwing: 25,
      geode: 35,
    },
  },

  // Test mine with all items
  testMine: {
    health: 1,
    name: "Test Mine (All Items)",
    drops: {
      standard: "stone",
      // Materials without sprites
      sand: 25,
      glass: 25,
      clay: 25,
      // Ores
      tinOre: 25,
      copperOre: 25,
      ironOre: 25,
      silverOre: 25,
      goldOre: 25,
      platinumOre: 25,
      aluminiumOre: 25,
      leadOre: 25,
      // Bars
      tinBar: 25,
      copperBar: 25,
      bronzeBar: 25,
      ironBar: 25,
      steelBar: 25,
      silverBar: 25,
      goldenBar: 25,
      platinumBar: 25,
      aluminiumBar: 25,
      leadBar: 25,
      // Gems
      amethyst: 25,
      diamond: 25,
      emerald: 25,
      ruby: 25,
      sapphire: 25,
      topaz: 25,
      opal: 25,
      // Special
      geode: 25,
      gear: 25,
      wire: 25,
      money: 25,
      food: 25,
      batwing: 25,
      torch: 25,
      flashlight: 25,
      combinerAlpha: 25,
      combinerBeta: 25,
      coal: 25,
    },
  },
} as const satisfies Record<string, Mine>;

export type MineKey = keyof typeof MINES;
