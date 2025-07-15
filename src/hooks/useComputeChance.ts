import { randomRange } from "@/lib/randomRange";

export type ChanceEntity<T> = {
  chance: number;
  data: T;
};

export function computeChance<T>(
  entities: ChanceEntity<T>[],
  standard: T,
  base: number = 100
): () => T {
  const totalPercentage = entities.reduce((acc, x) => acc + x.chance, 0);
  if (totalPercentage > base) throw Error(`Percentage exceeds 100%`);
  const fixedPercentages: ChanceEntity<T>[] = [];
  let acc = 0;
  entities.forEach((el) => {
    fixedPercentages.push({ chance: acc + el.chance, data: el.data });
    acc += el.chance;
  });

  return function () {
    let returned: null | T = null;
    const random = randomRange(0, base);
    fixedPercentages.forEach((el) => {
      if (random < el.chance) {
        if (!returned) {
          returned = el.data;
        }
      }
    });

    if (!returned) {
      returned = standard;
    }

    return returned;
  };
}
