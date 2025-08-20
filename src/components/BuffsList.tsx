"use client";

import React from "react";
import Sprite from "./Sprite";
import { useBuffs } from "@/store/buffs";
import Text from "./Text";

function BuffsList() {
  const { activeBuffs } = useBuffs();
  return (
    <div className="grid-center mt-4">
      <ul className="flex gap-2">
        {activeBuffs.map((buff, index) => (
          <li key={index} className="grid-center align-baseline">
            <Sprite className="size-6" src={buff.icon} alt={buff.name} />
            <Text gutter={false}>
              {buff.name}: {buff.timeLeft}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuffsList;
