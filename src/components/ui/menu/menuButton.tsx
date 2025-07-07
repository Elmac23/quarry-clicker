import { useAppDispatch } from "@/hooks/redux";
import { setModal } from "@/store/modal";
import React from "react";

type MenuButtonProps = React.PropsWithChildren & {
  modalId: number;
};

function MenuButton({ children, modalId }: MenuButtonProps) {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(setModal(modalId))}
      className="aspect-square cursor-pointer size-14 hover:scale-105 hover:ring-3 hover:ring-teal-400 transition-all"
    >
      {children}
    </button>
  );
}

export default MenuButton;
