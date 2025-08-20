"use client";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";
import { useBuffTick } from "@/hooks/useBuffTick";
import { useCps } from "@/hooks/useCps";
import { useFarmTick } from "@/hooks/useFarmTick";
import { useSmeltTick } from "@/hooks/useSmeltTick";
import { updateStat, useStatistics } from "@/store/stats";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

function GameWrapper({ children }: React.PropsWithChildren) {
  useBackgroundMusic();
  useSmeltTick();
  useBuffTick();
  useFarmTick();
  const cps = useCps();
  const navigator = useRouter();

  const { topCps } = useStatistics();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      updateStat({
        name: "topCps",
        value: Math.max(topCps, cps),
      })
    );
    if (cps > 20) {
      navigator.push("/anticheat");
    }
  }, [cps]);

  return <>{children}</>;
}

export default GameWrapper;
