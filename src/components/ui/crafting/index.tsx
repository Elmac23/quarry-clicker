"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/button";
import Modal, { ModalProps } from "@/components/modal";
import { AnimatePresence, motion } from "motion/react";
import { RecipeWithAnnotations, useCrafting } from "@/hooks/useCrafting";
import RecipeDisplay from "@/components/ui/crafting/RecipeDisplay";
import { useAppSelector } from "@/hooks/redux";
import ItemTile from "@/components/itemTile";
import { ITEMS } from "@/data/items";

type CraftingModalProps = Pick<ModalProps, "isOpen" | "onClose">;

function Crafting({ isOpen, onClose }: CraftingModalProps) {
  const [selectedItem, setSelectedItem] =
    useState<null | RecipeWithAnnotations>(null);

  const [recipeIndex, setRecipeIndex] = useState(-1);

  const { items } = useAppSelector((state) => state.inventory);

  const recipes = useCrafting();
  useEffect(() => {
    if (recipeIndex > -1) {
      setSelectedItem(recipes[recipeIndex]);
    }
  }, [items, recipeIndex, recipes]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className="bg-green-950/70 p-8 pixelated border-16 rounded-4xl"
        style={{
          borderImage: "url('/sprites/ui/frame.png') 7",
          borderImageRepeat: "round",
        }}
      >
        <h2 className="jersey10 text-3xl text-primary-500 mb-2">
          Crafting {selectedItem && `| ${ITEMS[selectedItem.result.item].name}`}
        </h2>
        <AnimatePresence mode="wait">
          {selectedItem && (
            <RecipeDisplay key={recipeIndex} recipe={selectedItem} />
          )}
        </AnimatePresence>
        <ul className="border-t-2 border-solid border-t-black/20 grid md:grid-cols-8 gap-2 grid-cols-4 p-2 mb-4 max-h-96 overflow-x-hidden overflow-y-scroll custom-scrollbar pr-2">
          {recipes.map((recipe, index) => (
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
              key={index}
              onClick={() => {
                setSelectedItem(recipe);
                setRecipeIndex(index);
              }}
            >
              <ItemTile
                background={
                  recipe.result.item === selectedItem?.result.item
                    ? "selected"
                    : recipe.canCraft
                    ? "standard"
                    : "dark"
                }
                quantity={recipe.result.quantity}
                itemId={recipe.result.item}
              />
            </motion.li>
          ))}
        </ul>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
}

export default Crafting;
