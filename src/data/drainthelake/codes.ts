import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-07-24';

export const activeCodes: GameCode[] = [];

export const watchCodes: GameCode[] = [
  {
    code: 'drain the lake codes',
    reward: 'Search demand, not a verified redeem code',
    status: 'watch',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Serper and Google result checks',
    confidence: 'watch',
    notes:
      'Codes demand exists, but the official Roblox description and checked guide surfaces did not verify a public redeem code or stable code box.',
  },
  {
    code: 'free tokens',
    reward: 'Possible future reward type, not an active code',
    status: 'watch',
    firstSeen: '2026-07-08',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Roblox simulator code pattern watch',
    confidence: 'watch',
    notes:
      'Tokens are the obvious reward type if the developer adds codes later, but this site should not publish placeholder rewards as active codes.',
  },
];

export const expiredCodes: GameCode[] = [];

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  activeCount: activeCodes.length,
  status:
    'No verified public Drain the Lake codes are confirmed as of July 11, 2026. Current social/search checks still point to no public code redemption box.',
  sourcesChecked: [
    {
      label: 'Roblox game page',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Roblox API description snapshot',
      url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    },
    {
      label: 'Serper code SERP and autocomplete checks',
      url: 'https://google.serper.dev/',
    },
    {
      label: 'Current YouTube guide result set',
      url: 'https://www.youtube.com/results?search_query=Drain+the+Lake+Roblox+codes',
    },
  ],
};
