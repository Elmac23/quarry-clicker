import ItemTile from "@/components/ItemTile";
import Sprite from "@/components/Sprite";
import Tooltip from "@/components/Tooltip";
import { ItemKey, ITEMS } from "@/data/items";
import { useAudio } from "@/hooks/useAudio";
import { RecipeWithAnnotations, useCrafting } from "@/hooks/useCrafting";
import { Stack } from "@/lib/stack";
import { motion } from "motion/react";
import React from "react";

type RecipeDisplayProps = {
  currentRecipeIndex: number;
  recipe: RecipeWithAnnotations;
  setRecipeIndex: (i: number) => void;
  itemRefMap: Map<ItemKey, HTMLElement>;
  recipeStack: Stack<number>;
};

function RecipeDisplay({
  recipe,
  setRecipeIndex,
  currentRecipeIndex,
  recipeStack,
  itemRefMap,
}: RecipeDisplayProps) {
  const recipes = useCrafting();
  const clickSound = useAudio("577025__nezuai__ui-sound-2.wav", 0.5);
  return (
    <motion.div
      key={recipe.result.item}
      layout
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{
        opacity: 0,
        x: -100,
      }}
      transition={{
        type: "tween",
        duration: 0.2,
        ease: "easeInOut",
      }}
      className="flex flex-col relative sm:flex-row px-2 sm:px-4 pb-2 mb-2 gap-2 sm:gap-3 md:gap-4 min-h-20 sm:min-h-16 md:min-h-20 border-b-4 border-b-black/10 items-center"
    >
      {!recipeStack.isEmpty() && (
        <Sprite
          alt="left arrow"
          src="/sprites/ui/ArrowPrev.png"
          className="absolute size-20 left-[-32px] cursor-pointer"
          onClick={() => {
            clickSound.play();
            const lastRecipe = recipeStack.peek();
            recipeStack.pop();
            if (lastRecipe || lastRecipe === 0) {
              itemRefMap.get(recipes[lastRecipe].result.item)?.scrollIntoView({
                behavior: "smooth",
              });
              setRecipeIndex(lastRecipe);
            }
          }}
        />
      )}
      <ul className="w-full sm:grow flex flex-wrap justify-center sm:justify-around gap-1 sm:gap-2 min-h-16 sm:min-h-12 md:min-h-20 items-center">
        {recipe.ingredients.map(
          ({ item, quantity, isSatisfied, totalItemInInventory }, index) => {
            const recipeIndex = recipes.findIndex(
              (recipe) => recipe.result.item === item
            );
            return (
              <Tooltip key={index} content={ITEMS[item].name}>
                <li className="min-h-12 sm:min-h-14 md:min-h-16">
                  <ItemTile
                    itemKey={item}
                    quantity={quantity}
                    counter={totalItemInInventory}
                    onClick={() => {
                      if (recipeIndex >= 0) {
                        clickSound.play();
                        recipeStack.push(currentRecipeIndex);
                        setRecipeIndex(recipeIndex);
                        itemRefMap.get(item)?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }
                    }}
                    className="min-h-14 md:min-h-18"
                    background={!isSatisfied ? "danger" : "standard"}
                  />
                </li>
              </Tooltip>
            );
          }
        )}
      </ul>
      <div className="flex items-center justify-center sm:h-full gap-2">
        <Sprite
          className="sm:block hidden h-16"
          alt="arrow"
          src="/sprites/ui/ArrowYes.png"
        />
        <p className="sm:hidden jersey10 text-primary-500 text-2xl">Result: </p>
        <div className="relative">
          <ItemTile
            quantity={recipe.result.quantity}
            itemKey={recipe.result.item}
            className="min-h-14 md:min-h-18"
            onClick={() => {
              if (recipe.canCraft) {
                clickSound.play();
                recipe.craft();
              } else return;
            }}
            background={!recipe.canCraft ? "danger" : "standard"}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default RecipeDisplay;
