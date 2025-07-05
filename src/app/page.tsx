"use client";

import Crafting from "@/components/crafting";
import Inventory from "@/components/inventory";
import { Button } from "@/components/ui/button";
import { ITEMS } from "@/data/items";
import { MINES } from "@/data/mines";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useComputeChance } from "@/hooks/useComputeChance";
import { chancesFromMine } from "@/lib/chancesFromMine";
import { addItem } from "@/store/inventory";
import { changeMine, dealDamage, resetHealth } from "@/store/mine";

export default function Home() {
  const dispatch = useAppDispatch();
  const { mine, health } = useAppSelector((state) => state.mine);
  const { selectedPickaxe } = useAppSelector((state) => state.inventory);
  const { entities, standard } = chancesFromMine(MINES[mine]);
  const getDrop = useComputeChance(entities, standard, 1000);

  const handleClick = () => {
    const damage = ITEMS[selectedPickaxe].damage;
    const newHealth = health - damage;

    dispatch(dealDamage(damage));

    if (newHealth <= 0) {
      dispatch(resetHealth());
      dispatch(
        addItem({
          amount: 1,
          item: getDrop(),
        })
      );
    }
  };

  return (
    <>
      <h1 className="text-2xl">
        {mine} hp: {health}
      </h1>
      <Inventory />
      <Button onClick={() => handleClick()}>Get stone!</Button>
      <Button onClick={() => dispatch(changeMine("coalMine"))}>
        Coal mine!
      </Button>
      <Button onClick={() => dispatch(changeMine("test"))}>Test mine!</Button>
      <Crafting />
    </>
  );
}
