import { useMines } from "@/store/mine";
import React from "react";

function MineDataDebug() {
  const { activeMine, health } = useMines();
  return (
    <h1 className="text-2xl">
      {activeMine} hp: {Math.round(health)}
    </h1>
  );
}

export default MineDataDebug;
