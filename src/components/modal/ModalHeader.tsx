import React from "react";

function ModalHeader({ children }: React.PropsWithChildren) {
  return (
    <h2 className="jersey10 text-3xl text-primary-500 mb-2">{children}</h2>
  );
}

export default ModalHeader;
