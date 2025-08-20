import BottomMenu from "@/components/ui/menu";
import Ore from "@/components/ui/ore";

import Notifiactions from "@/components/ui/notification";
import BG from "@/components/background";
import AddAllItemsDebug from "@/components/debug/AddAllItemsDebug";
import BuffsDebug from "@/components/debug/BuffsDebug";
import ClearNottificationsDebug from "@/components/debug/ClearNottificationsDebug";
import ClearBuffsDebug from "@/components/debug/ClearBuffsDebug";
import MineDataDebug from "@/components/debug/MineDataDebug";
import GameWrapper from "./GameWrapper";
export default function Home() {
  return (
    <main className="relative">
      <GameWrapper>
        <BG time={30} />
        <MineDataDebug />
        <ClearNottificationsDebug />
        <ClearBuffsDebug />
        <AddAllItemsDebug />

        <BuffsDebug />
        <Ore />
        <Notifiactions />
        <BottomMenu />
      </GameWrapper>
    </main>
  );
}
