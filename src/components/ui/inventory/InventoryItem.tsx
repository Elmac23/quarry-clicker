import ItemTile from "@/components/ItemTile";
import { ItemKey, ITEMS, ItemToolKey } from "@/data/items";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  deleteItemAtIndex,
  ItemWithQuantity,
  selectPickaxe,
} from "@/store/inventory";
import { motion } from "motion/react";
import { SetStateAction } from "react";

type InventoryItemProps = {
  item: ItemWithQuantity | null;
  index: number;
  setSelectedItem: React.Dispatch<SetStateAction<ItemKey | null>>;
};

function InventoryItem({ item, index, setSelectedItem }: InventoryItemProps) {
  const dispatch = useAppDispatch();
  const { selectedPickaxe } = useAppSelector((state) => state.inventory);
  if (!item) return <ItemTile />;

  const isTool = ITEMS[item.id].type === "tool";

  return (
    <motion.li
      whileHover={{
        scale: 1.05,
      }}
      key={index}
    >
      <ItemTile
        quantity={item.quantity}
        itemId={item.id}
        background={item.id === selectedPickaxe ? "selected" : undefined}
        onMouseEnter={() => {
          setSelectedItem(item.id);
        }}
        onClick={
          isTool
            ? () =>
                dispatch(
                  selectPickaxe({
                    pickaxe: item.id as ItemToolKey,
                  })
                )
            : () => dispatch(deleteItemAtIndex(index))
        }
      />
    </motion.li>
  );
}

export default InventoryItem;
