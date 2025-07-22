import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

type TextProps = Omit<React.ComponentProps<"p">, "as"> &
  React.PropsWithChildren &
  VariantProps<typeof textVariants> & {
    as?: React.ElementType;
  };

const textVariants = cva("jersey10", {
  variants: {
    size: {
      sm: "text-sm md:text-md",
      md: "text-md md:text-xl",
      lg: "text-lg md:text-2xl",
      xl: "text-2xl md:text-3xl",
    },
    color: {
      primary: "text-primary-500",
      black: "text-black",
      white: "text-white",
    },
    gutter: {
      true: "mb-2",
      false: "mb-0",
    },
  },
  defaultVariants: {
    color: "white",
    gutter: true,
    size: "md",
  },
});

function Text({
  as = "p",
  children,
  color,
  gutter,
  size,
  className,
  ...rest
}: TextProps) {
  const Component = as;
  return (
    <Component
      className={cn(textVariants({ color, gutter, size }), className)}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Text;
