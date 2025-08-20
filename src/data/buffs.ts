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
  | "fortuneEffect"
  | "luckEffect"
  | "smeltingEffect"
  | "greaterWrathEffect"
  | "greaterFortuneEffect"
  | "greaterLuckEffect"
  | "greaterSmeltingEffect"
  | "supremeWrathEffect"
  | "supremeFortuneEffect"
  | "supremeLuckEffect"
  | "supremeSmeltingEffect";

export const BUFFS = {
  // Damage Effects
  wrathEffect: {
    name: "Wrath",
    type: "damage",
    duration: 60, // 5 minutes
    value: 10, // 20% damage increase
    icon: "/sprites/ui/Wrath.png",
  },
  greaterWrathEffect: {
    name: "Wrath II",
    type: "damage",
    duration: 180, // 7.5 minutes
    value: 20,
    icon: "/sprites/ui/Wrath.png",
  },
  supremeWrathEffect: {
    name: "Wrath III",
    type: "damage",
    duration: 300,
    value: 40,
    icon: "/sprites/ui/Wrath.png",
  },

  // Double Drop Chance Effects
  fortuneEffect: {
    name: "Fortune",
    type: "doubleDropChance",
    duration: 60,
    value: 10,
    icon: "/sprites/ui/Fortune.png",
  },
  greaterFortuneEffect: {
    name: "Fortune II",
    type: "doubleDropChance",
    duration: 180,
    value: 15,
    icon: "/sprites/ui/Fortune.png",
  },
  supremeFortuneEffect: {
    name: "Fortune III",
    type: "doubleDropChance",
    duration: 300,
    value: 30,
    icon: "/sprites/ui/Fortune.png",
  },

  // Critical Chance Effects
  luckEffect: {
    name: "Luck",
    type: "criticalChance",
    duration: 60,
    value: 5, // 15% critical chance
    icon: "/sprites/ui/Luck.png",
  },
  greaterLuckEffect: {
    name: "Luck II",
    type: "criticalChance",
    duration: 180,
    value: 10, // 25% critical chance
    icon: "/sprites/ui/Luck.png",
  },
  supremeLuckEffect: {
    name: "Luck III",
    type: "criticalChance",
    duration: 300,
    value: 15, // 40% critical chance
    icon: "/sprites/ui/Luck.png",
  },

  // Smelting Speed Effects
  smeltingEffect: {
    name: "Smelting",
    type: "smeltingSpeed",
    duration: 60,
    value: 100, // 30% faster smelting
    icon: "/sprites/ui/Smelting.png",
  },
  greaterSmeltingEffect: {
    name: "Smelting II",
    type: "smeltingSpeed",
    duration: 180,
    value: 300, // 50% faster smelting
    icon: "/sprites/ui/Smelting.png",
  },
  supremeSmeltingEffect: {
    name: "Smelting III",
    type: "smeltingSpeed",
    duration: 300,
    value: 1000, // 75% faster smelting
    icon: "/sprites/ui/Smelting.png",
  },
} as const satisfies Record<BuffId, Buff>;
