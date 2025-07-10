"use client";

import { ItemKey, ITEMS } from "@/data/items";
import { useAppSelector } from "@/hooks/redux";

import React, { useState } from "react";
import { ModalProps } from "@/components/modal";
import ModalHeader from "@/components/modal/ModalHeader";
import UIModal from "@/components/modal/UIModal";
import ItemGrid from "../ItemGrid";
import InventoryItem from "./InventoryItem";

type InventoryModalProps = Pick<ModalProps, "isOpen" | "onClose">;
function Inventory({ isOpen, onClose }: InventoryModalProps) {
  const [selectedItem, setSelectedItem] = useState<null | ItemKey>(null);
  const { items } = useAppSelector((state) => state.inventory);
  return (
    <UIModal
      isOpen={isOpen}
      onClose={onClose}
      className="p-8 z-10 bg-secondary-800/70 pixelated border-16 rounded-4xl w-[70%] min-w-md max-w-3xl"
      style={{
        borderImage: "url('/sprites/ui/frame.png') 7",
        borderImageRepeat: "round",
      }}
    >
      <ModalHeader>
        Inventory {selectedItem && `| ${ITEMS[selectedItem].name}`}
      </ModalHeader>
      <ItemGrid>
        {items.map((item, index) => (
          <InventoryItem
            index={index}
            item={item}
            setSelectedItem={setSelectedItem}
            key={index}
          />
        ))}
      </ItemGrid>
    </UIModal>
  );
}

export default Inventory;
