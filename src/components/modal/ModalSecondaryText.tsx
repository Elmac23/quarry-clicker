import React from "react";

function ModalSecondaryText({ children }: React.PropsWithChildren) {
  return (
    <p className="jersey10 pixelated text-white text-2xl min-h-8">{children}</p>
  );
}

export default ModalSecondaryText;
