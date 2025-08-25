import { ItemKey, ItemUpgradeKey } from "./items";

export type Ingredients = {
  item: ItemKey;
  quantity: number;
}[];

export type Recipe = {
  recipe: Ingredients;
  requiredUpgrade?: ItemUpgradeKey;
  quantity: number;
};

export const RECIPES = {
  // PICKAXES
  stonePickaxe: {
    quantity: 1,
    recipe: [
      { item: "stone", quantity: 15 },
      { item: "woodenPickaxe", quantity: 1 },
    ],
  },
  tinPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitAlpha",
    recipe: [
      {
        item: "tinBar",
        quantity: 15,
      },
      { item: "stonePickaxe", quantity: 1 },
    ],
  },
  copperPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitAlpha",
    recipe: [
      {
        item: "copperBar",
        quantity: 15,
      },
      { item: "tinPickaxe", quantity: 1 },
    ],
  },
  bronzePickaxe: {
    quantity: 1,
    requiredUpgrade: "permitBeta",
    recipe: [
      {
        item: "bronzeBar",
        quantity: 15,
      },
      { item: "copperPickaxe", quantity: 1 },
    ],
  },
  leadPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitBeta",
    recipe: [
      {
        item: "leadBar",
        quantity: 20,
      },
      { item: "bronzePickaxe", quantity: 1 },
    ],
  },
  ironPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitBeta",
    recipe: [
      {
        item: "ironBar",
        quantity: 20,
      },
      { item: "leadPickaxe", quantity: 1 },
    ],
  },
  graphitePickaxe: {
    quantity: 1,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "graphite",
        quantity: 20,
      },
      { item: "ironPickaxe", quantity: 1 },
    ],
  },
  steelPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "steelBar",
        quantity: 20,
      },
      { item: "graphitePickaxe", quantity: 1 },
    ],
  },
  aluminiumPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "aluminiumBar",
        quantity: 20,
      },
      { item: "steelPickaxe", quantity: 1 },
    ],
  },
  vioritePickaxe: {
    quantity: 1,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "vioriteBar",
        quantity: 20,
      },
      { item: "aluminiumPickaxe", quantity: 1 },
    ],
  },
  titaniumPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitDelta",
    recipe: [
      {
        item: "titaniumBar",
        quantity: 25,
      },
      { item: "vioritePickaxe", quantity: 1 },
    ],
  },
  tungstenPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitDelta",
    recipe: [
      {
        item: "tungstenBar",
        quantity: 25,
      },
      { item: "titaniumPickaxe", quantity: 1 },
    ],
  },

  azurythPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitDelta",
    recipe: [
      {
        item: "azurythBar",
        quantity: 25,
      },
      { item: "tungstenPickaxe", quantity: 1 },
    ],
  },
  cobaltPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "cobaltBar",
        quantity: 25,
      },
      { item: "azurythPickaxe", quantity: 1 },
    ],
  },
  palestonePickaxe: {
    quantity: 1,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "palestone",
        quantity: 30,
      },
      { item: "azurythPickaxe", quantity: 1 },
    ],
  },
  silverPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "silverBar",
        quantity: 30,
      },
      { item: "palestonePickaxe", quantity: 1 },
    ],
  },
  chromePickaxe: {
    quantity: 1,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "chromeBar",
        quantity: 30,
      },
      { item: "silverPickaxe", quantity: 1 },
    ],
  },
  crimfirePickaxe: {
    quantity: 1,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "crimfireBar",
        quantity: 30,
      },
      { item: "chromePickaxe", quantity: 1 },
    ],
  },
  goldenPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "goldenBar",
        quantity: 30,
      },
      { item: "crimfirePickaxe", quantity: 1 },
    ],
  },
  mossilverPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitZeta",
    recipe: [
      {
        item: "mossilverBar",
        quantity: 35,
      },
      { item: "goldenPickaxe", quantity: 1 },
    ],
  },
  platinumPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitZeta",
    recipe: [
      {
        item: "platinumBar",
        quantity: 35,
      },
      { item: "mossilverPickaxe", quantity: 1 },
    ],
  },
  deepgritPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "deepgrit",
        quantity: 40,
      },
      { item: "platinumPickaxe", quantity: 1 },
    ],
  },
  uraniumPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "uraniumBar",
        quantity: 40,
      },
      { item: "deepgritPickaxe", quantity: 1 },
    ],
  },

  aurorytePickaxe: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "auroryteBar",
        quantity: 40,
      },
      { item: "uraniumPickaxe", quantity: 1 },
    ],
  },
  palladiumPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "palladiumBar",
        quantity: 40,
      },
      { item: "aurorytePickaxe", quantity: 1 },
    ],
  },
  obsidianPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitKappa",
    recipe: [
      {
        item: "obsidian",
        quantity: 45,
      },
      { item: "palladiumPickaxe", quantity: 1 },
    ],
  },
  mythrilPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitKappa",
    recipe: [
      {
        item: "mythrilBar",
        quantity: 45,
      },
      { item: "obsidianPickaxe", quantity: 1 },
    ],
  },
  diamondiumPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitKappa",
    recipe: [
      {
        item: "diamondiumBar",
        quantity: 45,
      },
      { item: "mythrilPickaxe", quantity: 1 },
    ],
  },
  darkmatterPickaxe: {
    quantity: 1,
    requiredUpgrade: "permitOmega",
    recipe: [
      {
        item: "darkMatter",
        quantity: 50,
      },
      { item: "diamondiumPickaxe", quantity: 1 },
    ],
  },
  infinitiumPickaxe: {
    quantity: 1,
    requiredUpgrade: "darkPortal",
    recipe: [
      {
        item: "infinitiumBar",
        quantity: 50,
      },
      { item: "darkmatterPickaxe", quantity: 1 },
    ],
  },

  deepgritDrill: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "deepCore",
        quantity: 10,
      },
      {
        item: "powerModule",
        quantity: 2,
      },
      {
        item: "stabilizer",
        quantity: 2,
      },
    ],
  },

  uraniumDrill: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "deepgritDrill",
        quantity: 1,
      },
      {
        item: "uraniumBar",
        quantity: 40,
      },
    ],
  },

  auroryteDrill: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "uraniumDrill",
        quantity: 1,
      },
      {
        item: "auroryteBar",
        quantity: 40,
      },
    ],
  },

  palladiumDrill: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "auroryteDrill",
        quantity: 1,
      },
      {
        item: "palladiumBar",
        quantity: 40,
      },
    ],
  },

  obsidianDrill: {
    quantity: 1,
    requiredUpgrade: "permitKappa",
    recipe: [
      {
        item: "palladiumDrill",
        quantity: 1,
      },
      {
        item: "obsidian",
        quantity: 50,
      },
    ],
  },

  mythrilDrill: {
    quantity: 1,
    requiredUpgrade: "permitKappa",
    recipe: [
      {
        item: "obsidianDrill",
        quantity: 1,
      },
      {
        item: "mythrilBar",
        quantity: 50,
      },
    ],
  },

  diamondiumDrill: {
    quantity: 1,
    requiredUpgrade: "permitKappa",
    recipe: [
      {
        item: "mythrilDrill",
        quantity: 1,
      },
      {
        item: "diamondiumBar",
        quantity: 50,
      },
    ],
  },

  darkmatterDrill: {
    quantity: 1,
    requiredUpgrade: "permitOmega",
    recipe: [
      {
        item: "diamondiumDrill",
        quantity: 1,
      },
      {
        item: "darkMatter",
        quantity: 50,
      },
    ],
  },

  infinitiumDrill: {
    quantity: 1,
    requiredUpgrade: "darkPortal",
    recipe: [
      {
        item: "darkmatterDrill",
        quantity: 1,
      },
      {
        item: "infinitiumBar",
        quantity: 50,
      },
    ],
  },
  //UPGRADES

  copperCrate: {
    quantity: 1,
    requiredUpgrade: "permitAlpha",
    recipe: [
      {
        item: "copperBar",
        quantity: 5,
      },
      {
        item: "copperPipe",
        quantity: 1,
      },
      {
        item: "tinPlating",
        quantity: 5,
      },
    ],
  },

  bulletPouch: {
    quantity: 1,
    requiredUpgrade: "permitBeta",
    recipe: [
      {
        item: "leadBar",
        quantity: 10,
      },
      {
        item: "leadBullet",
        quantity: 40,
      },
      {
        item: "leadWeight",
        quantity: 1,
      },
    ],
  },

  paintCan: {
    quantity: 1,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "aluminiumCan",
        quantity: 3,
      },
      {
        item: "aluminiumSheet",
        quantity: 6,
      },
      {
        item: "screwdriver",
        quantity: 1,
      },
    ],
  },

  deepgritPiggyBank: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "deepCore",
        quantity: 5,
      },
      {
        item: "silverCoin",
        quantity: 50,
      },
      {
        item: "goldenCoin",
        quantity: 50,
      },
      {
        item: "platinumCoin",
        quantity: 50,
      },
    ],
  },

  mythrilContainer: {
    quantity: 1,
    requiredUpgrade: "permitKappa",
    recipe: [
      {
        item: "mythrilHook",
        quantity: 1,
      },
      {
        item: "mythrilSigil",
        quantity: 1,
      },
      {
        item: "heavyPlate",
        quantity: 2,
      },
      {
        item: "heavyFrame",
        quantity: 4,
      },
    ],
  },

  stoneFurnace: {
    quantity: 1,
    requiredUpgrade: "permitAlpha",
    recipe: [
      {
        item: "stoneBrick",
        quantity: 2,
      },
      {
        item: "cutStone",
        quantity: 1,
      },
      {
        item: "stone",
        quantity: 5,
      },
    ],
  },

  bronzeFurnace: {
    quantity: 1,
    requiredUpgrade: "permitBeta",
    recipe: [
      {
        item: "bronzeBar",
        quantity: 10,
      },
      {
        item: "copperCogwheel",
        quantity: 2,
      },
      {
        item: "tinPlating",
        quantity: 5,
      },
      {
        item: "stone",
        quantity: 15,
      },
    ],
  },

  steelFurnace: {
    quantity: 1,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "steelBar",
        quantity: 20,
      },
      {
        item: "steelPipe",
        quantity: 1,
      },
      {
        item: "lever",
        quantity: 1,
      },
      {
        item: "ironHinge",
        quantity: 1,
      },
      {
        item: "graphite",
        quantity: 15,
      },
    ],
  },

  cobaltFurnace: {
    quantity: 1,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "tungstenSupportBracket",
        quantity: 1,
      },
      {
        item: "screwdriver",
        quantity: 1,
      },
      {
        item: "cobaltCoil",
        quantity: 1,
      },
      {
        item: "cobaltBattery",
        quantity: 16,
      },
      {
        item: "relay",
        quantity: 1,
      },
    ],
  },

  chromeFurnace: {
    quantity: 1,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "chromeGear",
        quantity: 3,
      },
      {
        item: "chromePipe",
        quantity: 5,
      },
      {
        item: "chromeScrew",
        quantity: 5,
      },
      {
        item: "palestone",
        quantity: 30,
      },
    ],
  },

  smallPouch: {
    quantity: 1,
    requiredUpgrade: "permitAlpha",
    recipe: [
      {
        item: "tinBar",
        quantity: 10,
      },
    ],
  },

  ironChest: {
    quantity: 1,
    requiredUpgrade: "permitBeta",
    recipe: [
      {
        item: "ironHinge",
        quantity: 4,
      },
      {
        item: "tinPlating",
        quantity: 4,
      },
      {
        item: "bronzeKey",
        quantity: 1,
      },
    ],
  },

  aluminiumCrate: {
    quantity: 1,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "aluminiumFrame",
        quantity: 2,
      },
      {
        item: "aluminiumSheet",
        quantity: 5,
      },
    ],
  },

  advancedStorageUnit: {
    quantity: 1,
    requiredUpgrade: "permitDelta",
    recipe: [
      {
        item: "stopwatch",
        quantity: 1,
      },
      {
        item: "tungstenSupportBracket",
        quantity: 2,
      },
      {
        item: "cobaltBattery",
        quantity: 12,
      },
    ],
  },

  magicBelt: {
    quantity: 1,
    requiredUpgrade: "permitZeta",
    recipe: [
      {
        item: "goldenBracelet",
        quantity: 1,
      },
      {
        item: "bronzeBracelet",
        quantity: 1,
      },
      {
        item: "silverEarings",
        quantity: 1,
      },
      {
        item: "goldenEarings",
        quantity: 1,
      },
      {
        item: "chain",
        quantity: 10,
      },
    ],
  },

  platinumBackpack: {
    quantity: 1,
    requiredUpgrade: "permitZeta",
    recipe: [
      {
        item: "platinumBar",
        quantity: 10,
      },
      {
        item: "platinumAmulet",
        quantity: 1,
      },
      {
        item: "platinumCoin",
        quantity: 10,
      },
      {
        item: "chromeScrew",
        quantity: 30,
      },
    ],
  },

  luxuriousBag: {
    quantity: 1,
    requiredUpgrade: "permitKappa",
    recipe: [
      {
        item: "diamondiumStainedGlass",
        quantity: 5,
      },
      {
        item: "diamondiumBar",
        quantity: 20,
      },
    ],
  },

  palestoneHeater: {
    quantity: 1,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "palestoneBricks",
        quantity: 5,
      },
      {
        item: "cutPalestone",
        quantity: 5,
      },
      { item: "cobaltCoil", quantity: 5 },
    ],
  },

  goldenThermalRegulator: {
    quantity: 1,
    requiredUpgrade: "permitZeta",
    recipe: [
      {
        item: "goldenBar",
        quantity: 10,
      },
      {
        item: "relay",
        quantity: 1,
      },
      { item: "electronicBoard", quantity: 1 },
    ],
  },

  nuclearFuel: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "uraniumBar",
        quantity: 10,
      },
      { item: "stabilizer", quantity: 1 },
      { item: "powerModule", quantity: 1 },
    ],
  },

  quantumSmelter: {
    quantity: 1,
    requiredUpgrade: "permitKappa",
    recipe: [
      {
        item: "uraniumBar",
        quantity: 10,
      },
      { item: "obsidianAegis", quantity: 1 },
      { item: "ritualKnife", quantity: 20 },
    ],
  },

  vioriteHatchet: {
    quantity: 1,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "vioriteBar",
        quantity: 15,
      },
    ],
  },

  azurythMachete: {
    quantity: 1,
    requiredUpgrade: "permitDelta",
    recipe: [
      {
        item: "azurythBar",
        quantity: 15,
      },
    ],
  },
  crimfireScythe: {
    quantity: 1,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "crimfireBar",
        quantity: 15,
      },
    ],
  },
  mossilverKnife: {
    quantity: 1,
    requiredUpgrade: "permitZeta",
    recipe: [
      {
        item: "mossilverBar",
        quantity: 15,
      },
    ],
  },
  auroryteBow: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "auroryteBar",
        quantity: 15,
      },
    ],
  },
  diamondiumSword: {
    quantity: 1,
    requiredUpgrade: "permitKappa",
    recipe: [
      {
        item: "diamondiumBar",
        quantity: 15,
      },
      {
        item: "deepgrit",
        quantity: 30,
      },
    ],
  },

  silverTray: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "silverEarings",
        quantity: 2,
      },
      {
        item: "palestone",
        quantity: 30,
      },
    ],
  },

  palladiumWateringCan: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "palladiumBar",
        quantity: 5,
      },
      {
        item: "palladiumPlating",
        quantity: 3,
      },
      {
        item: "powerModule",
        quantity: 2,
      },
    ],
  },

  permitAlpha: {
    quantity: 1,
    recipe: [
      {
        item: "stone",
        quantity: 15,
      },
      {
        item: "cutStone",
        quantity: 2,
      },
      {
        item: "stoneBrick",
        quantity: 1,
      },
    ],
  },
  permitBeta: {
    quantity: 1,
    requiredUpgrade: "permitAlpha",
    recipe: [
      {
        item: "mirror",
        quantity: 1,
      },
      {
        item: "tinMechanicalComponent",
        quantity: 1,
      },
      {
        item: "copperGoogles",
        quantity: 2,
      },
    ],
  },
  permitGamma: {
    quantity: 1,
    requiredUpgrade: "permitBeta",
    recipe: [
      {
        item: "bronzeKey",
        quantity: 1,
      },
      {
        item: "bronzeBracelet",
        quantity: 1,
      },
      {
        item: "leadWeight",
        quantity: 5,
      },
      {
        item: "screwdriver",
        quantity: 1,
      },
      {
        item: "ironHinge",
        quantity: 5,
      },
    ],
  },
  permitDelta: {
    quantity: 1,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "graphiteCore",
        quantity: 5,
      },
      {
        item: "rivet",
        quantity: 5,
      },
      {
        item: "stopwatch",
        quantity: 1,
      },
      {
        item: "aluminiumFrame",
        quantity: 5,
      },
      {
        item: "vioriteBar",
        quantity: 5,
      },
    ],
  },
  permitEpsilon: {
    quantity: 1,
    requiredUpgrade: "permitDelta",
    recipe: [
      {
        item: "titaniumShield",
        quantity: 1,
      },
      {
        item: "heavyFrame",
        quantity: 3,
      },
      {
        item: "relay",
        quantity: 5,
      },
      {
        item: "azurythBar",
        quantity: 5,
      },
    ],
  },
  permitZeta: {
    quantity: 1,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "palestoneBricks",
        quantity: 10,
      },
      {
        item: "silverEarings",
        quantity: 2,
      },
      {
        item: "cobaltAegis",
        quantity: 3,
      },
      {
        item: "goldenEarings",
        quantity: 3,
      },
      {
        item: "chromeScrew",
        quantity: 50,
      },
      {
        item: "crimfireBar",
        quantity: 5,
      },
    ],
  },
  permitTheta: {
    quantity: 1,
    requiredUpgrade: "permitZeta",
    recipe: [
      {
        item: "platinumAmulet",
        quantity: 2,
      },
      {
        item: "platinumCoin",
        quantity: 50,
      },
      {
        item: "mossilverBar",
        quantity: 5,
      },
    ],
  },
  permitKappa: {
    quantity: 1,
    requiredUpgrade: "permitTheta",
    recipe: [
      {
        item: "deepCore",
        quantity: 10,
      },
      {
        item: "palladiumPlating",
        quantity: 20,
      },
      {
        item: "stabilizer",
        quantity: 2,
      },
      {
        item: "powerModule",
        quantity: 3,
      },
      {
        item: "auroryteBar",
        quantity: 5,
      },
    ],
  },

  permitOmega: {
    quantity: 1,
    requiredUpgrade: "permitKappa",
    recipe: [
      {
        item: "obsidianAegis",
        quantity: 1,
      },
      {
        item: "ritualKnife",
        quantity: 20,
      },
      {
        item: "mythrilHook",
        quantity: 1,
      },
      {
        item: "mythrilSigil",
        quantity: 2,
      },
      {
        item: "diamondiumBar",
        quantity: 5,
      },
    ],
  },

  darkPortal: {
    requiredUpgrade: "permitOmega",
    quantity: 1,
    recipe: [
      {
        item: "voidFragment",
        quantity: 5,
      },
      {
        item: "diamondiumCore",
        quantity: 1,
      },
      {
        item: "portalFragment",
        quantity: 10,
      },
    ],
  },

  // BARS

  bronzeBar: {
    quantity: 5,
    requiredUpgrade: "permitBeta",
    recipe: [
      {
        item: "copperBar",
        quantity: 8,
      },
      {
        item: "tinBar",
        quantity: 2,
      },
    ],
  },

  steelBar: {
    quantity: 5,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "ironBar",
        quantity: 8,
      },
      {
        item: "graphite",
        quantity: 5,
      },
      {
        item: "coal",
        quantity: 8,
      },
    ],
  },

  vioriteBar: {
    quantity: 10,
    requiredUpgrade: "permitGamma",
    recipe: [
      {
        item: "leadBar",
        quantity: 10,
      },
      {
        item: "graphite",
        quantity: 10,
      },
      {
        item: "amethyst",
        quantity: 1,
      },
    ],
  },

  azurythBar: {
    quantity: 10,
    requiredUpgrade: "permitDelta",
    recipe: [
      {
        item: "ironBar",
        quantity: 10,
      },
      {
        item: "bronzeBar",
        quantity: 10,
      },
      {
        item: "vioriteRune",
        quantity: 2,
      },

      {
        item: "sapphire",
        quantity: 2,
      },
    ],
  },

  crimfireBar: {
    quantity: 10,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "titaniumBar",
        quantity: 10,
      },
      {
        item: "chromeBar",
        quantity: 10,
      },
      {
        item: "azurythRune",
        quantity: 2,
      },

      {
        item: "ruby",
        quantity: 3,
      },
    ],
  },

  mossilverBar: {
    quantity: 10,
    requiredUpgrade: "permitZeta",
    recipe: [
      {
        item: "silverBar",
        quantity: 10,
      },
      {
        item: "steelBar",
        quantity: 10,
      },
      {
        item: "crimfireRune",
        quantity: 2,
      },

      {
        item: "emerald",
        quantity: 4,
      },
    ],
  },

  auroryteBar: {
    requiredUpgrade: "permitTheta",
    quantity: 10,
    recipe: [
      {
        item: "goldenBar",
        quantity: 10,
      },
      {
        item: "chromeBar",
        quantity: 10,
      },
      {
        item: "topaz",
        quantity: 5,
      },

      {
        item: "mossilverRune",
        quantity: 2,
      },
    ],
  },

  diamondiumBar: {
    requiredUpgrade: "permitKappa",
    quantity: 10,
    recipe: [
      {
        item: "platinumBar",
        quantity: 10,
      },
      {
        item: "cobaltBar",
        quantity: 10,
      },
      {
        item: "diamond",
        quantity: 6,
      },

      {
        item: "auroryteRune",
        quantity: 2,
      },
    ],
  },

  infinitiumBar: {
    requiredUpgrade: "darkPortal",
    quantity: 5,
    recipe: [
      {
        item: "vioriteBar",
        quantity: 5,
      },
      {
        item: "azurythBar",
        quantity: 5,
      },
      {
        item: "crimfireBar",
        quantity: 5,
      },
      {
        item: "mossilverBar",
        quantity: 5,
      },
      {
        item: "auroryteBar",
        quantity: 5,
      },
      {
        item: "diamondiumBar",
        quantity: 5,
      },
      {
        item: "darkMatter",
        quantity: 10,
      },
    ],
  },

  //CAVE 1

  cutStone: {
    quantity: 1,
    recipe: [
      {
        item: "stone",
        quantity: 3,
      },
    ],
  },
  stoneBrick: {
    quantity: 1,
    recipe: [
      {
        item: "stone",
        quantity: 4,
      },
      {
        item: "cutStone",
        quantity: 2,
      },
    ],
  },
  stonePlate: {
    quantity: 2,
    recipe: [
      {
        item: "stoneBrick",
        quantity: 2,
      },
      {
        item: "cutStone",
        quantity: 3,
      },
    ],
  },

  // CAVE 2

  tinPlating: {
    requiredUpgrade: "permitAlpha",
    quantity: 2,
    recipe: [
      {
        item: "tinBar",
        quantity: 5,
      },
    ],
  },

  tinCogwheel: {
    requiredUpgrade: "permitAlpha",
    quantity: 3,
    recipe: [
      {
        item: "tinBar",
        quantity: 5,
      },
    ],
  },

  lens: {
    requiredUpgrade: "permitAlpha",
    quantity: 1,
    recipe: [
      {
        item: "glass",
        quantity: 3,
      },
    ],
  },
  emptyBottle: {
    requiredUpgrade: "permitAlpha",
    quantity: 1,
    recipe: [
      {
        item: "glass",
        quantity: 3,
      },
      {
        item: "clay",
        quantity: 1,
      },
    ],
  },

  greaterEmptyBottle: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "emptyBottle",
        quantity: 1,
      },
      {
        item: "cobaltBar",
        quantity: 2,
      },
    ],
  },

  supremeEmptyBottle: {
    requiredUpgrade: "permitKappa",
    quantity: 1,
    recipe: [
      {
        item: "greaterEmptyBottle",
        quantity: 1,
      },
      {
        item: "mythrilBar",
        quantity: 2,
      },
    ],
  },

  luckPotion: {
    requiredUpgrade: "permitAlpha",
    quantity: 1,
    recipe: [
      {
        item: "emptyBottle",
        quantity: 1,
      },
      {
        item: "rockreed",
        quantity: 1,
      },
      {
        item: "coal",
        quantity: 2,
      },
    ],
  },

  greaterLuckPotion: {
    requiredUpgrade: "permitDelta",
    quantity: 1,
    recipe: [
      {
        item: "greaterEmptyBottle",
        quantity: 1,
      },
      {
        item: "mossberry",
        quantity: 1,
      },
      {
        item: "rockreed",
        quantity: 1,
      },
      {
        item: "tungstenBar",
        quantity: 2,
      },
    ],
  },

  supremeLuckPotion: {
    requiredUpgrade: "permitKappa",
    quantity: 1,
    recipe: [
      {
        item: "supremeEmptyBottle",
        quantity: 1,
      },
      {
        item: "obsidianfern",
        quantity: 1,
      },
      {
        item: "mossberry",
        quantity: 1,
      },
      {
        item: "glowroot",
        quantity: 1,
      },
      {
        item: "azurythCore",
        quantity: 2,
      },
    ],
  },

  wrathPotion: {
    requiredUpgrade: "permitBeta",
    quantity: 1,
    recipe: [
      {
        item: "emptyBottle",
        quantity: 1,
      },
      {
        item: "coalbud",
        quantity: 1,
      },
      {
        item: "ironvine",
        quantity: 1,
      },
    ],
  },

  greaterWrathPotion: {
    requiredUpgrade: "permitDelta",
    quantity: 1,
    recipe: [
      {
        item: "greaterEmptyBottle",
        quantity: 1,
      },
      {
        item: "mossberry",
        quantity: 1,
      },
      {
        item: "ironvine",
        quantity: 1,
      },
      {
        item: "titaniumBar",
        quantity: 2,
      },
    ],
  },

  supremeWrathPotion: {
    requiredUpgrade: "permitKappa",
    quantity: 1,
    recipe: [
      {
        item: "supremeEmptyBottle",
        quantity: 1,
      },
      {
        item: "obsidianfern",
        quantity: 1,
      },
      {
        item: "coalbud",
        quantity: 1,
      },
      {
        item: "silverthistle",
        quantity: 1,
      },
      {
        item: "vioriteCore",
        quantity: 2,
      },
    ],
  },

  fortunePotion: {
    requiredUpgrade: "permitBeta",
    quantity: 1,
    recipe: [
      {
        item: "emptyBottle",
        quantity: 1,
      },
      {
        item: "rockreed",
        quantity: 1,
      },
      {
        item: "ironvine",
        quantity: 1,
      },
    ],
  },

  greaterFortunePotion: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "greaterEmptyBottle",
        quantity: 1,
      },
      {
        item: "silverthistle",
        quantity: 1,
      },
      {
        item: "glowroot",
        quantity: 1,
      },
      {
        item: "silverBar",
        quantity: 2,
      },
    ],
  },

  supremeFortunePotion: {
    requiredUpgrade: "permitOmega",
    quantity: 1,
    recipe: [
      {
        item: "supremeEmptyBottle",
        quantity: 1,
      },
      {
        item: "obsidianfern",
        quantity: 1,
      },
      {
        item: "mossberry",
        quantity: 1,
      },
      {
        item: "coalbud",
        quantity: 1,
      },
      {
        item: "mossilverCore",
        quantity: 2,
      },
      {
        item: "voidFragment",
        quantity: 2,
      },
    ],
  },

  smeltingPotion: {
    requiredUpgrade: "permitGamma",
    quantity: 1,
    recipe: [
      {
        item: "emptyBottle",
        quantity: 1,
      },
      {
        item: "glowroot",
        quantity: 1,
      },
      {
        item: "coalbud",
        quantity: 1,
      },
    ],
  },

  greaterSmeltingPotion: {
    requiredUpgrade: "permitTheta",
    quantity: 1,
    recipe: [
      {
        item: "greaterEmptyBottle",
        quantity: 1,
      },
      {
        item: "ashvine",
        quantity: 1,
      },
      {
        item: "coalbud",
        quantity: 1,
      },
      {
        item: "palladiumBar",
        quantity: 2,
      },
    ],
  },

  supremeSmeltingPotion: {
    requiredUpgrade: "permitOmega",
    quantity: 1,
    recipe: [
      {
        item: "supremeEmptyBottle",
        quantity: 1,
      },
      {
        item: "obsidianfern",
        quantity: 1,
      },
      {
        item: "ashvine",
        quantity: 1,
      },
      {
        item: "ironvine",
        quantity: 1,
      },
      {
        item: "crimfireCore",
        quantity: 2,
      },
      {
        item: "darkMatter",
        quantity: 5,
      },
    ],
  },

  mirror: {
    requiredUpgrade: "permitAlpha",
    quantity: 1,
    recipe: [
      {
        item: "lens",
        quantity: 2,
      },
      {
        item: "tinPlating",
        quantity: 4,
      },
    ],
  },

  copperGoogles: {
    requiredUpgrade: "permitAlpha",
    quantity: 1,
    recipe: [
      {
        item: "copperBar",
        quantity: 5,
      },
      {
        item: "lens",
        quantity: 2,
      },
    ],
  },

  copperPipe: {
    requiredUpgrade: "permitAlpha",
    quantity: 1,
    recipe: [
      {
        item: "copperBar",
        quantity: 3,
      },
    ],
  },

  copperCogwheel: {
    requiredUpgrade: "permitAlpha",
    quantity: 3,
    recipe: [
      {
        item: "copperBar",
        quantity: 5,
      },
    ],
  },

  copperWire: {
    requiredUpgrade: "permitAlpha",
    quantity: 5,
    recipe: [
      {
        item: "copperBar",
        quantity: 3,
      },
    ],
  },

  tinMechanicalComponent: {
    requiredUpgrade: "permitAlpha",
    quantity: 1,
    recipe: [
      {
        item: "tinPlating",
        quantity: 4,
      },
      {
        item: "tinCogwheel",
        quantity: 3,
      },
      {
        item: "copperCogwheel",
        quantity: 3,
      },
      {
        item: "copperWire",
        quantity: 5,
      },
    ],
  },

  /// MINE 3

  bronzeKey: {
    requiredUpgrade: "permitBeta",
    quantity: 1,
    recipe: [
      {
        item: "bronzeBar",
        quantity: 5,
      },
    ],
  },

  bronzeBracelet: {
    requiredUpgrade: "permitBeta",
    quantity: 1,
    recipe: [
      {
        item: "bronzeBar",
        quantity: 5,
      },
    ],
  },

  leadBullet: {
    requiredUpgrade: "permitBeta",
    quantity: 5,
    recipe: [
      {
        item: "leadBar",
        quantity: 2,
      },
    ],
  },

  leadWeight: {
    requiredUpgrade: "permitBeta",
    quantity: 1,
    recipe: [
      {
        item: "leadBar",
        quantity: 5,
      },
    ],
  },

  electronicBoard: {
    requiredUpgrade: "permitBeta",
    quantity: 1,
    recipe: [
      {
        item: "leadWeight",
        quantity: 1,
      },
      {
        item: "copperWire",
        quantity: 5,
      },
    ],
  },

  nail: {
    requiredUpgrade: "permitBeta",
    quantity: 5,
    recipe: [
      {
        item: "ironBar",
        quantity: 3,
      },
    ],
  },

  chain: {
    requiredUpgrade: "permitBeta",
    quantity: 3,
    recipe: [
      {
        item: "ironBar",
        quantity: 3,
      },
      {
        item: "nail",
        quantity: 2,
      },
    ],
  },

  gear: {
    requiredUpgrade: "permitBeta",
    quantity: 1,
    recipe: [
      {
        item: "ironBar",
        quantity: 5,
      },
    ],
  },

  lever: {
    requiredUpgrade: "permitBeta",
    quantity: 1,
    recipe: [
      {
        item: "nail",
        quantity: 1,
      },
      {
        item: "copperPipe",
        quantity: 1,
      },
      {
        item: "gear",
        quantity: 1,
      },
    ],
  },

  screwdriver: {
    requiredUpgrade: "permitBeta",
    quantity: 1,
    recipe: [
      {
        item: "ironBar",
        quantity: 5,
      },
      {
        item: "tinBar",
        quantity: 3,
      },
    ],
  },

  ironHinge: {
    requiredUpgrade: "permitBeta",
    quantity: 1,
    recipe: [
      {
        item: "ironBar",
        quantity: 3,
      },
      {
        item: "nail",
        quantity: 2,
      },
    ],
  },

  /// CAVE 4

  graphiteCore: {
    requiredUpgrade: "permitGamma",
    quantity: 1,
    recipe: [
      {
        item: "graphite",
        quantity: 5,
      },
      {
        item: "basalt",
        quantity: 2,
      },
    ],
  },

  rune: {
    requiredUpgrade: "permitGamma",
    quantity: 1,
    recipe: [
      {
        item: "graphite",
        quantity: 3,
      },
      {
        item: "clay",
        quantity: 2,
      },
      {
        item: "stonePlate",
        quantity: 2,
      },
    ],
  },

  rivet: {
    requiredUpgrade: "permitGamma",
    quantity: 3,
    recipe: [
      {
        item: "steelBar",
        quantity: 5,
      },
    ],
  },

  steelPipe: {
    requiredUpgrade: "permitGamma",
    quantity: 1,
    recipe: [
      {
        item: "steelBar",
        quantity: 4,
      },
    ],
  },

  stopwatch: {
    requiredUpgrade: "permitGamma",
    quantity: 1,
    recipe: [
      {
        item: "tinMechanicalComponent",
        quantity: 1,
      },
      {
        item: "lens",
        quantity: 1,
      },
      {
        item: "gear",
        quantity: 2,
      },
      {
        item: "steelBar",
        quantity: 3,
      },
    ],
  },

  aluminiumCan: {
    requiredUpgrade: "permitGamma",
    quantity: 1,
    recipe: [
      {
        item: "aluminiumBar",
        quantity: 3,
      },
    ],
  },

  aluminiumSheet: {
    requiredUpgrade: "permitGamma",
    quantity: 1,
    recipe: [
      {
        item: "aluminiumBar",
        quantity: 4,
      },
    ],
  },

  aluminiumFrame: {
    requiredUpgrade: "permitGamma",
    quantity: 1,
    recipe: [
      {
        item: "aluminiumBar",
        quantity: 5,
      },
    ],
  },

  vioriteStainedGlass: {
    requiredUpgrade: "permitGamma",
    quantity: 5,
    recipe: [
      {
        item: "vioriteBar",
        quantity: 5,
      },
      {
        item: "cutStone",
        quantity: 5,
      },
      {
        item: "glass",
        quantity: 3,
      },
    ],
  },

  vioriteCore: {
    requiredUpgrade: "permitGamma",
    quantity: 2,
    recipe: [
      {
        item: "vioriteBar",
        quantity: 5,
      },
      {
        item: "graphiteCore",
        quantity: 1,
      },
    ],
  },

  vioriteRune: {
    requiredUpgrade: "permitGamma",
    quantity: 1,
    recipe: [
      {
        item: "vioriteCore",
        quantity: 1,
      },
      {
        item: "vioriteStainedGlass",
        quantity: 1,
      },
      {
        item: "rune",
        quantity: 1,
      },
    ],
  },

  //CAVE 5
  titaniumShield: {
    requiredUpgrade: "permitDelta",
    quantity: 1,
    recipe: [
      {
        item: "titaniumBar",
        quantity: 5,
      },
      {
        item: "stonePlate",
        quantity: 1,
      },
      {
        item: "tinBar",
        quantity: 1,
      },
    ],
  },

  heavyFrame: {
    requiredUpgrade: "permitDelta",
    quantity: 1,
    recipe: [
      {
        item: "titaniumBar",
        quantity: 5,
      },
      {
        item: "rivet",
        quantity: 4,
      },
    ],
  },

  relay: {
    requiredUpgrade: "permitDelta",
    quantity: 1,
    recipe: [
      {
        item: "tungstenBar",
        quantity: 3,
      },
      {
        item: "copperWire",
        quantity: 5,
      },
      {
        item: "electronicBoard",
        quantity: 1,
      },
      {
        item: "tinPlating",
        quantity: 2,
      },
    ],
  },

  tungstenSupportBracket: {
    requiredUpgrade: "permitDelta",
    quantity: 1,
    recipe: [
      {
        item: "nail",
        quantity: 2,
      },
      {
        item: "tungstenBar",
        quantity: 3,
      },
      {
        item: "heavyFrame",
        quantity: 1,
      },
      {
        item: "aluminiumFrame",
        quantity: 1,
      },
    ],
  },

  cobaltCoil: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "cobaltBar",
        quantity: 3,
      },
      {
        item: "copperWire",
        quantity: 5,
      },
      {
        item: "tungstenBar",
        quantity: 1,
      },
    ],
  },

  cobaltBattery: {
    requiredUpgrade: "permitEpsilon",
    quantity: 4,
    recipe: [
      {
        item: "cobaltCoil",
        quantity: 1,
      },
      {
        item: "cobaltBar",
        quantity: 2,
      },
      {
        item: "aluminiumCan",
        quantity: 1,
      },
    ],
  },

  cobaltAegis: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "titaniumShield",
        quantity: 1,
      },
      {
        item: "cobaltBar",
        quantity: 15,
      },
    ],
  },

  azurythStainedGlass: {
    requiredUpgrade: "permitDelta",
    quantity: 5,
    recipe: [
      {
        item: "azurythBar",
        quantity: 5,
      },
      {
        item: "cutStone",
        quantity: 5,
      },
      {
        item: "glass",
        quantity: 3,
      },
    ],
  },

  azurythCore: {
    requiredUpgrade: "permitDelta",
    quantity: 2,
    recipe: [
      {
        item: "azurythBar",
        quantity: 5,
      },
      {
        item: "graphiteCore",
        quantity: 1,
      },
    ],
  },

  azurythRune: {
    requiredUpgrade: "permitDelta",
    quantity: 1,
    recipe: [
      {
        item: "azurythCore",
        quantity: 1,
      },
      {
        item: "azurythStainedGlass",
        quantity: 1,
      },
      {
        item: "rune",
        quantity: 1,
      },
    ],
  },

  // MINE 6

  cutPalestone: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "palestone",
        quantity: 4,
      },
    ],
  },

  palestoneBricks: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "cutPalestone",
        quantity: 2,
      },
      {
        item: "palestone",
        quantity: 1,
      },
    ],
  },

  silverBead: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "silverBar",
        quantity: 3,
      },
    ],
  },

  silverEarings: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "silverBead",
        quantity: 4,
      },
      {
        item: "nail",
        quantity: 2,
      },
    ],
  },

  silverCoin: {
    requiredUpgrade: "permitEpsilon",
    quantity: 10,
    recipe: [
      {
        item: "silverBar",
        quantity: 3,
      },
    ],
  },

  chromeGear: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "chromeBar",
        quantity: 4,
      },
      {
        item: "gear",
        quantity: 1,
      },
    ],
  },

  chromePipe: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "chromeBar",
        quantity: 5,
      },
      {
        item: "copperPipe",
        quantity: 1,
      },
    ],
  },

  chromeScrew: {
    requiredUpgrade: "permitEpsilon",
    quantity: 5,
    recipe: [
      {
        item: "chromeBar",
        quantity: 3,
      },
    ],
  },

  crimfireStainedGlass: {
    requiredUpgrade: "permitEpsilon",
    quantity: 5,
    recipe: [
      {
        item: "crimfireBar",
        quantity: 5,
      },
      {
        item: "cutStone",
        quantity: 5,
      },
      {
        item: "glass",
        quantity: 3,
      },
    ],
  },

  crimfireCore: {
    requiredUpgrade: "permitEpsilon",
    quantity: 2,
    recipe: [
      {
        item: "crimfireBar",
        quantity: 5,
      },
      {
        item: "graphiteCore",
        quantity: 1,
      },
    ],
  },

  crimfireRune: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "crimfireCore",
        quantity: 1,
      },
      {
        item: "crimfireStainedGlass",
        quantity: 1,
      },
      {
        item: "rune",
        quantity: 1,
      },
    ],
  },

  goldenBead: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "goldenBar",
        quantity: 3,
      },
    ],
  },

  goldenBracelet: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "goldenBead",
        quantity: 4,
      },
      {
        item: "ruby",
        quantity: 1,
      },
    ],
  },

  goldenEarings: {
    requiredUpgrade: "permitEpsilon",
    quantity: 1,
    recipe: [
      {
        item: "goldenBead",
        quantity: 4,
      },
      {
        item: "chromeScrew",
        quantity: 2,
      },
    ],
  },

  goldenCoin: {
    requiredUpgrade: "permitEpsilon",
    quantity: 10,
    recipe: [
      {
        item: "goldenBar",
        quantity: 3,
      },
    ],
  },

  //CAVE 7

  mossilverStainedGlass: {
    requiredUpgrade: "permitZeta",
    quantity: 5,
    recipe: [
      {
        item: "mossilverBar",
        quantity: 5,
      },
      {
        item: "cutStone",
        quantity: 5,
      },
      {
        item: "glass",
        quantity: 3,
      },
    ],
  },

  mossilverCore: {
    requiredUpgrade: "permitZeta",
    quantity: 2,
    recipe: [
      {
        item: "mossilverBar",
        quantity: 5,
      },
      {
        item: "graphiteCore",
        quantity: 1,
      },
    ],
  },

  mossilverRune: {
    requiredUpgrade: "permitZeta",
    quantity: 1,
    recipe: [
      {
        item: "mossilverCore",
        quantity: 1,
      },
      {
        item: "mossilverStainedGlass",
        quantity: 1,
      },
      {
        item: "rune",
        quantity: 1,
      },
    ],
  },

  platinumBead: {
    requiredUpgrade: "permitZeta",
    quantity: 1,
    recipe: [
      {
        item: "platinumBar",
        quantity: 3,
      },
    ],
  },

  platinumCoin: {
    requiredUpgrade: "permitZeta",
    quantity: 10,
    recipe: [
      {
        item: "platinumBar",
        quantity: 3,
      },
    ],
  },

  platinumAmulet: {
    requiredUpgrade: "permitZeta",
    quantity: 1,
    recipe: [
      {
        item: "platinumBead",
        quantity: 5,
      },
      {
        item: "goldenCoin",
        quantity: 1,
      },
    ],
  },

  //CAVE 8

  deepCore: {
    requiredUpgrade: "permitTheta",
    quantity: 1,
    recipe: [
      {
        item: "graphiteCore",
        quantity: 1,
      },
      {
        item: "deepgrit",
        quantity: 10,
      },
    ],
  },

  heavyPlate: {
    requiredUpgrade: "permitTheta",
    quantity: 1,
    recipe: [
      {
        item: "graphiteCore",
        quantity: 1,
      },
      {
        item: "stonePlate",
        quantity: 1,
      },
    ],
  },

  stabilizer: {
    requiredUpgrade: "permitTheta",
    quantity: 1,
    recipe: [
      {
        item: "uraniumBar",
        quantity: 8,
      },
      {
        item: "chromeGear",
        quantity: 1,
      },
      {
        item: "leadBar",
        quantity: 5,
      },
    ],
  },

  powerModule: {
    requiredUpgrade: "permitTheta",
    quantity: 1,
    recipe: [
      {
        item: "lever",
        quantity: 1,
      },
      {
        item: "uraniumBar",
        quantity: 5,
      },
      {
        item: "cobaltBattery",
        quantity: 2,
      },
      {
        item: "electronicBoard",
        quantity: 1,
      },
    ],
  },

  auroryteStainedGlass: {
    requiredUpgrade: "permitTheta",
    quantity: 5,
    recipe: [
      {
        item: "auroryteBar",
        quantity: 5,
      },
      {
        item: "cutStone",
        quantity: 5,
      },
      {
        item: "glass",
        quantity: 3,
      },
    ],
  },

  auroryteCore: {
    requiredUpgrade: "permitTheta",
    quantity: 2,
    recipe: [
      {
        item: "auroryteBar",
        quantity: 5,
      },
      {
        item: "deepCore",
        quantity: 1,
      },
    ],
  },

  auroryteRune: {
    requiredUpgrade: "permitTheta",
    quantity: 1,
    recipe: [
      {
        item: "auroryteCore",
        quantity: 1,
      },
      {
        item: "auroryteStainedGlass",
        quantity: 1,
      },
      {
        item: "rune",
        quantity: 1,
      },
    ],
  },

  palladiumPlating: {
    requiredUpgrade: "permitTheta",
    quantity: 3,
    recipe: [
      {
        item: "palladiumBar",
        quantity: 5,
      },
    ],
  },

  // CAVE 9

  obsidianAegis: {
    requiredUpgrade: "permitKappa",
    quantity: 1,
    recipe: [
      {
        item: "cobaltAegis",
        quantity: 1,
      },
      {
        item: "heavyPlate",
        quantity: 1,
      },
      {
        item: "palladiumPlating",
        quantity: 6,
      },
      {
        item: "obsidian",
        quantity: 30,
      },
    ],
  },

  ritualKnife: {
    requiredUpgrade: "permitKappa",
    quantity: 3,
    recipe: [
      {
        item: "obsidian",
        quantity: 12,
      },
    ],
  },

  portalFragment: {
    requiredUpgrade: "permitKappa",
    quantity: 1,
    recipe: [
      {
        item: "stone",
        quantity: 20,
      },
      {
        item: "graphite",
        quantity: 20,
      },
      {
        item: "basalt",
        quantity: 20,
      },
      {
        item: "palestone",
        quantity: 20,
      },
      {
        item: "deepgrit",
        quantity: 20,
      },
      {
        item: "obsidian",
        quantity: 20,
      },
    ],
  },

  mythrilHook: {
    requiredUpgrade: "permitKappa",
    quantity: 1,
    recipe: [
      {
        item: "ritualKnife",
        quantity: 10,
      },
      {
        item: "tinPlating",
        quantity: 5,
      },
      {
        item: "palladiumPlating",
        quantity: 5,
      },
      {
        item: "mythrilBar",
        quantity: 10,
      },
    ],
  },

  mythrilSigil: {
    requiredUpgrade: "permitKappa",
    quantity: 1,
    recipe: [
      {
        item: "mythrilBar",
        quantity: 8,
      },
      {
        item: "deepCore",
        quantity: 1,
      },
      {
        item: "platinumAmulet",
        quantity: 1,
      },
    ],
  },

  diamondiumStainedGlass: {
    requiredUpgrade: "permitKappa",
    quantity: 5,
    recipe: [
      {
        item: "diamondiumBar",
        quantity: 5,
      },
      {
        item: "cutStone",
        quantity: 5,
      },
      {
        item: "glass",
        quantity: 3,
      },
    ],
  },

  diamondiumCore: {
    requiredUpgrade: "permitKappa",
    quantity: 2,
    recipe: [
      {
        item: "diamondiumBar",
        quantity: 5,
      },
      {
        item: "deepCore",
        quantity: 1,
      },
    ],
  },

  diamondiumRune: {
    requiredUpgrade: "permitKappa",
    quantity: 1,
    recipe: [
      {
        item: "diamondiumCore",
        quantity: 1,
      },
      {
        item: "diamondiumStainedGlass",
        quantity: 1,
      },
      {
        item: "rune",
        quantity: 1,
      },
    ],
  },

  // CAVE 10

  voidFragment: {
    requiredUpgrade: "permitOmega",
    quantity: 1,
    recipe: [
      {
        item: "darkMatter",
        quantity: 5,
      },
    ],
  },

  //SEEDS

  seedExtractor: {
    quantity: 5,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "tinMechanicalComponent",
        quantity: 1,
      },
      {
        item: "electronicBoard",
        quantity: 1,
      },
      {
        item: "relay",
        quantity: 1,
      },
      {
        item: "tungstenSupportBracket",
        quantity: 1,
      },
      {
        item: "powerModule",
        quantity: 1,
      },
    ],
  },

  coalbudSeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "coalbud",
        quantity: 1,
      },
    ],
  },

  rockreedSeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "rockreed",
        quantity: 1,
      },
    ],
  },

  ironvineSeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "ironvine",
        quantity: 1,
      },
    ],
  },

  glowrootSeeds: {
    requiredUpgrade: "permitEpsilon",
    quantity: 2,
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "glowroot",
        quantity: 1,
      },
    ],
  },

  mossberrySeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "mossberry",
        quantity: 1,
      },
    ],
  },

  silverthistleSeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "silverthistle",
        quantity: 1,
      },
    ],
  },

  ashvineSeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "ashvine",
        quantity: 1,
      },
    ],
  },

  obsidianfernSeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "obsidianfern",
        quantity: 1,
      },
    ],
  },

  amethystSeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "amethyst",
        quantity: 1,
      },
    ],
  },

  sapphireSeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "sapphire",
        quantity: 1,
      },
    ],
  },

  rubySeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "ruby",
        quantity: 1,
      },
    ],
  },

  topazSeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "topaz",
        quantity: 1,
      },
    ],
  },

  diamondSeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "diamond",
        quantity: 1,
      },
    ],
  },

  opalSeeds: {
    quantity: 2,
    requiredUpgrade: "permitEpsilon",
    recipe: [
      {
        item: "seedExtractor",
        quantity: 1,
      },
      {
        item: "opal",
        quantity: 1,
      },
    ],
  },
} as const satisfies Partial<Record<ItemKey, Recipe>>;

export type RecipeKey = keyof typeof RECIPES;
