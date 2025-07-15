import React from "react";
import FirstBgSlice from "./FirstBgSlice";
import SecondBgSlice from "./SecondBgSlice";
import StaticBackground from "./StaticBackground";
import { useBackgroundContext } from ".";

function BackGround() {
  const { disabled } = useBackgroundContext();
  return disabled ? (
    <StaticBackground />
  ) : (
    <>
      <FirstBgSlice />
      <SecondBgSlice />
    </>
  );
}

export default React.memo(BackGround);
