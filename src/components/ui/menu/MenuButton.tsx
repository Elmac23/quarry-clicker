"use client";

import { useAppDispatch } from "@/hooks/redux";
import { useAudio } from "@/hooks/useAudio";
import { useKeyButton } from "@/hooks/useKeyButton";
import { cn } from "@/lib/cn";
import { setModal } from "@/store/modal";
import React from "react";

type MenuButtonProps = React.PropsWithChildren & {
  modalId: number;
  isActive: boolean;
  keybind: string | string[];
};

function MenuButton({ children, modalId, isActive, keybind }: MenuButtonProps) {
  const dispatch = useAppDispatch();
  const clickAudio = useAudio(
    "288911__littlerobotsoundfactory__click_soft_01.wav",
    0.8
  );
  const handleChangeModal = function () {
    clickAudio.play();
    dispatch(setModal(isActive ? -1 : modalId));
  };

  useKeyButton(keybind, handleChangeModal);

  return (
    <button
      onClick={handleChangeModal}
      className={cn(
        "aspect-square cursor-pointer size-10 md:size-14 hover:scale-105 hover:ring-2 hover:ring-teal-400 transition-all",
        {
          "ring-teal-400 ring-2": isActive,
        }
      )}
    >
      {children}
    </button>
  );
}

export default MenuButton;
