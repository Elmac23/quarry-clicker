import { cn } from "@/lib/cn";
import Image from "next/image";
import React from "react";

type SpriteProps = React.ComponentProps<typeof Image>;

function Sprite({ alt, width, height, className, ...rest }: SpriteProps) {
  return (
    <Image
      draggable={false}
      className={cn("block w-full pixelated select-none", className)}
      height={height ?? 100}
      width={width ?? 64}
      unoptimized
      alt={alt}
      {...rest}
    />
  );
}

export default Sprite;
