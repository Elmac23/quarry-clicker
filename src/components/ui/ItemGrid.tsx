import { cn } from "@/lib/cn";
import React, { ReactNode } from "react";

type ItemGridProps<T> = {
  data: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
  ref?: React.RefObject<HTMLElement> | null;
};

function ItemGrid<T>({ data, renderItem, className, ref }: ItemGridProps<T>) {
  return (
    <ul
      ref={ref as React.Ref<HTMLUListElement>}
      className={cn(
        "grid grid-fluid-sm md:grid-fluid gap-2 mb-6 max-h-96 overflow-x-hidden overflow-y-scroll custom-scrollbar p-2",
        className
      )}
    >
      {data.map((element, index) => renderItem(element, index))}
    </ul>
  );
}

export default ItemGrid;
