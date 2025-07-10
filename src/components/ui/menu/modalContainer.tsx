"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import React from "react";
import Inventory from "../inventory";
import SettingsAndStats from "../settings.tsx";
import { close } from "@/store/modal";
import Crafting from "@/components/ui/crafting";
import Smelting from "../smelting";
import Farm from "../farm";
import Quest from "../quest";

function ModalContainer() {
  const { modalId } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  return (
    <>
      <Inventory isOpen={modalId === 0} onClose={() => dispatch(close())} />
      <Crafting isOpen={modalId === 1} onClose={() => dispatch(close())} />
      <Smelting isOpen={modalId === 2} onClose={() => dispatch(close())} />
      <Farm isOpen={modalId === 3} onClose={() => dispatch(close())} />
      <Quest isOpen={modalId === 4} onClose={() => dispatch(close())} />
      <SettingsAndStats
        isOpen={modalId === 5}
        onClose={() => dispatch(close())}
      />
    </>
  );
}

export default ModalContainer;
