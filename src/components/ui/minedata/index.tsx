"use client";

import Text from "@/components/Text";
import { MINES } from "@/data/mines";
import { useMines } from "@/store/mine";
import { setModal } from "@/store/modal";
import React from "react";
import { useDispatch } from "react-redux";

function MineData() {
  const { activeMine, health: currentHealth } = useMines();
  const dispatch = useDispatch();
  const { name, health } = MINES[activeMine];
  return (
    <div
      className="grid-center mt-4 cursor-pointer"
      onClick={() => {
        dispatch(setModal(3));
      }}
    >
      <div
        className="rounded-2xl select-none border-12 pixelated bg-secondary-500"
        style={{
          borderImage: "url('/sprites/ui/overlay.png') 7",
          borderImageRepeat: "round",
        }}
      >
        <Text className="text-center pt-4 px-8" size="xl" color="primary">
          {name}
        </Text>
        <Text className="text-center" size="md" color="white">
          {Math.round(currentHealth)} / {health} HP
        </Text>
      </div>
    </div>
  );
}

export default MineData;
