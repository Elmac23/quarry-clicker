import ItemTile from "@/components/ItemTile";
import Tooltip from "@/components/Tooltip";
import { ItemKey, ITEMS } from "@/data/items";
import React from "react";

type MineItemProps = {
  id: ItemKey;
  label?: string;
};

function MineItem({ id, label }: MineItemProps) {
  return (
    <Tooltip content={ITEMS[id].name}>
      <ItemTile itemKey={id} quantityText={label} className="min-h-18" />
    </Tooltip>
  );
}

export default MineItem;
