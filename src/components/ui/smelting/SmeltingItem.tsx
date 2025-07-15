import ItemTile from "@/components/ItemTile";
import { useAppDispatch } from "@/hooks/redux";
import { SmeltPosition, speedUp } from "@/store/smelt";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";

type SmeltItemProps = {
  index: number;
  item: SmeltPosition;
};

function SmeltingItem({ index, item }: SmeltItemProps) {
  const progress = useMotionValue(item.timeLeft);

  const width = useTransform(progress, [item.totalTime, 0], ["0%", "100%"]);
  const backgroundColor = useTransform(
    progress,
    [item.totalTime, 0],
    ["#f00", "#0f0"]
  );

  useEffect(() => {
    progress.set(item.timeLeft);
  }, [item.timeLeft, progress]);

  const dispatch = useAppDispatch();

  return (
    <div className="relative">
      <div className="bg-black p-1 absolute bottom-[-5] z-30 left-3 right-3 h-4">
        <motion.div
          className="h-full"
          style={{ width, backgroundColor }}
        ></motion.div>
      </div>
      <ItemTile
        onClick={() => {
          if (!item) return;

          dispatch(speedUp(index));
        }}
        key={index}
        itemId={item?.result}
      />
    </div>
  );
}

export default SmeltingItem;
