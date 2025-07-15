import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import BgElement from "./BgElement";
import { useBackgroundContext } from ".";

function FirstBgSlice() {
  const { getBg, time, xAmount, yAmount } = useBackgroundContext();
  const totalElements = xAmount * yAmount;
  const dummyElementsArray = new Array(totalElements).fill(null);

  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCycle(1);
      return () => {
        clearTimeout(timeoutId);
      };
    }, time * 500);
  }, [time]);

  return (
    <motion.div
      key={cycle}
      initial={{
        y: cycle === 0 ? 0 : "100%",
      }}
      animate={{
        y: "-100%",
        transition: {
          ease: "linear",
          duration: cycle === 0 ? time / 2 : time,
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

export default FirstBgSlice;
