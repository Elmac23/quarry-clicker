import ItemTile from "@/components/ItemTile";
import {
  ActiveItemKey,
  ItemKey,
  ItemPickaxeKey,
  ITEMS,
  TypedItemWithQuantity,
} from "@/data/items";
import { useAppDispatch } from "@/hooks/redux";

import { activeItem } from "@/store/inventory";
import React, { useState } from "react";
import { SetStateAction, useCallback } from "react";
import DraggableWrapper from "./DraggableWrapper";
import { useToggle } from "@/hooks/useToggle";
import ContextMenu from "@/components/contextMenu";
import Button from "@/components/Button";
import { isActiveItem } from "@/lib/isActiveItem";
import { useAudio } from "@/hooks/useAudio";

type InventoryItemProps = {
  item: TypedItemWithQuantity | null;
  index: number;
  selectedPickaxe: ItemPickaxeKey;
  setSelectedItem: React.Dispatch<SetStateAction<ItemKey | null>>;
};

function InventoryItem({
  item,
  index,
  setSelectedItem,
  selectedPickaxe,
}: InventoryItemProps) {
  const dispatch = useAppDispatch();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { value, setFalse, setTrue } = useToggle(false);
  const potionAudio = useAudio("085594_potion-35983.mp3");

  const handleMouseEnter = useCallback(() => {
    if (item) setSelectedItem(item.id);
  }, [item, setSelectedItem]);

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setTrue();
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    },
    [setTrue]
  );

  return (
    <DraggableWrapper id={index} disabled={!item}>
      {(containerProps) => (
        <>
          <ItemTile
            containerProps={containerProps}
            onContextMenu={item ? handleContextMenu : undefined}
            quantity={item?.quantity}
            itemId={item?.id}
            background={item?.id === selectedPickaxe ? "selected" : undefined}
            onMouseEnter={handleMouseEnter}
          />
          {item && (
            <ContextMenu
              position={position}
              isOpen={value}
              onClose={setFalse}
              className="bg-green-900/80 p-4 border-[10] pixelated rounded-2xl"
            >
              <div className="space-y-4">
                <p className="text-primary-500 pixelated jersey10 text-2xl mb-4">
                  {ITEMS[item.id!].name}
                </p>
                {isActiveItem(item.id) && (
                  <Button
                    className="w-full"
                    onClick={async (e) => {
                      e.stopPropagation();
                      dispatch(activeItem(item.id as ActiveItemKey));
                      if (ITEMS[item.id].type === "potion") potionAudio.play();
                      setFalse();
                    }}
                  >
                    Use
                  </Button>
                )}
                <Button className="w-full" onClick={(e) => e.stopPropagation()}>
                  Sell
                </Button>
              </div>
            </ContextMenu>
          )}
        </>
      )}
    </DraggableWrapper>
  );
}

export default React.memo(InventoryItem);
