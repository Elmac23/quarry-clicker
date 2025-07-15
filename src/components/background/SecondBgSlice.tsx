import { motion } from "motion/react";
import React from "react";
import BgElement from "./BgElement";
import { useBackgroundContext } from ".";

function SecondBgSlice() {
  const { yAmount, xAmount, time, getBg } = useBackgroundContext();
  const totalElements = xAmount * yAmount;
  const dummyElementsArray = new Array(totalElements).fill(null);
  return (
    <motion.div
      animate={{
        y: "-200%",
        transition: {
          ease: "linear",
          duration: time,
          repeat: Infinity,
        },
      }}
      className="grid"
      style={{
        gridTemplateRows: `repeat(${yAmount}, 1fr)`,
        gridTemplateColumns: `repeat(${xAmount}, 1fr)`,
      }}
    >
      {dummyElementsArray.map((_, j) => {
        return <BgElement bg={getBg()} key={j} />;
      })}
    </motion.div>
  );
}

export default SecondBgSlice;
