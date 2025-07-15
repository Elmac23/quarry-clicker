"use client";

import React, { useCallback, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { computeChance } from "@/hooks/useComputeChance";
import { BG_DATA } from "@/data/bg";
import BackGround from "./Background";
import { useAppSelector } from "@/hooks/redux";
import { useMounted } from "@/hooks/useMounted";
import { useFocus } from "@/hooks/useFocus";

type BgProps = {
  disabled: boolean;
  time: number;
};

type BackgroundContextType = {
  xAmount: number;
  yAmount: number;
  time: number;
  disabled: boolean;
  getBg: () => string;
};

const backgroundContext = React.createContext<BackgroundContextType>({
  xAmount: 0,
  yAmount: 0,
  time: 0,
  disabled: true,
  getBg: () => "",
});

export const useBackgroundContext = () => useContext(backgroundContext);

function BG({ disabled, time }: BgProps) {
  const [xAmount, setXAmount] = useState(0);
  const mine = useAppSelector((state) => state.mine.mine);
  const isMounted = useMounted();
  const isFocused = useFocus();

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
    <div className="w-full h-screen overflow-hidden bg-[#6D6D6D] select-none absolute inset-0 z-[-1]">
      <backgroundContext.Provider
        value={{
          disabled: disabled || !isFocused,
          getBg: generateRandomBg,
          time,
          xAmount,
          yAmount,
        }}
      >
        <BackGround />
      </backgroundContext.Provider>
    </div>,
    document.body
  );
}

export default React.memo(BG);
