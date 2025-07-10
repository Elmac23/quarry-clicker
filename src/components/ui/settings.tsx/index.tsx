"use client";

import Button from "@/components/button";
import Modal, { ModalProps } from "@/components/modal";
import SettingsParagraph from "./SettingsParagraph";
import StatPosition from "./StatPosition";
import { useAppSelector } from "@/hooks/redux";

type SettingsModalProps = Pick<ModalProps, "isOpen" | "onClose">;

function SettingsAndStats({ isOpen, onClose }: SettingsModalProps) {
  const { totalClicks, totalCrafted, totalSmelted, totalMined } =
    useAppSelector((state) => state.statistics);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="px-4 md:px-0 max-w-3xl w-full"
    >
      <div
        className="bg-secondary-800/70 p-8 pixelated border-16 rounded-4xl"
        style={{
          borderImage: "url('/sprites/ui/frame.png') 7",
          borderImageRepeat: "round",
        }}
      >
        <div className="flex flex-col gap-4">
          <div>
            <SettingsParagraph>Settings</SettingsParagraph>
            <p className="">Todo...</p>
          </div>
          <div className="gap-2 flex flex-col">
            <SettingsParagraph>Statistics</SettingsParagraph>
            <StatPosition>Total clicks: {totalClicks}</StatPosition>
            <StatPosition>Total ores mined: {totalMined}</StatPosition>
            <StatPosition>Total items crafted: {totalCrafted}</StatPosition>
            <StatPosition>Total ores smelted: {totalSmelted}</StatPosition>
          </div>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </Modal>
  );
}

export default SettingsAndStats;
