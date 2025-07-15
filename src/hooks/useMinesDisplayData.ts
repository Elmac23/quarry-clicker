import { ItemKey } from "@/data/items";
import { Mine, MineKey, MINES } from "@/data/mines";
import { promilesToPercentageString } from "@/lib/promilesToPercentageString";
import { useMemo } from "react";

export function useMinesDisplayData() {
  const result = useMemo(() => {
    const temp = [];
    for (const [k, v] of Object.entries(MINES)) {
      const key = k as MineKey;
      const mine = v as Mine;

      const dropKeys = Object.keys(mine.drops).filter(
        (key) => key !== "standard"
      ) as ItemKey[];

      const formattedDrops: { id: ItemKey; label: string }[] = [];

      dropKeys.forEach((key) => {
        formattedDrops.push({
          id: key,
          label: promilesToPercentageString(mine.drops[key]!),
        });
      });

      temp.push({
        id: key,
        name: mine.name,
        health: mine.health,
        standard: mine.drops["standard"],
        drops: formattedDrops,
      });
    }
    return temp;
  }, []);

  return result;
}
