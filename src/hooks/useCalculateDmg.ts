import { ITEMS } from "@/data/items";
import { randomRange } from "@/lib/randomRange";
import { useCheckBuff } from "@/store/buffs";
import { useInventory } from "@/store/inventory";

export function useCalculateDamage() {
  const { selectedPickaxe, criticalChance: baseCriticalChance } =
    useInventory();
  const dmgBuffs = useCheckBuff("damage");
  const criticalChanceBuff = useCheckBuff("criticalChance");
  const damage = ITEMS[selectedPickaxe].damage;
  const dmgMultPercentage = dmgBuffs ? dmgBuffs.value : 0;
  const dmgMult = dmgMultPercentage / 100 + 1;

  const critChance = ITEMS[selectedPickaxe].criticalChance + baseCriticalChance;

  const buffCriticalChance = criticalChanceBuff ? criticalChanceBuff.value : 0;

  console.log(critChance + buffCriticalChance);

  const isCritical = randomRange(0, 100) < critChance + buffCriticalChance;

  return damage * dmgMult * (isCritical ? 2 : 1);
}
