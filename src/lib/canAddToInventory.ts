import { TypedItemWithQuantity } from "@/data/items";
import { InventoryState } from "@/store/inventory";

export function canAddToInventory(
  { id, quantity }: TypedItemWithQuantity,
  inventoryState: InventoryState
) {
  const { items, maxStackSize } = inventoryState;

  const freeIndex = items.findIndex((item) => !item);
  const resultInInventory = items.find(
    (item) => item?.id === id && maxStackSize - item.quantity >= quantity
  );

  if (freeIndex === -1 && !resultInInventory) return false;

  return true;
}
