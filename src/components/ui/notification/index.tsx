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
      <AnimatePresence mode="popLayout">
        {notificationsTop3.map((el) => (
          <Notification data={el} key={el.itemId + el.customMessage} />
        ))}
      </AnimatePresence>
    </ul>
  );
}

export default Notifiactions;
