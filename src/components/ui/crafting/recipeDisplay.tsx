import Sprite from "@/components/sprite";
import { ITEMS } from "@/data/items";
import { RecipeWithAnnotations } from "@/hooks/useCrafting";
import { cn } from "@/lib/utils";
import React from "react";

type RecipeDisplayProps = {
  recipe: RecipeWithAnnotations;
};

function RecipeDisplay({ recipe }: RecipeDisplayProps) {
  return (
    <>
      <h2 className="pixelated-sans text-3xl text-primary-500 mb-2">
        Crafting {recipe && `| ${ITEMS[recipe.result.item].name}`}
      </h2>
      <div className="flex px-4 pb-2 mb-2 border-b-2 border-dashed gap-2 items-center border-b-primary-500">
        <ul className="grow flex justify-around">
          {recipe.ingerdients.map(
            ({ item, quantity, isSatisfied, totalItemInInventory }, index) => {
              return (
                <li
                  key={index}
                  className={cn(
                    "bg-cover aspect-square pixelated bg-[url(/sprites/ui/overlay.png)] h-full grid-center cursor-pointer relative transition",
                    !isSatisfied && "bg-[url(/sprites/ui/overlay_danger.png)]"
                  )}
                >
                  <Sprite
                    className="size-20"
                    alt={ITEMS[item].name}
                    src={ITEMS[item].icon}
                  />
                  <p className="absolute right-3 bottom-1 text-lg pixelated-sans text-white text-shadow-lg">
                    {`${totalItemInInventory ?? 0}/${quantity}`}
                  </p>
                </li>
              );
            }
          )}
          <li className="grid-center">
            <Sprite
              className="w-16"
              alt="arrow"
              src="/sprites/ui/ArrowYes.png"
            />
          </li>
        </ul>
        <div
          className={cn(
            "bg-cover aspect-square pixelated bg-[url(/sprites/ui/overlay.png)] h-full grid-center cursor-pointer relative transition",
            !recipe.canCraft && "bg-[url(/sprites/ui/overlay_danger.png)]"
          )}
        >
          <Sprite
            onClick={() => {
              if (recipe.canCraft) recipe.craft();
              else return;
            }}
            className="size-20"
            alt={ITEMS[recipe.result.item].name}
            src={ITEMS[recipe.result.item].icon}
          />
          <p className="absolute right-3 bottom-1 text-lg pixelated-sans text-white text-shadow-lg">
            {recipe && recipe.result.quantity > 1 && recipe.result.quantity}
          </p>
        </div>
      </div>
    </>
  );
}

export default RecipeDisplay;
