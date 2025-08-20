import { ItemKey, ItemUpgradeKey } from "./items";

export type MineDrops = {
  standard: ItemKey;
} & Partial<Record<ItemKey, number>>;

export type Mine = {
  name: string;
  drops: MineDrops;
  permit?: ItemUpgradeKey;
  health: number;
  oreSprites: [string, string, string, string, string];
};

export const MINES = {
  beginnersShaft: {
    name: "Beginner's Shaft",
    health: 10,
    drops: {
      standard: "stone",
      coal: 400,
      coalbudSeeds: 10,
      geode: 5,
    },
    oreSprites: [
      "ORE1_0.png",
      "ORE1_1.png",
      "ORE1_2.png",
      "ORE1_3.png",
      "ORE1_4.png",
    ],
  },
  crimsonShaft: {
    name: "Crimson Shaft",
    health: 20,
    permit: "permitAlpha",
    drops: {
      standard: "stone",
      coal: 150,
      sand: 100,
      clay: 50,
      tinOre: 150,
      copperOre: 100,
      rockreedSeeds: 10,
      geode: 6,
    },
    oreSprites: [
      "ORE2_0.png",
      "ORE2_1.png",
      "ORE2_2.png",
      "ORE2_3.png",
      "ORE2_4.png",
    ],
  },
  metalGalore: {
    name: "Metal Galore",
    health: 45,
    permit: "permitBeta",
    drops: {
      standard: "stone",
      sand: 50,
      clay: 100,
      copperOre: 120,
      leadOre: 100,
      ironOre: 90,
      amethyst: 10,
      ironvineSeeds: 10,
      geode: 7,
    },
    oreSprites: [
      "ORE3_0.png",
      "ORE3_1.png",
      "ORE3_2.png",
      "ORE3_3.png",
      "ORE3_4.png",
    ],
  },
  shaftOfUnpaintment: {
    name: "Shaft of Unpaintment",
    permit: "permitGamma",
    health: 80,
    drops: {
      standard: "graphite",
      clay: 80,
      graphiteIronOre: 150,
      graphiteTinOre: 100,
      graphiteAluminiumOre: 120,
      sapphire: 10,
      glowrootSeeds: 10,
      geode: 8,
    },
    oreSprites: [
      "ORE4_0.png",
      "ORE4_1.png",
      "ORE4_2.png",
      "ORE4_3.png",
      "ORE4_4.png",
    ],
  },
  heavyMetalCave: {
    name: "Heavy-metal Cave",
    permit: "permitDelta",
    health: 240,
    drops: {
      standard: "graphite",
      basalt: 90,
      graphiteIronOre: 140,
      graphiteTitaniumOre: 110,
      graphiteTungstenOre: 90,
      ruby: 10,
      mossberrySeeds: 10,
      geode: 9,
    },
    oreSprites: [
      "ORE5_0.png",
      "ORE5_1.png",
      "ORE5_2.png",
      "ORE5_3.png",
      "ORE5_4.png",
    ],
  },
  caveOfFortune: {
    name: "Cave of Fortune",
    permit: "permitEpsilon",
    health: 450,
    drops: {
      standard: "palestone",
      palestoneCobaltOre: 120,
      palestoneTitaniumOre: 100,
      palestoneSilverOre: 110,
      palestoneChromeOre: 90,
      palestoneGoldOre: 80,
      emerald: 10,
      silverthistleSeeds: 10,
      geode: 10,
    },
    oreSprites: [
      "ORE6_0.png",
      "ORE6_1.png",
      "ORE6_2.png",
      "ORE6_3.png",
      "ORE6_4.png",
    ],
  },
  paleShaft: {
    name: "Pale Shaft",
    permit: "permitZeta",
    health: 800,
    drops: {
      standard: "palestone",
      palestonePlatinumOre: 90,
      palestoneSilverOre: 100,
      palestoneCobaltOre: 80,
      topaz: 10,
      geode: 11,
    },
    oreSprites: [
      "ORE7_0.png",
      "ORE7_1.png",
      "ORE7_2.png",
      "ORE7_3.png",
      "ORE7_4.png",
    ],
  },
  deepgritMine: {
    name: "Deepgrit Mine",
    health: 1500,
    permit: "permitTheta",
    drops: {
      standard: "deepgrit",
      deepgritSilverOre: 100,
      deepgritPlatinumOre: 80,
      deepgritUraniumOre: 60,
      deepgritPalladiumOre: 50,
      opal: 10,
      ashvineSeeds: 10,
      geode: 12,
    },
    oreSprites: [
      "ORE8_0.png",
      "ORE8_1.png",
      "ORE8_2.png",
      "ORE8_3.png",
      "ORE8_4.png",
    ],
  },
  mysticave: {
    name: "Mysticave",
    health: 2750,
    permit: "permitKappa",
    drops: {
      standard: "obsidian",
      obsidianUraniumOre: 70,
      obsidianPalladiumOre: 60,
      obsidianMythrilOre: 50,
      diamond: 10,
      obsidianfernSeeds: 10,
      geode: 13,
    },
    oreSprites: [
      "ORE9_0.png",
      "ORE9_1.png",
      "ORE9_2.png",
      "ORE9_3.png",
      "ORE9_4.png",
    ],
  },
  alternateDimension: {
    name: "Alternate Dimension",
    health: 6000,
    permit: "permitOmega",
    drops: {
      standard: "obsidian",
      darkMatter: 80,
    },
    oreSprites: [
      "ORE10_0.png",
      "ORE10_1.png",
      "ORE10_2.png",
      "ORE10_3.png",
      "ORE10_4.png",
    ],
  },
} as const satisfies Record<string, Mine>;

export type MineKey = keyof typeof MINES;
