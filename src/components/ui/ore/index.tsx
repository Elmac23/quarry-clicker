import { ITEMS } from "@/data/items";
import { MINES } from "@/data/mines";
import { useAppDispatch } from "@/hooks/redux";
import { computeChance } from "@/hooks/useComputeChance";
import { chancesFromMine } from "@/lib/chancesFromMine";
import { randomRange } from "@/lib/randomRange";
import { useBuffs } from "@/store/buffs";
import { addItem, useInventory } from "@/store/inventory";
import { dealDamage, resetHealth, useMine } from "@/store/mine";
import React from "react";

function Ore() {
  const dispatch = useAppDispatch();
  const { mine, health } = useMine();
  const { selectedPickaxe } = useInventory();
  const { entities, standard } = chancesFromMine(MINES[mine]);
  const getDrop = computeChance(entities, standard, 1000);
  const { activeBuffs } = useBuffs();

  const handleClick = () => {
    const damage = ITEMS[selectedPickaxe].damage;
    const dmgBuffs = activeBuffs.find((pred) => pred.type === "damage");
    const dmgMultPercentage = dmgBuffs ? dmgBuffs.value : 0;
    const dmgMult = dmgMultPercentage / 100 + 1;

    const critChance = ITEMS[selectedPickaxe].criticalChance;

    const criticalChanceBuff = activeBuffs.find(
      (pred) => pred.type === "criticalChance"
    );

    const criticalAdditionalChance = criticalChanceBuff
      ? criticalChanceBuff.value
      : 0;

    const isCritical =
      randomRange(0, 100) < critChance + criticalAdditionalChance;

    const finalDmg = damage * dmgMult * (isCritical ? 2 : 1);

    const newHealth = health - finalDmg;

    console.log(finalDmg);

    dispatch(dealDamage(finalDmg));

    if (newHealth <= 0) {
      const item = getDrop();
      dispatch(resetHealth());
      dispatch(
        addItem({
          amount: 1,
          item,
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
