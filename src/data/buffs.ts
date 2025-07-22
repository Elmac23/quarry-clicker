export type BuffType =
  | "damage"
  | "flatDamage"
  | "smeltingSpeed"
  | "doubleDropChance"
  | "monsterSpawnChance"
  | "value"
  | "criticalChance"
  | "criticalBonus";

export type Buff = {
  name: string;
  type: BuffType;
  duration: number;
  value: number;
  icon: string;
};

export type BuffId =
  | "wrathEffect"
  | "greedEffect"
  | "fortuneEffect"
  | "luckEffect"
  | "monsterEffect"
  | "smeltingEffect"
  | "greaterWrathEffect"
  | "greaterGreedEffect"
  | "greaterFortuneEffect"
  | "greaterLuckEffect"
  | "greaterMonsterEffect"
  | "greaterSmeltingEffect"
  | "supremeWrathEffect"
  | "supremeGreedEffect"
  | "supremeFortuneEffect"
  | "supremeLuckEffect"
  | "supremeMonsterEffect"
  | "supremeSmeltingEffect";

export const BUFFS = {
  // Damage Effects
  wrathEffect: {
    name: "Wrath",
    type: "damage",
    duration: 5, // 5 minutes
    value: 20, // 20% damage increase
    icon: "/sprites/ui/Wrath.png",
  },
  greaterWrathEffect: {
    name: "Wrath II",
    type: "damage",
    duration: 450, // 7.5 minutes
    value: 40, // 40% damage increase
    icon: "/sprites/ui/Wrath.png",
  },
  supremeWrathEffect: {
    name: "Wrath III",
    type: "damage",
    duration: 600, // 10 minutes
    value: 75, // 75% damage increase
    icon: "/sprites/ui/Wrath.png",
  },

  // Value Effects
  greedEffect: {
    name: "Greed",
    type: "value",
    duration: 300,
    value: 50, // 50% value increase
    icon: "/sprites/ui/Greed.png",
  },
  greaterGreedEffect: {
    name: "Greed II",
    type: "value",
    duration: 450,
    value: 75, // 75% value increase
    icon: "/sprites/ui/Greed.png",
  },
  supremeGreedEffect: {
    name: "Greed III",
    type: "value",
    duration: 600,
    value: 100, // 100% value increase
    icon: "/sprites/ui/Greed.png",
  },

  // Double Drop Chance Effects
  fortuneEffect: {
    name: "Fortune",
    type: "doubleDropChance",
    duration: 300,
    value: 25, // 25% chance for double drops
    icon: "/sprites/ui/Fortune.png",
  },
  greaterFortuneEffect: {
    name: "Fortune II",
    type: "doubleDropChance",
    duration: 450,
    value: 40, // 40% chance for double drops
    icon: "/sprites/ui/Fortune.png",
  },
  supremeFortuneEffect: {
    name: "Fortune III",
    type: "doubleDropChance",
    duration: 600,
    value: 60, // 60% chance for double drops
    icon: "/sprites/ui/Fortune.png",
  },

  // Critical Chance Effects
  luckEffect: {
    name: "Luck",
    type: "criticalChance",
    duration: 300,
    value: 15, // 15% critical chance
    icon: "/sprites/ui/Luck.png",
  },
  greaterLuckEffect: {
    name: "Luck II",
    type: "criticalChance",
    duration: 450,
    value: 25, // 25% critical chance
    icon: "/sprites/ui/Luck.png",
  },
  supremeLuckEffect: {
    name: "Luck III",
    type: "criticalChance",
    duration: 600,
    value: 40, // 40% critical chance
    icon: "/sprites/ui/Luck.png",
  },

  // Monster Spawn Chance Effects
  monsterEffect: {
    name: "Monster Power",
    type: "monsterSpawnChance",
    duration: 300,
    value: 10, // 10% monster spawn chance
    icon: "/sprites/ui/Monster.png",
  },
  greaterMonsterEffect: {
    name: "Monster Power II",
    type: "monsterSpawnChance",
    duration: 450,
    value: 20, // 20% monster spawn chance
    icon: "/sprites/ui/Monster.png",
  },
  supremeMonsterEffect: {
    name: "Monster Power III",
    type: "monsterSpawnChance",
    duration: 600,
    value: 35, // 35% monster spawn chance
    icon: "/sprites/ui/Monster.png",
  },

  // Smelting Speed Effects
  smeltingEffect: {
    name: "Smelting Speed",
    type: "smeltingSpeed",
    duration: 300,
    value: 30, // 30% faster smelting
    icon: "/sprites/ui/Smelting.png",
  },
  greaterSmeltingEffect: {
    name: "Smelting Speed II",
    type: "smeltingSpeed",
    duration: 450,
    value: 50, // 50% faster smelting
    icon: "/sprites/ui/Smelting.png",
  },
  supremeSmeltingEffect: {
    name: "Smelting Speed III",
    type: "smeltingSpeed",
    duration: 600,
    value: 2000, // 75% faster smelting
    icon: "/sprites/ui/Smelting.png",
  },
} as const satisfies Record<BuffId, Buff>;
