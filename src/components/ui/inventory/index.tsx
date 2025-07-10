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
import Modal, { ModalProps } from "@/components/modal";
import { motion } from "motion/react";
import ItemTile from "@/components/itemTile";

type InventoryModalProps = Pick<ModalProps, "isOpen" | "onClose">;
function Inventory({ isOpen, onClose }: InventoryModalProps) {
  const [selectedItem, setSelectedItem] = useState<null | ItemKey>(null);
  const { items } = useAppSelector((state) => state.inventory);
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="px-4 md:px-0">
      <div
        className="z-10 bg-secondary-800/70 p-8 pixelated border-16 rounded-4xl"
        style={{
          borderImage: "url('/sprites/ui/frame.png') 7",
          borderImageRepeat: "round",
        }}
      >
        <h2 className="jersey10 text-3xl text-primary-500 mb-2">
          Inventory {selectedItem && `| ${ITEMS[selectedItem].name}`}
        </h2>
        <ul className="grid md:grid-cols-8 md:gap-2 gap-2 grid-cols-4 p-2 mb-4 max-h-96 overflow-x-hidden overflow-y-scroll custom-scrollbar pr-2">
          {items.map((item, index) => (
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
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
  if (!item) return <ItemTile />;

  const isTool = ITEMS[item.id].type === "tool";

  return (
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
  );
}

export default Inventory;
