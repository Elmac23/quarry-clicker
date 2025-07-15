"use client";

import Button from "@/components/Button";
import BottomMenu from "@/components/ui/menu";
import Ore from "@/components/ui/ore";
import { useAppDispatch } from "@/hooks/redux";

import { useMine } from "@/store/mine";
import { addItem, useInventory } from "@/store/inventory";
import { ITEMS, ItemKey } from "@/data/items";
import Notifiactions from "@/components/ui/notification";
import { useInterval } from "@/hooks/useInterval";
import { tick as smeltTick, useSmelt } from "@/store/smelt";
import { useEffect } from "react";
import BG from "@/components/background";
import { useToggle } from "@/hooks/useToggle";
import { tick as buffsTick, useBuffs } from "@/store/buffs";
import Sprite from "@/components/Sprite";

export default function Home() {
  const dispatch = useAppDispatch();
  const { mine, health } = useMine();
  const { selectedPickaxe } = useInventory();
  const { value, toggle } = useToggle(false);

  const { isEmpty } = useSmelt();

  const { activeBuffs } = useBuffs();

  const { pauseInterval, startInterval } = useInterval(() => {
    dispatch(smeltTick());
  }, 100);

  useInterval(() => {
    dispatch(buffsTick());
    console.log("buff tick");
  }, 1000);

  useEffect(() => {
    if (isEmpty) pauseInterval();
    else startInterval();
  }, [isEmpty, pauseInterval, startInterval]);

  const addAllItemsToInventory = () => {
    Object.keys(ITEMS).forEach((itemKey) => {
      dispatch(addItem({ item: itemKey as ItemKey, amount: 1 }));
    });
  };

  return (
    <main className="relative">
      <BG disabled={value} time={30} />
      <h1 className="text-2xl">
        {mine} hp: {Math.round(health)} || {selectedPickaxe}
      </h1>
      <Button onClick={toggle}>Toggle bg</Button>
      <ul className="flex flex-col gap-2">
        {activeBuffs.map((buff, index) => (
          <li
            className="pixelated jersey10 text-2xl text-primary-500 flex gap-4"
            key={index}
          >
            <Sprite className="w-8" src={buff.icon} alt={buff.name} />{" "}
            {buff.name}: {buff.timeLeft}
          </li>
        ))}
      </ul>

      <Ore />
      <Button
        size="md"
        onClick={addAllItemsToInventory}
        className="mx-2 bg-green-600 hover:bg-green-700"
      >
        Add All Items (UI Test)
      </Button>
      <Notifiactions />
      <BottomMenu />
    </main>
  );
}
