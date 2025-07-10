import ItemTile from "@/components/itemTile";
import Sprite from "@/components/sprite";
import { RecipeWithAnnotations } from "@/hooks/useCrafting";
import { motion } from "motion/react";
import React from "react";

type RecipeDisplayProps = {
  recipe: RecipeWithAnnotations;
};

function RecipeDisplay({ recipe }: RecipeDisplayProps) {
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
      className="flex px-4 pb-2 mb-2 gap-2 h-22 items-center"
    >
      <ul className="grow flex justify-around h-full items-center">
        {recipe.ingerdients.map(
          ({ item, quantity, isSatisfied, totalItemInInventory }, index) => {
            return (
              <li key={index}>
                <ItemTile
                  itemId={item}
                  quantity={quantity}
                  counter={totalItemInInventory}
                  background={!isSatisfied ? "danger" : "standard"}
                  className="h-full"
                />
              </li>
            );
          }
        )}
        <li className="grid-center">
          <Sprite className="w-16" alt="arrow" src="/sprites/ui/ArrowYes.png" />
        </li>
      </ul>
      <ItemTile
        quantity={recipe.result.quantity}
        itemId={recipe.result.item}
        onClick={() => {
          if (recipe.canCraft) recipe.craft();
          else return;
        }}
        background={!recipe.canCraft ? "danger" : "standard"}
      />
    </motion.div>
  );
}

export default RecipeDisplay;
