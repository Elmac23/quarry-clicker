"use client";

import { removeNotification, tick } from "@/store/notification";
import React from "react";
import type { NotificationWithTimer } from "@/store/notification";
import { useAppDispatch } from "@/hooks/redux";
import { useInterval } from "@/hooks/useInterval";
import ItemTile from "@/components/ItemTile";
import { ITEMS } from "@/data/items";
import { motion } from "motion/react";
import Text from "@/components/Text";

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
      className="flex items-center pl-2 bg-secondary-800 text-primary-500 px-4 py-2 border-8 md:border-16 pixelated rounded-2xl gap-x-3 md:max-w-96 ml-auto md:min-w-64 cursor-pointer"
      style={{
        borderImage: "url('/sprites/ui/frame.png') 7",
        borderImageRepeat: "round",
      }}
      onClick={() => dispatch(removeNotification(data.itemId))}
    >
      <div className="flex-shrink-0 h-full">
        <ItemTile
          className="w-14 md:w-18"
          itemId={data.itemId}
          quantity={data.amount}
        />
      </div>
      <Text
        className="md:text-3xl grow text-center break-words leading-tight"
        size="xl"
        color="primary"
        gutter={false}
      >
        {data.customMessage ?? ITEMS[data.itemId].name}
      </Text>
    </motion.li>
  );
}

export default Notification;
