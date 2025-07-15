import React, { useEffect, useState } from "react";
import { ModalProps } from "@/components/modal/";
import { AnimatePresence } from "motion/react";
import { RecipeWithAnnotations, useCrafting } from "@/hooks/useCrafting";
import RecipeDisplay from "@/components/ui/crafting/RecipeDisplay";
import { ITEMS } from "@/data/items";
import UIModal from "@/components/modal/UIModal";
import ItemGrid from "../ItemGrid";
import ModalHeader from "@/components/modal/ModalHeader";
import CraftingItem from "./CraftingItem";
import { useInventory } from "@/store/inventory";
import ModalSecondaryText from "@/components/modal/ModalSecondaryText";

type CraftingModalProps = Pick<ModalProps, "isOpen" | "onClose">;

function Crafting({ isOpen, onClose }: CraftingModalProps) {
  const [selectedItem, setSelectedItem] =
    useState<null | RecipeWithAnnotations>(null);

  const [recipeIndex, setRecipeIndex] = useState(-1);

  const { items } = useInventory();

  const recipes = useCrafting();
  useEffect(() => {
    if (recipeIndex > -1) {
      setSelectedItem(recipes[recipeIndex]);
    }
  }, [items, recipeIndex, recipes]);

  return (
    <UIModal isOpen={isOpen} onClose={onClose} bg="green">
      <ModalHeader>
        Crafting {selectedItem && `| ${ITEMS[selectedItem.result.item].name}`}
      </ModalHeader>
      <ModalSecondaryText>
        {selectedItem && ITEMS[selectedItem.result.item].description}
      </ModalSecondaryText>
      <AnimatePresence mode="wait">
        {selectedItem && (
          <RecipeDisplay key={recipeIndex} recipe={selectedItem} />
        )}
      </AnimatePresence>
      <ItemGrid
        data={recipes}
        renderItem={(recipe, index) => (
          <CraftingItem
            index={index}
            key={index}
            recipe={recipe}
            selectedItem={selectedItem}
            setRecipeIndex={setRecipeIndex}
            setSelectedItem={setSelectedItem}
          />
        )}
      ></ItemGrid>
    </UIModal>
  );
}

export default Crafting;
