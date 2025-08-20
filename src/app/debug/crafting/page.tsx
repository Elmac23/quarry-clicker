"use client";

import Button from "@/components/Button";
import ItemTile from "@/components/ItemTile";
import Tooltip from "@/components/Tooltip";
import { ItemKey, ITEMS, ItemType } from "@/data/items";
import { RecipeKey, RECIPES } from "@/data/recipes";
import { getDeepRecipe } from "@/lib/getDeepRecipe";
import React, { useState } from "react";

function Page() {
  const categories: ItemType[] = [
    "consumable",
    "drill",
    "material",
    "pickaxe",
    "plantable",
    "potion",
    "smeltable",
    "upgrade",
  ];
  const [category, setCategory] = useState<ItemType>("pickaxe");

  const keys = (Object.keys(RECIPES) as RecipeKey[]).filter(
    (key) => ITEMS[key].type == category
  );

  return (
    <>
      {categories.map((c, i) => (
        <Button key={i} onClick={() => setCategory(c)}>
          {c}
        </Button>
      ))}
      <h3 className="text-4xl mb-4">{category}</h3>
      <ul className="flex flex-col gap-8">
        {keys.map((key) => {
          const recipeMap = getDeepRecipe(
            key,
            RECIPES[key as RecipeKey].quantity
          );
          return (
            <li className="flex spacing-10 flex-wrap" key={key}>
              <p className="pt-5 mr-2">{key}</p>
              <ItemTile
                itemKey={key}
                quantity={RECIPES[key as RecipeKey].quantity}
                className="size-16 mr-12 mb-4"
              />
              {getRecipe(recipeMap)}
            </li>
          );
        })}
      </ul>
    </>
  );
}

function getRecipe(m: Map<ItemKey, number>) {
  const result = [];
  for (const [item, quantity] of m.entries()) {
    result.push(
      <Tooltip content={ITEMS[item].name} key={Math.random()}>
        <ItemTile
          itemKey={item}
          quantity={Math.round(quantity)}
          className="size-16"
        />
      </Tooltip>
    );
  }

  return result;
}

export default Page;
