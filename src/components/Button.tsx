import { cn } from "@/lib/cn";
import { cva } from "class-variance-authority";
import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  size?: "sm" | "md" | "lg";
};

const buttonVariants = cva(
  "ring-2 ring-black jersey10 bg-yellow-500 border-4 text-yellow-800 border-solid border-yellow-700/50 active:bg-yellow-600 active:border-yellow-800/50 transition-colors cursor-pointer hover:scale-105 tracking-wide",
  {
    variants: {
      size: {
        sm: "text-base px-2 py-1",
        md: "text-lg px-2.5 py-1.25",
        lg: "text-2xl px-3 py-1.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

function Button(props: ButtonProps) {
  const { children, size, className, ...rest } = props;
  return (
    <button
      className={cn(
        buttonVariants({
          size,
          className,
        })
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
