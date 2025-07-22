import React from "react";
import Sprite from "../Sprite";
import { useBuffs } from "@/store/buffs";

function BuffsDebug() {
  const { activeBuffs } = useBuffs();
  return (
    <ul className="flex flex-col gap-2">
      {activeBuffs.map((buff, index) => (
        <li
          className="pixelated jersey10 text-2xl text-primary-500 flex gap-4"
          key={index}
        >
          <Sprite className="w-8" src={buff.icon} alt={buff.name} /> {buff.name}
          : {buff.timeLeft}
        </li>
      ))}
    </ul>
  );
}

export default BuffsDebug;
