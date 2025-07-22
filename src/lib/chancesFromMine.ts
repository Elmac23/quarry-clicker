import { ItemKey } from "@/data/items";
import { Mine } from "@/data/mines";
import { ChanceEntity } from "@/lib/computeChance";

type Returned = {
  entities: ChanceEntity<ItemKey>[];
  standard: ItemKey;
};

export function chancesFromMine(mine: Mine): Returned {
  const result: ChanceEntity<ItemKey>[] = [];
  const { standard, ...rest } = mine.drops;

  for (const [item, chance] of Object.entries(rest)) {
    result.push({
      chance: chance,
      data: item as ItemKey,
    });
  }

  return { entities: result, standard };
}
