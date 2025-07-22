import ItemTile from "@/components/ItemTile";
import { ModalProps } from "@/components/modal";
import UIModal from "@/components/modal/UIModal";
import Text from "@/components/Text";
import { useAppDispatch } from "@/hooks/redux";
import { useMinesDisplayData } from "@/hooks/useMinesDisplayData";
import { changeMine } from "@/store/mine";
import { close } from "@/store/modal";

type QuestModalProps = Pick<ModalProps, "isOpen" | "onClose">;

function Mine({ isOpen, onClose }: QuestModalProps) {
  const mines = useMinesDisplayData();
  const dispatch = useAppDispatch();
  return (
    <UIModal bg="gray" isOpen={isOpen} onClose={onClose}>
      <Text as="h2" size="xl" color="primary">
        Mines
      </Text>
      <ul className="space-y-4 mb-4 max-h-96 overflow-x-hidden overflow-y-scroll custom-scrollbar p-2">
        {mines.map((mine) => (
          <li
            style={{
              borderImage: "url('/sprites/ui/frame.png') 7",
              borderImageRepeat: "round",
            }}
            className="bg-gray-700 border-12 p-4 rounded-xl cursor-pointer "
            key={mine.id}
            onClick={() => {
              dispatch(changeMine(mine.id));
              dispatch(close());
            }}
          >
            <h2 className="jersey10 mb-2 text-2xl text-white">{mine.name}</h2>
            <div className="grid grid-fluid w-full gap-4">
              <ItemTile itemId={mine.standard} className="min-h-18" />
              {mine.drops.map((drop) => (
                <ItemTile
                  key={drop.id}
                  itemId={drop.id}
                  quantityText={drop.label}
                  className="min-h-18"
                />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </UIModal>
  );
}

export default Mine;
