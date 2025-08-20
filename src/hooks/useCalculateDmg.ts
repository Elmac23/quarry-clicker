import { ITEMS } from "@/data/items";
import { randomRange } from "@/lib/randomRange";
import { useCheckBuff } from "@/store/buffs";
import { useInventory } from "@/store/inventory";

export function useCalculateDamage() {
  const { selectedTool, criticalChance: baseCriticalChance } = useInventory();
  const dmgBuffs = useCheckBuff("damage");
  const criticalChanceBuff = useCheckBuff("criticalChance");
  const damage = ITEMS[selectedTool].damage;
  const dmgMultPercentage = dmgBuffs ? dmgBuffs.value : 0;
  const dmgMult = dmgMultPercentage / 100 + 1;

  let toolsCritical = 0;

  if (ITEMS[selectedTool].type === "pickaxe")
    toolsCritical = ITEMS[selectedTool].criticalChance;

  const critChance = toolsCritical + baseCriticalChance;

  const buffCriticalChance = criticalChanceBuff ? criticalChanceBuff.value : 0;

  const isCritical = randomRange(0, 100) < critChance + buffCriticalChance;

  return damage * dmgMult * (isCritical ? 2 : 1);
}
