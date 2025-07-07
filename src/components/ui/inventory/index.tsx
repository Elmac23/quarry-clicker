"use client";

import { ItemKey, ITEMS, ItemToolKey } from "@/data/items";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  deleteItemAtIndex,
  ItemWithQuantity,
  selectPickaxe,
} from "@/store/inventory";
import React, { SetStateAction, useState } from "react";
import Button from "@/components/button";
import Sprite from "@/components/sprite";
import Modal, { ModalProps } from "@/components/modal";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type InventoryModalProps = Pick<ModalProps, "isOpen" | "onClose">;
function Inventory({ isOpen, onClose }: InventoryModalProps) {
  const [selectedItem, setSelectedItem] = useState<null | ItemKey>(null);
  const { items } = useAppSelector((state) => state.inventory);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className="bg-secondary-800/90 p-8 pixelated border-16 rounded-4xl"
        style={{
          borderImage: "url('/sprites/ui/frame.png') 5",
        }}
      >
        <h2 className="pixelated-sans text-3xl text-primary-500 mb-2">
          Inventory {selectedItem && `| ${ITEMS[selectedItem].name}`}
        </h2>
        <ul className="grid md:grid-cols-8 gap-2 grid-cols-4 p-2 mb-4 max-h-96 overflow-x-hidden overflow-y-scroll custom-scrollbar pr-2">
          {items.map((item, index) => (
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
              className="size-20"
              key={index}
            >
              {RenderItem(item, index, setSelectedItem!)}
            </motion.li>
          ))}
        </ul>

        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
}

function RenderItem(
  item: ItemWithQuantity | null,
  index: number,
  setSelectedItem: React.Dispatch<SetStateAction<ItemKey | null>>
) {
  const dispatch = useAppDispatch();
  const { selectedPickaxe } = useAppSelector((state) => state.inventory);
  if (!item)
    return (
      <Sprite
        alt="empty space"
        src="/sprites/ui/overlay.png"
        className="cursor-pointer transition"
        onMouseEnter={() => {
          setSelectedItem(null);
        }}
      />
    );

  const isTool = ITEMS[item.id].type === "tool";

  return (
    <div
      className={cn(
        "bg-cover aspect-square pixelated bg-[url(/sprites/ui/overlay.png)] h-full grid-center cursor-pointer relative transition",
        item.id === selectedPickaxe
          ? "bg-[url(/sprites/ui/overlay_selected.png)]"
          : "bg-[url(/sprites/ui/overlay.png)]"
      )}
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
    >
      <Sprite
        className="size-18"
        alt={ITEMS[item.id].name}
        src={ITEMS[item.id].icon}
      />
      <p className="absolute right-3 bottom-1 text-lg pixelated-sans text-white text-shadow-lg">
        {item.quantity > 1 && item.quantity}
      </p>
    </div>
  );
}

export default Inventory;
