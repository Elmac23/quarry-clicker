import ItemTile from "@/components/ItemTile";
import { useAppDispatch } from "@/hooks/redux";
import { clearPosition, SmeltPosition } from "@/store/smelt";
import React from "react";
import { addItem } from "@/store/inventory";
import { incrementStat } from "@/store/stats";

type SmeltItemProps = {
  index: number;
  item: SmeltPosition;
};

function SmeltedItem({ index, item }: SmeltItemProps) {
  const dispatch = useAppDispatch();
  return (
    <ItemTile
      background="success"
      quantityText="Collect"
      onClick={() => {
        dispatch(clearPosition(index));
        dispatch(incrementStat("totalSmelted"));
        dispatch(
          addItem({
            amount: 1,
            item: item.result,
          })
        );
      }}
      key={index}
      itemId={item?.result}
    />
  );
}

export default SmeltedItem;
