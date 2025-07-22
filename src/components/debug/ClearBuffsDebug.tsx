import { useAppDispatch } from "@/hooks/redux";
import { clearBuffs } from "@/store/buffs";
import React from "react";
import Button from "../Button";

function ClearBuffsDebug() {
  const dispatch = useAppDispatch();
  return <Button onClick={() => dispatch(clearBuffs())}>Clear buffs</Button>;
}

export default ClearBuffsDebug;
