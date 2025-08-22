"use client";

import { ModalProps } from "@/components/modal";
import SettingsParagraph from "./SettingsParagraph";
import StatPosition from "./StatPosition";
import UIModal from "@/components/modal/UIModal";
import { useStatistics } from "@/store/stats";
import { useSettings } from "@/store/settings";
import SettingIndicator from "./SettingIndicator";
import SettingsInput from "./SettingsInput";
import Button from "@/components/Button";

type SettingsModalProps = Pick<ModalProps, "isOpen" | "onClose">;

function SettingsAndStats({ isOpen, onClose }: SettingsModalProps) {
  const {
    totalClicks,
    topCps,
    totalPlantsCollected,
    totalCrafted,
    totalSmelted,
    totalMined,
  } = useStatistics();

  const { isBg, isMusic, isRotateOre, isSfx } = useSettings();

  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4 custom-scrollbar max-h-96 overflow-y-scroll p-2">
        <SettingsParagraph>Quarry Clicker Beta 1.1</SettingsParagraph>
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
        </div>
        <div className="gap-2 flex flex-col">
          <SettingsParagraph>Statistics</SettingsParagraph>
          <StatPosition>Total clicks: {totalClicks}</StatPosition>
          <StatPosition>Best cps: {topCps}</StatPosition>
          <StatPosition>Total ores mined: {totalMined}</StatPosition>
          <StatPosition>Total items crafted: {totalCrafted}</StatPosition>
          <StatPosition>Total ores smelted: {totalSmelted}</StatPosition>
          <StatPosition>
            Total plants harvested: {totalPlantsCollected}
          </StatPosition>
        </div>
        <div className="gap-2 flex flex-col">
          <SettingsParagraph>Credits</SettingsParagraph>
          <StatPosition>
            Space Ambient <span className="font-bold">DELOSound</span>
          </StatPosition>
          <StatPosition>
            Ambient Background
            <span className="inline-block ml-2 font-bold">DELOSound</span>
          </StatPosition>
          <StatPosition>
            Calm Background Music Ambient Guitara
            <span className="inline-block ml-2 font-bold">DELOSound</span>
          </StatPosition>
          <StatPosition>
            Emotional ambient piece with slow cinematic textures
            <span className="inline-block ml-2 font-bold">DesiFreeMusic</span>
          </StatPosition>
          <StatPosition>
            Pickaxe Blow
            <span className="inline-block ml-2 font-bold">CreatorsHome</span>
          </StatPosition>
          <StatPosition>
            085594_Potion
            <span className="inline-block ml-2 font-bold">
              Freesound Community
            </span>
          </StatPosition>
          <StatPosition>
            ui sound 2.wav
            <span className="inline-block ml-2 font-bold">nezuai</span>
          </StatPosition>
          <Button
            size="sm"
            className="w-40"
            onClick={() => {
              window.localStorage.removeItem("persist:root");
              window.location.reload();
            }}
          >
            Remove Save File
          </Button>
        </div>
      </div>
    </UIModal>
  );
}
//Pickaxe Blow CreatorsHome
// space-ambient-351305 DELOSound
// ambient-background-339939 DELOSound
// calm-background-music-ambient-guitar-298550 DELOSound
// emotional-ambient-piece-with-slow-cinematic-textures-370144 DesiFreeMusic

export default SettingsAndStats;
