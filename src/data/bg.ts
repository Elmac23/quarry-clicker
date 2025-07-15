import { ChanceEntity } from "@/hooks/useComputeChance";
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
  copperMine: {
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
} satisfies Partial<
  Record<MineKey, { standard: string; entities: ChanceEntity<string>[] }>
>;
