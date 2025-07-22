import { ModalProps } from "@/components/modal";
import SettingsParagraph from "./SettingsParagraph";
import StatPosition from "./StatPosition";
import UIModal from "@/components/modal/UIModal";
import { useStatistics } from "@/store/stats";
import { useSettings } from "@/store/settings";
import SettingIndicator from "./SettingIndicator";
import { useAppDispatch } from "@/hooks/redux";
import SettingsInput from "./SettingsInput";
import Button from "@/components/Button";
import { persistor } from "@/store";

type SettingsModalProps = Pick<ModalProps, "isOpen" | "onClose">;

function SettingsAndStats({ isOpen, onClose }: SettingsModalProps) {
  const { totalClicks, totalCrafted, totalSmelted, totalMined } =
    useStatistics();

  const { isBg, isMusic, isRotateOre, isSfx } = useSettings();

  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <div>
          <SettingsParagraph>Settings</SettingsParagraph>
          <SettingsInput field="isBg">
            <SettingIndicator value={isBg} />
            <StatPosition>Moving Background</StatPosition>
          </SettingsInput>
          <SettingsInput field="isRotateOre">
            <SettingIndicator value={isRotateOre} />
            <StatPosition>Rotating Ore</StatPosition>
          </SettingsInput>
          <SettingsInput field="isMusic">
            <SettingIndicator value={isMusic} />
            <StatPosition>Background Music</StatPosition>
          </SettingsInput>
          <SettingsInput field="isSfx">
            <SettingIndicator value={isSfx} />
            <StatPosition>Sounds</StatPosition>
          </SettingsInput>
          <Button
            onClick={() => {
              persistor.purge().then(() => {
                window.location.reload();
              });
            }}
          >
            Remove Save File
          </Button>
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
