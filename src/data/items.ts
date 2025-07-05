export type ItemType = "material" | "tool" | "buff";

export type BaseItem = {
  name: string;
  icon: string;
};

export type MaterialItem = BaseItem & {
  type: "material";
  value: number;
};

export type ToolItem = BaseItem & {
  type: "tool";
  damage: number;
};

export type Item = ToolItem | MaterialItem;

export const ITEMS = {
  stone: {
    name: "Stone",
    icon: "",
    type: "material",
    value: 1,
  },
  coal: {
    name: "Coal",
    icon: "",
    type: "material",
    value: 2,
  },
  amethyst: {
    name: "Amethyst",
    icon: "",
    type: "material",
    value: 10,
  },
  woodenPickaxe: {
    damage: 1,
    icon: "",
    name: "Wooden Pickaxe",
    type: "tool",
  },
  stonePickaxe: {
    damage: 3,
    icon: "",
    name: "Stone Pickaxe",
    type: "tool",
  },
} as const satisfies Record<string, Item>;

export type ItemKey = keyof typeof ITEMS;

export type ItemToolKey = {
  [K in ItemKey]: (typeof ITEMS)[K] extends ToolItem ? K : never;
}[ItemKey];
