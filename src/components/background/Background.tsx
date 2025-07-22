import React from "react";
import FirstBgSlice from "./FirstBgSlice";
import SecondBgSlice from "./SecondBgSlice";
import StaticBackground from "./StaticBackground";
import { useFocus } from "@/hooks/useFocus";
import { useAppSelector } from "@/hooks/redux";

function BackGround() {
  const isBg = useAppSelector((state) => state.settings.isBg);
  const isFocus = useFocus();
  return !isBg || !isFocus ? (
    <StaticBackground />
  ) : (
    <>
      <FirstBgSlice />
      <SecondBgSlice />
    </>
  );
}

export default React.memo(BackGround);
