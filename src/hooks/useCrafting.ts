import { Recipe, RECIPES } from "@/data/recipes";
import { useAppDispatch, useAppSelector } from "./redux";
import { ItemKey, ITEMS } from "@/data/items";
import { addItem, removeItem } from "@/store/inventory";
import { useMemo } from "react";
import { addNotification } from "@/store/notification";
import { incrementStat } from "@/store/stats";

export function useCrafting() {
  const { items } = useAppSelector((state) => state.inventory);
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
        ITEMS[result].type === "tool" &&
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
          dispatch(
            addNotification({
              amount: quantity,
              itemId: result,
            })
          );
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
