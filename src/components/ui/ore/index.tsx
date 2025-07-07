import { ITEMS } from "@/data/items";
import { MINES } from "@/data/mines";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useComputeChance } from "@/hooks/useComputeChance";
import { chancesFromMine } from "@/lib/chancesFromMine";
import { addItem } from "@/store/inventory";
import { dealDamage, resetHealth } from "@/store/mine";
import React from "react";

function Ore() {
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
    <button
      className="h-[100px] w-[100px] cursor-pointer bg-amber-300 fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]"
      onClick={() => handleClick()}
    >
      Get stone!
    </button>
  );
}

export default Ore;
