import { Recipe, RECIPES } from "@/data/recipes";
import { useAppDispatch } from "./redux";
import { ItemKey, ItemPickaxeKey, ITEMS, ItemUpgradeKey } from "@/data/items";
import {
  addItem,
  removeItem,
  activeItem,
  useInventory,
} from "@/store/inventory";
import { useMemo } from "react";
import { incrementStat } from "@/store/stats";
import { useUpgrades } from "@/store/upgrades";

export function useCrafting() {
  const { items, craftedPickaxes, craftedUpgrades, maxStackSize } =
    useInventory();
  const { ownedUpgrades } = useUpgrades();
  const dispatch = useAppDispatch();

  const isAlreadyCrafted = (itemKey: ItemKey): boolean => {
    const item = ITEMS[itemKey];
    switch (item.type) {
      case "pickaxe":
        return craftedPickaxes.includes(itemKey as ItemPickaxeKey);
      case "upgrade":
        return (
          ownedUpgrades.includes(itemKey as ItemUpgradeKey) ||
          craftedUpgrades.includes(itemKey as ItemUpgradeKey)
        );
      default:
        return false;
    }
  };

  const hasRequiredUpgrade = (recipe: Recipe): boolean => {
    return (
      !recipe.requiredUpgrade || ownedUpgrades.includes(recipe.requiredUpgrade)
    );
  };

  const recipesWithAnnotations = useMemo(() => {
    const res = [];
    for (const [k, v] of Object.entries(RECIPES)) {
      const result = k as ItemKey;
      const { quantity, recipe } = v as Recipe;
      if (isAlreadyCrafted(result) || !hasRequiredUpgrade(v)) {
        continue;
      }

      let canCraft = true;

      const freeIndex = items.findIndex((item) => !item);

      const resultInInventory = items.find(
        (item) =>
          item?.id === result && maxStackSize - item.quantity <= quantity
      );

      if (freeIndex === -1 && !resultInInventory) canCraft = false;

      const ingredients = recipe.map((predicate) => {
        const totalItemInInventory = items.reduce((prev, curr) => {
          if (curr?.id === predicate.item) return prev + curr.quantity;
          else return prev;
        }, 0);
        const isSatisfied = totalItemInInventory >= predicate.quantity;
        canCraft = canCraft && isSatisfied;
        return {
          ...predicate,
          isSatisfied,
          totalItemInInventory,
        };
      });

      res.push({
        canCraft,
        craft: () => {
          ingredients.forEach(({ item, quantity }) => {
            dispatch(removeItem({ item, amount: quantity }));
          });
          dispatch(addItem({ quantity, id: result }));
          dispatch(incrementStat("totalCrafted"));
          if (ITEMS[result].type === "pickaxe")
            dispatch(activeItem(result as ItemPickaxeKey));
        },
        ingredients: ingredients,
        result: { quantity, item: result },
      });
    }
    return res;
  }, [items, dispatch, ownedUpgrades, maxStackSize]);

  return recipesWithAnnotations;
}

export type RecipesWithAnnotations = ReturnType<typeof useCrafting>;
export type RecipeWithAnnotations = RecipesWithAnnotations[number];
export type IngredientsWithAnnotation = RecipeWithAnnotations["ingredients"];
