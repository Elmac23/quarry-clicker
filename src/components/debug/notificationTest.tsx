"use client";

import { ITEMS } from "@/data/items";
import { addNotification } from "@/store/notification";
import React from "react";
import Button from "../Button";
import { useAppDispatch } from "@/hooks/redux";

function NotificationTest() {
  const dispatch = useAppDispatch();
  return (
    <>
      <Button
        onClick={() =>
          dispatch(
            addNotification({
              amount: 10,
              itemId: "stone",
              icon: ITEMS["stone"].icon,
            })
          )
        }
      >
        Notify 10 stone{" "}
      </Button>
      <Button
        onClick={() =>
          dispatch(
            addNotification({
              amount: 2,
              itemId: "emerald",
              icon: ITEMS["emerald"].icon,
            })
          )
        }
      >
        Notify 2 emerald{" "}
      </Button>
      <Button
        onClick={() =>
          dispatch(
            addNotification({
              amount: 1,
              itemId: "diamond",
              icon: ITEMS["diamond"].icon,
            })
          )
        }
      >
        Notify 1 diamond
      </Button>
      <Button
        onClick={() =>
          dispatch(
            addNotification({
              amount: 5,
              itemId: "coal",
              icon: ITEMS["coal"].icon,
            })
          )
        }
      >
        Notify 5 coal
      </Button>
      <Button
        onClick={() =>
          dispatch(
            addNotification({
              amount: 3,
              itemId: "ironBar",
              icon: ITEMS["ironBar"].icon,
            })
          )
        }
      >
        Notify 3 iron bars
      </Button>
      <Button
        onClick={() =>
          dispatch(
            addNotification({
              amount: 1,
              itemId: "goldenPickaxe",
              icon: ITEMS["goldenPickaxe"].icon,
            })
          )
        }
      >
        Notify golden pickaxe
      </Button>
      <Button
        onClick={() =>
          dispatch(
            addNotification({
              amount: 15,
              itemId: "tinOre",
              icon: ITEMS["tinOre"].icon,
            })
          )
        }
      >
        Notify 15 tin ore
      </Button>
    </>
  );
}

export default NotificationTest;
