"use client";

import { ITEMS, ItemToolKey } from "@/data/items";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { ItemWithQuantity, selectPickaxe } from "@/store/inventory";
import React from "react";
import { Button } from "./ui/button";

function Inventory() {
  const { items, selectedPickaxe } = useAppSelector((state) => state.inventory);
  return (
    <ul>
      {items.map((item, index) => RenderItem(item, index, selectedPickaxe))};
    </ul>
  );
}

function RenderItem(
  item: ItemWithQuantity | null,
  index: number,
  selectedPickaxe: ItemToolKey
) {
  const dispath = useAppDispatch();

  if (!item) return <li key={index}>Free space!</li>;

  const itemType = ITEMS[item?.id].type;
  return (
    <li key={index}>
      {ITEMS[item.id].name}:
      {itemType === "material" ? (
        item.quantity
      ) : (
        <Button
          disabled={selectedPickaxe === item.id}
          onClick={() =>
            dispath(selectPickaxe({ pickaxe: item.id as ItemToolKey }))
          }
        >
          Select!
        </Button>
      )}
    </li>
  );
}

export default Inventory;
