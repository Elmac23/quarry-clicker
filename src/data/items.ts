import { BuffId } from "./buffs";

export type BaseItem = {
  name: string;
  icon: string;
  description: string;
};

export type MaterialItem = BaseItem & {
  type: "material";
  value: number;
};

export type SmeltableItem = BaseItem & {
  type: "smeltable";
  value: number;
  smeltTime: number;
};

export type PickaxeItem = BaseItem & {
  type: "pickaxe";
  damage: number;
  criticalChance: number;
};

export type PotionItem = BaseItem & {
  type: "potion";
  effect: BuffId;
  value: number;
};

export type UpgradeItem = BaseItem & {
  type: "upgrade";
  effect: never;
};

export type Item =
  | PickaxeItem
  | MaterialItem
  | SmeltableItem
  | PotionItem
  | UpgradeItem;

export type ItemType = Item["type"];

export const ITEMS = {
  // Base materials
  stone: {
    name: "Stone",
    icon: "/sprites/items/materials/Rock_Light.png",
    type: "material",
    value: 1,
    description: "Common building material found everywhere in the mines.",
  },
  coal: {
    name: "Coal",
    icon: "/sprites/items/materials/coal.png",
    type: "material",
    value: 2,
    description: "Combustible black rock used for fuel and crafting.",
  },

  sand: {
    name: "Sand",
    icon: "/sprites/items/smeltable/Sand.png",
    type: "smeltable",
    value: 0,
    smeltTime: 5,
    description: "It gets everywhere... Can be smelted into glass",
  },
  glass: {
    name: "Glass",
    icon: "/sprites/items/materials/Glass.png",
    type: "material",
    value: 0,
    description: "Transparent material made from heated sand.",
  },
  emptyBottle: {
    name: "Empty Bottle",
    icon: "/sprites/items/materials/Bottle.png",
    type: "material",
    value: 0,
    description: "Can be filled with liquid.",
  },
  greaterEmptyBottle: {
    name: "Greater Empty Bottle",
    icon: "/sprites/items/materials/Greater_Bottle.png",
    type: "material",
    value: 0,
    description: "Enhanced bottle capable of holding stronger potions.",
  },
  clay: {
    name: "Clay",
    icon: "/sprites/ui/questionmark.png",
    type: "material",
    value: 0,
    description: "Moldable earth material useful for pottery.",
  },

  // Ores
  tinOre: {
    name: "Tin Ore",
    icon: "/sprites/items/smeltable/Tin_Ore.png",
    type: "smeltable",
    value: 0,
    smeltTime: 5,
    description: "Common metallic ore that can be smelted into tin bars.",
  },
  copperOre: {
    name: "Copper Ore",
    icon: "/sprites/items/smeltable/Copper_Ore.png",
    type: "smeltable",
    value: 0,
    smeltTime: 7.5,
    description: "Reddish metal ore excellent for conducting electricity.",
  },
  ironOre: {
    name: "Iron Ore",
    icon: "/sprites/items/smeltable/Iron_Ore.png",
    type: "smeltable",
    value: 0,
    smeltTime: 10,
    description: "Sturdy metal ore that forms the backbone of industry.",
  },
  leadOre: {
    name: "Lead Ore",
    icon: "/sprites/items/smeltable/Lead_Ore.png",
    type: "smeltable",
    value: 0,
    smeltTime: 12.5,
    description: "Heavy metal ore with useful properties.",
  },
  aluminiumOre: {
    name: "Aluminium Ore",
    icon: "/sprites/items/smeltable/Aluminium_Ore.png",
    type: "smeltable",
    value: 0,
    smeltTime: 15,
    description: "Lightweight metal ore perfect for advanced crafting.",
  },
  silverOre: {
    name: "Silver Ore",
    icon: "/sprites/items/smeltable/Silver_Ore.png",
    type: "smeltable",
    value: 0,
    smeltTime: 17.5,
    description: "Precious white metal ore with high conductivity.",
  },
  goldOre: {
    name: "Gold Ore",
    icon: "/sprites/items/smeltable/Gold_Ore.png",
    type: "smeltable",
    value: 0,
    smeltTime: 20,
    description: "Valuable yellow metal ore prized for its beauty.",
  },
  platinumOre: {
    name: "Platinum Ore",
    icon: "/sprites/items/smeltable/Platinum_Ore.png",
    type: "smeltable",
    value: 0,
    smeltTime: 22.5,
    description: "Rare and extremely valuable white metal ore.",
  },

  // Bars
  tinBar: {
    name: "Tin Bar",
    icon: "/sprites/items/materials/Tin_Bar.png",
    type: "material",
    value: 0,
    description: "Refined tin metal ready for crafting basic tools.",
  },
  copperBar: {
    name: "Copper Bar",
    icon: "/sprites/items/materials/Copper_Bar.png",
    type: "material",
    value: 0,
    description: "Pure copper metal excellent for electrical components.",
  },
  bronzeBar: {
    name: "Bronze Bar",
    icon: "/sprites/items/materials/Bronze_Bar.png",
    type: "material",
    value: 0,
    description: "Alloy of copper and tin, stronger than either alone.",
  },
  ironBar: {
    name: "Iron Bar",
    icon: "/sprites/items/materials/Iron_Bar.png",
    type: "material",
    value: 0,
    description: "Solid iron metal perfect for sturdy equipment.",
  },
  steelBar: {
    name: "Steel Bar",
    icon: "/sprites/items/materials/Steel_Bar.png",
    type: "material",
    value: 0,
    description: "Strong iron alloy ideal for advanced tools.",
  },
  silverBar: {
    name: "Silver Bar",
    icon: "/sprites/items/materials/Silver_Bar.png",
    type: "material",
    value: 0,
    description: "Precious silver metal with excellent conductivity.",
  },
  goldenBar: {
    name: "Golden Bar",
    icon: "/sprites/items/materials/Golden_Bar.png",
    type: "material",
    value: 0,
    description: "Pure gold bar of exceptional value and beauty.",
  },
  platinumBar: {
    name: "Platinum Bar",
    icon: "/sprites/items/materials/Platinum_Bar.png",
    type: "material",
    value: 0,
    description: "Ultra-rare platinum metal of supreme quality.",
  },
  aluminiumBar: {
    name: "Aluminium Bar",
    icon: "/sprites/items/materials/Aluminium_Bar.png",
    type: "material",
    value: 0,
    description: "Lightweight aluminum perfect for high-tech gear.",
  },
  leadBar: {
    name: "Lead Bar",
    icon: "/sprites/items/materials/Lead_Bar.png",
    type: "material",
    value: 0,
    description: "Dense lead metal useful for specific applications.",
  },

  // Gems
  amethyst: {
    name: "Amethyst",
    icon: "/sprites/items/materials/Amethyst.png",
    type: "material",
    value: 10,
    description:
      "Beautiful purple gemstone prized for its mystical properties.",
  },
  diamond: {
    name: "Diamond",
    icon: "/sprites/items/materials/Diamond.png",
    type: "material",
    value: 0,
    description: "Hardest known natural substance, extremely valuable.",
  },
  emerald: {
    name: "Emerald",
    icon: "/sprites/items/materials/Emerald.png",
    type: "material",
    value: 0,
    description: "Vibrant green gemstone of exceptional beauty.",
  },
  ruby: {
    name: "Ruby",
    icon: "/sprites/items/materials/Ruby.png",
    type: "material",
    value: 0,
    description: "Brilliant red gemstone symbolizing passion and power.",
  },
  sapphire: {
    name: "Sapphire",
    icon: "/sprites/items/materials/Saphire.png",
    type: "material",
    value: 0,
    description: "Deep blue gemstone representing wisdom and royalty.",
  },
  topaz: {
    name: "Topaz",
    icon: "/sprites/items/materials/Topaz.png",
    type: "material",
    value: 0,
    description: "Golden yellow gemstone that brings clarity and strength.",
  },
  opal: {
    name: "Opal",
    icon: "/sprites/items/materials/Opal.png",
    type: "material",
    value: 0,
    description: "Iridescent gemstone with mesmerizing color play.",
  },

  // Special items
  geode: {
    name: "Geode",
    icon: "/sprites/items/materials/Geode.png",
    type: "material",
    value: 0,
    description: "Mysterious rock formation containing hidden treasures.",
  },
  gear: {
    name: "Gear",
    icon: "/sprites/items/materials/Gear.png",
    type: "material",
    value: 0,
    description: "Mechanical component essential for advanced machinery.",
  },
  wire: {
    name: "Wire",
    icon: "/sprites/items/materials/wire.png",
    type: "material",
    value: 0,
    description: "Flexible metal conductor for electrical connections.",
  },
  money: {
    name: "Money",
    icon: "/sprites/items/materials/money.png",
    type: "material",
    value: 0,
    description: "Universal currency for purchasing items and upgrades.",
  },
  food: {
    name: "Food",
    icon: "/sprites/items/materials/food.png",
    type: "material",
    value: 0,
    description: "Nourishment to sustain miners during long expeditions.",
  },
  batwing: {
    name: "Bat Wing",
    icon: "/sprites/items/materials/batwing.png",
    type: "material",
    value: 0,
    description: "Membrane from cave bats, useful for peculiar crafts.",
  },
  torch: {
    name: "Torch",
    icon: "/sprites/items/materials/torch.png",
    type: "material",
    value: 0,
    description: "Simple light source for illuminating dark passages.",
  },
  flashlight: {
    name: "Flashlight",
    icon: "/sprites/items/materials/flashlight.png",
    type: "material",
    value: 0,
    description: "Modern lighting device powered by batteries.",
  },
  combinerAlpha: {
    name: "Combiner Alpha",
    icon: "/sprites/items/materials/CombinerAlpha.png",
    type: "material",
    value: 0,
    description: "Advanced component for merging different materials.",
  },
  combinerBeta: {
    name: "Combiner Beta",
    icon: "/sprites/items/materials/CombinerBeta.png",
    type: "material",
    value: 0,
    description: "Enhanced combiner for complex material fusion.",
  },

  // Tools - Pickaxes
  woodenPickaxe: {
    damage: 1,
    criticalChance: 1,
    icon: "/sprites/items/pickaxes/Wooden_Pickaxe.png",
    name: "Wooden Pickaxe",
    type: "pickaxe",
    description: "Basic mining tool made from wood, good for starting out.",
  },
  stonePickaxe: {
    damage: 3,
    criticalChance: 2,
    icon: "/sprites/items/pickaxes/Stone_Pickaxe.png",
    name: "Stone Pickaxe",
    type: "pickaxe",
    description: "Crude but effective stone tool for mining harder materials.",
  },
  tinPickaxe: {
    damage: 5,
    criticalChance: 3,
    icon: "/sprites/items/pickaxes/Tin_Pickaxe.png",
    name: "Tin Pickaxe",
    type: "pickaxe",
    description: "First metal pickaxe, more durable than stone.",
  },
  copperPickaxe: {
    damage: 7,
    criticalChance: 4,
    icon: "/sprites/items/pickaxes/Copper_Pickaxe.png",
    name: "Copper Pickaxe",
    type: "pickaxe",
    description: "Efficient copper tool that cuts through rock easily.",
  },
  bronzePickaxe: {
    damage: 10,
    criticalChance: 5,
    icon: "/sprites/items/pickaxes/Bronze_Pickaxe.png",
    name: "Bronze Pickaxe",
    type: "pickaxe",
    description: "Strong bronze alloy pickaxe for serious mining.",
  },
  ironPickaxe: {
    damage: 15,
    criticalChance: 7,
    icon: "/sprites/items/pickaxes/Iron_Pickaxe.png",
    name: "Iron Pickaxe",
    type: "pickaxe",
    description: "Sturdy iron tool capable of mining most materials.",
  },
  steelPickaxe: {
    damage: 20,
    criticalChance: 9,
    icon: "/sprites/items/pickaxes/Steel_Pickaxe.png",
    name: "Steel Pickaxe",
    type: "pickaxe",
    description: "High-quality steel tool for efficient mining operations.",
  },
  silverPickaxe: {
    damage: 25,
    criticalChance: 11,
    icon: "/sprites/items/pickaxes/Silver_Pickaxe.png",
    name: "Silver Pickaxe",
    type: "pickaxe",
    description: "Precious metal pickaxe with enhanced mining capabilities.",
  },
  goldenPickaxe: {
    damage: 35,
    criticalChance: 14,
    icon: "/sprites/items/pickaxes/Golden_Pickaxe.png",
    name: "Golden Pickaxe",
    type: "pickaxe",
    description: "Luxurious gold tool that mines with incredible efficiency.",
  },
  platinumPickaxe: {
    damage: 50,
    criticalChance: 18,
    icon: "/sprites/items/pickaxes/Platinum_Pickaxe.png",
    name: "Platinum Pickaxe",
    type: "pickaxe",
    description: "Ultimate platinum tool for the most demanding mining tasks.",
  },
  aluminiumPickaxe: {
    damage: 60,
    criticalChance: 22,
    icon: "/sprites/items/pickaxes/Aluminium_Pickaxe.png",
    name: "Aluminium Pickaxe",
    type: "pickaxe",
    description: "Lightweight yet powerful aluminum tool for advanced miners.",
  },
  leadPickaxe: {
    damage: 75,
    criticalChance: 25,
    icon: "/sprites/items/pickaxes/Lead_Pickaxe.png",
    name: "Lead Pickaxe",
    type: "pickaxe",
    description: "Heavy-duty lead tool that crushes through any material.",
  },

  /// Potions

  wrathPotion: {
    name: "Potion of Wrath",
    effect: "wrathEffect",
    value: 0,
    type: "potion",
    description: "Increases pickaxe's damage by 20%",
    icon: "/sprites/items/potions/Wrath_Potion.png",
  },
  greedPotion: {
    name: "Potion of Greed",
    effect: "greedEffect",
    value: 0,
    type: "potion",
    description: "Increases the value of materials collected",
    icon: "/sprites/items/potions/Greed_Potion.png",
  },
  fortunePotion: {
    name: "Potion of Fortune",
    effect: "fortuneEffect",
    value: 0,
    type: "potion",
    description: "Increases the chance of finding rare materials",
    icon: "/sprites/items/potions/Fortune_Potion.png",
  },
  luckPotion: {
    name: "Potion of Luck",
    effect: "luckEffect",
    value: 0,
    type: "potion",
    description: "Improves overall mining luck and gem discovery",
    icon: "/sprites/items/potions/Luck_Potion.png",
  },
  monsterPotion: {
    name: "Monster Potion",
    effect: "monsterEffect",
    value: 0,
    type: "potion",
    description: "Grants supernatural mining abilities",
    icon: "/sprites/items/potions/Monster_Potion.png",
  },
  smeltingPotion: {
    name: "Smelting Potion",
    effect: "smeltingEffect",
    value: 0,
    type: "potion",
    description: "Reduces smelting time and improves efficiency",
    icon: "/sprites/items/potions/Smelting_Potion.png",
  },

  /// Greater Potions

  greaterWrathPotion: {
    name: "Greater Potion of Wrath",
    effect: "greaterWrathEffect",
    value: 0,
    type: "potion",
    description: "Increases pickaxe's damage by 40%",
    icon: "/sprites/items/potions/Greater_Wrath_Potion.png",
  },
  greaterGreedPotion: {
    name: "Greater Potion of Greed",
    effect: "greaterGreedEffect",
    value: 0,
    type: "potion",
    description: "Greatly increases the value of materials collected",
    icon: "/sprites/items/potions/Greater_Greed_Potion.png",
  },
  greaterFortunePotion: {
    name: "Greater Potion of Fortune",
    effect: "greaterFortuneEffect",
    value: 0,
    type: "potion",
    description: "Significantly increases the chance of finding rare materials",
    icon: "/sprites/items/potions/Greater_Fortune_Potion.png",
  },
  greaterLuckPotion: {
    name: "Greater Potion of Luck",
    effect: "greaterLuckEffect",
    value: 0,
    type: "potion",
    description: "Greatly improves overall mining luck and gem discovery",
    icon: "/sprites/items/potions/Greater_Luck_Potion.png",
  },
  greaterMonsterPotion: {
    name: "Greater Monster Potion",
    effect: "greaterMonsterEffect",
    value: 0,
    type: "potion",
    description: "Grants enhanced supernatural mining abilities",
    icon: "/sprites/items/potions/Greater_Monster_Potion.png",
  },
  greaterSmeltingPotion: {
    name: "Greater Smelting Potion",
    effect: "greaterSmeltingEffect",
    value: 0,
    type: "potion",
    description: "Significantly reduces smelting time and improves efficiency",
    icon: "/sprites/items/potions/Greater_Smelting_Potion.png",
  },

  /// Supreme Potions

  supremeWrathPotion: {
    name: "Supreme Potion of Wrath",
    effect: "supremeWrathEffect",
    value: 0,
    type: "potion",
    description: "Increases pickaxe's damage by 75%",
    icon: "/sprites/ui/questionmark.png",
  },
  supremeGreedPotion: {
    name: "Supreme Potion of Greed",
    effect: "supremeGreedEffect",
    value: 0,
    type: "potion",
    description: "Massively increases the value of materials collected",
    icon: "/sprites/ui/questionmark.png",
  },
  supremeFortunePotion: {
    name: "Supreme Potion of Fortune",
    effect: "supremeFortuneEffect",
    value: 0,
    type: "potion",
    description: "Maximizes the chance of finding rare materials",
    icon: "/sprites/ui/questionmark.png",
  },
  supremeLuckPotion: {
    name: "Supreme Potion of Luck",
    effect: "supremeLuckEffect",
    value: 0,
    type: "potion",
    description: "Maximizes overall mining luck and gem discovery",
    icon: "/sprites/ui/questionmark.png",
  },
  supremeMonsterPotion: {
    name: "Supreme Monster Potion",
    effect: "supremeMonsterEffect",
    value: 0,
    type: "potion",
    description: "Grants ultimate supernatural mining abilities",
    icon: "/sprites/ui/questionmark.png",
  },
  supremeSmeltingPotion: {
    name: "Supreme Smelting Potion",
    effect: "supremeSmeltingEffect",
    value: 0,
    type: "potion",
    description: "Maximizes smelting efficiency and speed",
    icon: "/sprites/ui/questionmark.png",
  },
} as const satisfies Record<string, Item>;

export type ItemKey = keyof typeof ITEMS;

export type ItemPickaxeKey = {
  [K in ItemKey]: (typeof ITEMS)[K] extends PickaxeItem ? K : never;
}[ItemKey];

export type ItemPotionKey = {
  [K in ItemKey]: (typeof ITEMS)[K] extends PotionItem ? K : never;
}[ItemKey];

export type ItemUpgradeKey = {
  [K in ItemKey]: (typeof ITEMS)[K] extends UpgradeItem ? K : never;
}[ItemKey];

export type ItemOreKey = {
  [K in ItemKey]: (typeof ITEMS)[K] extends SmeltableItem ? K : never;
}[ItemKey];

export type ActiveItemKey = ItemPickaxeKey | ItemPotionKey | ItemUpgradeKey;
