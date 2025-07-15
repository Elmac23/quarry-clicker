import { randomRange } from "@/lib/randomRange";
import React from "react";

function BgElement({ bg }: { bg: string }) {
  const num = randomRange(0, 4);
  return (
    <div
      className="aspect-square grid-center bg-cover pixelated"
      style={{
        transform: `rotateZ(${num * 90}deg)`,
        backgroundImage: `url('${bg}')`,
      }}
    ></div>
  );
}

export default BgElement;
