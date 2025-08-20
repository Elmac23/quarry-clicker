"use client";

import React, { useMemo } from "react";
import Notification from "./Notification";
import { AnimatePresence } from "motion/react";
import { useNotification } from "@/store/notification";

function Notifiactions() {
  const { notifications } = useNotification();

  const notificationsTop3 = useMemo(
    () => notifications.slice(0, 3),
    [notifications]
  );
  return (
    <ul className="flex flex-col fixed right-4 md:bottom-4 gap-4 z-20 md:top-[unset] top-4">
      <AnimatePresence>
        {notificationsTop3.map((el) => {
          let key = el.itemId;

          if ("customMessage" in el) key += el.customMessage;
          // if ("amount" in el) key += String(el.amount);
          return <Notification data={el} key={key} />;
        })}
      </AnimatePresence>
    </ul>
  );
}

export default Notifiactions;
