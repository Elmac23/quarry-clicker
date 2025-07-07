import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  size?: "sm" | "md" | "lg";
};

const buttonVariants = cva(
  "bg-yellow-500 border-4 text-yellow-800 border-solid border-yellow-700/50 hover:bg-yellow-600 hover:border-yellow-800/50 transition-colors cursor-pointer",
  {
    variants: {
      size: {
        sm: "text-sm px-2 py-1",
        md: "text-base px-2.5 py-1.5",
        lg: "text-lg px-3 py-2",
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
