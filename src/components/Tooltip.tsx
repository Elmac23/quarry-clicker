"use client";

import { useMounted } from "@/hooks/useMounted";
import { useToggle } from "@/hooks/useToggle";
import { motion } from "motion/react";
import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";

type TooltipProps = React.PropsWithChildren & {
  content?: string | null;
};

function Tooltip({ children, content }: TooltipProps) {
  const { setFalse, setTrue, value } = useToggle(false);
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isMounted = useMounted();
  const handleMouseEnter = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPosition({
        x: rect.left + rect.width / 2,
        y: rect.bottom,
      });
    }
    setTrue();
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={setFalse}
      onClick={setFalse}
      className="relative"
    >
      {children}
      {isMounted && content
        ? createPortal(
            <motion.p
              style={{
                left: position.x,
                top: position.y,
                transform: "translateX(-50%)",
                opacity: 0,
              }}
              className="z-50 bg-black jersey10 px-2 py-1 -translate-x-[50%] rounded-sm text-white fixed w-max pointer-events-none"
              animate={
                value
                  ? {
                      scale: 1,
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: 0.1,
                      },
                    }
                  : {
                      opacity: 0,
                      scale: 0,
                      y: -10,
                    }
              }
            >
              <span className="bg-black size-3 block absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rotate-45"></span>
              {content}
            </motion.p>,
            document.body
          )
        : ""}
    </div>
  );
}

export default Tooltip;
