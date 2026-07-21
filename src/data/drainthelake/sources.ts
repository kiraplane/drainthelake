import type { DataSource } from './types';

export const CHECKED_AT = '2026-07-21';
export const OFFICIAL_CHECKED_AT = '2026-07-21';

export const officialGameFacts = {
  name: 'Drain the Lake',
  siteName: 'Drain the Lake Wiki',
  domain: 'https://www.drainthelake.top',
  canonicalHost: 'www.drainthelake.top',
  robloxPlaceId: '138381251771774',
  robloxUniverseId: '10267363348',
  creatorName: 'IWTM10GTMPLS',
  creatorType: 'Roblox Group',
  genre: 'Roblox incremental simulator',
  status: 'Live Roblox experience',
  createdAt: '2026-06-03T21:01:44.521Z',
  updatedAt: '2026-07-14T05:27:19.3526215Z',
  maxPlayers: 12,
  activePlayersAtCheck: 44839,
  visitsAtCheck: 61932864,
  favoritesAtCheck: 250108,
  upVotesAtCheck: 60581,
  downVotesAtCheck: 2959,
  officialRobloxUrl:
    'https://www.roblox.com/games/138381251771774/Drain-the-Lake',
  officialDescriptionSummary:
    'Your phone fell into the lake. Fill a bucket, drain water for tokens, upgrade the Skill Tree, go deeper, and recover the phone.',
};

export const siteDescription =
  'Drain the Lake Wiki helps Roblox players plan the bucket loop, spend tokens, choose Skill Tree upgrades, push depth, check codes, and reach the phone ending.';

export const officialQuickLinks = [
  {
    label: 'Roblox',
    href: officialGameFacts.officialRobloxUrl,
  },
  {
    label: 'Rolimon game data',
    href: 'https://www.rolimons.com/game/138381251771774',
  },
];

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'Drain the Lake on Roblox',
    url: officialGameFacts.officialRobloxUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for the official title, creator, live description, genre, max players, and play link.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox universe API snapshot',
    url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirmed universe ID, root place ID, creation date, update timestamp, Simulation / Incremental Simulator genre, live players, visits, favorites, and votes.',
  },
  {
    type: 'serper',
    label: 'Serper long-tail discovery',
    url: 'https://google.serper.dev/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Autocomplete and selected SERP checks found demand for Roblox, wiki, codes, guide, endings, skill tree, badges, buckets, and full walkthrough variants.',
  },
  {
    type: 'competitor',
    label: 'drain-the-lake.wiki sitemap and homepage',
    url: 'https://drain-the-lake.wiki/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Competitor covers homepage, updates, beginner, drain cycle, token, skill, depth, stuck, efficiency, and codes across English plus localized versions.',
  },
  {
    type: 'youtube',
    label: 'Drain the Lake YouTube guide results',
    url: 'https://www.youtube.com/results?search_query=Drain+the+Lake+Roblox+guide',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Current videos support beginner routes, full walkthrough intent, badges, and no-cut completion research. Videos are used as cross-checks, not copied article bodies.',
  },
  {
    type: 'competitor',
    label: 'Sportskeeda beginner and badges SERP results',
    url: 'https://www.sportskeeda.com/roblox-news/drain-lake-a-beginner-s-guide',
    checkedAt: CHECKED_AT,
    confidence: 'watch',
    note: 'Useful as SERP evidence for beginner and badge demand. The site challenged direct fetch, so claims are kept conservative unless visible in search snippets or cross-checked elsewhere.',
  },
];
