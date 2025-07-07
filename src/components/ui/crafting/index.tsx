"use client";

import { ITEMS } from "@/data/items";

import React, { useEffect, useState } from "react";
import Button from "@/components/button";
import Sprite from "@/components/sprite";
import Modal, { ModalProps } from "@/components/modal";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { RecipeWithAnnotations, useCrafting } from "@/hooks/useCrafting";
import RecipeDisplay from "./recipeDisplay";
import { useAppSelector } from "@/hooks/redux";

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
  }, [items]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className="bg-secondary-800/90 p-8 pixelated border-16 rounded-4xl"
        style={{
          borderImage: "url('/sprites/ui/frame.png') 5",
        }}
      >
        {selectedItem && <RecipeDisplay recipe={selectedItem} />}
        <ul className="grid md:grid-cols-8 gap-2 grid-cols-4 p-2 mb-4 max-h-96 overflow-x-hidden overflow-y-scroll custom-scrollbar pr-2">
          {recipes.map((recipe, index) => (
            <motion.li
              whileHover={{
                scale: 1.05,
              }}
              className="size-20"
              key={index}
              onClick={() => {
                setSelectedItem(recipe);
                setRecipeIndex(index);
              }}
            >
              <div
                className={cn(
                  "bg-cover aspect-square pixelated bg-[url(/sprites/ui/overlay.png)] h-full grid-center cursor-pointer relative transition",
                  !recipe.canCraft &&
                    "bg-[url(/sprites/ui/overlay_danger.png)]",
                  recipe.result.item === selectedItem?.result.item &&
                    "bg-[url(/sprites/ui/overlay_selected.png)]"
                )}
              >
                <Sprite
                  className="size-18"
                  alt={ITEMS[recipe.result.item].name}
                  src={ITEMS[recipe.result.item].icon}
                />
                <p className="absolute right-3 bottom-1 text-lg pixelated-sans text-white text-shadow-lg">
                  {recipe.result.quantity > 1 && recipe.result.quantity}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
}

export default Crafting;
