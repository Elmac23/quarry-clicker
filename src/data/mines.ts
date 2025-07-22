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
  coalMine: {
    name: "Coal Mine",
    health: 10,
    drops: {
      standard: "stone",
      coal: 400,
      sand: 50,
      amethyst: 10,
    },
    oreSprites: [
      "OmegaOreCoal1.png",
      "OmegaOreCoal2.png",
      "OmegaOreCoal3.png",
      "OmegaOreCoal4.png",
      "OmegaOreCoal5.png",
    ],
  },
  tinMine: {
    name: "Tin Mine",
    health: 20,
    permit: "permitAlpha",
    drops: {
      standard: "stone",
      copperOre: 100,
      tinOre: 150,
      sand: 100,
      coal: 50,
      topaz: 10,
    },
    oreSprites: [
      "OmegaOreTC1.png",
      "OmegaOreTC2.png",
      "OmegaOreTC3.png",
      "OmegaOreTC4.png",
      "OmegaOreTC5.png",
    ],
  },
  copperMine: {
    name: "Copper Mine",
    health: 30,
    permit: "permitBeta",
    drops: {
      standard: "stone",
      copperOre: 200,
      ironOre: 100,
      sapphire: 10,
    },
    oreSprites: [
      "OmegaOreCI1.png",
      "OmegaOreCI2.png",
      "OmegaOreCI3.png",
      "OmegaOreCI4.png",
      "OmegaOreCI5.png",
    ],
  },
  ironMine: {
    name: "Iron Mine",
    permit: "permitGamma",
    health: 60,
    drops: {
      standard: "stone",
      leadOre: 110,
      ironOre: 180,
      emerald: 10,
    },
    oreSprites: [
      "OmegaOreIL1.png",
      "OmegaOreIL2.png",
      "OmegaOreIL3.png",
      "OmegaOreIL4.png",
      "OmegaOreIL5.png",
    ],
  },
  aluminiumMine: {
    name: "Aluminium Mine",
    permit: "permitSigma",
    health: 100,
    drops: {
      standard: "stone",
      leadOre: 170,
      aluminiumOre: 120,
      ruby: 10,
    },
    oreSprites: [
      "OmegaOreLA1.png",
      "OmegaOreLA2.png",
      "OmegaOreLA3.png",
      "OmegaOreLA4.png",
      "OmegaOreLA5.png",
    ],
  },
  finalMine: {
    name: "Final Mine",
    permit: "permitOmega",
    health: 150,
    drops: {
      standard: "stone",
      silverOre: 130,
      goldOre: 80,
      platinumOre: 50,
      diamond: 10,
      opal: 10,
    },
    oreSprites: [
      "OmegaOreSGP1.png",
      "OmegaOreSGP2.png",
      "OmegaOreSGP3.png",
      "OmegaOreSGP4.png",
      "OmegaOreSGP5.png",
    ],
  },
} as const satisfies Record<string, Mine>;

export type MineKey = keyof typeof MINES;
