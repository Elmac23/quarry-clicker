import { ChanceEntity } from "@/lib/computeChance";
import { MineKey } from "./mines";

export const BG_DATA = {
  beginnersShaft: {
    standard: "/sprites/bg/background_stone.png",
    entities: [
      {
        chance: 10,
        data: "/sprites/bg/background_coal.png",
      },
    ],
  },
  crimsonShaft: {
    standard: "/sprites/bg/background_stone.png",
    entities: [
      {
        chance: 7,
        data: "/sprites/bg/background_tin.png",
      },
      {
        chance: 7,
        data: "/sprites/bg/background_copper.png",
      },
      {
        chance: 3,
        data: "/sprites/bg/background_coal.png",
      },
    ],
  },
  metalGalore: {
    standard: "/sprites/bg/background_stone.png",
    entities: [
      {
        chance: 8,
        data: "/sprites/bg/background_copper.png",
      },
      {
        chance: 6,
        data: "/sprites/bg/background_lead.png",
      },
      {
        chance: 6,
        data: "/sprites/bg/background_iron.png",
      },
      {
        chance: 1,
        data: "/sprites/bg/background_amethyst.png",
      },
    ],
  },
  shaftOfUnpaintment: {
    standard: "/sprites/bg/background_graphite.png",
    entities: [
      {
        chance: 8,
        data: "/sprites/bg/background_graphite_iron.png",
      },
      {
        chance: 6,
        data: "/sprites/bg/background_graphite_tin.png",
      },
      {
        chance: 6,
        data: "/sprites/bg/background_graphite_aluminium.png",
      },
      {
        chance: 1,
        data: "/sprites/bg/background_graphite_saphire.png",
      },
    ],
  },
  heavyMetalCave: {
    standard: "/sprites/bg/background_graphite.png",
    entities: [
      {
        chance: 8,
        data: "/sprites/bg/background_graphite_iron.png",
      },
      {
        chance: 8,
        data: "/sprites/bg/background_graphite_tungsten.png",
      },
      {
        chance: 8,
        data: "/sprites/bg/background_graphite_titanium.png",
      },
      {
        chance: 1,
        data: "/sprites/bg/background_graphite_ruby.png",
      },
    ],
  },
  caveOfFortune: {
    standard: "/sprites/bg/background_palestone2.png",
    entities: [
      {
        chance: 3,
        data: "/sprites/bg/background_palestone_silver.png",
      },
      {
        chance: 3,
        data: "/sprites/bg/background_palestone_cobalt.png",
      },
      {
        chance: 3,
        data: "/sprites/bg/background_palestone_gold.png",
      },
      {
        chance: 3,
        data: "/sprites/bg/background_palestone_chrome.png",
      },
      {
        chance: 3,
        data: "/sprites/bg/background_palestone_titanium.png",
      },
      {
        chance: 1,
        data: "/sprites/bg/background_palestone_emerald.png",
      },
    ],
  },
  paleShaft: {
    standard: "/sprites/bg/background_palestone2.png",
    entities: [
      {
        chance: 3,
        data: "/sprites/bg/background_palestone_silver.png",
      },
      {
        chance: 3,
        data: "/sprites/bg/background_palestone_cobalt.png",
      },
      {
        chance: 3,
        data: "/sprites/bg/background_palestone_gold.png",
      },
      {
        chance: 3,
        data: "/sprites/bg/background_palestone_platinum.png",
      },

      {
        chance: 1,
        data: "/sprites/bg/background_palestone_topaz.png",
      },
    ],
  },
  deepgritMine: {
    standard: "/sprites/bg/background_deepgrit.png",
    entities: [
      {
        chance: 3,
        data: "/sprites/bg/background_deepgrit_uranium.png",
      },
      {
        chance: 3,
        data: "/sprites/bg/background_deepgrit_gold.png",
      },
      {
        chance: 3,
        data: "/sprites/bg/background_deepgrit_silver.png",
      },
      {
        chance: 4,
        data: "/sprites/bg/background_deepgrit_platinum.png",
      },
      {
        chance: 1,
        data: "/sprites/bg/background_deepgrit_opal.png",
      },
    ],
  },
  mysticave: {
    standard: "/sprites/bg/background_obsidian.png",
    entities: [
      {
        chance: 5,
        data: "/sprites/bg/background_obsidian_uranium.png",
      },
      {
        chance: 4,
        data: "/sprites/bg/background_obsidian_palladium.png",
      },
      {
        chance: 3,
        data: "/sprites/bg/background_obsidian_mythril.png",
      },
      {
        chance: 1,
        data: "/sprites/bg/background_obsidian_diamond.png",
      },
    ],
  },
  alternateDimension: {
    standard: "/sprites/bg/background_obsidian.png",
    entities: [
      {
        chance: 12,
        data: "/sprites/bg/background_obsidian_darkmatter.png",
      },
    ],
  },
} satisfies Record<
  MineKey,
  { standard: string; entities: ChanceEntity<string>[] }
>;
