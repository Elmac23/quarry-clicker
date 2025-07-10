import ItemTile from "@/components/ItemTile";
import { RecipeWithAnnotations } from "@/hooks/useCrafting";
import { motion } from "motion/react";
import React from "react";

type CraftingItemProps = {
  index: number;
  recipe: RecipeWithAnnotations | null;
  setSelectedItem: React.Dispatch<
    React.SetStateAction<RecipeWithAnnotations | null>
  >;
  selectedItem: RecipeWithAnnotations | null;
  setRecipeIndex: (i: number) => void;
};

function CraftingItem({
  index,
  setSelectedItem,
  setRecipeIndex,
  selectedItem,
  recipe,
}: CraftingItemProps) {
  return (
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
          recipe?.result.item === selectedItem?.result.item
            ? "selected"
            : recipe?.canCraft
            ? "standard"
            : "dark"
        }
        quantity={recipe?.result.quantity}
        itemId={recipe?.result.item}
      />
    </motion.li>
  );
}

export default CraftingItem;
