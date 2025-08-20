import BottomMenu from "@/components/ui/menu";
import Ore from "@/components/ui/ore";

import Notifiactions from "@/components/ui/notification";
import BG from "@/components/background";
import GameWrapper from "./GameWrapper";

import MineData from "@/components/ui/minedata";
import BuffsList from "@/components/BuffsList";
import AddAllItemsDebug from "@/components/debug/AddAllItemsDebug";
export default function Home() {
  return (
    <main className="relative">
      <GameWrapper>
        <BG time={30} />
        <MineData />
        <BuffsList />
        {/* <MineDataDebug /> */}
        {/* <ClearNottificationsDebug /> */}
        {/* <ClearBuffsDebug /> */}
        {/* <AddAllItemsDebug /> */}
        {/* <BuffsDebug /> */}
        <Ore />
        <Notifiactions />
        <BottomMenu />
      </GameWrapper>
    </main>
  );
}
