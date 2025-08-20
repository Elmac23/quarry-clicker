import ItemTile from "@/components/ItemTile";
import { ItemKey } from "@/data/items";
import { useAudio } from "@/hooks/useAudio";
import { RecipeWithAnnotations } from "@/hooks/useCrafting";
import { Stack } from "@/lib/stack";
import { motion } from "motion/react";
import React, { useEffect, useRef } from "react";

type CraftingItemProps = {
  index: number;
  recipe: RecipeWithAnnotations | null;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<RecipeWithAnnotations | null>
  >;
  selectedItem: RecipeWithAnnotations | null;
  setRecipeIndex: (i: number) => void;
  itemRefMap: Map<ItemKey, HTMLElement>;
  recipeStack: Stack<number>;
};

function CraftingItem({
  index,
  itemRefMap,
  setSelectedItem,
  setRecipeIndex,
  selectedItem,
  recipe,
  recipeStack,
}: CraftingItemProps) {
  const elementRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!recipe || !elementRef.current) return;
    itemRefMap.set(recipe.result.item, elementRef.current);
  }, [recipe, itemRefMap]);

  const clickSound = useAudio("577025__nezuai__ui-sound-2.wav", 0.5);
  return (
    <motion.li
      ref={elementRef}
      whileHover={{
        scale: 1.05,
      }}
      key={index}
      onClick={() => {
        clickSound.play();
        recipeStack.clear();
        setSelectedItem(recipe);
        setRecipeIndex(index);
      }}
    >
      <ItemTile
        background={
          recipe?.result.item === selectedItem?.result.item
            ? "selected"
            : recipe?.canCraft
            ? "standard"
            : "dark"
        }
        quantity={recipe?.result.quantity}
        itemKey={recipe?.result.item}
      />
    </motion.li>
  );
}

export default CraftingItem;
