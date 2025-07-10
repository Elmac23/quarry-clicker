"use client";

import { useAppSelector } from "@/hooks/redux";
import React, { useMemo } from "react";
import Notification from "./notification";
import { AnimatePresence } from "motion/react";

function Notifiactions() {
  const { notifications } = useAppSelector((state) => state.notification);

  const notificationsTop3 = useMemo(
    () => notifications.slice(0, 3),
    [notifications]
  );
  return (
    <ul className="flex flex-col fixed right-4 bottom-4 gap-4 z-20">
      <AnimatePresence mode="popLayout">
        {notificationsTop3.map((el) => (
          <Notification data={el} key={el.itemId} />
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default Notifiactions;
