import { Recipe, RECIPES } from "@/data/recipes";
import { useAppDispatch } from "./redux";
import { ItemKey, ItemPickaxeKey, ITEMS } from "@/data/items";
import {
  addItem,
  removeItem,
  activeItem,
  useInventory,
} from "@/store/inventory";
import { useMemo } from "react";
import { incrementStat } from "@/store/stats";

export function useCrafting() {
  const { items } = useInventory();
  const dispatch = useAppDispatch();

  const recipesWithAnnotations = useMemo(() => {
    const res = [];
    for (const [k, v] of Object.entries(RECIPES)) {
      const result = k as ItemKey;
      const { quantity, recipe } = v as Recipe;

      let canCraft = true;

      const ingerdients = recipe.map((predicate) => {
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

      if (
        ITEMS[result].type === "pickaxe" &&
        items.some((item) => item?.id === result)
      )
        canCraft = false;

      res.push({
        canCraft,
        craft: () => {
          ingerdients.forEach(({ item, quantity }) => {
            dispatch(removeItem({ item, amount: quantity }));
          });
          dispatch(addItem({ amount: quantity, item: result }));
          dispatch(incrementStat("totalCrafted"));
          if (ITEMS[result].type === "pickaxe")
            dispatch(activeItem(result as ItemPickaxeKey));
        },
        ingerdients,
        result: { quantity, item: result },
      });
    }
    return res;
  }, [items, dispatch]);

  return recipesWithAnnotations;
}

export type RecipesWithAnnotations = ReturnType<typeof useCrafting>;
export type RecipeWithAnnotations = RecipesWithAnnotations[number];
export type IngredientsWithAnnotation = RecipeWithAnnotations["ingerdients"];
