import { CHECKED_AT } from './sources';

export type DatabaseConfidence = 'high' | 'medium' | 'watch';

export type DatabaseKind = 'stones' | 'weapons' | 'bosses' | 'zones';

export interface WikiDatabaseBase {
  id: string;
  name: string;
  aliases?: string[];
  category: string;
  stage: 'Early' | 'Midgame' | 'Advanced' | 'Endgame' | 'Update';
  summary: string;
  prerequisites: string[];
  routeHint: string;
  relatedRoutes: string[];
  relatedEntities: string[];
  sourcePages: string[];
  confidence: DatabaseConfidence;
}

export interface StoneEntry extends WikiDatabaseBase {
  kind: 'stone';
  unlockMethod: string;
  abilityFocus: string;
  trackerTasks: string[];
}

export interface WeaponEntry extends WikiDatabaseBase {
  kind: 'weapon';
  role: string;
  unlockPath: string[];
  usefulFor: string[];
}

export interface BossEntry extends WikiDatabaseBase {
  kind: 'boss';
  location: string;
  recommendedPrep: string[];
  rewards: string[];
}

export interface ZoneEntry extends WikiDatabaseBase {
  kind: 'zone';
  purpose: string;
  keyObjectives: string[];
}

export type WikiDatabaseEntry =
  | StoneEntry
  | WeaponEntry
  | BossEntry
  | ZoneEntry;

export interface DatabaseTableRecord {
  id: string;
  name: string;
  aliases: string[];
  category: string;
  stage: string;
  summary: string;
  details: string[];
  prerequisites: string[];
  routeHint: string;
  relatedRoutes: string[];
  relatedEntities: string[];
  sourcePages: string[];
  confidence: DatabaseConfidence;
}

export const databaseUpdatedAt = CHECKED_AT;

export const databaseSourceNote =
  'Structured from Fandom page breadth, official Roblox update signals, and guide cross-checks. Exact route details can change after game updates.';

export const stones: StoneEntry[] = [
  {
    kind: 'stone',
    id: 'reality-stone',
    name: 'Reality Stone',
    category: 'Route / Obby',
    stage: 'Early',
    summary:
      'A movement-route stone that teaches players to treat the gauntlet path as more than combat.',
    unlockMethod: 'Reality Stone obby route',
    abilityFocus: 'Reality route progress and gauntlet growth',
    prerequisites: ['Basic movement comfort', 'Official game access'],
    routeHint:
      'Treat this as a platforming route. If you fail repeatedly, solve movement and camera control before chasing harder weapons.',
    trackerTasks: [
      'Open the correct Roblox experience.',
      'Find the Reality route entrance.',
      'Complete the route without switching objectives.',
      'Test what changed on the gauntlet after collection.',
    ],
    relatedRoutes: [
      '/guides/all-infinity-stones-guide',
      '/guides/gauntlet-controls-guide',
      '/map',
    ],
    relatedEntities: ['Infinity Gauntlet', 'Reality Stone obby', 'Map'],
    sourcePages: ['Infinity Stones', 'Map'],
    confidence: 'medium',
  },
  {
    kind: 'stone',
    id: 'space-stone',
    name: 'Space Stone',
    category: 'Route / Obby',
    stage: 'Early',
    summary:
      'A route stone associated with movement and teleport-style gauntlet progression.',
    unlockMethod: 'Space Stone route or structure objective',
    abilityFocus: 'Teleport and movement utility after the right unlock state',
    prerequisites: ['Reality route practice', 'Basic gauntlet control testing'],
    routeHint:
      'Pair this stone with the controls guide, because players often collect route stones before understanding the related keybind value.',
    trackerTasks: [
      'Review the all-stones route order.',
      'Complete the Space route objective.',
      'Practice Space-related movement after unlock.',
      'Mark whether teleport-style control is usable for your account.',
    ],
    relatedRoutes: [
      '/guides/all-infinity-stones-guide',
      '/guides/gauntlet-controls-guide',
      '/controls',
    ],
    relatedEntities: ['Infinity Gauntlet', 'Space Stone obby', 'Controls'],
    sourcePages: ['Infinity Stones', 'Infinity Gauntlet', 'Map'],
    confidence: 'medium',
  },
  {
    kind: 'stone',
    id: 'time-stone',
    name: 'Time Stone',
    category: 'Route / Obby',
    stage: 'Early',
    summary:
      'A route stone that becomes important because time-control abilities affect later fights.',
    unlockMethod: 'Time Stone route objective',
    abilityFocus: 'Time Stop timing and route control',
    prerequisites: ['Stable movement route', 'Controls testing after unlock'],
    routeHint:
      'Do not leave this as a checked box only. Practice the timing window before using it against a boss.',
    trackerTasks: [
      'Locate the Time route objective.',
      'Complete the route in one focused session.',
      'Practice Time Stop behavior safely.',
      'Use the controls guide before boss prep.',
    ],
    relatedRoutes: [
      '/guides/all-infinity-stones-guide',
      '/guides/gauntlet-controls-guide',
      '/bosses',
    ],
    relatedEntities: ['Time Stone Tower', 'Infinity Gauntlet', 'Bosses'],
    sourcePages: ['Infinity Stones', 'Map', 'Infinity Gauntlet'],
    confidence: 'medium',
  },
  {
    kind: 'stone',
    id: 'power-stone',
    name: 'Power Stone',
    category: 'NPC / Combat',
    stage: 'Midgame',
    summary:
      'A combat-leaning stone that asks players to handle NPC interaction and fight pacing.',
    unlockMethod: 'Power Stone NPC or mechanism route',
    abilityFocus: 'Damage pressure and stronger gauntlet routing',
    prerequisites: ['Early stones', 'Basic combat rhythm'],
    routeHint:
      'If the route asks for an NPC or mechanism, slow down and confirm the interaction before assuming it is a pure location pickup.',
    trackerTasks: [
      'Confirm early stones are done.',
      'Find the Power Stone NPC or mechanism route.',
      'Prepare for combat rather than only navigation.',
      'Return to controls after the unlock.',
    ],
    relatedRoutes: ['/guides/all-infinity-stones-guide', '/controls', '/map'],
    relatedEntities: [
      'Power Stone NPC',
      'Power Stone Mechanism',
      'Power Temple',
    ],
    sourcePages: ['Power Stone', 'Power Stone NPC', 'Power Stone Mechanism'],
    confidence: 'medium',
  },
  {
    kind: 'stone',
    id: 'mind-stone',
    name: 'Mind Stone',
    category: 'NPC / Combat',
    stage: 'Midgame',
    summary:
      'A combat and ability stone that makes control practice more important before later routes.',
    unlockMethod: 'NPC or combat-linked stone progress',
    abilityFocus: 'Focus-style gauntlet behavior and route readiness',
    prerequisites: ['Early route stones', 'NPC fight comfort'],
    routeHint:
      'Treat Mind progress as both a combat check and a controls unlock. It is a common point where button knowledge starts mattering.',
    trackerTasks: [
      'Complete the earlier route stones.',
      'Prepare for NPC-linked progress.',
      'Test Focus behavior after unlock.',
      'Use it in a low-risk fight before boss attempts.',
    ],
    relatedRoutes: [
      '/guides/all-infinity-stones-guide',
      '/guides/gauntlet-controls-guide',
      '/bosses',
    ],
    relatedEntities: ['Infinity Gauntlet', 'Controls', 'NPC checks'],
    sourcePages: ['Mind stone', 'Infinity Stones', 'Infinity Gauntlet'],
    confidence: 'medium',
  },
  {
    kind: 'stone',
    id: 'soul-stone',
    name: 'Soul Stone',
    category: 'Drop / Patience',
    stage: 'Midgame',
    summary:
      'The clearest patience stone: public route notes treat it as a low-chance NPC drop rather than a simple coordinate.',
    unlockMethod: 'NPC drop grind',
    abilityFocus: 'Final stone completion and gauntlet route stability',
    prerequisites: ['Eligible NPC farming route', 'Safe session pacing'],
    routeHint:
      'Do not use scripts or auto-farm pages. Farm safely, stop when unfocused, and recheck update notes if the drop source changes.',
    trackerTasks: [
      'Confirm the current eligible NPC route.',
      'Farm in controlled sessions.',
      'Avoid script or auto-farm claims.',
      'Mark the gauntlet complete after the drop.',
    ],
    relatedRoutes: [
      '/guides/all-infinity-stones-guide',
      '/codes',
      '/guides/codes-and-scripts-safety-guide',
    ],
    relatedEntities: ['Baseplate NPCs', 'Infinity Gauntlet', 'Codes Safety'],
    sourcePages: ['Infinity Stones', 'Bosses'],
    confidence: 'medium',
  },
];

export const weapons: WeaponEntry[] = [
  {
    kind: 'weapon',
    id: 'infinity-gauntlet',
    name: 'Infinity Gauntlet',
    category: 'Core weapon',
    stage: 'Early',
    role: 'Main progression system',
    summary:
      'The baseline weapon and ability system. Stones make the gauntlet stronger and unlock meaningful controls.',
    prerequisites: ['Official Roblox experience', 'Stone route progress'],
    unlockPath: [
      'Start in the official Roblox experience.',
      'Collect Infinity Stones in a stable order.',
      'Practice every new ability after each stone.',
    ],
    usefulFor: ['All stone routes', 'Boss prep', 'Later weapon prerequisites'],
    routeHint:
      'Do not chase rare weapons before the gauntlet route is stable. Most later goals assume stone and control progress.',
    relatedRoutes: [
      '/stones',
      '/guides/all-infinity-stones-guide',
      '/guides/gauntlet-controls-guide',
    ],
    relatedEntities: ['Infinity Stones', 'Controls'],
    sourcePages: ['Infinity Gauntlet', 'Infinity Stones'],
    confidence: 'high',
  },
  {
    kind: 'weapon',
    id: 'mjolnir',
    name: 'Mjolnir',
    category: 'Weapon route',
    stage: 'Midgame',
    role: 'Weapon bridge and update-route helper',
    summary:
      'A recognizable weapon that also matters because Mechanical Gloves route notes reference Mjolnir-style setup actions.',
    prerequisites: ['Stone route progress', 'Weapon route familiarity'],
    unlockPath: [
      'Finish early gauntlet and stone fundamentals.',
      'Follow the weapon progression route before Stormbreaker.',
      'Keep notes on Mjolnir because Update 3.2 routes may reuse it.',
    ],
    usefulFor: ['Stormbreaker route', 'Mechanical Gloves setup awareness'],
    routeHint:
      'Even if Stormbreaker is your target, track Mjolnir because later content can treat it as a key rather than only a weapon.',
    relatedRoutes: [
      '/guides/stormbreaker-mjolnir-guide',
      '/guides/mechanical-gloves-doom-guide',
      '/weapons',
    ],
    relatedEntities: ['Stormbreaker', 'Mechanical Gloves', 'Doom'],
    sourcePages: ['Weapons', 'Mechanical Gloves'],
    confidence: 'medium',
  },
  {
    kind: 'weapon',
    id: 'stormbreaker',
    name: 'Stormbreaker',
    category: 'Weapon route',
    stage: 'Midgame',
    role: 'Progression weapon',
    summary:
      'A major weapon target best handled after stones, controls, and early weapon routing are stable.',
    prerequisites: ['Infinity Gauntlet progress', 'Mjolnir route awareness'],
    unlockPath: [
      'Confirm stones and gauntlet controls.',
      'Review Mjolnir and weapon progression.',
      'Follow the Stormbreaker route guide.',
    ],
    usefulFor: ['Weapon progression', 'Boss readiness', 'Endgame preparation'],
    routeHint:
      'Use Stormbreaker as a planned progression route, not a random collectible. Missing earlier prerequisites makes the guide feel vague.',
    relatedRoutes: [
      '/guides/stormbreaker-mjolnir-guide',
      '/guides/weapons-progression-guide',
      '/bosses',
    ],
    relatedEntities: ['Mjolnir', 'Infinity Gauntlet', 'Bosses'],
    sourcePages: ['Weapons'],
    confidence: 'medium',
  },
  {
    kind: 'weapon',
    id: 'hadron-enforcer',
    name: 'Hadron Enforcer',
    aliases: ['Upgraded Hadron Enforcer'],
    category: 'Prerequisite weapon',
    stage: 'Advanced',
    role: 'Bridge weapon for harder boss routes',
    summary:
      'A route-relevant weapon that appears in Surtur and Heart of Ymir preparation notes.',
    prerequisites: [
      'Midgame weapon progress',
      'Map access beyond early routes',
    ],
    unlockPath: [
      'Stabilize weapons progression.',
      'Confirm map access for advanced objectives.',
      'Use it as preparation for Ymir and Surtur routes.',
    ],
    usefulFor: ['Heart of Ymir route', 'Surtur route', 'Advanced boss prep'],
    routeHint:
      'If a guide asks for Hadron Enforcer, solve that before attempting the boss. It is a prerequisite signal, not optional flavor.',
    relatedRoutes: [
      '/guides/heart-of-ymir-guide',
      '/guides/surtur-twilight-sword-guide',
      '/guides/weapons-progression-guide',
    ],
    relatedEntities: ['Heart of Ymir', 'Surtur', 'World5'],
    sourcePages: ['Hadron Enforcer', 'Upgraded Hadron Enforcer', 'Weapons'],
    confidence: 'medium',
  },
  {
    kind: 'weapon',
    id: 'casket-of-ancient-winters',
    name: 'Casket of Ancient Winters',
    category: 'Relic weapon',
    stage: 'Advanced',
    role: 'Control and synergy item',
    summary:
      'A relic-like weapon with public notes around Heart of Ymir synergy and freezing interactions.',
    prerequisites: ['Advanced weapon routing', 'Heart of Ymir planning'],
    unlockPath: [
      'Review weapon progression.',
      'Plan Heart of Ymir before deep endgame routes.',
      'Use synergy notes conservatively until rechecked after updates.',
    ],
    usefulFor: ['Heart of Ymir synergy', 'Control-heavy fights'],
    routeHint:
      'Treat Casket value as synergy context. Recheck current data before building a route around exact values.',
    relatedRoutes: ['/guides/heart-of-ymir-guide', '/weapons', '/bosses'],
    relatedEntities: ['Heart of Ymir', 'Eson the Searcher'],
    sourcePages: ['Casket of Ancient Winters', 'Heart of Ymir', 'Weapons'],
    confidence: 'watch',
  },
  {
    kind: 'weapon',
    id: 'heart-of-ymir',
    name: 'Heart of Ymir',
    category: 'Relic / route enabler',
    stage: 'Advanced',
    role: 'Prerequisite and gauntlet support',
    summary:
      'A route enabler tied to Eson and World5 that supports later boss and weapon paths.',
    prerequisites: [
      'World5 access',
      'Eson preparation',
      'Hadron Enforcer route',
    ],
    unlockPath: [
      'Prepare Hadron Enforcer and advanced weapons.',
      'Reach World5 cleanly.',
      'Defeat Eson the Searcher and verify current reward behavior.',
    ],
    usefulFor: ['Surtur route', 'Casket synergy', 'Endgame durability'],
    routeHint:
      'If Surtur or Twilight Sword keeps blocking you, Heart of Ymir is often the missing bridge.',
    relatedRoutes: [
      '/guides/heart-of-ymir-guide',
      '/guides/surtur-twilight-sword-guide',
      '/bosses',
    ],
    relatedEntities: [
      'Eson the Searcher',
      'World5',
      'Casket of Ancient Winters',
    ],
    sourcePages: ['Heart of Ymir', 'Eson the Searcher', 'World5'],
    confidence: 'medium',
  },
  {
    kind: 'weapon',
    id: 'surturs-sword',
    name: "Surtur's Sword",
    aliases: ['Twilight Sword', "Upgraded Surtur's Sword"],
    category: 'Boss reward weapon',
    stage: 'Endgame',
    role: 'Catacombs boss reward route',
    summary:
      'An endgame weapon route tied to Surtur, Catacombs access, and multi-phase boss readiness.',
    prerequisites: ['Catacombs access', 'Heart of Ymir', 'Hadron Enforcer'],
    unlockPath: [
      'Prepare Heart of Ymir and Hadron Enforcer.',
      'Reach Catacombs and handle summon/setup requirements.',
      'Defeat both Surtur phases and then review upgrade options.',
    ],
    usefulFor: ['Endgame weapon progression', 'Boss route completion'],
    routeHint:
      'Do not start with the boss location question. Start by checking whether the route is valid for your current gear.',
    relatedRoutes: [
      '/guides/surtur-twilight-sword-guide',
      '/guides/heart-of-ymir-guide',
      '/bosses',
    ],
    relatedEntities: ['Surtur', 'Catacombs', 'Heart of Ymir'],
    sourcePages: ['Surtur', "Surtur's Sword", "Upgraded Surtur's Sword"],
    confidence: 'medium',
  },
  {
    kind: 'weapon',
    id: 'gungnir',
    name: 'Gungnir',
    category: 'Forge weapon',
    stage: 'Endgame',
    role: 'Fragment and charge weapon',
    summary:
      'A forge-focused weapon route involving fragments and charge behavior tied to NPC choices.',
    prerequisites: [
      'Forge access',
      'Fragment route patience',
      'Strong map routing',
    ],
    unlockPath: [
      'Confirm Forge access and map repeatability.',
      'Collect or prepare required fragments.',
      'Unlock Gungnir and learn charge behavior from combat choices.',
    ],
    usefulFor: ['Endgame weapon progression', 'NPC charge rhythm'],
    routeHint:
      'Gungnir punishes shaky map knowledge. Learn Forge and related zones before investing in the fragment grind.',
    relatedRoutes: [
      '/guides/gungnir-fragments-guide',
      '/map',
      '/guides/weapons-progression-guide',
    ],
    relatedEntities: ['Forge', 'Fragments', 'World5'],
    sourcePages: ['Gungnir', 'Forge', 'Weapons'],
    confidence: 'medium',
  },
  {
    kind: 'weapon',
    id: 'universal-weapon',
    name: 'Universal Weapon',
    aliases: ['Cosmi-Rod', 'Upgraded Universal Weapon', 'The Secret Weapon'],
    category: 'Endgame weapon',
    stage: 'Endgame',
    role: 'Late weapon goal',
    summary:
      'A late weapon family that belongs in progression planning, not beginner routing.',
    prerequisites: [
      'Endgame weapon foundation',
      'Map and boss route confidence',
    ],
    unlockPath: [
      'Complete core stones and midgame weapons.',
      'Stabilize advanced routes such as Ymir, Surtur, or Gungnir.',
      'Check current community data before committing to exact requirements.',
    ],
    usefulFor: ['Endgame goals', 'Weapon database planning'],
    routeHint:
      'Keep this as a late planner target until current route data is rechecked. Do not build beginner advice around it.',
    relatedRoutes: ['/guides/weapons-progression-guide', '/weapons', '/map'],
    relatedEntities: ['Gungnir', 'Surtur', 'Heart of Ymir'],
    sourcePages: [
      'Universal Weapon',
      'Upgraded Universal Weapon',
      'The Secret Weapon',
    ],
    confidence: 'watch',
  },
  {
    kind: 'weapon',
    id: 'mechanical-gloves',
    name: 'Mechanical Gloves',
    aliases: ['Mechanical Glove'],
    category: 'Update 3.2 weapon',
    stage: 'Update',
    role: 'Current Doom update route',
    summary:
      'The current high-priority update weapon because the official Roblox description mentions Doom and Mechanical Glove.',
    prerequisites: [
      'Update 3.2 route awareness',
      'Doom setup',
      'Mjolnir interaction notes',
    ],
    unlockPath: [
      'Read the Update 3.2 guide first.',
      'Prepare for Doom and Power Temple setup.',
      'Verify current Mechanical Gloves route after updates before long attempts.',
    ],
    usefulFor: ['Current update progression', 'Doom route completion'],
    routeHint:
      'Treat this as advanced current content. It should be checked more often than older weapon routes.',
    relatedRoutes: [
      '/guides/mechanical-gloves-doom-guide',
      '/updates',
      '/bosses',
    ],
    relatedEntities: ['Doom', 'Power Temple', 'Mjolnir'],
    sourcePages: ['Mechanical Gloves', 'Bosses', 'Weapons'],
    confidence: 'medium',
  },
];

export const bosses: BossEntry[] = [
  {
    kind: 'boss',
    id: 'doom',
    name: 'Doom',
    category: 'Update boss',
    stage: 'Update',
    location: 'Update 3.2 / Power Temple route',
    summary:
      'Current update boss tied to Mechanical Gloves and official Update 3.2 demand.',
    prerequisites: [
      'Advanced weapon readiness',
      'Power Temple setup',
      'Update 3.2 route guide',
    ],
    recommendedPrep: [
      'Read the Mechanical Gloves guide.',
      'Confirm Mjolnir or weapon interaction notes.',
      'Bring a stable stone and controls setup.',
      'Recheck updates before repeating a failed setup.',
    ],
    rewards: ['Mechanical Gloves route progress'],
    routeHint:
      'Doom is the safest P0 boss checklist because official game text points to the update. Check this route after every update.',
    relatedRoutes: [
      '/guides/mechanical-gloves-doom-guide',
      '/updates',
      '/weapons',
    ],
    relatedEntities: ['Mechanical Gloves', 'Power Temple', 'Mjolnir'],
    sourcePages: ['Mechanical Gloves', 'Bosses'],
    confidence: 'medium',
  },
  {
    kind: 'boss',
    id: 'surtur',
    name: 'Surtur',
    category: 'Endgame boss',
    stage: 'Endgame',
    location: 'Catacombs',
    summary:
      'An endgame boss route connected to Surtur Sword / Twilight Sword and multi-phase preparation.',
    prerequisites: ['Catacombs access', 'Heart of Ymir', 'Hadron Enforcer'],
    recommendedPrep: [
      'Unlock or prepare Heart of Ymir.',
      'Confirm Hadron Enforcer route readiness.',
      'Learn Catacombs access without wandering.',
      'Plan for both fight phases.',
    ],
    rewards: ["Surtur's Sword / Twilight Sword route progress"],
    routeHint:
      'If you are searching for a Surtur code, treat it as route confusion unless a real redeem code is verified.',
    relatedRoutes: [
      '/guides/surtur-twilight-sword-guide',
      '/guides/heart-of-ymir-guide',
      '/codes',
    ],
    relatedEntities: ["Surtur's Sword", 'Heart of Ymir', 'Catacombs'],
    sourcePages: ['Surtur', "Surtur's Sword", 'Bosses', 'Catacombs'],
    confidence: 'medium',
  },
  {
    kind: 'boss',
    id: 'eson-the-searcher',
    name: 'Eson the Searcher',
    category: 'Relic boss',
    stage: 'Advanced',
    location: 'World5',
    summary:
      'A major boss check in the Heart of Ymir route and a bridge into deeper endgame planning.',
    prerequisites: [
      'World5 access',
      'Hadron Enforcer route',
      'Advanced combat readiness',
    ],
    recommendedPrep: [
      'Read the Heart of Ymir guide.',
      'Confirm you can reach World5.',
      'Prepare Hadron Enforcer or the current route equivalent.',
      'Bring enough control and durability for a long fight.',
    ],
    rewards: ['Heart of Ymir route progress'],
    routeHint:
      'Do not attempt Eson until World5 travel feels repeatable. Map confusion wastes more time than the fight itself.',
    relatedRoutes: [
      '/guides/heart-of-ymir-guide',
      '/map',
      '/guides/weapons-progression-guide',
    ],
    relatedEntities: ['Heart of Ymir', 'World5', 'Hadron Enforcer'],
    sourcePages: ['Eson the Searcher', 'Heart of Ymir', 'World5'],
    confidence: 'medium',
  },
  {
    kind: 'boss',
    id: 'lazarus',
    name: 'Lazarus',
    category: 'Boss route',
    stage: 'Advanced',
    location: 'Advanced route / boss system',
    summary:
      'A public boss-list entity best treated as an advanced preparation check until route details are revalidated.',
    prerequisites: [
      'Stone route completion',
      'Weapon progression',
      'Map confidence',
    ],
    recommendedPrep: [
      'Finish the gauntlet basics.',
      'Choose one weapon route before attempting.',
      'Use the boss hub as the planning page.',
      'Recheck current route data after updates.',
    ],
    rewards: ['Boss route progress'],
    routeHint:
      'Lazarus is included in the checklist because it appears in public boss data, but exact route claims should stay conservative.',
    relatedRoutes: ['/bosses', '/weapons', '/map'],
    relatedEntities: ['Bosses', 'Weapons'],
    sourcePages: ['Lazarus', 'Bosses'],
    confidence: 'watch',
  },
  {
    kind: 'boss',
    id: 'astra',
    name: 'Astra',
    aliases: ['Astra (Boss)', 'Npc Astra'],
    category: 'Special NPC boss',
    stage: 'Advanced',
    location: 'Special NPC route',
    summary:
      'A boss/NPC entity that belongs in route prep rather than a beginner route.',
    prerequisites: ['NPC fight comfort', 'Stone and weapon basics'],
    recommendedPrep: [
      'Understand whether the target is boss Astra or NPC Astra.',
      'Bring a stable gauntlet setup.',
      'Avoid assuming all Astra pages describe the same route step.',
    ],
    rewards: ['Special NPC route progress'],
    routeHint:
      'Name overlap makes Astra a good database entry. Check the exact source page before planning a long route.',
    relatedRoutes: ['/bosses', '/map', '/guides/beginner-guide'],
    relatedEntities: ['Npc Astra', 'Bosses'],
    sourcePages: ['Astra (Boss)', 'Npc Astra', 'Bosses'],
    confidence: 'watch',
  },
  {
    kind: 'boss',
    id: 'power-stone-npc',
    name: 'Power Stone NPC',
    category: 'Stone NPC',
    stage: 'Midgame',
    location: 'Power Stone route',
    summary:
      'A stone-route NPC check that connects combat progress to Power Stone completion.',
    prerequisites: ['Early stones', 'Basic combat control'],
    recommendedPrep: [
      'Read the all-stones guide.',
      'Confirm the current Power Stone mechanism.',
      'Prepare for NPC interaction and combat.',
    ],
    rewards: ['Power Stone progress'],
    routeHint:
      'This entry exists so players do not treat every stone as a pure map marker.',
    relatedRoutes: [
      '/guides/all-infinity-stones-guide',
      '/stones',
      '/controls',
    ],
    relatedEntities: ['Power Stone', 'Power Stone Mechanism'],
    sourcePages: ['Power Stone NPC', 'Power Stone', 'Power Stone Mechanism'],
    confidence: 'medium',
  },
];

export const zones: ZoneEntry[] = [
  {
    kind: 'zone',
    id: 'main-map',
    name: 'Main Map',
    category: 'Core map',
    stage: 'Early',
    purpose:
      'The default route hub for early stones, NPC checks, and official play.',
    summary:
      'The central area players return to between stone collection, NPC checks, and route planning.',
    prerequisites: ['Official Roblox access'],
    keyObjectives: [
      'Begin stone routes',
      'Find NPC checks',
      'Return after guide steps',
    ],
    routeHint:
      'Use the main map as a reset point. If a route feels confusing, return here and pick one objective.',
    relatedRoutes: ['/map', '/guides/beginner-guide', '/stones'],
    relatedEntities: ['Infinity Stones', 'NPC checks'],
    sourcePages: ['Map'],
    confidence: 'medium',
  },
  {
    kind: 'zone',
    id: 'catacombs',
    name: 'Catacombs',
    category: 'Endgame zone',
    stage: 'Endgame',
    purpose: 'Endgame access zone for Surtur and Twilight Sword routing.',
    summary:
      'A major advanced zone tied to Surtur, Surtur Sword, and multi-phase boss preparation.',
    prerequisites: [
      'Advanced map access',
      'Heart of Ymir route',
      'Hadron Enforcer prep',
    ],
    keyObjectives: [
      'Reach Surtur',
      'Prepare Twilight Sword route',
      'Avoid undergeared attempts',
    ],
    routeHint:
      'Do not enter Catacombs without knowing why. The objective should be Surtur, a weapon step, or a verified route gate.',
    relatedRoutes: [
      '/guides/surtur-twilight-sword-guide',
      '/guides/heart-of-ymir-guide',
      '/map',
    ],
    relatedEntities: ['Surtur', "Surtur's Sword", 'Heart of Ymir'],
    sourcePages: ['Catacombs', 'Surtur', "Surtur's Sword"],
    confidence: 'medium',
  },
  {
    kind: 'zone',
    id: 'world5',
    name: 'World5',
    aliases: ['The 5th World', 'World 5'],
    category: 'Advanced world',
    stage: 'Advanced',
    purpose: 'Advanced route area connected to Eson and Heart of Ymir.',
    summary:
      'A route gate for Heart of Ymir and Eson planning. Players should learn access before attempting the boss.',
    prerequisites: ['Advanced map access', 'Weapon route prep'],
    keyObjectives: [
      'Reach Eson the Searcher',
      'Work toward Heart of Ymir',
      'Prepare later endgame routes',
    ],
    routeHint:
      'Practice the trip before a serious boss attempt. A repeatable route matters more than one lucky arrival.',
    relatedRoutes: ['/guides/heart-of-ymir-guide', '/map', '/bosses'],
    relatedEntities: ['Eson the Searcher', 'Heart of Ymir', 'Hadron Enforcer'],
    sourcePages: ['World5', 'World 5', 'The 5th World', 'Heart of Ymir'],
    confidence: 'medium',
  },
  {
    kind: 'zone',
    id: 'forge',
    name: 'Forge',
    category: 'Crafting route',
    stage: 'Endgame',
    purpose: 'Weapon crafting and fragment-routing zone.',
    summary:
      'A late route area especially important for Gungnir and fragment-based goals.',
    prerequisites: ['Map route confidence', 'Fragment route plan'],
    keyObjectives: [
      'Forge Gungnir',
      'Handle fragment requirements',
      'Repeat routes without losing time',
    ],
    routeHint:
      'Forge routes become easier only after the surrounding map is repeatable. Learn zones before committing to long grinds.',
    relatedRoutes: ['/guides/gungnir-fragments-guide', '/map', '/weapons'],
    relatedEntities: ['Gungnir', 'Fragments', 'Weapons'],
    sourcePages: ['Forge', 'Gungnir'],
    confidence: 'medium',
  },
  {
    kind: 'zone',
    id: 'lunar-world',
    name: 'Lunar World',
    category: 'Route zone',
    stage: 'Advanced',
    purpose: 'Secondary map route noted in community map breadth.',
    summary:
      'A route area to keep in the database because it appears in map breadth and can become relevant to advanced objectives.',
    prerequisites: ['Map familiarity', 'Current route check'],
    keyObjectives: [
      'Check advanced routes',
      'Avoid mixing old and current claims',
    ],
    routeHint:
      'Use Lunar World as watch data until a specific route objective demands it.',
    relatedRoutes: ['/map', '/weapons', '/bosses'],
    relatedEntities: ['Map', 'Weapons'],
    sourcePages: ['Lunar World', 'Map'],
    confidence: 'watch',
  },
  {
    kind: 'zone',
    id: 'power-temple',
    name: 'Power Stone Temple',
    aliases: ['Power Temple'],
    category: 'Stone / update route',
    stage: 'Update',
    purpose:
      'Power Stone route context and Doom / Mechanical Gloves setup signal.',
    summary:
      'A high-value route location because public update data connects it to Mechanical Gloves setup planning.',
    prerequisites: ['Power Stone route awareness', 'Update 3.2 guide'],
    keyObjectives: [
      'Power Stone mechanism checks',
      'Doom setup',
      'Mechanical Gloves route planning',
    ],
    routeHint:
      'If a guide says Power Temple, check whether it means stone progress or Update 3.2 setup before moving.',
    relatedRoutes: [
      '/guides/mechanical-gloves-doom-guide',
      '/guides/all-infinity-stones-guide',
      '/updates',
    ],
    relatedEntities: ['Power Stone', 'Doom', 'Mechanical Gloves'],
    sourcePages: ['Power Stone Mechanism', 'Mechanical Gloves', 'Map'],
    confidence: 'medium',
  },
  {
    kind: 'zone',
    id: 'time-stone-tower',
    name: 'Time Stone Tower',
    category: 'Stone route',
    stage: 'Early',
    purpose: 'Route context for Time Stone progress.',
    summary:
      'A named route area to help players separate movement-route stones from NPC/drop stones.',
    prerequisites: ['Basic route movement'],
    keyObjectives: ['Time Stone route', 'Controls testing after unlock'],
    routeHint:
      'After completing a stone route, immediately test the related controls instead of leaving with only the location solved.',
    relatedRoutes: ['/guides/all-infinity-stones-guide', '/controls', '/map'],
    relatedEntities: ['Time Stone', 'Infinity Gauntlet'],
    sourcePages: ['Map', 'Infinity Stones'],
    confidence: 'medium',
  },
  {
    kind: 'zone',
    id: 'reality-stone-obby',
    name: 'Reality Stone Obby',
    category: 'Stone route',
    stage: 'Early',
    purpose: 'Movement check for Reality Stone progress.',
    summary: 'A named obby route that supports the early all-stones checklist.',
    prerequisites: ['Camera and movement comfort'],
    keyObjectives: ['Reality Stone route', 'Early movement practice'],
    routeHint:
      'If this blocks you, practice movement before trying advanced combat objectives.',
    relatedRoutes: ['/guides/all-infinity-stones-guide', '/stones', '/map'],
    relatedEntities: ['Reality Stone', 'Infinity Stones'],
    sourcePages: ['Map', 'Infinity Stones'],
    confidence: 'medium',
  },
  {
    kind: 'zone',
    id: 'space-stone-obby',
    name: 'Space Stone Obby',
    category: 'Stone route',
    stage: 'Early',
    purpose: 'Movement route for Space Stone progress.',
    summary:
      'A named obby route that helps players plan Space Stone before advanced map paths.',
    prerequisites: ['Early route practice'],
    keyObjectives: ['Space Stone route', 'Movement utility setup'],
    routeHint:
      'Treat this as route training. The reward is not only a stone, but a movement-focused gauntlet step.',
    relatedRoutes: ['/guides/all-infinity-stones-guide', '/controls', '/map'],
    relatedEntities: ['Space Stone', 'Infinity Gauntlet'],
    sourcePages: ['Map', 'Infinity Stones'],
    confidence: 'medium',
  },
  {
    kind: 'zone',
    id: 'trials',
    name: 'Trials and PVP',
    category: 'Challenge area',
    stage: 'Advanced',
    purpose: 'Challenge and combat context from public map breadth.',
    summary:
      'A challenge-space entry for players who need to separate route objectives from optional combat practice.',
    prerequisites: ['Combat basics', 'Stone controls'],
    keyObjectives: [
      'Practice combat',
      'Test weapons',
      'Avoid confusing optional areas with required routes',
    ],
    routeHint:
      'Use challenge areas for practice, but return to the route checklist when chasing a specific unlock.',
    relatedRoutes: ['/map', '/controls', '/bosses'],
    relatedEntities: ['PVP', 'Bosses', 'Weapons'],
    sourcePages: ['Map'],
    confidence: 'watch',
  },
];

export const databaseGroups = {
  stones,
  weapons,
  bosses,
  zones,
} satisfies Record<DatabaseKind, WikiDatabaseEntry[]>;

export const databaseHubCards = [
  {
    title: 'Stones Database',
    href: '/database/stones',
    count: stones.length,
    body: 'Six Infinity Stones with unlock method, ability focus, route tasks, and safe source confidence.',
  },
  {
    title: 'Weapons Database',
    href: '/database/weapons',
    count: weapons.length,
    body: 'Gauntlet, Stormbreaker, Gungnir, Heart of Ymir, Surtur Sword, Mechanical Gloves, and other route weapons.',
  },
  {
    title: 'Bosses Database',
    href: '/database/bosses',
    count: bosses.length,
    body: 'Doom, Surtur, Eson, Lazarus, Astra, and stone NPC checks with prerequisite planning.',
  },
  {
    title: 'Zones Database',
    href: '/database/zones',
    count: zones.length,
    body: 'Main map, Catacombs, World5, Forge, Power Temple, obbies, and challenge-route notes.',
  },
] as const;

export const toolCards = [
  {
    title: 'Boss Prerequisite Checklist',
    href: '/tools/boss-checklist',
    body: 'Pick a boss and check the gear, route, map, and prep tasks before wasting attempts.',
  },
  {
    title: 'Weapon Unlock Planner',
    href: '/tools/weapon-planner',
    body: 'Choose a weapon target and see the route steps, prerequisites, useful follow-ups, and related guides.',
  },
  {
    title: 'Infinity Stones Tracker',
    href: '/tools/infinity-stones-tracker',
    body: 'Track all six stones, understand route type, and see the next ability or grind focus.',
  },
] as const;

export function getDatabaseEntries(kind: DatabaseKind) {
  return databaseGroups[kind];
}

export function toDatabaseTableRecords(
  entries: WikiDatabaseEntry[]
): DatabaseTableRecord[] {
  return entries.map((entry) => {
    const details =
      entry.kind === 'stone'
        ? [entry.unlockMethod, entry.abilityFocus]
        : entry.kind === 'weapon'
          ? [entry.role, ...entry.usefulFor]
          : entry.kind === 'boss'
            ? [entry.location, ...entry.rewards]
            : [entry.purpose, ...entry.keyObjectives];

    return {
      id: entry.id,
      name: entry.name,
      aliases: entry.aliases ?? [],
      category: entry.category,
      stage: entry.stage,
      summary: entry.summary,
      details,
      prerequisites: entry.prerequisites,
      routeHint: entry.routeHint,
      relatedRoutes: entry.relatedRoutes,
      relatedEntities: entry.relatedEntities,
      sourcePages: entry.sourcePages,
      confidence: entry.confidence,
    };
  });
}
