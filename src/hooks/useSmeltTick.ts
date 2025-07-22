import { useCheckBuff } from "@/store/buffs";
import { tick, useSmelt } from "@/store/smelt";
import { useInterval } from "./useInterval";
import { useAppDispatch } from "./redux";
import { useEffect } from "react";

export function useSmeltTick() {
  const smeltingBuff = useCheckBuff("smeltingSpeed");
  const dispatch = useAppDispatch();

  const { isEmpty } = useSmelt();
  const [startSmeltingInterval, pauseSmeltingInterval] = useInterval(
    () => {
      dispatch(tick({ multiplier: smeltingBuff?.value }));
    },
    100,
    [smeltingBuff]
  );

  useEffect(() => {
    if (isEmpty) pauseSmeltingInterval();
    else startSmeltingInterval();
  }, [isEmpty, pauseSmeltingInterval, startSmeltingInterval]);
}
