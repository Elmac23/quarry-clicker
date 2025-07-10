"use client";

import { removeNotification, tick } from "@/store/notification";
import React from "react";
import type { NotificationWithTimer } from "@/store/notification";
import { useAppDispatch } from "@/hooks/redux";
import { useInterval } from "@/hooks/useInterval";
import ItemTile from "@/components/itemTile";
import { ITEMS } from "@/data/items";
import { motion } from "motion/react";

export type NotificationProps = {
  data: NotificationWithTimer;
};

function Notification({ data }: NotificationProps) {
  const dispatch = useAppDispatch();

  useInterval(() => dispatch(tick(data.itemId)), 1000);
  return (
    <motion.li
      layout
      exit={{
        opacity: 0,
        x: 100,
      }}
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="flex items-center pl-2 bg-secondary-800 text-primary-500 px-4 py-2 border-16 pixelated rounded-2xl gap-x-3  max-w-96 ml-auto min-w-64 cursor-pointer"
      style={{
        borderImage: "url('/sprites/ui/frame.png') 7",
        borderImageRepeat: "round",
      }}
      onClick={() => dispatch(removeNotification(data.itemId))}
    >
      <div className="flex-shrink-0">
        <ItemTile itemId={data.itemId} quantity={data.amount} />
      </div>
      <p className="jersey10 text-3xl grow text-center break-words leading-tight">
        {data.customMessage ?? ITEMS[data.itemId].name}
      </p>
    </motion.li>
  );
}

export default Notification;
