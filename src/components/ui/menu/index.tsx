"use client";

import React from "react";
import Sprite from "../../Sprite";
import MenuButton from "./MenuButton";
import ModalContainer from "./ModalContainer";

import { useModal } from "@/store/modal";
import Tooltip from "@/components/Tooltip";

function BottomMenu() {
  const { modalId } = useModal();
  return (
    <>
      <nav className="flex gap-2 fixed left-[50%] translate-[-50%] bottom-4 z-20">
        <Tooltip content="Inventory">
          <MenuButton keybind={["1", "e"]} modalId={0} isActive={0 === modalId}>
            <Sprite src="/sprites/ui/PickaxeIcon.png" alt="inventory button" />
          </MenuButton>
        </Tooltip>
        <Tooltip content="Crafting">
          <MenuButton keybind="2" modalId={1} isActive={1 === modalId}>
            <Sprite src="/sprites/ui/HammerIcon.png" alt="crafting button" />
          </MenuButton>
        </Tooltip>
        <Tooltip content="Smelting">
          <MenuButton keybind="3" modalId={2} isActive={2 === modalId}>
            <Sprite src="/sprites/ui/FireIcon.png" alt="smelting button" />
          </MenuButton>
        </Tooltip>
        <Tooltip content="Mines">
          <MenuButton keybind="4" modalId={3} isActive={3 === modalId}>
            <Sprite src="/sprites/ui/MinecartIcon.png" alt="mines button" />
          </MenuButton>
        </Tooltip>
        <Tooltip content="Garden">
          <MenuButton keybind="5" modalId={4} isActive={4 === modalId}>
            <Sprite src="/sprites/ui/WatercanIcon.png" alt="garden button" />
          </MenuButton>
        </Tooltip>
        {/* <Tooltip content="Quests">
          <MenuButton keybind={["6", "q"]} modalId={5} isActive={5 === modalId}>
            <Sprite src="/sprites/ui/QuestIcon.png" alt="quests button" />
          // </MenuButton>
        </Tooltip> */}
        <Tooltip content="Settings">
          <MenuButton keybind="6" modalId={6} isActive={6 === modalId}>
            <Sprite src="/sprites/ui/GearIcon.png" alt="settings button" />
          </MenuButton>
        </Tooltip>
      </nav>
      <ModalContainer />
    </>
  );
}

export default BottomMenu;
