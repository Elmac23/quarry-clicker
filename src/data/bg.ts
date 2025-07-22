import { ChanceEntity } from "@/lib/computeChance";
import { MineKey } from "./mines";

export const BG_DATA = {
  coalMine: {
    standard: "/sprites/bg/background_stone.png",
    entities: [
      {
        chance: 10,
        data: "/sprites/bg/background_coal.png",
      },
    ],
  },
  tinMine: {
    standard: "/sprites/bg/background_stone.png",
    entities: [
      {
        chance: 5,
        data: "/sprites/bg/background_coal.png",
      },
      {
        chance: 7,
        data: "/sprites/bg/background_tin.png",
      },
      {
        chance: 7,
        data: "/sprites/bg/background_copper.png",
      },
    ],
  },
  copperMine: {
    standard: "/sprites/bg/background_stone.png",
    entities: [
      {
        chance: 15,
        data: "/sprites/bg/background_copper.png",
      },
      {
        chance: 8,
        data: "/sprites/bg/background_iron.png",
      },
    ],
  },
  ironMine: {
    standard: "/sprites/bg/background_stone.png",
    entities: [
      {
        chance: 12,
        data: "/sprites/bg/background_iron.png",
      },
      {
        chance: 8,
        data: "/sprites/bg/background_lead.png",
      },
    ],
  },
  aluminiumMine: {
    standard: "/sprites/bg/background_stone.png",
    entities: [
      {
        chance: 10,
        data: "/sprites/bg/background_aluminium.png",
      },
      {
        chance: 12,
        data: "/sprites/bg/background_lead.png",
      },
    ],
  },
  finalMine: {
    standard: "/sprites/bg/background_stone.png",
    entities: [
      {
        chance: 8,
        data: "/sprites/bg/background_silver.png",
      },
      {
        chance: 6,
        data: "/sprites/bg/background_gold.png",
      },
      {
        chance: 4,
        data: "/sprites/bg/background_platinum.png",
      },
    ],
  },
} satisfies Record<
  MineKey,
  { standard: string; entities: ChanceEntity<string>[] }
>;
