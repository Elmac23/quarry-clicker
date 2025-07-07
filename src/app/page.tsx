"use client";

import Button from "@/components/button";
import BottomMenu from "@/components/ui/menu";
import Ore from "@/components/ui/ore";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { changeMine } from "@/store/mine";
import { addItem } from "@/store/inventory";
import { ITEMS, ItemKey } from "@/data/items";

export default function Home() {
  const dispatch = useAppDispatch();
  const { mine, health } = useAppSelector((state) => state.mine);
  const { selectedPickaxe } = useAppSelector((state) => state.inventory);

  const addAllItemsToInventory = () => {
    Object.keys(ITEMS).forEach((itemKey) => {
      dispatch(addItem({ item: itemKey as ItemKey, amount: 1 }));
    });
  };

  return (
    <>
      <h1 className="text-2xl">
        {mine} hp: {health} || {selectedPickaxe}
      </h1>

      <Ore />
      <Button
        className="mx-2 "
        size="md"
        onClick={() => dispatch(changeMine("coalMine"))}
      >
        Coal mine!
      </Button>
      <Button size="lg" onClick={() => dispatch(changeMine("testMine"))}>
        Test mine!
      </Button>
      <Button
        size="md"
        onClick={addAllItemsToInventory}
        className="mx-2 bg-green-600 hover:bg-green-700"
      >
        Add All Items (UI Test)
      </Button>
      <BottomMenu />
    </>
  );
}
