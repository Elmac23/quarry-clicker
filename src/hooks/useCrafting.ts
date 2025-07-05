import { Recipe, RECIPES } from "@/data/recipes";
import { useAppDispatch, useAppSelector } from "./redux";
import { ItemKey } from "@/data/items";
import { addItem, removeItem } from "@/store/inventory";

export function useCrafting() {
  const { items } = useAppSelector((state) => state.inventory);
  const dispatch = useAppDispatch();

  const recipesWithAnnotations = [];

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
      };
    });

    recipesWithAnnotations.push({
      canCraft,
      craft: () => {
        ingerdients.forEach(({ item, quantity }) => {
          dispatch(removeItem({ item, amount: quantity }));
        });
        dispatch(addItem({ amount: quantity, item: result }));
      },
      ingerdients,
      result: { quantity, item: result },
    });
  }

  return recipesWithAnnotations;
}
