import { ModalProps } from "@/components/modal";
import UIModal from "@/components/modal/UIModal";
import ItemGrid from "../ItemGrid";
import { removeItem, useInventory, useItem } from "@/store/inventory";
import { useMemo } from "react";
import { ItemOreKey, ITEMS, TypedItemWithQuantity } from "@/data/items";
import ItemTile from "@/components/ItemTile";
import { useAppDispatch } from "@/hooks/redux";
import { addItem, SmeltPosition, useSmelt } from "@/store/smelt";
import SmeltingItem from "./SmeltingItem";
import SmeltedItem from "./SmeltedItem";
import Text from "@/components/Text";
import { useAudio } from "@/hooks/useAudio";
import Tooltip from "@/components/Tooltip";
import Sprite from "@/components/Sprite";

type SmeltingModalProps = Pick<ModalProps, "isOpen" | "onClose">;

function Smelting({ isOpen, onClose }: SmeltingModalProps) {
  const { items } = useInventory();
  const { totalQuantity: coalQuantity } = useItem("coal");
  const { isFull, smeltPositions } = useSmelt();

  const dispatch = useAppDispatch();
  const clickSound = useAudio("577025__nezuai__ui-sound-2.wav", 0.5);

  const ores = useMemo(() => {
    return items.filter((item) => item && ITEMS[item?.id].type === "smeltable");
  }, [items]) as TypedItemWithQuantity[];

  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <Text as="h2" size="xl" color="primary">
        Smelting
      </Text>
      {!smeltPositions.length && (
        <Text size="xl" className="w-full">
          Craft Stone Furnace first!
        </Text>
      )}

      <ul className="grid grid-fluid md:grid-fluid-lg gap-4 pb-4 mb-4 border-b-4 border-b-black/30">
        {smeltPositions.map((item, index) => getSmeltPosition(item, index))}
      </ul>
      <div className="flex flex-row gap-4">
        <ItemGrid
          className="w-full overflow-visible"
          data={ores}
          renderItem={(ore, index) => {
            return (
              <Tooltip key={index} content={ITEMS[ore.id].name}>
                <ItemTile
                  itemKey={ore?.id}
                  quantity={ore?.quantity}
                  onClick={() => {
                    if (isFull || coalQuantity < 1) return;
                    clickSound.play();
                    dispatch(
                      addItem({
                        item: ore.id as ItemOreKey,
                      })
                    );
                    dispatch(
                      removeItem({
                        item: ore.id,
                        amount: 1,
                      })
                    );

                    dispatch(
                      removeItem({
                        item: "coal",
                        amount: 1,
                      })
                    );
                  }}
                />
              </Tooltip>
            );
          }}
        />
        <ItemTile
          itemKey={"coal"}
          quantityText={`${coalQuantity}`}
          className="h-20"
        />
      </div>
    </UIModal>
  );
}

function getSmeltPosition(item: SmeltPosition | null, index: number) {
  if (!item)
    return (
      <ItemTile as="li" key={index}>
        <Sprite
          className="w-13/15"
          src="/sprites/ui/EmptyBar.png"
          alt="Bar outline"
        />
      </ItemTile>
    );
  if (item.isDone) return <SmeltedItem index={index} key={index} item={item} />;

  return <SmeltingItem index={index} key={index} item={item} />;
}

export default Smelting;
