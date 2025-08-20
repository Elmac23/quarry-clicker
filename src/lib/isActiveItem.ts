import { ITEMS, ItemType, type ItemKey } from "../data/items";

export function isActiveItem(item: ItemKey) {
  const activeTypes: ItemType[] = [
    "pickaxe",
    "potion",
    "upgrade",
    "consumable",
    "drill",
  ];
  return activeTypes.includes(ITEMS[item].type);
}
