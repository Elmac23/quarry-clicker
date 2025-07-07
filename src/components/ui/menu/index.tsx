import React from "react";
import Sprite from "../../sprite";
import MenuButton from "./menuButton";
import ModalContainer from "./modalContainer";

function BottomMenu() {
  return (
    <>
      <nav className="flex gap-2 fixed left-[50%] translate-[-50%] bottom-4">
        <MenuButton modalId={0}>
          <Sprite src="/sprites/ui/PickaxeIcon.png" alt="inventory button" />
        </MenuButton>
        <MenuButton modalId={1}>
          <Sprite src="/sprites/ui/HammerIcon.png" alt="crafting button" />
        </MenuButton>
        <MenuButton modalId={2}>
          <Sprite src="/sprites/ui/PickaxeIcon.png" alt="smelting button" />
        </MenuButton>
        <MenuButton modalId={3}>
          <Sprite src="/sprites/ui/PickaxeIcon.png" alt="garden button" />
        </MenuButton>
        <MenuButton modalId={4}>
          <Sprite src="/sprites/ui/PickaxeIcon.png" alt="quests button" />
        </MenuButton>
        <MenuButton modalId={5}>
          <Sprite src="/sprites/ui/GearIcon.png" alt="settings button" />
        </MenuButton>
      </nav>
      <ModalContainer />
    </>
  );
}

export default BottomMenu;
