import React from "react";
import Sprite from "../../Sprite";
import MenuButton from "./MenuButton";
import ModalContainer from "./ModalContainer";
import { useAppSelector } from "@/hooks/redux";

function BottomMenu() {
  const { modalId } = useAppSelector((state) => state.modal);
  return (
    <>
      <nav className="flex gap-2 fixed left-[50%] translate-[-50%] bottom-4 z-20">
        <MenuButton modalId={0} isActive={0 === modalId}>
          <Sprite src="/sprites/ui/PickaxeIcon.png" alt="inventory button" />
        </MenuButton>
        <MenuButton modalId={1} isActive={1 === modalId}>
          <Sprite src="/sprites/ui/HammerIcon.png" alt="crafting button" />
        </MenuButton>
        <MenuButton modalId={2} isActive={2 === modalId}>
          <Sprite src="/sprites/ui/FireIcon.png" alt="smelting button" />
        </MenuButton>
        <MenuButton modalId={3} isActive={3 === modalId}>
          <Sprite src="/sprites/ui/WatercanIcon.png" alt="garden button" />
        </MenuButton>
        <MenuButton modalId={4} isActive={4 === modalId}>
          <Sprite src="/sprites/ui/QuestIcon.png" alt="quests button" />
        </MenuButton>
        <MenuButton modalId={5} isActive={5 === modalId}>
          <Sprite src="/sprites/ui/GearIcon.png" alt="settings button" />
        </MenuButton>
      </nav>
      <ModalContainer />
    </>
  );
}

export default BottomMenu;
