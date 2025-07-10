import React from "react";
import Button from "@/components/Button";
import Modal, { ModalProps } from "@/components/modal/index";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const uiModalVariants = cva(
  "p-8 z-10 bg-secondary-800/70 pixelated border-16 rounded-4xl w-[70%] min-w-md max-w-3xl",
  {
    variants: {
      bg: {
        default: "bg-secondary-800/70",
        green: "bg-green-950/70",
      },
    },
    defaultVariants: {
      bg: "default",
    },
  }
);

type UIModalProps = ModalProps & VariantProps<typeof uiModalVariants>;

function UIModal({
  isOpen,
  onClose,
  children,
  style,
  className,
  bg,
}: UIModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={cn(uiModalVariants({ bg }), className)}
      style={{
        borderImage: "url('/sprites/ui/frame.png') 7",
        borderImageRepeat: "round",
        ...style,
      }}
    >
      {children}

      <Button onClick={onClose}>Close</Button>
    </Modal>
  );
}

export default UIModal;
