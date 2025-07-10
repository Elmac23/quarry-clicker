"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export type ModalProps = React.ComponentProps<"div"> & {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({
  isOpen,
  onClose,
  children,
  style,
  className,
}: ModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="bg-black/80 backdrop-blur-md w-screen h-screen fixed inset-0 grid place-items-center"
          onClick={onClose}
        >
          <motion.div
            style={style}
            className={className}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
