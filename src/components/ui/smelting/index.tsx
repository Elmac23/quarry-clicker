import { ModalProps } from "@/components/modal";
import ModalHeader from "@/components/modal/ModalHeader";
import UIModal from "@/components/modal/UIModal";
import ItemGrid from "../ItemGrid";
import {
  ItemWithQuantity,
  removeItem,
  useInventory,
  useItem,
} from "@/store/inventory";
import { useMemo } from "react";
import { ItemOreKey, ITEMS } from "@/data/items";
import ItemTile from "@/components/ItemTile";
import { useAppDispatch } from "@/hooks/redux";
import { addItem, SmeltPosition, useSmelt } from "@/store/smelt";
import SmeltingItem from "./SmeltingItem";
import SmeltedItem from "./SmeltedItem";

type SmeltingModalProps = Pick<ModalProps, "isOpen" | "onClose">;

function Smelting({ isOpen, onClose }: SmeltingModalProps) {
  const { items } = useInventory();
  const { totalQuantity: coalQuantity } = useItem("coal");
  const { isFull, smeltPositions } = useSmelt();

  const dispatch = useAppDispatch();

  const ores = useMemo(() => {
    return items.filter((item) => item && ITEMS[item?.id].type === "smeltable");
  }, [items]) as ItemWithQuantity[];

  return (
    <UIModal isOpen={isOpen} onClose={onClose}>
      <ModalHeader>Smelting</ModalHeader>
      <div className="grid grid-fluid md:grid-fluid-lg gap-4 pb-4 mb-4 border-b-4 border-b-black/30">
        {smeltPositions.map((item, index) => getSmeltPosition(item, index))}
      </div>
      <div className="flex flex-row gap-4">
        <ItemGrid
          className="w-full"
          data={ores}
          renderItem={(ore, index) => (
            <ItemTile
              key={index}
              itemId={ore?.id}
              quantity={ore?.quantity}
              onClick={() => {
                if (isFull || coalQuantity < 1) return;
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
          )}
        />
        <ItemTile
          itemId={"coal"}
          quantityText={`${coalQuantity}`}
          className="h-20"
        />
      </div>
    </UIModal>
  );
}

function getSmeltPosition(item: SmeltPosition | null, index: number) {
  if (!item) return <ItemTile key={index} />;
  if (item.isDone) return <SmeltedItem index={index} key={index} item={item} />;

  return <SmeltingItem index={index} key={index} item={item} />;
}

export default Smelting;
