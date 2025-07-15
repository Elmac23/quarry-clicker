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
      className="flex flex-col sm:flex-row px-2 sm:px-4 pb-2 mb-2 gap-2 sm:gap-3 md:gap-4 min-h-20 sm:min-h-16 md:min-h-20 border-b-4 border-b-black/10 items-center"
    >
      <ul className="w-full sm:grow flex flex-wrap justify-center sm:justify-around gap-1 sm:gap-2 min-h-16 sm:min-h-12 md:min-h-20 items-center">
        {recipe.ingerdients.map(
          ({ item, quantity, isSatisfied, totalItemInInventory }, index) => {
            return (
              <li key={index} className="min-h-12 sm:min-h-14 md:min-h-16">
                <ItemTile
                  itemId={item}
                  quantity={quantity}
                  counter={totalItemInInventory}
                  className="min-h-14 md:min-h-18"
                  background={!isSatisfied ? "danger" : "standard"}
                />
              </li>
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
        <ItemTile
          quantity={recipe.result.quantity}
          itemId={recipe.result.item}
          className="min-h-14 md:min-h-18"
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
