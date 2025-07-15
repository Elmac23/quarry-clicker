"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

export type ContextMenuProps = React.ComponentProps<"div"> & {
  isOpen: boolean;
  onClose: () => void;
  position: { x: number; y: number };
};

export default function ContextMenu({
  position,
  isOpen,
  onClose,
  children,
  style,
  className,
}: ContextMenuProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="w-screen h-screen fixed inset-0"
          onClick={onClose}
          onContextMenu={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <motion.div
            className={cn("z-100 absolute", className)}
            style={{
              left: position.x,
              top: position.y,
              borderImage: "url('/sprites/ui/frame.png') 7",
              borderImageRepeat: "round",
              ...style,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onClose}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
