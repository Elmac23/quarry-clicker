import ItemTile from "@/components/ItemTile";
import { useAppDispatch } from "@/hooks/redux";
import { clearPosition, SmeltPosition } from "@/store/smelt";
import React from "react";
import { addItem, useInventory } from "@/store/inventory";
import { incrementStat } from "@/store/stats";
import { useAudio } from "@/hooks/useAudio";
import { canAddToInventory } from "@/lib/canAddToInventory";
import { addNotification } from "@/store/notification";

type SmeltItemProps = {
  index: number;
  item: SmeltPosition;
};

function SmeltedItem({ index, item }: SmeltItemProps) {
  const dispatch = useAppDispatch();
  const clickSound = useAudio("577025__nezuai__ui-sound-2.wav", 0.5);
  const inventoryState = useInventory();
  return (
    <ItemTile
      as="li"
      background="success"
      quantityText="Collect"
      onClick={() => {
        const canAdd = canAddToInventory(
          {
            quantity: item.quantity,
            id: item.result,
          },
          inventoryState
        );
        if (!canAdd) {
          dispatch(
            addNotification({
              itemId: "gear",
              customMessage: "Inventory is full!",
            })
          );
          return;
        }
        clickSound.play();
        dispatch(clearPosition(index));
        dispatch(incrementStat("totalSmelted"));
        dispatch(
          addItem({
            quantity: item.quantity,
            id: item.result,
          })
        );
      }}
      key={index}
      itemKey={item?.result}
    />
  );
}

export default SmeltedItem;
