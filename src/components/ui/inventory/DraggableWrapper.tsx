import { useDraggable, useDroppable } from "@dnd-kit/core";
import React from "react";

type DraggableWrapperProps = {
  id: number;
  disabled?: boolean;
  children: ((containerProps?: any) => React.ReactNode) | React.ReactNode;
};

function DraggableWrapper({
  id,
  disabled = false,
  children,
}: DraggableWrapperProps) {
  const draggableConfig = useDraggable({
    id,
    disabled,
  });

  const { setNodeRef: setNodeContainerRef } = useDroppable({
    id,
  });

  const style = draggableConfig.transform
    ? {
        transform: `translate(${draggableConfig.transform.x}px, ${draggableConfig.transform.y}px) scale(1.1)`,
        zIndex: 40,
      }
    : undefined;

  if (disabled) {
    return (
      <li key={id}>
        <div ref={setNodeContainerRef}>
          {typeof children === "function" ? children() : children}
        </div>
      </li>
    );
  }

  const containerProps = {
    ref: draggableConfig.setNodeRef,
    ...draggableConfig.listeners,
    ...draggableConfig.attributes,
    style,
  };

  return (
    <li key={id} ref={setNodeContainerRef}>
      {typeof children === "function" ? (
        children(containerProps)
      ) : (
        <div {...containerProps}>{children}</div>
      )}
    </li>
  );
}

export default React.memo(DraggableWrapper);
