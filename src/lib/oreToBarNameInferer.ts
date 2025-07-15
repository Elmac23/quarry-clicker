import { ItemKey, ItemOreKey } from "@/data/items";

function oreToBarNameInfer(name: ItemOreKey) {
  const nameMap = new Map<ItemOreKey, ItemKey>([
    ["tinOre", "tinBar"],
    ["ironOre", "ironBar"],
    ["copperOre", "copperBar"],
    ["goldOre", "goldenBar"],
    ["leadOre", "leadBar"],
    ["silverOre", "silverBar"],
    ["platinumOre", "platinumBar"],
    ["aluminiumOre", "aluminiumBar"],
    ["sand", "glass"],
  ]);

  return nameMap.get(name);
}

export { oreToBarNameInfer };
