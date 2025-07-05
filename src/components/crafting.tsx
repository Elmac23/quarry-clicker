import { useCrafting } from "@/hooks/useCrafting";
import React from "react";
import { Button } from "./ui/button";

function Crafting() {
  const recipes = useCrafting();
  return (
    <ul>
      {recipes.map((recipe, i) => {
        return (
          <li className="mb-2" key={i}>
            {recipe.ingerdients.map((ingredient, j) => (
              <span
                className={`${
                  ingredient.isSatisfied ? "text-green-400" : "text-red-500"
                } pr-5`}
                key={j}
              >
                {ingredient.item}: {ingredient.quantity} |
              </span>
            ))}

            <Button disabled={!recipe.canCraft} onClick={recipe.craft}>
              Craft {recipe.result.item} x {recipe.result.quantity}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

export default Crafting;
