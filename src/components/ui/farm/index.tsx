import { ModalProps } from "@/components/modal";
import UIModal from "@/components/modal/UIModal";
import Text from "@/components/Text";
import ItemGrid from "../ItemGrid";
import { removeItem, useInventory } from "@/store/inventory";
import { ITEMS, ItemSeedKey, TypedItemWithQuantity } from "@/data/items";
import { useMemo } from "react";
import ItemTile from "@/components/ItemTile";
import { addItem, clearPosition, useFarming } from "@/store/farm";
import Tooltip from "@/components/Tooltip";
import { useAppDispatch } from "@/hooks/redux";
import { addItem as addItemToInventory } from "@/store/inventory";
import { useAudio } from "@/hooks/useAudio";
import { canAddToInventory } from "@/lib/canAddToInventory";
import { addNotification } from "@/store/notification";

type FarmModalProps = Pick<ModalProps, "isOpen" | "onClose">;

function Farming({ isOpen, onClose }: FarmModalProps) {
  const { items } = useInventory();
  const dispatch = useAppDispatch();
  const { plantPositions, isFull } = useFarming();
  const inventoryState = useInventory();

  const clickSound = useAudio("577025__nezuai__ui-sound-2.wav", 0.5);

  const seeds = useMemo(() => {
    return items.filter((item) => item && ITEMS[item?.id].type === "plantable");
  }, [items]) as TypedItemWithQuantity[];
  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <Text size="xl" color="primary">
        Farming
      </Text>
      {seeds.length === 0 ? <Text size="lg">No seeds!</Text> : ""}

      <div className="flex">
        {seeds.length > 0 ? (
          <ItemGrid
            className="h-min"
            data={seeds}
            renderItem={(seed, i) => (
              <Tooltip key={i} content={ITEMS[seed.id].name}>
                <ItemTile
                  itemKey={seed.id}
                  quantity={seed.quantity}
                  onClick={() => {
                    if (isFull) return;

                    clickSound.play();
                    dispatch(
                      removeItem({
                        item: seed.id,
                        amount: 1,
                      })
                    );
                    dispatch(
                      addItem({
                        item: seed.id as ItemSeedKey,
                      })
                    );
                  }}
                />
              </Tooltip>
            )}
          />
        ) : (
          ""
        )}
        <ItemGrid
          data={plantPositions}
          className="grow h-min grid-fluid md:grid-fluid-lg"
          renderItem={(item, i) => (
            <ItemTile
              background={item && item.isDone ? "success" : "standard"}
              key={i}
              itemKey={item?.result}
              quantityText={item?.timeLeft ? item?.timeLeft.toFixed(0) : ""}
              onClick={() => {
                if (!item) return;
                if (!item?.isDone) return;

                const drop = {
                  id: item.result,
                  quantity: item.quantity,
                };

                if (!canAddToInventory(drop, inventoryState)) {
                  dispatch(
                    addNotification({
                      customMessage: "Inventory is full!",
                      itemId: "gear",
                    })
                  );
                  return;
                }
                clickSound.play();
                dispatch(clearPosition(i));
                dispatch(addItemToInventory(drop));
              }}
            />
          )}
        />
      </div>
    </UIModal>
  );
}

export default Farming;
