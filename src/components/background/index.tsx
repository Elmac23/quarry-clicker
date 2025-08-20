"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { computeChance } from "@/lib/computeChance";
import { BG_DATA } from "@/data/bg";
import Background from "./Background";
import { useAppSelector } from "@/hooks/redux";
import { useMounted } from "@/hooks/useMounted";
import { MineKey } from "@/data/mines";
import { cn } from "@/lib/cn";

type BgProps = {
  time: number;
};

type BackgroundContextType = {
  xAmount: number;
  yAmount: number;
  time: number;
  getBg: () => string;
};

const backgroundContext = React.createContext<BackgroundContextType>({
  xAmount: 0,
  yAmount: 0,
  time: 0,
  getBg: () => "",
});

export const useBackgroundContext = () => useContext(backgroundContext);

function BG({ time }: BgProps) {
  const [xAmount, setXAmount] = useState(0);
  const mine = useAppSelector((state) => state.mine.activeMine);
  const isMounted = useMounted();

  const stoneMines: MineKey[] = [
    "beginnersShaft",
    "crimsonShaft",
    "metalGalore",
  ];
  const graphiteMines: MineKey[] = ["shaftOfUnpaintment", "heavyMetalCave"];
  const paleStoneMines: MineKey[] = ["caveOfFortune", "paleShaft"];
  const deepgritMines: MineKey[] = ["deepgritMine"];
  const obsidianMines: MineKey[] = ["mysticave", "alternateDimension"];

  const generateRandomBg = useCallback(() => {
    const { entities, standard } = BG_DATA[mine];
    const fun = computeChance(entities, standard);
    return fun();
  }, [mine]);

  useEffect(() => {
    setXAmount(window.innerWidth > window.innerHeight ? 10 : 4);
  }, []);

  if (!isMounted) return null;

  const width = window.innerWidth;
  const height = window.innerHeight;
  const elementSize = width / xAmount;
  const yAmount = Math.ceil(height / elementSize);

  return createPortal(
    <div
      className={cn(
        "w-full h-screen overflow-hidden select-none absolute inset-0 z-[-1]",
        {
          "bg-[#6D6D6D]": stoneMines.includes(mine),
          "bg-[#211e4e]": obsidianMines.includes(mine),
          "bg-[#371f24]": deepgritMines.includes(mine),
          "bg-[#8f8f8f]": paleStoneMines.includes(mine),
          "bg-[#5f5f5f]": graphiteMines.includes(mine),
        }
      )}
    >
      <backgroundContext.Provider
        value={{
          getBg: generateRandomBg,
          time,
          xAmount,
          yAmount,
        }}
      >
        <Background />
      </backgroundContext.Provider>
    </div>,
    document.body
  );
}

export default React.memo(BG);
