import { useAppDispatch } from "@/hooks/redux";
import { cn } from "@/lib/cn";
import { setModal } from "@/store/modal";
import React from "react";

type MenuButtonProps = React.PropsWithChildren & {
  modalId: number;
  isActive: boolean;
};

function MenuButton({ children, modalId, isActive }: MenuButtonProps) {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() =>
        isActive ? dispatch(setModal(-1)) : dispatch(setModal(modalId))
      }
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
