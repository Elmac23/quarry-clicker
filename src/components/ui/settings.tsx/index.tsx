import { ModalProps } from "@/components/modal";
import SettingsParagraph from "./SettingsParagraph";
import StatPosition from "./StatPosition";
import UIModal from "@/components/modal/UIModal";
import { useStatistics } from "@/store/stats";

type SettingsModalProps = Pick<ModalProps, "isOpen" | "onClose">;

function SettingsAndStats({ isOpen, onClose }: SettingsModalProps) {
  const { totalClicks, totalCrafted, totalSmelted, totalMined } =
    useStatistics();
  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
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
      </div>
    </UIModal>
  );
}

export default SettingsAndStats;
