import ItemTile from "@/components/ItemTile";
import { useAppDispatch } from "@/hooks/redux";
import { SmeltPosition, speedUp } from "@/store/smelt";
import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
import { useAudio } from "@/hooks/useAudio";

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
  const clickSound = useAudio("577025__nezuai__ui-sound-2.wav", 0.5);

  return (
    <li className="relative">
      <div className="bg-black p-1 absolute bottom-[-5] z-30 left-3 right-3 h-4">
        <motion.div
          className="h-full"
          style={{ width, backgroundColor }}
        ></motion.div>
      </div>
      <ItemTile
        onClick={() => {
          if (!item) return;
          clickSound.play();
          dispatch(speedUp(index));
        }}
        key={index}
        itemKey={item?.result}
      />
    </li>
  );
}

export default SmeltingItem;
