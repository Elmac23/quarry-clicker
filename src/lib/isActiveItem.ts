import { ITEMS, type ItemKey } from "../data/items";

export function isActiveItem(item: ItemKey) {
  return ["pickaxe", "potion", "upgrade", "consumable"].includes(
    ITEMS[item].type
  );
}
