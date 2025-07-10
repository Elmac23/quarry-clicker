import { ItemKey, ITEMS } from "@/data/items";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import Sprite from "./Sprite";

const itemTileVariants = cva(
  "bg-cover aspect-square pixelated grid-center cursor-pointer relative transition",
  {
    variants: {
      background: {
        standard: "bg-[url(/sprites/ui/overlay.png)]",
        selected: "bg-[url(/sprites/ui/overlay_selected.png)]",
        danger: "bg-[url(/sprites/ui/overlay_danger.png)]",
        dark: "bg-[url(/sprites/ui/overlay_dark.png)]",
      },
    },
    defaultVariants: {
      background: "standard",
    },
  }
);

type ItemTileProps = React.ComponentProps<"div"> &
  VariantProps<typeof itemTileVariants> & {
    itemId?: ItemKey;
    quantity?: number;
    counter?: number;
    quantityText?: string;
  };

function ItemTile({
  itemId,
  quantity,
  counter,
  className,
  background,
  quantityText,
  ...rest
}: ItemTileProps) {
  return (
    <div className={cn(itemTileVariants({ background }), className)} {...rest}>
      {itemId && (
        <>
          <Sprite
            className="aspect-square w-14/15"
            alt={ITEMS[itemId].name}
            src={ITEMS[itemId].icon}
          />
          <p className="absolute right-3 bottom-1 text-2xl jersey10 text-white text-shadow-lg">
            {getQuantity(quantity, counter, quantityText)}
          </p>
        </>
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

  if (!quantity) return "";

  if (!counter && counter !== 0 && quantity > 1) return quantity;
  if (!counter && quantity <= 1) return "";

  return `${counter}/${quantity}`;
}

export default ItemTile;
