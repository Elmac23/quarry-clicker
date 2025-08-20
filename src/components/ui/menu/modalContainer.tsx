"use client";

import { useAppDispatch } from "@/hooks/redux";
import React from "react";
import Inventory from "../inventory";
import SettingsAndStats from "../settings";
import { close, useModal } from "@/store/modal";
import Crafting from "@/components/ui/crafting";
import Smelting from "../smelting";
import Farming from "../farm";
import Quest from "../quest";
import Mine from "../mine";

function ModalContainer() {
  const { modalId } = useModal();
  const dispatch = useAppDispatch();

  return (
    <>
      <Inventory isOpen={modalId === 0} onClose={() => dispatch(close())} />
      <Crafting isOpen={modalId === 1} onClose={() => dispatch(close())} />
      <Smelting isOpen={modalId === 2} onClose={() => dispatch(close())} />
      <Mine isOpen={modalId === 3} onClose={() => dispatch(close())} />
      <Farming isOpen={modalId === 4} onClose={() => dispatch(close())} />
      <Quest isOpen={modalId === 5} onClose={() => dispatch(close())} />
      <SettingsAndStats
        isOpen={modalId === 6}
        onClose={() => dispatch(close())}
      />
    </>
  );
}

export default ModalContainer;
