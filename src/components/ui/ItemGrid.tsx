import React from "react";

function ItemGrid({ children }: React.PropsWithChildren) {
  return (
    <ul className="grid grid-fluid gap-2 mb-6 max-h-96 overflow-x-hidden overflow-y-scroll custom-scrollbar pr-2">
      {children}
    </ul>
  );
}

export default ItemGrid;
