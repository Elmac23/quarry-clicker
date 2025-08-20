import { ItemKey } from "@/data/items";
import { RecipeKey, RECIPES } from "@/data/recipes";
import { mergeIntMaps } from "./mergeIntMaps";

export function getDeepRecipe(
  itemKey: ItemKey,
  neededQuantity: number
): Map<ItemKey, number> {
  const recipeKeys = Object.keys(RECIPES);

  if (!recipeKeys.includes(itemKey)) {
    return new Map([[itemKey, neededQuantity]]);
  }

  const recipe = RECIPES[itemKey as RecipeKey];
  const multiplier = neededQuantity / recipe.quantity;

  const neededBaseItems: Map<ItemKey, number> = recipe.recipe.reduce(
    (acc, { item, quantity }) =>
      mergeIntMaps(acc, getDeepRecipe(item, quantity)),
    new Map()
  );

  const result = new Map<ItemKey, number>();

  neededBaseItems.forEach((value, key) => {
    result.set(key, value * multiplier);
  });

  return result;
}
