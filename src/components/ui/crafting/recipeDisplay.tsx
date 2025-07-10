import ItemTile from "@/components/ItemTile";
import Sprite from "@/components/Sprite";
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
      className="flex px-4 pb-2 mb-2 gap-2 min-h-20 border-b-2 border-green-950/80 items-center"
    >
      <ul className="grow flex flex-wrap justify-around min-h-20 items-center">
        {recipe.ingerdients.map(
          ({ item, quantity, isSatisfied, totalItemInInventory }, index) => {
            return (
              <li key={index} className="min-h-16">
                <ItemTile
                  itemId={item}
                  quantity={quantity}
                  counter={totalItemInInventory}
                  className="min-h-18"
                  background={!isSatisfied ? "danger" : "standard"}
                />
              </li>
            );
          }
        )}
      </ul>
      <div className="flex h-full">
        <Sprite
          className="w-16 mr-2"
          alt="arrow"
          src="/sprites/ui/ArrowYes.png"
        />
        <ItemTile
          quantity={recipe.result.quantity}
          itemId={recipe.result.item}
          className="min-h-18"
          onClick={() => {
            if (recipe.canCraft) recipe.craft();
            else return;
          }}
          background={!recipe.canCraft ? "danger" : "standard"}
        />
      </div>
    </motion.div>
  );
}

export default RecipeDisplay;
