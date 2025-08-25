import { BuffId } from "./buffs";

export type ItemWithQuantity = {
  id: string;
  quantity: number;
};

export type BaseItem = {
  name: string;
  icon: string;
  description: string;
};

export type MaterialItem = BaseItem & {
  type: "material";
};

export type SmeltableItem = BaseItem & {
  type: "smeltable";
  smeltTime: number;
  result: ItemWithQuantity;
};

export type PlantableItem = BaseItem & {
  type: "plantable";
  growTime: number;
  result: ItemWithQuantity;
};

export type PickaxeItem = BaseItem & {
  type: "pickaxe";
  damage: number;
  criticalChance: number;
};

export type DrillItem = BaseItem & {
  type: "drill";
  damage: number;
};

export type PotionItem = BaseItem & {
  type: "potion";
  effect: BuffId;
};

export type ConsumableItem = BaseItem & {
  type: "consumable";
};

export type UpgradeItem = BaseItem & {
  type: "upgrade";
  effect:
    | "permit1"
    | "permit2"
    | "permit3"
    | "permit4"
    | "permit5"
    | "permit6"
    | "permit7"
    | "permit8"
    | "permit9"
    | "portal"
    | "furnaceNew"
    | "furnaceAuto"
    | "plantAuto"
    | "furnaceSpeed"
    | "criticalChance"
    | "maxStack"
    | "moreInventory10"
    | "moreInventory20";
};

export type Item =
  | PickaxeItem
  | MaterialItem
  | SmeltableItem
  | PotionItem
  | UpgradeItem
  | ConsumableItem
  | PlantableItem
  | DrillItem;

export type ItemType = Item["type"];

export const ITEMS = {
  stone: {
    name: "Stone",
    icon: "/sprites/items/materials/Rock_Light.png",
    type: "material",
    description: "Common material found everywhere in the mines.",
  },
  coal: {
    name: "Coal",
    icon: "/sprites/items/materials/coal.png",
    type: "material",

    description: "Black stone used to smelt ores.",
  },

  sand: {
    name: "Sand",
    icon: "/sprites/items/smeltable/Sand.png",
    type: "smeltable",

    smeltTime: 5,
    description: "It gets everywhere... Can be smelted into glass",
    result: {
      id: "glass",
      quantity: 1,
    },
  },
  glass: {
    name: "Glass",
    icon: "/sprites/items/materials/Glass.png",
    type: "material",

    description: "Transparent material made from heated sand.",
  },
  emptyBottle: {
    name: "Empty Bottle",
    icon: "/sprites/items/materials/Bottle.png",
    type: "material",

    description: "Can be filled with potions.",
  },
  greaterEmptyBottle: {
    name: "Greater Empty Bottle",
    icon: "/sprites/items/materials/Greater_Bottle.png",
    type: "material",

    description: "Enhanced bottle capable of holding stronger potions.",
  },
  clay: {
    name: "Clay",
    icon: "/sprites/items/materials/Clay.png",
    type: "material",

    description: "Moldable earth material useful for brewing.",
  },
  graphite: {
    name: "Graphite",
    icon: "/sprites/items/materials/Graphite.png",
    type: "material",

    description: "Dull rock capable of creating core.",
  },
  palestone: {
    name: "Palestone",
    icon: "/sprites/items/materials/Palestone.png",
    type: "material",

    description: "Mysterious pale rock.",
  },
  deepgrit: {
    name: "Deepgrit",
    icon: "/sprites/items/materials/Deepgrit.png",
    type: "material",

    description: "Dark stone found in deeper mines.",
  },
  basalt: {
    name: "Basalt",
    icon: "/sprites/items/materials/Basalt.png",
    type: "material",

    description: "A dark, fine-grained volcanic rock.",
  },
  obsidian: {
    name: "Obsidian",
    icon: "/sprites/items/materials/Obsidian.png",
    type: "material",

    description: "Purple rock found in the deepest mines.",
  },
  cutStone: {
    name: "Cut Stone",
    icon: "/sprites/items/materials/Cut_Stone.png",
    type: "material",

    description: "Carefully shaped stone blocks for craftings.",
  },
  lens: {
    name: "Lens",
    icon: "/sprites/items/materials/Lens.png",
    type: "material",

    description: "Precision glass lens for advanced smithing.",
  },
  mirror: {
    name: "Mirror",
    icon: "/sprites/items/materials/Mirror.png",
    type: "material",

    description: "Reflective surface for redirecting light.",
  },
  stoneBrick: {
    name: "Stone Brick",
    icon: "/sprites/items/materials/Stone_Brick.png",
    type: "material",

    description: "Refined stone brick for durable construction.",
  },
  stonePlate: {
    name: "Stone Plate",
    icon: "/sprites/items/materials/Stone_Plate.png",
    type: "material",

    description: "Flat stone plate for building foundations.",
  },
  copperCogwheel: {
    name: "Copper Cogwheel",
    icon: "/sprites/items/materials/Copper_Cogwheel.png",
    type: "material",

    description: "Copper gear mechanism for basic machinery.",
  },
  copperPipe: {
    name: "Copper Pipe",
    icon: "/sprites/items/materials/Copper_Pipe.png",
    type: "material",

    description: "Copper piping for fluid transport.",
  },
  tinCogwheel: {
    name: "Tin Cogwheel",
    icon: "/sprites/items/materials/Tin_Cogwheel.png",
    type: "material",

    description: "Tin gear mechanism for lightweight machinery.",
  },
  tinPlating: {
    name: "Tin Plating",
    icon: "/sprites/items/materials/Tin_Plating.png",
    type: "material",

    description: "Protective tin coating for metal surfaces.",
  },
  tinMechanicalComponent: {
    name: "Tin Mechanical Component",
    icon: "/sprites/items/materials/Tin_Mechanical_Component.png",
    type: "material",

    description: "Precision tin component for basic mechanical assemblies.",
  },
  bronzeKey: {
    name: "Bronze Key",
    icon: "/sprites/items/materials/Bronze_Key.png",
    type: "material",

    description: "Key without a proper padlock.",
  },
  chain: {
    name: "Chain",
    icon: "/sprites/items/materials/Chain.png",
    type: "material",

    description: "Strong metal chain for lifting and securing heavy objects.",
  },
  bronzeBracelet: {
    name: "Bronze Bracelet",
    icon: "/sprites/items/materials/Bronze_Bracelet.png",
    type: "material",

    description: "Decorative bronze jewelry with subtle magical properties.",
  },
  copperGoogles: {
    name: "Copper Goggles",
    icon: "/sprites/items/materials/Copper_Googles.png",
    type: "material",

    description: "Protective eyewear with copper frame for mining operations.",
  },
  electronicBoard: {
    name: "Electronic Board",
    icon: "/sprites/items/materials/Electronicboard.png",
    type: "material",

    description: "Complex circuitry board for advanced technological devices.",
  },
  leadBullet: {
    name: "Lead Bullet",
    icon: "/sprites/items/materials/Lead_Bullet.png",
    type: "material",

    description: "Dense lead projectile for specialized equipment.",
  },
  leadWeight: {
    name: "Lead Weight",
    icon: "/sprites/items/materials/Lead_Weight.png",
    type: "material",

    description: "Heavy lead weight used for counterbalancing machinery.",
  },
  nail: {
    name: "Nail",
    icon: "/sprites/items/materials/Nail.png",
    type: "material",

    description: "Simple metal fastener essential for construction work.",
  },
  aluminiumCan: {
    name: "Aluminium Can",
    icon: "/sprites/items/materials/Aluminium_Can.png",
    type: "material",

    description: "Lightweight aluminium container for storage.",
  },
  aluminiumFrame: {
    name: "Aluminium Frame",
    icon: "/sprites/items/materials/Aluminium_Frame.png",
    type: "material",

    description: "Structural aluminium framework for construction.",
  },
  aluminiumSheet: {
    name: "Aluminium Sheet",
    icon: "/sprites/items/materials/Aluminium_Sheet.png",
    type: "material",

    description: "Flat aluminium panel for various applications.",
  },
  graphiteCore: {
    name: "Graphite Core",
    icon: "/sprites/items/materials/Graphite_Core.png",
    type: "material",

    description: "Dense graphite core used in advanced machinery.",
  },
  ironHinge: {
    name: "Iron Hinge",
    icon: "/sprites/items/materials/Iron_Hinge.png",
    type: "material",

    description: "Sturdy iron hinge for doors and mechanical joints.",
  },
  lever: {
    name: "Lever",
    icon: "/sprites/items/materials/Lever.png",
    type: "material",

    description: "Mechanical lever for operating machinery and mechanisms.",
  },
  rune: {
    name: "Rune",
    icon: "/sprites/items/materials/Rune.png",
    type: "material",

    description: "Ancient symbol inscribed with mystical power.",
  },
  screwdriver: {
    name: "Screwdriver",
    icon: "/sprites/items/materials/Screwdriver.png",
    type: "material",
    description: "Essential tool for assembling and disassembling equipment.",
  },
  // Additional materials
  steelPipe: {
    name: "Steel Pipe",
    icon: "/sprites/items/materials/Steel_Pipe.png",
    type: "material",
    description: "Reinforced steel conduit for high-pressure systems.",
  },
  heavyFrame: {
    name: "Heavy Frame",
    icon: "/sprites/items/materials/Heavy_Frame.png",
    type: "material",
    description: "Robust structural framework for heavy-duty construction.",
  },
  relay: {
    name: "Relay",
    icon: "/sprites/items/materials/Relay.png",
    type: "material",
    description:
      "Electronic switching component for power distribution systems.",
  },
  rivet: {
    name: "Rivet",
    icon: "/sprites/items/materials/Rivet.png",
    type: "material",
    description: "Strong metal fastener for permanent structural connections.",
  },
  stopwatch: {
    name: "Stopwatch",
    icon: "/sprites/items/materials/Stopwatch.png",
    type: "material",
    description: "Precision timing device for coordinating mining operations.",
  },
  supremeEmptyBottle: {
    name: "Supreme Empty Bottle",
    icon: "/sprites/items/materials/Supreme_Bottle.png",
    type: "material",
    description:
      "Ultimate vessel capable of containing the most powerful potions.",
  },
  cutPalestone: {
    name: "Cut Palestone",
    icon: "/sprites/items/materials/Cut_Palestone.png",
    type: "material",
    description: "Precisely carved palestone.",
  },
  palestoneBricks: {
    name: "Palestone Bricks",
    icon: "/sprites/items/materials/Palestone_Bricks.png",
    type: "material",
    description: "Structured palestone blocks for magical construction.",
  },
  // Special gear and components
  chromeGear: {
    name: "Chrome Gear",
    icon: "/sprites/items/materials/Chrome_Gear.png",
    type: "material",
    description: "Precision chrome gear for advanced mechanical systems.",
  },
  cobaltAegis: {
    name: "Cobalt Aegis",
    icon: "/sprites/items/materials/Cobalt_Aegis.png",
    type: "material",
    description: "Protective cobalt shield component with enhanced durability.",
  },
  cobaltBattery: {
    name: "Cobalt Battery",
    icon: "/sprites/items/materials/Cobalt_Battery.png",
    type: "material",
    description: "High-capacity energy storage device using cobalt technology.",
  },
  cobaltCoil: {
    name: "Cobalt Coil",
    icon: "/sprites/items/materials/Cobalt_Coil.png",
    type: "material",
    description: "Electromagnetic coil component made from cobalt.",
  },
  titaniumShield: {
    name: "Titanium Shield",
    icon: "/sprites/items/materials/Titanium_Shield.png",
    type: "material",
    description: "Lightweight yet incredibly strong protective barrier.",
  },
  tungstenSupportBracket: {
    name: "Tungsten Support Bracket",
    icon: "/sprites/items/materials/Tungsten_Support_Bracket.png",
    type: "material",
    description: "Ultra-durable structural support made from tungsten.",
  },
  // Advanced chrome components
  chromePipe: {
    name: "Chrome Pipe",
    icon: "/sprites/items/materials/Chrome_Pipe.png",
    type: "material",
    description: "Polished chrome conduit for high-pressure fluid systems.",
  },
  chromeScrew: {
    name: "Chrome Screw",
    icon: "/sprites/items/materials/Chrome_Screw.png",
    type: "material",
    description: "Precision chrome fastener for delicate assemblies.",
  },
  // Deep mining components
  deepCore: {
    name: "Deep Core",
    icon: "/sprites/items/materials/Deep_Core.png",
    type: "material",
    description: "Concentrated essence extracted Deepgrit.",
  },
  heavyPlate: {
    name: "Heavy Plate",
    icon: "/sprites/items/materials/Heavy_Plate.png",
    type: "material",
    description: "Reinforced metal plating for ultimate protection.",
  },
  // Mythril components
  mythrilHook: {
    name: "Mythril Hook",
    icon: "/sprites/items/materials/Mythril_Hook.png",
    type: "material",
    description: "Legendary hook forged from mythril.",
  },
  mythrilSigil: {
    name: "Mythril Sigil",
    icon: "/sprites/items/materials/Mythril_Sigil.png",
    type: "material",
    description: "Ancient mythril symbol imbued with mystical power.",
  },
  // Obsidian components
  obsidianAegis: {
    name: "Obsidian Aegis",
    icon: "/sprites/items/materials/Obsidian_Aegis.png",
    type: "material",
    description: "Volcanic shield providing ultimate protection.",
  },
  // Palladium components
  palladiumPlating: {
    name: "Palladium Plating",
    icon: "/sprites/items/materials/Palladium_Plating.png",
    type: "material",
    description: "Rare palladium coating for superior conductivity.",
  },
  // Advanced technology
  powerModule: {
    name: "Power Module",
    icon: "/sprites/items/materials/Power_Module.png",
    type: "material",
    description: "Advanced energy unit for powering complex machinery.",
  },
  stabilizer: {
    name: "Stabilizer",
    icon: "/sprites/items/materials/Stabilizer.png",
    type: "material",
    description: "Critical component for maintaining system equilibrium.",
  },
  // Mystical items
  portalFragment: {
    name: "Portal Fragment",
    icon: "/sprites/items/materials/Portal_Fragment.png",
    type: "material",
    description: "Broken piece of an interdimensional gateway.",
  },
  voidFragment: {
    name: "Void Fragment",
    icon: "/sprites/items/materials/Void_Fragment.png",
    type: "material",
    description: "A shard of pure void that absorbs light and reality itself.",
  },
  ritualKnife: {
    name: "Ritual Knife",
    icon: "/sprites/items/materials/Ritual_Knife.png",
    type: "material",
    description: "Ceremonial blade used in ancient magical rituals.",
  },
  // Mystical runes and stained glass
  vioriteRune: {
    name: "Viorite Rune",
    icon: "/sprites/items/materials/Viorite_Rune.png",
    type: "material",
    description: "Mystical purple rune infused with viorite energy.",
  },
  vioriteStainedGlass: {
    name: "Viorite Stained Glass",
    icon: "/sprites/items/materials/Viorite_Stained_Glass.png",
    type: "material",
    description: "Beautiful decorative glass tinted with viorite essence.",
  },
  vioriteCore: {
    name: "Viorite Core",
    icon: "/sprites/items/materials/Viorite_Core.png",
    type: "material",
    description:
      "Concentrated viorite essence containing immense mystical power.",
  },
  azurythRune: {
    name: "Azuryth Rune",
    icon: "/sprites/items/materials/Azuryth_Rune.png",
    type: "material",
    description: "Ethereal blue rune containing azuryth's cosmic power.",
  },
  azurythStainedGlass: {
    name: "Azuryth Stained Glass",
    icon: "/sprites/items/materials/Azuryth_Stained_Glass.png",
    type: "material",
    description: "Shimmering blue glass that captures celestial light.",
  },
  azurythCore: {
    name: "Azuryth Core",
    icon: "/sprites/items/materials/Azuryth_Core.png",
    type: "material",
    description: "Crystallized azuryth essence pulsing with cosmic energy.",
  },
  crimfireRune: {
    name: "Crimfire Rune",
    icon: "/sprites/items/materials/Crimfire_Rune.png",
    type: "material",
    description: "Fiery red rune burning with crimfire's eternal flame.",
  },
  crimfireStainedGlass: {
    name: "Crimfire Stained Glass",
    icon: "/sprites/items/materials/Crimfire_Stained_Glass.png",
    type: "material",
    description: "Radiant red glass that glows with inner fire.",
  },
  crimfireCore: {
    name: "Crimfire Core",
    icon: "/sprites/items/materials/Crimfire_Core.png",
    type: "material",
    description: "Blazing crimfire heart that burns with eternal flame.",
  },
  mossilverRune: {
    name: "Mosssilver Rune",
    icon: "/sprites/items/materials/Mossilver_Rune.png",
    type: "material",
    description: "Nature-blessed rune with mosssilver's living energy.",
  },
  mossilverStainedGlass: {
    name: "Mosssilver Stained Glass",
    icon: "/sprites/items/materials/Mossilver_Stained_Glass.png",
    type: "material",
    description: "Living glass that seems to breathe with natural magic.",
  },
  mossilverCore: {
    name: "Mossilver Core",
    icon: "/sprites/items/materials/Mossilver_Core.png",
    type: "material",
    description:
      "Living mosssilver essence that pulses with nature's heartbeat.",
  },
  auroryteRune: {
    name: "Auroryte Rune",
    icon: "/sprites/items/materials/Auroryte_Rune.png",
    type: "material",
    description:
      "Aurora-blessed rune that captures the beauty of northern lights.",
  },
  auroryteStainedGlass: {
    name: "Auroryte Stained Glass",
    icon: "/sprites/items/materials/Auroryte_Stained_Glass.png",
    type: "material",
    description: "Multicolored glass that dances with aurora's brilliance.",
  },
  auroryteCore: {
    name: "Auroryte Core",
    icon: "/sprites/items/materials/Auroryte_Core.png",
    type: "material",
    description:
      "Aurora essence that shimmers with all colors of the northern lights.",
  },
  diamondiumRune: {
    name: "Diamondium Rune",
    icon: "/sprites/items/materials/Diamondium_Rune.png",
    type: "material",
    description: "Crystalline rune harder than diamond with perfect clarity.",
  },
  diamondiumStainedGlass: {
    name: "Diamondium Stained Glass",
    icon: "/sprites/items/materials/Diamondium_Stained_Glass.png",
    type: "material",
    description:
      "Crystal-clear glass that refracts light into rainbow patterns.",
  },
  diamondiumCore: {
    name: "Diamondium Core",
    icon: "/sprites/items/materials/Diamondium_Core.png",
    type: "material",
    description:
      "Pure diamondium essence of unbreakable crystalline perfection.",
  },
  // Precious items and coins
  goldenBead: {
    name: "Golden Bead",
    icon: "/sprites/items/materials/Golden_Bead.png",
    type: "material",
    description: "Small ornamental sphere crafted from pure gold.",
  },
  goldenCoin: {
    name: "Golden Coin",
    icon: "/sprites/items/materials/Golden_Coin.png",
    type: "material",
    description: "Valuable currency minted from the finest gold.",
  },
  silverBead: {
    name: "Silver Bead",
    icon: "/sprites/items/materials/Silver_Bead.png",
    type: "material",
    description: "Elegant silver ornament with mystical properties.",
  },
  silverCoin: {
    name: "Silver Coin",
    icon: "/sprites/items/materials/Silver_Coin.png",
    type: "material",
    description: "Precious silver currency with intricate engravings.",
  },
  silverEarings: {
    name: "Silver Earrings",
    icon: "/sprites/items/materials/Silver_Eerings.png",
    type: "material",
    description: "Delicate silver jewelry with enchanted properties.",
  },
  platinumBead: {
    name: "Platinum Bead",
    icon: "/sprites/items/materials/Platinum_Bead.png",
    type: "material",
    description: "Rare platinum ornament of exceptional purity.",
  },
  platinumCoin: {
    name: "Platinum Coin",
    icon: "/sprites/items/materials/Platinum_Coin.png",
    type: "material",
    description: "Ultra-rare platinum currency of immense value.",
  },
  // Additional precious jewelry
  goldenBracelet: {
    name: "Golden Bracelet",
    icon: "/sprites/items/materials/Golden_Bracelet.png",
    type: "material",
    description: "Exquisite golden bracelet with ornate engravings.",
  },
  goldenEarings: {
    name: "Golden Earrings",
    icon: "/sprites/items/materials/Golden_Eerings.png",
    type: "material",
    description: "Luxurious golden earrings that sparkle with divine light.",
  },
  platinumAmulet: {
    name: "Platinum Amulet",
    icon: "/sprites/items/materials/Platinum_Amulet.png",
    type: "material",
    description: "Sacred platinum amulet blessed with protective magic.",
  },
  seedExtractor: {
    name: "Seed Extractor",
    icon: "/sprites/items/materials/Seed_Extractor.png",
    type: "material",
    description: "Used to extract seeds from plants and gems.",
  },

  darkPortal: {
    name: "Dark Portal",
    icon: "/sprites/items/upgrades/Dark_Portal.png",
    type: "upgrade",
    effect: "portal",
    description: "Unlocks recipes from Alternate Universe.",
  },

  /// upgrades
  permitAlpha: {
    name: "Permit Alpha",
    icon: "/sprites/items/upgrades/permit1.png",
    type: "upgrade",
    description: "Unlocks Crimson Shaft!",
    effect: "permit1",
  },
  permitBeta: {
    name: "Permit Beta",
    icon: "/sprites/items/upgrades/permit2.png",
    type: "upgrade",
    description: "Unlocks Metal Galore!",
    effect: "permit2",
  },
  permitGamma: {
    name: "Permit Gamma",
    icon: "/sprites/items/upgrades/permit3.png",
    type: "upgrade",
    description: "Unlocks Shaft of Unpaintment!",
    effect: "permit3",
  },
  permitDelta: {
    name: "Permit Delta",
    icon: "/sprites/items/upgrades/permit4.png",
    type: "upgrade",
    description: "Unlocks Heavy-Metal Cave!",
    effect: "permit4",
  },
  permitEpsilon: {
    name: "Permit Epsilon",
    icon: "/sprites/items/upgrades/permit5.png",
    type: "upgrade",
    description: "Unlocks Cave of Fortune!",
    effect: "permit5",
  },
  permitZeta: {
    name: "Permit Zeta",
    icon: "/sprites/items/upgrades/permit6.png",
    type: "upgrade",
    description: "Unlocks Pale Shaft!",
    effect: "permit6",
  },
  permitTheta: {
    name: "Permit Theta",
    icon: "/sprites/items/upgrades/permit7.png",
    type: "upgrade",
    description: "Unlocks Deepgrit Mine!",
    effect: "permit7",
  },
  permitKappa: {
    name: "Permit Kappa",
    icon: "/sprites/items/upgrades/permit8.png",
    type: "upgrade",
    description: "Unlocks Mysticave!",
    effect: "permit8",
  },
  permitOmega: {
    name: "Permit Kappa",
    icon: "/sprites/items/upgrades/permit9.png",
    type: "upgrade",
    description: "Unlocks Alternate Dimension!",
    effect: "permit9",
  },

  // SLOTY NA STACK
  copperCrate: {
    name: "Copper Crate",
    type: "upgrade",
    effect: "maxStack",
    description: "Adds +10 max items per stack!",
    icon: "/sprites/items/upgrades/Copper_Crate.png",
  },
  bulletPouch: {
    name: "Bullet Pouch",
    type: "upgrade",
    effect: "maxStack",
    description: "Adds +10 max items per stack!",
    icon: "/sprites/items/upgrades/Bullet_Pouch.png",
  },
  paintCan: {
    name: "Paint Can",
    type: "upgrade",
    effect: "maxStack",
    description: "Adds +10 max items per stack!",
    icon: "/sprites/items/upgrades/Omega_Can.png",
  },
  deepgritPiggyBank: {
    name: "Deepgrit Piggy Bank",
    type: "upgrade",
    effect: "maxStack",
    description: "Adds +10 max items per stack!",
    icon: "/sprites/items/upgrades/Piggybank.png",
  },
  mythrilContainer: {
    name: "Mythril Container",
    type: "upgrade",
    effect: "maxStack",
    description: "Adds +10 max items per stack!",
    icon: "/sprites/items/upgrades/Mythril_Container.png",
  },

  //  ILOSC PIECY
  stoneFurnace: {
    name: "Stone Furnace",
    type: "upgrade",
    effect: "furnaceNew",
    description: "Your first own furnace!",
    icon: "/sprites/items/upgrades/Stone_Furnace.png",
  },
  bronzeFurnace: {
    name: "Bronze Furnace",
    type: "upgrade",
    effect: "furnaceNew",
    description: "Adds new smelting slot.",
    icon: "/sprites/items/upgrades/Bronze_Furnace.png",
  },
  steelFurnace: {
    name: "Steel Furnace",
    type: "upgrade",
    effect: "furnaceNew",
    description: "Adds new smelting slot.",
    icon: "/sprites/items/upgrades/Steel_Furnace.png",
  },
  cobaltFurnace: {
    name: "Cobalt Furnace",
    type: "upgrade",
    effect: "furnaceNew",
    description: "Adds new smelting slot.",
    icon: "/sprites/items/upgrades/Cobalt_Furnace.png",
  },
  chromeFurnace: {
    name: "Chrome Furnace",
    type: "upgrade",
    effect: "furnaceNew",
    description: "Adds new smelting slot.",
    icon: "/sprites/items/upgrades/Chrome_Furnace.png",
  },
  ////////////////
  //  EQ SLOTS
  smallPouch: {
    name: "Small Pouch",
    type: "upgrade",
    effect: "moreInventory10",
    description: "Adds 10 inventory slots.",
    icon: "/sprites/items/upgrades/Small_Pouch.png",
  },
  ironChest: {
    name: "Iron Chest",
    type: "upgrade",
    effect: "moreInventory20",
    description: "Adds 20 inventory slots.",
    icon: "/sprites/items/upgrades/Iron_Chest.png",
  },
  aluminiumCrate: {
    name: "Aluminium Crate",
    type: "upgrade",
    effect: "moreInventory20",
    description: "Adds 20 inventory slots.",
    icon: "/sprites/items/upgrades/Aluminium_Crate.png",
  },
  advancedStorageUnit: {
    name: "Advanced Storage Unit",
    type: "upgrade",
    effect: "moreInventory20",
    description: "Adds 20 inventory slots.",
    icon: "/sprites/items/upgrades/Advanced_Storage_Unit.png",
  },
  magicBelt: {
    name: "Magic Belt",
    type: "upgrade",
    effect: "moreInventory20",
    description: "Adds 20 inventory slots.",
    icon: "/sprites/items/upgrades/Magic_Belt.png",
  },
  platinumBackpack: {
    name: "Platinum Backpack",
    type: "upgrade",
    effect: "moreInventory20",
    description: "Adds 20 inventory slots.",
    icon: "/sprites/items/upgrades/Platinum_Backpack.png",
  },
  luxuriousBag: {
    name: "Luxurious Bag",
    type: "upgrade",
    effect: "moreInventory20",
    description: "Adds 20 inventory slots.",
    icon: "/sprites/ui/questionmark.png",
  },

  // SMELT SPEED
  palestoneHeater: {
    name: "Palestone Heater",
    type: "upgrade",
    effect: "furnaceSpeed",
    description: "Increases smelting speed",
    icon: "/sprites/ui/questionmark.png",
  },
  goldenThermalRegulator: {
    name: "Golden Thermal Regulator",
    type: "upgrade",
    effect: "furnaceSpeed",
    description: "Increases smelting speed",
    icon: "/sprites/ui/questionmark.png",
  },
  nuclearFuel: {
    name: "Nuclear Fuel",
    type: "upgrade",
    effect: "furnaceSpeed",
    description: "Increases smelting speed",
    icon: "/sprites/items/upgrades/Nuclear_Fuel.png",
  },
  quantumSmelter: {
    name: "Quantum Smelter",
    type: "upgrade",
    effect: "furnaceSpeed",
    description: "Increases smelting speed",
    icon: "/sprites/items/upgrades/Quantum_Smelter.png",
  },

  // CRITICAL
  vioriteHatchet: {
    name: "Viorite Hatchet",
    type: "upgrade",
    effect: "criticalChance",
    description: "Increases critical hit chance",
    icon: "/sprites/items/upgrades/Viorite_Hatchet.png",
  },
  azurythMachete: {
    name: "Azuryth_Machete",
    type: "upgrade",
    effect: "criticalChance",
    description: "Increases critical hit chance",
    icon: "/sprites/items/upgrades/Azuryth_Machete.png",
  },
  crimfireScythe: {
    name: "Crimfire Scythe",
    type: "upgrade",
    effect: "criticalChance",
    description: "Increases critical hit chance",
    icon: "/sprites/items/upgrades/Crimfire_Scythe.png",
  },
  mossilverKnife: {
    name: "Mossilver Knife",
    type: "upgrade",
    effect: "criticalChance",
    description: "Increases critical hit chance",
    icon: "/sprites/items/upgrades/Mossilver_Knife.png",
  },
  auroryteBow: {
    name: "Auroryte Bow",
    type: "upgrade",
    effect: "criticalChance",
    description: "Increases critical hit chance",
    icon: "/sprites/items/upgrades/Auroryte_Bow.png",
  },
  diamondiumSword: {
    name: "Diamondium Sword",
    type: "upgrade",
    effect: "criticalChance",
    description: "Increases critical hit chance",
    icon: "/sprites/items/upgrades/Diamondium_Sword.png",
  },

  silverTray: {
    name: "Silver Tray",
    type: "upgrade",
    effect: "furnaceAuto",
    description: "Automatically collects smelted bars.",
    icon: "/sprites/items/upgrades/Silver_Tray.png",
  },

  palladiumWateringCan: {
    name: "Palladium Watering Can",
    type: "upgrade",
    effect: "plantAuto",
    description: "Automatically collects grown plants.",
    icon: "/sprites/items/upgrades/Palladium_Wateringcan.png",
  },

  //ores

  tinOre: {
    name: "Tin Ore",
    icon: "/sprites/items/smeltable/Tin_Ore.png",
    type: "smeltable",
    description: "Raw tin ore that can be smelted into tin bars.",
    result: {
      id: "tinBar",
      quantity: 1,
    },
    smeltTime: 10,
  },

  graphiteTinOre: {
    name: "Graphite Tin Ore",
    icon: "/sprites/items/smeltable/Graphite_Tin_Ore.png",
    type: "smeltable",
    description:
      "Tin ore infused with graphite, yields double tin bars when smelted.",
    result: {
      id: "tinBar",
      quantity: 2,
    },
    smeltTime: 15,
  },

  copperOre: {
    name: "Copper Ore",
    icon: "/sprites/items/smeltable/Copper_Ore.png",
    type: "smeltable",
    description: "Reddish copper ore.",
    result: {
      id: "copperBar",
      quantity: 1,
    },
    smeltTime: 15,
  },

  leadOre: {
    name: "Lead Ore",
    icon: "/sprites/items/smeltable/Lead_Ore.png",
    type: "smeltable",
    description: "Dense lead ore useful for heavy-duty applications.",
    result: {
      id: "leadBar",
      quantity: 1,
    },
    smeltTime: 20,
  },

  ironOre: {
    name: "Iron Ore",
    icon: "/sprites/items/smeltable/Iron_Ore.png",
    type: "smeltable",
    description: "Sturdy iron ore that forms the backbone of industry.",
    result: {
      id: "ironBar",
      quantity: 1,
    },
    smeltTime: 25,
  },

  graphiteIronOre: {
    name: "Graphite Iron Ore",
    icon: "/sprites/items/smeltable/Graphite_Iron_Ore.png",
    type: "smeltable",
    description: "Iron ore enhanced with graphite, produces double iron bars.",
    result: {
      id: "ironBar",
      quantity: 2,
    },
    smeltTime: 45,
  },

  aluminiumOre: {
    name: "Aluminium Ore",
    icon: "/sprites/items/smeltable/Aluminium_Ore.png",
    type: "smeltable",
    description: "Lightweight aluminium ore perfect for advanced crafting.",
    result: {
      id: "aluminiumBar",
      quantity: 1,
    },
    smeltTime: 30,
  },

  graphiteAluminiumOre: {
    name: "Graphite Aluminium Ore",
    icon: "/sprites/items/smeltable/Graphite_Aluminium_Ore.png",
    type: "smeltable",
    description: "Lightweight aluminium ore perfect for advanced crafting.",
    result: {
      id: "aluminiumBar",
      quantity: 1,
    },
    smeltTime: 30,
  },

  graphiteTitaniumOre: {
    name: "Graphite Titanium Ore",
    icon: "/sprites/items/smeltable/Graphite_Titanium_Ore.png",
    type: "smeltable",
    description: "Titanium ore strengthened with graphite compounds.",
    result: {
      id: "titaniumBar",
      quantity: 1,
    },
    smeltTime: 35,
  },

  palestoneTitaniumOre: {
    name: "Palestone Titanium Ore",
    icon: "/sprites/items/smeltable/Palestone_Titanium_Ore.png",
    type: "smeltable",
    description:
      "Titanium ore infused with mysterious palestone energy, doubles output.",
    result: {
      id: "titaniumBar",
      quantity: 2,
    },
    smeltTime: 65,
  },

  graphiteTungstenOre: {
    name: "Graphite Tungsten Ore",
    icon: "/sprites/items/smeltable/Graphite_Tungsten_Ore.png",
    type: "smeltable",
    description: "The hardest ore enhanced with graphite properties.",
    result: {
      id: "tungstenBar",
      quantity: 1,
    },
    smeltTime: 40,
  },

  palestoneCobaltOre: {
    name: "Palestone Cobalt Ore",
    icon: "/sprites/items/smeltable/Palestone_Cobalt_Ore.png",
    type: "smeltable",
    description: "Cobalt ore enhanced with palestone's mystical properties.",
    result: {
      id: "cobaltBar",
      quantity: 1,
    },
    smeltTime: 45,
  },

  palestoneSilverOre: {
    name: "Palestone Silver Ore",
    icon: "/sprites/items/smeltable/Palestone_Silver_Ore.png",
    type: "smeltable",
    description:
      "Silver ore enriched with palestone magic for enhanced conductivity.",
    result: {
      id: "silverBar",
      quantity: 1,
    },
    smeltTime: 50,
  },

  deepgritSilverOre: {
    name: "Deepgrit Silver Ore",
    icon: "/sprites/items/smeltable/Deepgrit_Silver_Ore.png",
    type: "smeltable",
    description:
      "Silver ore from the deepest mines, yields double silver bars.",
    result: {
      id: "silverBar",
      quantity: 2,
    },
    smeltTime: 95,
  },

  palestoneChromeOre: {
    name: "Palestone Chrome Ore",
    icon: "/sprites/items/smeltable/Palestone_Chrome_Ore.png",
    type: "smeltable",
    description: "Chrome ore infused with palestone energy for superior shine.",
    result: {
      id: "chromeBar",
      quantity: 1,
    },
    smeltTime: 55,
  },

  palestoneGoldOre: {
    name: "Palestone Gold Ore",
    icon: "/sprites/items/smeltable/Palestone_Gold_Ore.png",
    type: "smeltable",
    description: "Gold ore imbued with palestone's mystical power.",
    result: {
      id: "goldenBar",
      quantity: 1,
    },
    smeltTime: 60,
  },

  palestonePlatinumOre: {
    name: "Palestone Platinum Ore",
    icon: "/sprites/items/smeltable/Palestone_Platinum_Ore.png",
    type: "smeltable",
    description:
      "Platinum ore charged with palestone essence for ultimate purity.",
    result: {
      id: "platinumBar",
      quantity: 1,
    },
    smeltTime: 65,
  },

  deepgritPlatinumOre: {
    name: "Deepgrit Platinum Ore",
    icon: "/sprites/items/smeltable/Deepgrit_Platinum_Ore.png",
    type: "smeltable",
    description: "Platinum ore from the depths, yields double platinum bars.",
    result: {
      id: "platinumBar",
      quantity: 2,
    },
    smeltTime: 125,
  },

  deepgritUraniumOre: {
    name: "Deepgrit Uranium Ore",
    icon: "/sprites/items/smeltable/Deepgrit_Uranium_Ore.png",
    type: "smeltable",
    description: "Radioactive uranium ore from the deepest mines.",
    result: {
      id: "uraniumBar",
      quantity: 1,
    },
    smeltTime: 70,
  },

  obsidianUraniumOre: {
    name: "Obsidian Uranium Ore",
    icon: "/sprites/items/smeltable/Obsidian_Uranium_Ore.png",
    type: "smeltable",
    description:
      "Uranium ore crystallized in volcanic obsidian, yields double output.",
    result: {
      id: "uraniumBar",
      quantity: 2,
    },
    smeltTime: 135,
  },

  deepgritPalladiumOre: {
    name: "Deepgrit Palladium Ore",
    icon: "/sprites/items/smeltable/Deepgrit_Palladium_Ore.png",
    type: "smeltable",
    description: "Rare palladium ore found in the deepest mining shafts.",
    result: {
      id: "palladiumBar",
      quantity: 1,
    },
    smeltTime: 75,
  },

  obsidianPalladiumOre: {
    name: "Obsidian Palladium Ore",
    icon: "/sprites/items/smeltable/Obsidian_Palladium_Ore.png",
    type: "smeltable",
    description:
      "Palladium ore encased in obsidian glass, doubles smelting output.",
    result: {
      id: "palladiumBar",
      quantity: 2,
    },
    smeltTime: 145,
  },

  obsidianMythrilOre: {
    name: "Obsidian Mythril Ore",
    icon: "/sprites/items/smeltable/Obsidian_Mythril_Ore.png",
    type: "smeltable",
    description: "Legendary mythril ore preserved in volcanic obsidian.",
    result: {
      id: "mythrilBar",
      quantity: 1,
    },
    smeltTime: 80,
  },

  //Plants
  coalbudSeeds: {
    name: "Coalbud Seeds",
    icon: "/sprites/items/plantable/coalbud_seeds.png",
    type: "plantable",
    description: "Grows into Coalbud.",
    growTime: 50,

    result: {
      id: "coalbud",
      quantity: 1,
    },
  },

  coalbud: {
    name: "Coalbud",
    icon: "/sprites/items/materials/Coalbud.png",
    type: "material",
    description: "A coal-infused plant that burns with a steady flame.",
  },

  glowrootSeeds: {
    name: "Glowroot Seeds",
    icon: "/sprites/items/plantable/glowroot_seeds.png",
    type: "plantable",
    description: "Grows into Glowroot.",
    growTime: 60,

    result: {
      id: "glowroot",
      quantity: 1,
    },
  },

  glowroot: {
    name: "Glowroot",
    icon: "/sprites/items/materials/Glowroot.png",
    type: "material",
    description: "A luminescent root that glows with natural light.",
  },

  ironvineSeeds: {
    name: "Ironvine Seeds",
    icon: "/sprites/items/plantable/ironvine_seeds.png",
    type: "plantable",
    description: "Grows into Ironvine.",
    growTime: 70,

    result: {
      id: "ironvine",
      quantity: 1,
    },
  },

  ironvine: {
    name: "Ironvine",
    icon: "/sprites/items/materials/Ironvine.png",
    type: "material",
    description: "A tough metallic vine with iron-like properties.",
  },

  mossberrySeeds: {
    name: "Mossberry Seeds",
    icon: "/sprites/items/plantable/mossberry_seeds.png",
    type: "plantable",
    description: "Grows into Mossberry.",
    growTime: 100,

    result: {
      id: "mossberry",
      quantity: 1,
    },
  },

  mossberry: {
    name: "Mossberry",
    icon: "/sprites/items/materials/Mossberry.png",
    type: "material",
    description:
      "A soft berry covered in moss with natural healing properties.",
  },

  rockreedSeeds: {
    name: "Rockreed Seeds",
    icon: "/sprites/items/plantable/rockreed_seeds.png",
    type: "plantable",
    description: "Grows into Rockreed.",
    growTime: 80,

    result: {
      id: "rockreed",
      quantity: 1,
    },
  },

  rockreed: {
    name: "Rockreed",
    icon: "/sprites/items/materials/Rockreed.png",
    type: "material",
    description:
      "A crystalline reed that grows in rocky soil with mineral deposits.",
  },

  silverthistleSeeds: {
    name: "Silverthistle Seeds",
    icon: "/sprites/items/plantable/silverthistle_seeds.png",
    type: "plantable",
    description: "Seed",
    growTime: 110,

    result: {
      id: "silverthistle",
      quantity: 1,
    },
  },

  silverthistle: {
    name: "Silverthistle",
    icon: "/sprites/items/materials/Silverthistle.png",
    type: "material",
    description:
      "A thorny plant with silver-like bristles and magical properties.",
  },

  ashvineSeeds: {
    name: "Ashvine Seeds",
    icon: "/sprites/items/plantable/ashvine_seeds.png",
    type: "plantable",
    description: "Grows into Ashvine.",
    growTime: 120,

    result: {
      id: "ashvine",
      quantity: 1,
    },
  },

  ashvine: {
    name: "Ashvine",
    icon: "/sprites/items/materials/Ashvine.png",
    type: "material",
    description:
      "A dark vine that thrives in volcanic ash with fire-resistant properties.",
  },

  obsidianfernSeeds: {
    name: "Obsidianfern Seeds",
    icon: "/sprites/items/plantable/obsidianfern_seeds.png",
    type: "plantable",
    description: "Grows into Obsidianfern.",
    growTime: 130,

    result: {
      id: "obsidianfern",
      quantity: 1,
    },
  },

  obsidianfern: {
    name: "Obsidianfern",
    icon: "/sprites/items/materials/Obsidianfern.png",
    type: "material",
    description:
      "A fern with obsidian-like fronds that cuts through the toughest materials.",
  },

  // Gem Seeds
  amethystSeeds: {
    name: "Amethyst Seeds",
    icon: "/sprites/items/plantable/Amethyst_Seeds.png",
    type: "plantable",
    description: "Mystical seeds that grow into amethyst crystals.",
    growTime: 140,

    result: {
      id: "amethyst",
      quantity: 1,
    },
  },

  sapphireSeeds: {
    name: "Sapphire Seeds",
    icon: "/sprites/items/plantable/Sapphire_Seeds.png",
    type: "plantable",
    description: "Royal blue seeds that mature into sapphire gemstones.",
    growTime: 150,

    result: {
      id: "sapphire",
      quantity: 1,
    },
  },

  rubySeeds: {
    name: "Ruby Seeds",
    icon: "/sprites/items/plantable/Ruby_Seeds.png",
    type: "plantable",
    description: "Fiery red seeds that bloom into brilliant ruby crystals.",
    growTime: 160,

    result: {
      id: "ruby",
      quantity: 1,
    },
  },

  emeraldSeeds: {
    name: "Emerald Seeds",
    icon: "/sprites/items/plantable/Emerald_Seeds.png",
    type: "plantable",
    description: "Vibrant green seeds that flourish into emerald gems.",
    growTime: 170,

    result: {
      id: "emerald",
      quantity: 1,
    },
  },

  topazSeeds: {
    name: "Topaz Seeds",
    icon: "/sprites/items/plantable/Topaz_Seeds.png",
    type: "plantable",
    description: "Golden seeds that crystallize into radiant topaz gems.",
    growTime: 180,

    result: {
      id: "topaz",
      quantity: 1,
    },
  },

  diamondSeeds: {
    name: "Diamond Seeds",
    icon: "/sprites/items/plantable/Diamond_Seeds.png",
    type: "plantable",
    description: "Rare crystalline seeds that produce precious diamonds.",
    growTime: 190,

    result: {
      id: "diamond",
      quantity: 1,
    },
  },

  opalSeeds: {
    name: "Opal Seeds",
    icon: "/sprites/items/plantable/Opal_Seeds.png",
    type: "plantable",
    description: "Iridescent seeds that shimmer and grow into opals.",
    growTime: 200,

    result: {
      id: "opal",
      quantity: 1,
    },
  },

  // Bars - ordered by tier
  tinBar: {
    name: "Tin Bar",
    icon: "/sprites/items/materials/Tin_Bar.png",
    type: "material",

    description: "Refined tin metal ready for crafting basic tools.",
  },
  copperBar: {
    name: "Copper Bar",
    icon: "/sprites/items/materials/Copper_Bar.png",
    type: "material",

    description: "Pure copper metal excellent for electrical components.",
  },
  bronzeBar: {
    name: "Bronze Bar",
    icon: "/sprites/items/materials/Bronze_Bar.png",
    type: "material",

    description: "Alloy of copper and tin, stronger than either alone.",
  },
  leadBar: {
    name: "Lead Bar",
    icon: "/sprites/items/materials/Lead_Bar.png",
    type: "material",

    description: "Dense lead metal useful for specific applications.",
  },
  ironBar: {
    name: "Iron Bar",
    icon: "/sprites/items/materials/Iron_Bar.png",
    type: "material",

    description: "Solid iron metal perfect for sturdy equipment.",
  },
  steelBar: {
    name: "Steel Bar",
    icon: "/sprites/items/materials/Steel_Bar.png",
    type: "material",

    description: "Strong iron alloy ideal for advanced tools.",
  },
  aluminiumBar: {
    name: "Aluminium Bar",
    icon: "/sprites/items/materials/Aluminium_Bar.png",
    type: "material",

    description: "Lightweight aluminum perfect for high-tech gear.",
  },
  titaniumBar: {
    name: "Titanium Bar",
    icon: "/sprites/items/materials/Titanium_Bar.png",
    type: "material",

    description: "Extremely strong and lightweight metal bar.",
  },
  vioriteBar: {
    name: "Viorite Bar",
    icon: "/sprites/items/materials/Viorite_Bar.png",
    type: "material",

    description: "Mystical purple metal with unknown properties.",
  },
  tungstenBar: {
    name: "Tungsten Bar",
    icon: "/sprites/items/materials/Tungsten_Bar.png",
    type: "material",

    description: "The hardest metal with the highest melting point.",
  },
  cobaltBar: {
    name: "Cobalt Bar",
    icon: "/sprites/items/materials/Cobalt_Bar.png",
    type: "material",

    description: "Hard, lustrous metal with high melting point.",
  },
  azurythBar: {
    name: "Azuryth Bar",
    icon: "/sprites/items/materials/Azuryth_Bar.png",
    type: "material",

    description: "Ethereal blue metal that shimmers with otherworldly energy.",
  },
  silverBar: {
    name: "Silver Bar",
    icon: "/sprites/items/materials/Silver_Bar.png",
    type: "material",

    description: "Precious silver metal with excellent conductivity.",
  },
  chromeBar: {
    name: "Chrome Bar",
    icon: "/sprites/items/materials/Chrome_Bar.png",
    type: "material",

    description:
      "Polished metallic bar with mirror-like finish and superior hardness.",
  },
  crimfireBar: {
    name: "Crimfire Bar",
    icon: "/sprites/items/materials/Crimfire_Bar.png",
    type: "material",

    description: "Fiery red metal that radiates intense heat and energy.",
  },
  goldenBar: {
    name: "Golden Bar",
    icon: "/sprites/items/materials/Golden_Bar.png",
    type: "material",

    description: "Pure gold bar of exceptional  beauty.",
  },
  mossilverBar: {
    name: "Mossilver Bar",
    icon: "/sprites/items/materials/Mosssilver_Bar.png",
    type: "material",

    description: "Enchanted silver alloy with moss-like patterns.",
  },
  platinumBar: {
    name: "Platinum Bar",
    icon: "/sprites/items/materials/Platinum_Bar.png",
    type: "material",

    description: "Ultra-rare platinum metal of supreme quality.",
  },
  uraniumBar: {
    name: "Uranium Bar",
    icon: "/sprites/items/materials/Uranium_Bar.png",
    type: "material",

    description: "Radioactive heavy metal with immense energy potential.",
  },
  auroryteBar: {
    name: "Auroryte Bar",
    icon: "/sprites/items/materials/Auroryte_Bar.png",
    type: "material",

    description: "Shimmering metal that captures aurora lights.",
  },
  palladiumBar: {
    name: "Palladium Bar",
    icon: "/sprites/items/materials/Palladium_Bar.png",
    type: "material",

    description: "Rare precious metal with exceptional properties.",
  },
  mythrilBar: {
    name: "Mythril Bar",
    icon: "/sprites/items/materials/Mythril_Bar.png",
    type: "material",

    description: "Legendary metal of incredible lightness and strength.",
  },
  diamondiumBar: {
    name: "Diamondium Bar",
    icon: "/sprites/items/materials/Diamondium_Bar.png",
    type: "material",

    description: "Crystalline metal harder than diamond itself.",
  },
  darkMatter: {
    name: "Dark Matter",
    icon: "/sprites/items/materials/Darkmatter.png",
    type: "material",

    description: "Mysterious substance that bends reality itself.",
  },
  infinitiumBar: {
    name: "Infinitium Bar",
    icon: "/sprites/items/materials/Infinitium_Bar.png",
    type: "material",

    description: "Ultimate metal containing infinite possibilities.",
  },

  // Gems
  amethyst: {
    name: "Amethyst",
    icon: "/sprites/items/materials/Amethyst.png",
    type: "material",

    description:
      "Beautiful purple gemstone prized for its mystical properties.",
  },
  diamond: {
    name: "Diamond",
    icon: "/sprites/items/materials/Diamond.png",
    type: "material",

    description: "Hardest known natural substance, extremely valuable.",
  },
  emerald: {
    name: "Emerald",
    icon: "/sprites/items/materials/Emerald.png",
    type: "material",

    description: "Vibrant green gemstone of exceptional beauty.",
  },
  ruby: {
    name: "Ruby",
    icon: "/sprites/items/materials/Ruby.png",
    type: "material",

    description: "Brilliant red gemstone symbolizing passion and power.",
  },
  sapphire: {
    name: "Sapphire",
    icon: "/sprites/items/materials/Sapphire.png",
    type: "material",

    description: "Deep blue gemstone representing wisdom and royalty.",
  },
  topaz: {
    name: "Topaz",
    icon: "/sprites/items/materials/Topaz.png",
    type: "material",

    description: "Golden yellow gemstone that brings clarity and strength.",
  },
  opal: {
    name: "Opal",
    icon: "/sprites/items/materials/Opal.png",
    type: "material",

    description: "Iridescent gemstone with mesmerizing color play.",
  },

  // Special items
  geode: {
    name: "Geode",
    icon: "/sprites/items/materials/Geode.png",
    type: "consumable",
    description: "Mysterious rock formation containing jewels and coal.",
  },
  gear: {
    name: "Gear",
    icon: "/sprites/items/materials/Gear.png",
    type: "material",

    description: "Mechanical component essential for advanced machinery.",
  },
  copperWire: {
    name: "Copper Wire",
    icon: "/sprites/items/materials/Copper_Wire.png",
    type: "material",
    description: "Flexible metal conductor for electrical connections.",
  },

  torch: {
    name: "Torch",
    icon: "/sprites/items/materials/torch.png",
    type: "material",
    description: "Simple light source for illuminating dark passages.",
  },
  flashlight: {
    name: "Flashlight",
    icon: "/sprites/items/materials/flashlight.png",
    type: "material",

    description: "Modern lighting device powered by batteries.",
  },

  // I - Wood
  woodenPickaxe: {
    damage: 1,
    criticalChance: 1,
    icon: "/sprites/items/pickaxes/Wooden_Pickaxe.png",
    name: "Wooden Pickaxe",
    type: "pickaxe",
    description: "Basic mining tool made from wood, good for starting out.",
  },
  // II - Stone
  stonePickaxe: {
    damage: 1.75,
    criticalChance: 1,
    icon: "/sprites/items/pickaxes/Stone_Pickaxe.png",
    name: "Stone Pickaxe",
    type: "pickaxe",
    description: "Crude but effective stone tool for mining harder materials.",
  },
  // III - Tin
  tinPickaxe: {
    damage: 3,
    criticalChance: 1,
    icon: "/sprites/items/pickaxes/Tin_Pickaxe.png",
    name: "Tin Pickaxe",
    type: "pickaxe",
    description: "First metal pickaxe, more durable than stone.",
  },
  // IV - Copper
  copperPickaxe: {
    damage: 4,
    criticalChance: 1,
    icon: "/sprites/items/pickaxes/Copper_Pickaxe.png",
    name: "Copper Pickaxe",
    type: "pickaxe",
    description: "Efficient copper tool that cuts through rock easily.",
  },
  // V - Bronze (tin + copper)
  bronzePickaxe: {
    damage: 5,
    criticalChance: 1,
    icon: "/sprites/items/pickaxes/Bronze_Pickaxe.png",
    name: "Bronze Pickaxe",
    type: "pickaxe",
    description: "Strong bronze alloy pickaxe for serious mining.",
  },
  // VI - Lead
  leadPickaxe: {
    damage: 10,
    criticalChance: 2,
    icon: "/sprites/items/pickaxes/Lead_Pickaxe.png",
    name: "Lead Pickaxe",
    type: "pickaxe",
    description: "Heavy-duty lead tool that crushes through any material.",
  },
  // VII - Iron
  ironPickaxe: {
    damage: 8,
    criticalChance: 2,
    icon: "/sprites/items/pickaxes/Iron_Pickaxe.png",
    name: "Iron Pickaxe",
    type: "pickaxe",
    description: "Sturdy iron tool capable of mining most materials.",
  },
  // VIII - Graphite
  graphitePickaxe: {
    damage: 9,
    criticalChance: 2,
    icon: "/sprites/items/pickaxes/Graphite_Pickaxe.png",
    name: "Graphite Pickaxe",
    type: "pickaxe",
    description: "Dark graphite tool enhanced with special properties.",
  },
  // IX - Steel (iron + graphite)
  steelPickaxe: {
    damage: 13,
    criticalChance: 2,
    icon: "/sprites/items/pickaxes/Steel_Pickaxe.png",
    name: "Steel Pickaxe",
    type: "pickaxe",
    description: "High-quality steel tool for efficient mining operations.",
  },
  // X - Aluminium
  aluminiumPickaxe: {
    damage: 17,
    criticalChance: 2,
    icon: "/sprites/items/pickaxes/Aluminium_Pickaxe.png",
    name: "Aluminium Pickaxe",
    type: "pickaxe",
    description: "Lightweight yet powerful aluminum tool for advanced miners.",
  },
  // XI - Viorite (lead + graphite + amethyst)
  vioritePickaxe: {
    damage: 20,
    criticalChance: 3,
    icon: "/sprites/items/pickaxes/Viorite_Pickaxe.png",
    name: "Viorite Pickaxe",
    type: "pickaxe",
    description: "Mystical purple pickaxe with otherworldly properties.",
  },
  // XII - Titanium
  titaniumPickaxe: {
    damage: 22,
    criticalChance: 3,
    icon: "/sprites/items/pickaxes/Titanium_Pickaxe.png",
    name: "Titanium Pickaxe",
    type: "pickaxe",
    description:
      "Incredibly strong titanium tool for extreme mining conditions.",
  },
  // XIII - Tungsten
  tungstenPickaxe: {
    damage: 27.5,
    criticalChance: 3,
    icon: "/sprites/items/pickaxes/Tungsten_Pickaxe.png",
    name: "Tungsten Pickaxe",
    type: "pickaxe",
    description: "The hardest pickaxe with unmatched durability.",
  },
  // XIV - Cobalt
  cobaltPickaxe: {
    damage: 30,
    criticalChance: 3,
    icon: "/sprites/items/pickaxes/Cobalt_Pickaxe.png",
    name: "Cobalt Pickaxe",
    type: "pickaxe",
    description: "High-performance cobalt tool with superior cutting power.",
  },
  // XV - Azuryth (iron + bronze + sapphire)
  azurythPickaxe: {
    damage: 35,
    criticalChance: 3,
    icon: "/sprites/items/pickaxes/Azuryth_Pickaxe.png",
    name: "Azuryth Pickaxe",
    type: "pickaxe",
    description: "Ethereal blue pickaxe that shimmers with cosmic energy.",
  },
  // XVI - Palestone
  palestonePickaxe: {
    damage: 45,
    criticalChance: 4,
    icon: "/sprites/items/pickaxes/Palestone_Pickaxe.png",
    name: "Palestone Pickaxe",
    type: "pickaxe",
    description: "Mysterious pale pickaxe with mystical energy.",
  },
  // XVII - Silver
  silverPickaxe: {
    damage: 50,
    criticalChance: 4,
    icon: "/sprites/items/pickaxes/Silver_Pickaxe.png",
    name: "Silver Pickaxe",
    type: "pickaxe",
    description: "Precious metal pickaxe with enhanced mining capabilities.",
  },
  // XVIII - Chrome
  chromePickaxe: {
    damage: 60,
    criticalChance: 4,
    icon: "/sprites/items/pickaxes/Chrome_Pickaxe.png",
    name: "Chrome Pickaxe",
    type: "pickaxe",
    description: "Polished chrome tool with exceptional precision.",
  },
  // XIX - Crimfire (titanium + chrome + ruby)
  crimfirePickaxe: {
    damage: 70,
    criticalChance: 4,
    icon: "/sprites/items/pickaxes/Crimfire_Pickaxe.png",
    name: "Crimfire Pickaxe",
    type: "pickaxe",
    description: "Fiery red pickaxe that burns through the toughest rock.",
  },
  // XX - Gold
  goldenPickaxe: {
    damage: 75,
    criticalChance: 4,
    icon: "/sprites/items/pickaxes/Golden_Pickaxe.png",
    name: "Golden Pickaxe",
    type: "pickaxe",
    description: "Luxurious gold tool that mines with incredible efficiency.",
  },
  // XXI - Mossilver (silver + steel + emerald)
  mossilverPickaxe: {
    damage: 90,
    criticalChance: 5,
    icon: "/sprites/items/pickaxes/Mosssilver_Pickaxe.png",
    name: "Mossilver Pickaxe",
    type: "pickaxe",
    description: "Enchanted silver tool with nature's blessing.",
  },
  // XXII - Platinum
  platinumPickaxe: {
    damage: 120,
    criticalChance: 5,
    icon: "/sprites/items/pickaxes/Platinum_Pickaxe.png",
    name: "Platinum Pickaxe",
    type: "pickaxe",
    description: "Ultimate platinum tool for the most demanding mining tasks.",
  },
  // XXIII - Deepgrit
  deepgritPickaxe: {
    damage: 150,
    criticalChance: 5,
    icon: "/sprites/items/pickaxes/Deepgrit_Pickaxe.png",
    name: "Deepgrit Pickaxe",
    type: "pickaxe",
    description: "Deep-forged tool from the darkest mining depths.",
  },
  // XXIV - Uranium
  uraniumPickaxe: {
    damage: 200,
    criticalChance: 5,
    icon: "/sprites/items/pickaxes/Uranium_Pickaxe.png",
    name: "Uranium Pickaxe",
    type: "pickaxe",
    description: "Radioactive pickaxe with immense destructive power.",
  },
  // XXV - Auroryte (gold + chrome + topaz)
  aurorytePickaxe: {
    damage: 225,
    criticalChance: 5,
    icon: "/sprites/items/pickaxes/Auroryte_Pickaxe.png",
    name: "Auroryte Pickaxe",
    type: "pickaxe",
    description: "Aurora-blessed tool that captures celestial light.",
  },
  // XXVI - Palladium
  palladiumPickaxe: {
    damage: 250,
    criticalChance: 6,
    icon: "/sprites/items/pickaxes/Palladium_Pickaxe.png",
    name: "Palladium Pickaxe",
    type: "pickaxe",
    description: "Rare palladium tool with exceptional properties.",
  },
  // XXVII - Obsidian
  obsidianPickaxe: {
    damage: 300,
    criticalChance: 6,
    icon: "/sprites/items/pickaxes/Obsidian_Pickaxe.png",
    name: "Obsidian Pickaxe",
    type: "pickaxe",
    description: "Volcanic glass pickaxe with razor-sharp precision.",
  },
  // XXVIII - Mythril
  mythrilPickaxe: {
    damage: 400,
    criticalChance: 6,
    icon: "/sprites/items/pickaxes/Mythrill_Pickaxe.png",
    name: "Mythril Pickaxe",
    type: "pickaxe",
    description: "Legendary pickaxe of incredible lightness and strength.",
  },
  // XXIX - Diamondium (platinum + cobalt + diamond)
  diamondiumPickaxe: {
    damage: 500,
    criticalChance: 6,
    icon: "/sprites/items/pickaxes/Diamondium_Pickaxe.png",
    name: "Diamondium Pickaxe",
    type: "pickaxe",
    description: "Crystalline pickaxe harder than diamond itself.",
  },
  // XXX - Dark Matter
  darkmatterPickaxe: {
    damage: 750,
    criticalChance: 6,
    icon: "/sprites/items/pickaxes/Darkmatter_Pickaxe.png",
    name: "Dark Matter Pickaxe",
    type: "pickaxe",
    description: "Reality-bending tool that defies natural laws.",
  },
  // XXXI - Infinitium (wszystkie magiczne + opal + dark matter)
  infinitiumPickaxe: {
    damage: 9999,
    criticalChance: 50,
    icon: "/sprites/items/pickaxes/Infinitium_Pickaxe.png",
    name: "Infinitium Pickaxe",
    type: "pickaxe",
    description: "The ultimate pickaxe containing infinite mining potential.",
  },

  /// Drills

  deepgritDrill: {
    damage: 30,
    icon: "/sprites/items/drills/Deepgrit_Drill.png",
    name: "Deepgrit Drill",
    type: "drill",
    description: "A drill designed for deep excavation.",
  },
  uraniumDrill: {
    damage: 40,
    icon: "/sprites/items/drills/Uranium_Drill.png",
    name: "Uranium Drill",
    type: "drill",
    description: "A radioactive drill with immense power.",
  },
  auroryteDrill: {
    damage: 45,
    icon: "/sprites/items/drills/Auroryte_Drill.png",
    name: "Auroryte Drill",
    type: "drill",
    description: "A drill infused with aurora energy.",
  },
  palladiumDrill: {
    damage: 50,
    icon: "/sprites/items/drills/Palladium_Drill.png",
    name: "Palladium Drill",
    type: "drill",
    description: "A drill made from precious palladium metal.",
  },
  obsidianDrill: {
    damage: 60,
    icon: "/sprites/items/drills/Obsidian_Drill.png",
    name: "Obsidian Drill",
    type: "drill",
    description: "A drill made from volcanic obsidian.",
  },

  mythrilDrill: {
    damage: 80,
    icon: "/sprites/items/drills/Mythril_Drill.png",
    name: "Mythril Drill",
    type: "drill",
    description: "A drill forged from legendary mythril.",
  },
  diamondiumDrill: {
    damage: 100,
    icon: "/sprites/items/drills/Diamondium_Drill.png",
    name: "Diamondium Drill",
    type: "drill",
    description: "A drill made from crystallized diamond essence.",
  },
  darkmatterDrill: {
    damage: 150,
    icon: "/sprites/items/drills/Darkmatter_Drill.png",
    name: "Darkmatter Drill",
    type: "drill",
    description: "A drill powered by dark matter technology.",
  },
  infinitiumDrill: {
    damage: 9999,
    icon: "/sprites/items/drills/Infinitium_Drill.png",
    name: "Infinitium Drill",
    type: "drill",
    description: "The ultimate drill with infinite drilling potential.",
  },

  /// Potions

  wrathPotion: {
    name: "Potion of Wrath",
    effect: "wrathEffect",

    type: "potion",
    description: "Increases pickaxe's damage by 10%.",
    icon: "/sprites/items/potions/Wrath_Potion.png",
  },
  // greedPotion: {
  //   name: "Potion of Greed",
  //   effect: "greedEffect",

  //   type: "potion",
  //   description: "Increases the materials collected",
  //   icon: "/sprites/items/potions/Greed_Potion.png",
  // },
  fortunePotion: {
    name: "Potion of Fortune",
    effect: "fortuneEffect",

    type: "potion",
    description: "Grants 10% for droping double resources.",
    icon: "/sprites/items/potions/Fortune_Potion.png",
  },
  luckPotion: {
    name: "Potion of Luck",
    effect: "luckEffect",

    type: "potion",
    description: "Increases critical chance by 5%.",
    icon: "/sprites/items/potions/Luck_Potion.png",
  },
  // monsterPotion: {
  //   name: "Monster Potion",
  //   effect: "monsterEffect",

  //   type: "potion",
  //   description: "Grants supernatural mining abilities",
  //   icon: "/sprites/items/potions/Monster_Potion.png",
  // },
  smeltingPotion: {
    name: "Smelting Potion",
    effect: "smeltingEffect",

    type: "potion",
    description: "Increases smelting speed by 100%.",
    icon: "/sprites/items/potions/Smelting_Potion.png",
  },

  /// Greater Potions

  greaterWrathPotion: {
    name: "Greater Potion of Wrath",
    effect: "greaterWrathEffect",

    type: "potion",
    description: "Increases pickaxe's damage by 20%.",
    icon: "/sprites/items/potions/Greater_Wrath_Potion.png",
  },
  // greaterGreedPotion: {
  //   name: "Greater Potion of Greed",
  //   effect: "greaterGreedEffect",

  //   type: "potion",
  //   description: "Greatly increases the materials collected",
  //   icon: "/sprites/items/potions/Greater_Greed_Potion.png",
  // },
  greaterFortunePotion: {
    name: "Greater Potion of Fortune",
    effect: "greaterFortuneEffect",

    type: "potion",
    description: "Grants 15% for droping double resources.",
    icon: "/sprites/items/potions/Greater_Fortune_Potion.png",
  },
  greaterLuckPotion: {
    name: "Greater Potion of Luck",
    effect: "greaterLuckEffect",

    type: "potion",
    description: "Increases critical chance by 10%.",
    icon: "/sprites/items/potions/Greater_Luck_Potion.png",
  },
  // greaterMonsterPotion: {
  //   name: "Greater Monster Potion",
  //   effect: "greaterMonsterEffect",

  //   type: "potion",
  //   description: "Grants enhanced supernatural mining abilities",
  //   icon: "/sprites/items/potions/Greater_Monster_Potion.png",
  // },
  greaterSmeltingPotion: {
    name: "Greater Smelting Potion",
    effect: "greaterSmeltingEffect",

    type: "potion",
    description: "Increases smelting speed by 300%.",
    icon: "/sprites/items/potions/Greater_Smelting_Potion.png",
  },

  /// Supreme Potions

  supremeWrathPotion: {
    name: "Supreme Potion of Wrath",
    effect: "supremeWrathEffect",

    type: "potion",
    description: "Increases pickaxe's damage by 40%.",
    icon: "/sprites/items/potions/Supreme_Wrath_Potion.png",
  },
  // supremeGreedPotion: {
  //   name: "Supreme Potion of Greed",
  //   effect: "supremeGreedEffect",

  //   type: "potion",
  //   description: "Massively increases the materials collected",
  //   icon: "/sprites/items/potions/Supreme_Greed_Potion.png",
  // },
  supremeFortunePotion: {
    name: "Supreme Potion of Fortune",
    effect: "supremeFortuneEffect",

    type: "potion",
    description: "Grants 30% for droping double resources.",
    icon: "/sprites/items/potions/Supreme_Fortune_Potion.png",
  },
  supremeLuckPotion: {
    name: "Supreme Potion of Luck",
    effect: "supremeLuckEffect",

    type: "potion",
    description: "Increases critical chance by 15%.",
    icon: "/sprites/items/potions/Supreme_Luck_Potion.png",
  },
  // supremeMonsterPotion: {
  //   name: "Supreme Monster Potion",
  //   effect: "supremeMonsterEffect",

  //   type: "potion",
  //   description: "Grants ultimate supernatural mining abilities",
  //   icon: "/sprites/items/potions/Supreme_Monster_Potion.png",
  // },
  supremeSmeltingPotion: {
    name: "Supreme Smelting Potion",
    effect: "supremeSmeltingEffect",

    type: "potion",
    description: "Increases smelting speed by 1000%.",
    icon: "/sprites/items/potions/Supreme_Smelting_Potion.png",
  },
} as const satisfies Record<string, Item>;

export type ItemKey = keyof typeof ITEMS;

export type ItemPickaxeKey = {
  [K in ItemKey]: (typeof ITEMS)[K] extends PickaxeItem ? K : never;
}[ItemKey];

export type ItemDrillKey = {
  [K in ItemKey]: (typeof ITEMS)[K] extends DrillItem ? K : never;
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

export type ItemSeedKey = {
  [K in ItemKey]: (typeof ITEMS)[K] extends PlantableItem ? K : never;
}[ItemKey];

export type ItemConsumableKey = {
  [K in ItemKey]: (typeof ITEMS)[K] extends ConsumableItem ? K : never;
}[ItemKey];

export type ActiveItemKey =
  | ItemPickaxeKey
  | ItemPotionKey
  | ItemUpgradeKey
  | ItemDrillKey
  | ItemConsumableKey;

export function isItemKey(key: string): key is ItemKey {
  return key in ITEMS;
}

export type TypedItemWithQuantity = {
  id: ItemKey;
  quantity: number;
};
