import React from "react";
import Button from "../Button";
import { ItemKey, ITEMS } from "@/data/items";
import { addItem } from "@/store/inventory";
import { useAppDispatch } from "@/hooks/redux";

function AddAllItemsDebug() {
  const dispatch = useAppDispatch();
  const addAllItemsToInventory = () => {
    Object.keys(ITEMS).forEach((itemKey) => {
      dispatch(addItem({ id: itemKey as ItemKey, quantity: 1 }));
    });
  };
  return (
    <Button
      size="md"
      onClick={addAllItemsToInventory}
      className="mx-2 bg-green-600 hover:bg-green-700"
    >
      Add All Items (UI Test)
    </Button>
  );
}

export default AddAllItemsDebug;
