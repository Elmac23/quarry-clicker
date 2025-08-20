"use client";

import Sprite from "@/components/Sprite";
import { MINES } from "@/data/mines";
import { useAppDispatch } from "@/hooks/redux";
import { useAudio } from "@/hooks/useAudio";
import { useCalculateDamage } from "@/hooks/useCalculateDmg";
import { computeChance } from "@/lib/computeChance";
import { useInterval } from "@/hooks/useInterval";
import { useKeyButton } from "@/hooks/useKeyButton";
import { chancesFromMine } from "@/lib/chancesFromMine";
import { getSpriteId } from "@/lib/getSpriteId";
import { randomRange } from "@/lib/randomRange";
import { useCheckBuff } from "@/store/buffs";
import { addItem, useInventory } from "@/store/inventory";
import { dealDamage, resetHealth, useMines } from "@/store/mine";
import { motion } from "motion/react";
import React, { useCallback, useEffect, useState } from "react";
import { useSettings } from "@/store/settings";
import { ITEMS } from "@/data/items";

function Ore() {
  const dispatch = useAppDispatch();
  const [spriteId, setSpriteId] = useState(0);
  const { isRotateOre } = useSettings();
  const { activeMine: mine, health } = useMines();
  const { entities, standard } = chancesFromMine(MINES[mine]);
  const getDrop = computeChance(entities, standard, 1000);
  const fortuneBuff = useCheckBuff("doubleDropChance");
  const digAudio = useAudio("pickaxe-blow-333695.mp3", 0.5);
  const diggedAudio = useAudio("digged2.wav", 1);
  const damage = useCalculateDamage();
  const { selectedTool } = useInventory();
  const item = ITEMS[selectedTool];

  useEffect(() => {
    setSpriteId(0);
  }, [mine]);

  const handleClick = useCallback(() => {
    const fortuneValue = fortuneBuff?.value ?? 0;
    const lootAmount = randomRange(0, 100) < fortuneValue ? 2 : 1;
    const newHealth = health - damage;
    const totalHealth = MINES[mine].health;

    const healthPercentage = Math.max(0, newHealth) / totalHealth;
    const newSpriteId = getSpriteId(healthPercentage * 100);

    setSpriteId(Math.min(4, Math.max(0, newSpriteId)));

    dispatch(dealDamage(damage));

    digAudio.play();

    if (newHealth <= 0) {
      setSpriteId(0);
      diggedAudio.play();
      const item = getDrop();
      dispatch(resetHealth());
      dispatch(
        addItem({
          quantity: lootAmount,
          id: item,
        })
      );
    } else {
    }
  }, [
    damage,
    digAudio,
    diggedAudio,
    dispatch,
    fortuneBuff?.value,
    getDrop,
    health,
    mine,
  ]);

  useKeyButton(" ", handleClick);

  const [start, stop] = useInterval(
    () => {
      handleClick();
    },
    200,
    [handleClick],
    false
  );

  return (
    <motion.div
      className="aspect-square size-90 cursor-pointer fixed left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] "
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      animate={
        isRotateOre
          ? {
              rotateZ: 360,
              transition: {
                repeat: Infinity,
                ease: "linear",
                duration: 60,
              },
            }
          : {}
      }
    >
      <Sprite
        className="pixelated bg-center bg-cover bg-no-repeat"
        onClick={item.type === "pickaxe" ? handleClick : undefined}
        src={`sprites/ui/${MINES[mine].oreSprites[spriteId]}`}
        alt={mine}
        onMouseDown={item.type === "drill" ? start : undefined}
        onMouseUp={item.type === "drill" ? stop : undefined}
        onMouseLeave={item.type === "drill" ? stop : undefined}
      />
    </motion.div>
  );
}

export default Ore;
