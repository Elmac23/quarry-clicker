import { useInterval } from "./useInterval";
import { useAppDispatch } from "./redux";
import { useEffect } from "react";
import { clearPosition, tick, useFarming } from "@/store/farm";
import { useUpgrades } from "@/store/upgrades";
import { addItem, useInventory } from "@/store/inventory";
import { canAddToInventory } from "@/lib/canAddToInventory";

export function useFarmTick() {
  const dispatch = useAppDispatch();
  const { ownedUpgrades } = useUpgrades();

  const isAuto = ownedUpgrades.includes("palladiumWateringCan");
  const { isEmpty, plantPositions } = useFarming();
  const inventoryState = useInventory();
  const [startFarmInterval, pauseFarmInterval] = useInterval(
    () => {
      dispatch(tick({ multiplier: 1 }));

      if (!isAuto) return;
      plantPositions.forEach((position, index) => {
        if (position && position.isDone) {
          const canAdd = canAddToInventory(
            {
              quantity: position.quantity,
              id: position.result,
            },
            inventoryState
          );

          if (canAdd) {
            dispatch(clearPosition(index));
            dispatch(
              addItem({
                id: position.result,
                quantity: position.quantity,
              })
            );
          }
        }
      });
    },
    100,
    [plantPositions, isAuto, inventoryState]
  );

  useEffect(() => {
    if (isEmpty) pauseFarmInterval();
    else startFarmInterval();
  }, [isEmpty, pauseFarmInterval, startFarmInterval]);
}
