import ItemTile from "@/components/ItemTile";
import {
  ActiveItemKey,
  ItemDrillKey,
  ItemKey,
  ItemPickaxeKey,
  ITEMS,
  ItemType,
  TypedItemWithQuantity,
} from "@/data/items";
import { useAppDispatch } from "@/hooks/redux";

import { activeItem, removeItem } from "@/store/inventory";
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
  selectedTool: ItemPickaxeKey | ItemDrillKey;
  setSelectedItem: React.Dispatch<SetStateAction<ItemKey | null>>;
};

function InventoryItem({
  item,
  index,
  setSelectedItem,
  selectedTool,
}: InventoryItemProps) {
  const dispatch = useAppDispatch();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { value, setFalse, setTrue } = useToggle(false);
  const potionAudio = useAudio("085594_potion-35983.mp3");
  const clickSound = useAudio("577025__nezuai__ui-sound-2.wav", 0.5);

  const handleMouseEnter = useCallback(() => {
    if (item) setSelectedItem(item.id);
  }, [item, setSelectedItem]);

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      clickSound.play();
      setTrue();
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    },
    [clickSound.play, clickSound.pause]
  );

  const removableTypes: ItemType[] = [
    "consumable",
    "material",
    "material",
    "plantable",
    "potion",
    "smeltable",
  ];

  return (
    <DraggableWrapper id={index} disabled={!item}>
      {(containerProps) => (
        <>
          <ItemTile
            containerProps={containerProps}
            onContextMenu={item ? handleContextMenu : undefined}
            quantity={item?.quantity}
            itemKey={item?.id}
            background={item?.id === selectedTool ? "selected" : undefined}
            onMouseEnter={handleMouseEnter}
          />
          {item && (
            <ContextMenu
              position={position}
              isOpen={value}
              onClose={setFalse}
              className="bg-green-950/90 p-4 border-[10] pixelated rounded-2xl"
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
                      clickSound.play();
                      dispatch(activeItem(item.id as ActiveItemKey));
                      if (ITEMS[item.id].type === "potion") potionAudio.play();
                      setFalse();
                    }}
                  >
                    Use
                  </Button>
                )}
                {removableTypes.includes(ITEMS[item.id].type) && (
                  <Button
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(
                        removeItem({
                          amount: item.quantity,
                          item: item.id,
                        })
                      );
                    }}
                  >
                    Remove Stack
                  </Button>
                )}
              </div>
            </ContextMenu>
          )}
        </>
      )}
    </DraggableWrapper>
  );
}

export default React.memo(InventoryItem);
