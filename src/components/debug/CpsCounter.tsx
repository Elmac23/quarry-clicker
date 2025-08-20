import React from "react";
import Text from "../Text";
import { useCps } from "@/hooks/useCps";

function CpsCounter() {
  const cps = useCps();
  return (
    <>
      <Text>CPS: {cps}</Text>
    </>
  );
}

export default CpsCounter;
