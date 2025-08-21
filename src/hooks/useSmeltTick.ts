import { useCheckBuff } from "@/store/buffs";
import { clearPosition, tick, useSmelt } from "@/store/smelt";
import { useInterval } from "./useInterval";
import { useAppDispatch } from "./redux";
import { useEffect, useMemo } from "react";
import { useUpgrades } from "@/store/upgrades";
import { canAddToInventory } from "@/lib/canAddToInventory";
import { addItem, useInventory } from "@/store/inventory";
import { ITEMS } from "@/data/items";

export function useSmeltTick() {
  const smeltingBuff = useCheckBuff("smeltingSpeed");
  const { ownedUpgrades } = useUpgrades();
  const isAuto = ownedUpgrades.includes("silverTray");
  const dispatch = useAppDispatch();
  const inventoryState = useInventory();
  const { smeltPositions } = useSmelt();

  const multiplier = useMemo(() => {
    const upgradeMultiplier = ownedUpgrades.reduce((acc, curr) => {
      if (ITEMS[curr].effect === "furnaceSpeed") return acc * 1.1;
      return acc;
    }, 0);

    return upgradeMultiplier * (smeltingBuff?.value ?? 1);
  }, [ownedUpgrades, smeltingBuff]);

  const { isEmpty } = useSmelt();
  const [startSmeltingInterval, pauseSmeltingInterval] = useInterval(
    () => {
      dispatch(tick({ multiplier }));
      if (!isAuto) return;
      smeltPositions.forEach((position, index) => {
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
    [smeltingBuff, isAuto, inventoryState, smeltPositions]
  );

  useEffect(() => {
    if (isEmpty) pauseSmeltingInterval();
    else startSmeltingInterval();
  }, [isEmpty, pauseSmeltingInterval, startSmeltingInterval]);
}
