import { tick, useBuffs } from "@/store/buffs";
import { useInterval } from "./useInterval";
import { useAppDispatch } from "./redux";
import { useEffect } from "react";

export function useBuffTick() {
  const dispatch = useAppDispatch();
  const { isEmpty } = useBuffs();

  const [startBuffsInterval, pauseBuffsInterval] = useInterval(() => {
    dispatch(tick());
  }, 1000);

  useEffect(() => {
    if (isEmpty) pauseBuffsInterval();
    else startBuffsInterval();
  }, [isEmpty, pauseBuffsInterval, startBuffsInterval]);
}
