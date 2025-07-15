import { ItemKey, ITEMS } from "@/data/items";
import { cn } from "@/lib/cn";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import Sprite from "./Sprite";

const itemTileVariants = cva(
  "bg-cover aspect-square pixelated cursor-pointer transition",
  {
    variants: {
      background: {
        standard: "bg-[url(/sprites/ui/overlay.png)]",
        selected: "bg-[url(/sprites/ui/overlay_selected.png)]",
        danger: "bg-[url(/sprites/ui/overlay_danger.png)]",
        dark: "bg-[url(/sprites/ui/overlay_dark.png)]",
        success: "bg-[url(/sprites/ui/overlay_success.png)]",
      },
    },
    defaultVariants: {
      background: "standard",
    },
  }
);

type ItemTileProps = React.ComponentProps<"div"> &
  VariantProps<typeof itemTileVariants> & {
    itemId?: ItemKey | null;
    quantity?: number;
    counter?: number;
    quantityText?: string;
    containerProps?: Partial<React.ComponentProps<"div">>;
  };

function ItemTile({
  itemId,
  quantity,
  counter,
  className,
  background,
  quantityText,
  onContextMenu,
  containerProps,
  ...rest
}: ItemTileProps) {
  const handleRightClick = (e: React.MouseEvent) => e.preventDefault();

  return (
    <div
      className={cn(itemTileVariants({ background }), className)}
      onContextMenu={onContextMenu ?? handleRightClick}
      {...rest}
    >
      {itemId && (
        <div className="relative grid grid-center" {...containerProps}>
          <Sprite
            className="aspect-square w-14/15"
            alt={ITEMS[itemId].name}
            src={ITEMS[itemId].icon}
          />
          <p className="absolute md:right-3 right-1 bottom-[-2] text-2xl jersey10 text-white text-shadow-lg select-none">
            {getQuantity(quantity, counter, quantityText)}
          </p>
        </div>
      )}
    </div>
  );
}

function getQuantity(
  quantity?: number,
  counter?: number,
  quantityText?: string
) {
  if (quantityText) return quantityText;

  if (!quantity && quantity !== 0) return "";

  if (!counter && counter !== 0 && counter !== 0 && quantity > 1)
    return quantity;
  if (!counter && counter !== 0 && quantity <= 1) return "";

  return `${counter}/${quantity}`;
}

export default ItemTile;
