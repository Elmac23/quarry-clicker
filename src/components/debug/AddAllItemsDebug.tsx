"use client";

import React from "react";
import Button from "../Button";
import { ItemKey, ITEMS, ItemType } from "@/data/items";
import { addItem } from "@/store/inventory";
import { useAppDispatch } from "@/hooks/redux";

function AddAllItemsDebug() {
  const dispatch = useAppDispatch();
  const addAllItemsToInventory = () => {
    Object.keys(ITEMS).forEach((itemKey) => {
      dispatch(addItem({ id: itemKey as ItemKey, quantity: 1 }));
    });
  };

  const addItemsByType = (selectedType: ItemType) => {
    Object.keys(ITEMS).forEach((itemKey) => {
      const itemType = ITEMS[itemKey as ItemKey].type;
      if (itemType === selectedType)
        dispatch(addItem({ id: itemKey as ItemKey, quantity: 1 }));
    });
  };

  return (
    <>
      <Button
        size="md"
        onClick={addAllItemsToInventory}
        className="mx-2 bg-green-600 hover:bg-green-700"
      >
        Add All Items (UI Test)
      </Button>
      <Button
        size="md"
        onClick={() => addItemsByType("material")}
        className="mx-2 bg-orange-600 hover:bg-orange-700"
      >
        Materials
      </Button>
      <Button
        size="md"
        onClick={() => addItemsByType("pickaxe")}
        className="mx-2 bg-orange-600 hover:bg-orange-700"
      >
        Pickaxe
      </Button>
      <Button
        size="md"
        onClick={() => addItemsByType("drill")}
        className="mx-2 bg-orange-600 hover:bg-orange-700"
      >
        Drills
      </Button>
      <Button
        size="md"
        onClick={() => addItemsByType("potion")}
        className="mx-2 bg-orange-600 hover:bg-orange-700"
      >
        Potions
      </Button>
      <Button
        size="md"
        onClick={() => addItemsByType("plantable")}
        className="mx-2 bg-orange-600 hover:bg-orange-700"
      >
        Seeds
      </Button>
      <Button
        size="md"
        onClick={() => addItemsByType("upgrade")}
        className="mx-2 bg-orange-600 hover:bg-orange-700"
      >
        Upgrades
      </Button>
      <Button
        size="md"
        onClick={() => addItemsByType("smeltable")}
        className="mx-2 bg-orange-600 hover:bg-orange-700"
      >
        Smeltable
      </Button>
    </>
  );
}

export default AddAllItemsDebug;
