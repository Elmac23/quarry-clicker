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
  // Base materials
  stone: {
    name: "Stone",
    icon: "/sprites/items/Rock_Light.png",
    type: "material",
    value: 1,
  },
  coal: {
    name: "Coal",
    icon: "/sprites/items/coal.png",
    type: "material",
    value: 2,
  },

  // Materials without sprites (questionmark)
  sand: {
    name: "Sand",
    icon: "/sprites/ui/questionmark.png",
    type: "material",
    value: 0,
  },
  glass: {
    name: "Glass",
    icon: "/sprites/ui/questionmark.png",
    type: "material",
    value: 0,
  },
  clay: {
    name: "Clay",
    icon: "/sprites/ui/questionmark.png",
    type: "material",
    value: 0,
  },

  // Ores
  tinOre: {
    name: "Tin Ore",
    icon: "/sprites/items/Tin_Ore.png",
    type: "material",
    value: 0,
  },
  copperOre: {
    name: "Copper Ore",
    icon: "/sprites/items/Copper_Ore.png",
    type: "material",
    value: 0,
  },
  ironOre: {
    name: "Iron Ore",
    icon: "/sprites/items/Iron_Ore.png",
    type: "material",
    value: 0,
  },
  silverOre: {
    name: "Silver Ore",
    icon: "/sprites/items/Silver_Ore.png",
    type: "material",
    value: 0,
  },
  goldOre: {
    name: "Gold Ore",
    icon: "/sprites/items/Gold_Ore.png",
    type: "material",
    value: 0,
  },
  platinumOre: {
    name: "Platinum Ore",
    icon: "/sprites/items/Platinum_Ore.png",
    type: "material",
    value: 0,
  },
  aluminiumOre: {
    name: "Aluminium Ore",
    icon: "/sprites/items/Aluminium_Ore.png",
    type: "material",
    value: 0,
  },
  leadOre: {
    name: "Lead Ore",
    icon: "/sprites/items/Lead_Ore.png",
    type: "material",
    value: 0,
  },

  // Bars
  tinBar: {
    name: "Tin Bar",
    icon: "/sprites/items/Tin_Bar.png",
    type: "material",
    value: 0,
  },
  copperBar: {
    name: "Copper Bar",
    icon: "/sprites/items/Copper_Bar.png",
    type: "material",
    value: 0,
  },
  bronzeBar: {
    name: "Bronze Bar",
    icon: "/sprites/items/Bronze_Bar.png",
    type: "material",
    value: 0,
  },
  ironBar: {
    name: "Iron Bar",
    icon: "/sprites/items/Iron_Bar.png",
    type: "material",
    value: 0,
  },
  steelBar: {
    name: "Steel Bar",
    icon: "/sprites/items/Steel_Bar.png",
    type: "material",
    value: 0,
  },
  silverBar: {
    name: "Silver Bar",
    icon: "/sprites/items/Silver_Bar.png",
    type: "material",
    value: 0,
  },
  goldenBar: {
    name: "Golden Bar",
    icon: "/sprites/items/Golden_Bar.png",
    type: "material",
    value: 0,
  },
  platinumBar: {
    name: "Platinum Bar",
    icon: "/sprites/items/Platinum_Bar.png",
    type: "material",
    value: 0,
  },
  aluminiumBar: {
    name: "Aluminium Bar",
    icon: "/sprites/items/Aluminium_Bar.png",
    type: "material",
    value: 0,
  },
  leadBar: {
    name: "Lead Bar",
    icon: "/sprites/items/Lead_Bar.png",
    type: "material",
    value: 0,
  },

  // Gems
  amethyst: {
    name: "Amethyst",
    icon: "/sprites/items/Amethyst.png",
    type: "material",
    value: 10,
  },
  diamond: {
    name: "Diamond",
    icon: "/sprites/items/Diamond.png",
    type: "material",
    value: 0,
  },
  emerald: {
    name: "Emerald",
    icon: "/sprites/items/Emerald.png",
    type: "material",
    value: 0,
  },
  ruby: {
    name: "Ruby",
    icon: "/sprites/items/Ruby.png",
    type: "material",
    value: 0,
  },
  sapphire: {
    name: "Sapphire",
    icon: "/sprites/items/Saphire.png",
    type: "material",
    value: 0,
  },
  topaz: {
    name: "Topaz",
    icon: "/sprites/items/Topaz.png",
    type: "material",
    value: 0,
  },
  opal: {
    name: "Opal",
    icon: "/sprites/items/Opal.png",
    type: "material",
    value: 0,
  },

  // Special items
  geode: {
    name: "Geode",
    icon: "/sprites/items/Geode.png",
    type: "material",
    value: 0,
  },
  gear: {
    name: "Gear",
    icon: "/sprites/items/Gear.png",
    type: "material",
    value: 0,
  },
  wire: {
    name: "Wire",
    icon: "/sprites/items/wire.png",
    type: "material",
    value: 0,
  },
  money: {
    name: "Money",
    icon: "/sprites/items/money.png",
    type: "material",
    value: 0,
  },
  food: {
    name: "Food",
    icon: "/sprites/items/food.png",
    type: "material",
    value: 0,
  },
  batwing: {
    name: "Bat Wing",
    icon: "/sprites/items/batwing.png",
    type: "material",
    value: 0,
  },
  torch: {
    name: "Torch",
    icon: "/sprites/items/torch.png",
    type: "material",
    value: 0,
  },
  flashlight: {
    name: "Flashlight",
    icon: "/sprites/items/flashlight.png",
    type: "material",
    value: 0,
  },
  combinerAlpha: {
    name: "Combiner Alpha",
    icon: "/sprites/items/CombinerAlpha.png",
    type: "material",
    value: 0,
  },
  combinerBeta: {
    name: "Combiner Beta",
    icon: "/sprites/items/CombinerBeta.png",
    type: "material",
    value: 0,
  },

  // Tools - Pickaxes
  woodenPickaxe: {
    damage: 1,
    icon: "/sprites/items/Wooden_Pickaxe.png",
    name: "Wooden Pickaxe",
    type: "tool",
  },
  stonePickaxe: {
    damage: 3,
    icon: "/sprites/items/Stone_Pickaxe.png",
    name: "Stone Pickaxe",
    type: "tool",
  },
  tinPickaxe: {
    damage: 5,
    icon: "/sprites/items/Tin_Pickaxe.png",
    name: "Tin Pickaxe",
    type: "tool",
  },
  copperPickaxe: {
    damage: 7,
    icon: "/sprites/items/Copper_Pickaxe.png",
    name: "Copper Pickaxe",
    type: "tool",
  },
  bronzePickaxe: {
    damage: 10,
    icon: "/sprites/items/Bronze_Pickaxe.png",
    name: "Bronze Pickaxe",
    type: "tool",
  },
  ironPickaxe: {
    damage: 15,
    icon: "/sprites/items/Iron_Pickaxe.png",
    name: "Iron Pickaxe",
    type: "tool",
  },
  steelPickaxe: {
    damage: 20,
    icon: "/sprites/items/Steel_Pickaxe.png",
    name: "Steel Pickaxe",
    type: "tool",
  },
  silverPickaxe: {
    damage: 25,
    icon: "/sprites/items/Silver_Pickaxe.png",
    name: "Silver Pickaxe",
    type: "tool",
  },
  goldenPickaxe: {
    damage: 35,
    icon: "/sprites/items/Golden_Pickaxe.png",
    name: "Golden Pickaxe",
    type: "tool",
  },
  platinumPickaxe: {
    damage: 50,
    icon: "/sprites/items/Platinum_Pickaxe.png",
    name: "Platinum Pickaxe",
    type: "tool",
  },
  aluminiumPickaxe: {
    damage: 60,
    icon: "/sprites/items/Aluminium_Pickaxe.png",
    name: "Aluminium Pickaxe",
    type: "tool",
  },
  leadPickaxe: {
    damage: 75,
    icon: "/sprites/items/Lead_Pickaxe.png",
    name: "Lead Pickaxe",
    type: "tool",
  },
} as const satisfies Record<string, Item>;

export type ItemKey = keyof typeof ITEMS;

export type ItemToolKey = {
  [K in ItemKey]: (typeof ITEMS)[K] extends ToolItem ? K : never;
}[ItemKey];
