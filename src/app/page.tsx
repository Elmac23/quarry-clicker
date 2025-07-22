"use client";

import BottomMenu from "@/components/ui/menu";
import Ore from "@/components/ui/ore";

import Notifiactions from "@/components/ui/notification";
import BG from "@/components/background";
import AddAllItemsDebug from "@/components/debug/AddAllItemsDebug";
import BuffsDebug from "@/components/debug/BuffsDebug";
import ClearNottificationsDebug from "@/components/debug/ClearNottificationsDebug";
import ClearBuffsDebug from "@/components/debug/ClearBuffsDebug";
import MineDataDebug from "@/components/debug/MineDataDebug";
import { useSmeltTick } from "@/hooks/useSmeltTick";
import { useBuffTick } from "@/hooks/useBuffTick";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";

export default function Home() {
  useBackgroundMusic();
  useSmeltTick();
  useBuffTick();

  return (
    <main className="relative">
      <BG time={30} />
      <MineDataDebug />

      <ClearNottificationsDebug />
      <ClearBuffsDebug />
      <AddAllItemsDebug />
      <BuffsDebug />
      <Ore />
      <Notifiactions />
      <BottomMenu />
    </main>
  );
}
