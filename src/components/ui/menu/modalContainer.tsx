"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import React from "react";
import Inventory from "../inventory";
import { close } from "@/store/modal";
import Crafting from "@/components/ui/crafting";

function ModalContainer() {
  const { modalId } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();

  return (
    <>
      <Inventory isOpen={modalId === 0} onClose={() => dispatch(close())} />
      <Crafting isOpen={modalId === 1} onClose={() => dispatch(close())} />
    </>
  );
}

export default ModalContainer;
