import React from "react";
import BgElement from "./BgElement";
import { useBackgroundContext } from ".";

function StaticBackground() {
  const { xAmount, yAmount, getBg } = useBackgroundContext();
  const totalElements = xAmount * yAmount;
  const dummyElementsArray = new Array(totalElements).fill(null);
  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${yAmount}, 1fr)`,
        gridTemplateColumns: `repeat(${xAmount}, 1fr)`,
      }}
    >
      {dummyElementsArray.map((_, j) => {
        return <BgElement bg={getBg()} key={j} />;
      })}
    </div>
  );
}

export default StaticBackground;
