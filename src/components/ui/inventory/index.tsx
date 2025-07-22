"use client";

import { ItemKey, ITEMS, TypedItemWithQuantity } from "@/data/items";

import React, { useRef, useState, useCallback, useMemo } from "react";
import { ModalProps } from "@/components/modal";
import UIModal from "@/components/modal/UIModal";
import ItemGrid from "../ItemGrid";
import InventoryItem from "./InventoryItem";
import { swapItems, useInventory } from "@/store/inventory";
import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useAppDispatch } from "@/hooks/redux";
import Text from "@/components/Text";

type InventoryModalProps = Pick<ModalProps, "isOpen" | "onClose">;
function Inventory({ isOpen, onClose }: InventoryModalProps) {
  const [selectedItem, setSelectedItem] = useState<null | ItemKey>(null);
  const containerRef = useRef<HTMLUListElement>(null);
  const { items, selectedPickaxe } = useInventory();
  const dispatch = useAppDispatch();
  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);

  const sensors = useSensors(mouseSensor, touchSensor);

  const handleDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      if (!over) return;
      const indexOne = active.id as number;
      const indexTwo = over.id as number;

      if (indexOne === indexTwo) return;

      dispatch(swapItems({ indexOne, indexTwo }));
    },
    [dispatch]
  );

  const memoizedSetSelectedItem = useMemo(
    () => setSelectedItem,
    [setSelectedItem]
  );

  const renderItem = useCallback(
    (item: TypedItemWithQuantity | null, index: number) => (
      <InventoryItem
        selectedPickaxe={selectedPickaxe}
        index={index}
        item={item}
        setSelectedItem={memoizedSetSelectedItem}
        key={index}
      />
    ),
    [memoizedSetSelectedItem, selectedPickaxe]
  );

  return (
    <UIModal
      isOpen={isOpen}
      onClose={onClose}
      className="p-8 z-10 bg-secondary-800/70 pixelated border-16 rounded-4xl"
      style={{
        borderImage: "url('/sprites/ui/frame.png') 7",
        borderImageRepeat: "round",
      }}
    >
      <Text size="xl" color="primary">
        Inventory {selectedItem && `| ${ITEMS[selectedItem].name}`}
      </Text>
      <Text size="lg">{selectedItem && ITEMS[selectedItem].description}</Text>
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        accessibility={{}}
        autoScroll={{
          acceleration: 1,
          threshold: {
            x: 0,
            y: 0.15,
          },
        }}
      >
        <ItemGrid
          ref={containerRef as any}
          data={items}
          renderItem={renderItem}
        />
      </DndContext>
    </UIModal>
  );
}

export default Inventory;
