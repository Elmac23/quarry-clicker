"use client";
import { clearNotifications } from "@/store/notification";
import React from "react";
import Button from "../Button";
import { useAppDispatch } from "@/hooks/redux";

function ClearNottificationsDebug() {
  const dispatch = useAppDispatch();
  return (
    <Button onClick={() => dispatch(clearNotifications())}>Kill notify</Button>
  );
}

export default ClearNottificationsDebug;
