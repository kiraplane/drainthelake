import { codeCheckSummary } from './codes';
import { CHECKED_AT, officialGameFacts } from './sources';
import type { TopicPage } from './types';

export const topicPages: TopicPage[] = [
  {
    slug: 'codes',
    route: '/codes',
    label: 'Codes Status',
    navGroup: 'Status',
    eyebrow: 'Code watch',
    title: 'Drain the Lake Codes',
    seoTitle: 'Drain the Lake Codes - Active Code Status and Safe Redeem Check',
    seoDescription:
      'Check Drain the Lake codes safely, see why no active public Roblox codes are verified, and learn how future code drops should be confirmed.',
    summary: codeCheckSummary.status,
    image: '/drainthelake/og-image.jpg',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/guides/codes-status-guide', '/updates', '/download'],
    sections: [
      {
        heading: 'Active codes status',
        paragraphs: [
          'There are currently 0 verified active Drain the Lake codes in this guide. That does not mean codes can never happen; it means the official Roblox page and checked public guide surfaces do not support publishing a code list today.',
          'The safest use of this page is simple: check it once, then go back to draining for tokens. Rumor checking is not a useful farming route.',
        ],
        bullets: [
          `Last checked: ${CHECKED_AT}.`,
          'Active codes: 0 verified.',
          'Do not import codes from unrelated Roblox simulator games.',
          'Redeem only through the official game if a code box appears later.',
        ],
      },
      {
        heading: 'What will count as enough evidence',
        paragraphs: [
          'A future code should come from the official Roblox page, an official community channel, an in-game code panel, or multiple current official mentions that clearly name Drain the Lake. A copied list with no date, no screenshot, and no proof should stay off the active table.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Drain the Lake have active codes?',
        answer:
          'No verified public active codes are confirmed as of July 8, 2026.',
      },
      {
        question: 'Why keep a codes page if there are no codes?',
        answer:
          'Players search the intent, and a clear status page prevents fake code lists from becoming the only answer.',
      },
      {
        question: 'Can scripts unlock rewards?',
        answer:
          'This site does not provide scripts, executors, or unsafe shortcuts. Use official gameplay only.',
      },
    ],
  },
  {
    slug: 'beginner',
    route: '/beginner',
    label: 'Beginner',
    navGroup: 'Start',
    eyebrow: 'Start here',
    title: 'Drain the Lake Beginner Route',
    seoTitle: 'Drain the Lake Beginner Route - First Loop, Tokens and Upgrades',
    seoDescription:
      'Learn the first Drain the Lake route on Roblox: fill the bucket, drain for tokens, buy useful upgrades, and decide when to go deeper.',
    summary:
      'Start with a repeatable bucket loop before chasing depth, badges, buckets, or the phone ending.',
    image: '/drainthelake/og-image.jpg',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/guides/beginner-guide', '/drain-cycle', '/tokens'],
    cards: [
      {
        title: '1. Find the loop',
        body: 'Locate fill, drain, reward, and upgrade points before exploring.',
      },
      {
        title: '2. Repeat it',
        body: 'Run the same path until the slowest step is obvious.',
      },
      {
        title: '3. Buy one fix',
        body: 'Spend tokens on the bottleneck, then retest the same route.',
      },
    ],
    sections: [
      {
        heading: 'Your first target is rhythm',
        paragraphs: [
          'Drain the Lake gives you a clear loop, but new players often lose time because they treat the map like a sightseeing route. Learn the fill point, drain point, and upgrade point first. Once the rhythm is clean, every later page becomes easier to use.',
          'If the route feels slow, do not assume the solution is depth. Depth can raise rewards, but it can also stretch the loop before your bucket and Skill Tree are ready.',
        ],
      },
      {
        heading: 'The first upgrade should solve a visible problem',
        paragraphs: [
          'Watch one full cycle. If you wait at the fill point, improve fill or capacity. If you spend most of the cycle walking, improve route comfort or stay shallower. If the trip feels fast but the payout is weak, then token value becomes a better target.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the first thing to learn?',
        answer:
          'Learn the fill-to-drain loop and upgrade point before exploring deeper water.',
      },
      {
        question: 'When do I use the full walkthrough?',
        answer:
          'After you can repeat the first route without hesitation and want the phone objective path.',
      },
    ],
  },
  {
    slug: 'drain-cycle',
    route: '/drain-cycle',
    label: 'Drain Cycle',
    navGroup: 'Progression',
    eyebrow: 'Core loop',
    title: 'Drain the Lake Drain Cycle',
    seoTitle: 'Drain the Lake Drain Cycle - Fill, Drain, Spend and Repeat',
    seoDescription:
      'Use the Drain the Lake drain cycle to compare fill time, travel, drain payout, token spend, Skill Tree choices, and depth progress.',
    summary:
      'The drain cycle is your decision board: fill, move, drain, spend, repeat, and measure what improved.',
    image: '/drainthelake/og-image.jpg',
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/tools/route-efficiency',
      '/guides/fastest-way-to-drain',
      '/tokens',
    ],
    sections: [
      {
        heading: 'Break each loop into five parts',
        paragraphs: [
          'A useful Drain the Lake cycle has five parts: fill time, travel time, drain time, token return, and upgrade spend. If you only watch the water level, you miss the reason the route feels slow.',
          'Write down rough numbers when two choices feel close. A route with lower reward can still win if it repeats much faster.',
        ],
      },
      {
        heading: 'Retest after every meaningful upgrade',
        paragraphs: [
          'The retest is what turns upgrades into information. Run the same route again after a purchase. If the slowest part did not improve, switch branches or farm one more targeted upgrade before pushing deeper.',
        ],
      },
    ],
    faq: [
      {
        question: 'What makes a drain cycle good?',
        answer:
          'A good cycle creates useful tokens quickly and keeps the next upgrade close without making the route uncomfortable.',
      },
      {
        question: 'Should I time my route?',
        answer:
          'Yes when two routes feel close. Rough timing is enough to reveal the better choice.',
      },
    ],
  },
  {
    slug: 'tokens',
    route: '/tokens',
    label: 'Tokens',
    navGroup: 'Progression',
    eyebrow: 'Spending plan',
    title: 'Drain the Lake Token Planning',
    seoTitle: 'Drain the Lake Tokens - Spend, Save and Upgrade Planning',
    seoDescription:
      'Plan Drain the Lake tokens around useful upgrades, Skill Tree bottlenecks, bucket loops, depth timing, and phone ending progress.',
    summary:
      'Spend tokens when they shorten the next loop; save only when the target upgrade is close enough to reach cleanly.',
    image: '/drainthelake/og-image.jpg',
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/skill-tree',
      '/drain-cycle',
      '/guides/fastest-way-to-drain',
    ],
    sections: [
      {
        heading: 'Spend early on loop comfort',
        paragraphs: [
          'Early tokens should make the loop smoother. If every drain feels slow, buy a practical fix instead of saving for a distant target. Momentum matters because each improved cycle funds the next decision.',
        ],
      },
      {
        heading: 'Save only with a short plan',
        paragraphs: [
          'Saving is good when the target upgrade is one or two clean loops away. If saving requires a long stall, a smaller upgrade that improves route speed may reach the expensive target faster.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I hoard tokens?',
        answer:
          'Only for a near target. Long hoards usually slow progression unless the current loop is already efficient.',
      },
      {
        question: 'What is the safest token rule?',
        answer:
          'One upgrade, one retest. Continue the branch only when the retest improves the loop.',
      },
    ],
  },
  {
    slug: 'skill-tree',
    route: '/skill-tree',
    label: 'Skill Tree',
    navGroup: 'Progression',
    eyebrow: 'Upgrade logic',
    title: 'Drain the Lake Skill Tree',
    seoTitle: 'Drain the Lake Skill Tree - Best Upgrade Logic for Progression',
    seoDescription:
      'Use Drain the Lake Skill Tree upgrades to fix fill speed, capacity, movement, token payout, depth walls, and final-route stability.',
    summary:
      'Choose Skill Tree upgrades by bottleneck, not by a fixed build that may stop fitting after updates.',
    image: '/drainthelake/og-image.jpg',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/guides/skill-tree-upgrades', '/tokens', '/depth'],
    sections: [
      {
        heading: 'Match branch to bottleneck',
        paragraphs: [
          'If fill time is the pain point, improve the fill side. If trip count is the pain point, improve capacity or route comfort. If depth makes everything slower, stop pushing and buy stability first.',
        ],
      },
      {
        heading: 'Avoid scattered purchases',
        paragraphs: [
          'Scattered upgrades can feel productive while changing nothing. Focus one problem, retest, then move to the next problem once the route actually improves.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best Skill Tree upgrade?',
        answer:
          'The best upgrade is the one that fixes the slowest part of your current loop.',
      },
      {
        question: 'Do exact upgrade values matter?',
        answer:
          'They matter in game, but site guidance stays conservative because live values can change after updates.',
      },
    ],
  },
  {
    slug: 'depth',
    route: '/depth',
    label: 'Depth',
    navGroup: 'Progression',
    eyebrow: 'Deeper route',
    title: 'Drain the Lake Depth Progress',
    seoTitle: 'Drain the Lake Depth Guide - When to Go Deeper',
    seoDescription:
      'Decide when to go deeper in Drain the Lake, when to farm one more upgrade, and how depth affects tokens, buckets, and the phone ending.',
    summary:
      'Go deeper when the current route can carry the added time and pressure; farm first when the deeper route feels worse.',
    image: '/drainthelake/og-image.jpg',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/endings', '/guides/full-walkthrough', '/tokens'],
    sections: [
      {
        heading: 'Depth should beat the old route',
        paragraphs: [
          'A deeper layer is worth using when it creates more useful progress per minute than the old route. If it only feels exciting but produces slower upgrades, treat it as a future route and keep farming the stable layer.',
        ],
      },
      {
        heading: 'Use depth tests as checkpoints',
        paragraphs: [
          'Run a short deeper test, then decide. If the path, fill time, or drain payout is awkward, buy one more upgrade and test again. Depth progress is a sequence of checkpoints, not one permanent switch.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is deeper water always better?',
        answer:
          'No. It is better only when it improves useful progress after counting time and route difficulty.',
      },
      {
        question: 'How does depth relate to the phone ending?',
        answer:
          'Depth is the route pressure leading toward the phone objective, but the ending still needs a stable token and upgrade base.',
      },
    ],
  },
  {
    slug: 'endings',
    route: '/endings',
    label: 'Endings',
    navGroup: 'Reference',
    eyebrow: 'Phone objective',
    title: 'Drain the Lake Endings and Phone Goal',
    seoTitle: 'Drain the Lake Endings - Phone Ending and Final Route Prep',
    seoDescription:
      'Prepare for Drain the Lake endings and the phone goal with depth readiness, Skill Tree upgrades, bucket progress, badges, and final-route checks.',
    summary:
      'The phone goal is the main finish objective. Reach it after your depth route, token plan, and upgrades are stable.',
    image: '/drainthelake/og-image.jpg',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/guides/phone-ending-guide', '/depth', '/badges'],
    sections: [
      {
        heading: 'Do not force the ending too early',
        paragraphs: [
          'The official premise says your phone fell into the lake. That makes the phone goal the natural finish, but an ending push works best after the loop can repeatedly pay for useful upgrades at deeper layers.',
        ],
      },
      {
        heading: 'Use completion goals as readiness checks',
        paragraphs: [
          'Buckets, Skill Tree progress, depth checkpoints, and badges all tell you whether the account is ready. If those pieces are still weak, the ending attempt will feel like a wall.',
        ],
      },
    ],
    faq: [
      {
        question: 'What ending should I target first?',
        answer:
          'Target the phone objective after the core route is stable enough to support deeper progress.',
      },
      {
        question: 'Why do players search endings?',
        answer:
          'Autocomplete and SERP results show players treating the phone recovery as an ending-style goal.',
      },
    ],
  },
  {
    slug: 'badges',
    route: '/badges',
    label: 'Badges',
    navGroup: 'Reference',
    eyebrow: 'Checklist',
    title: 'Drain the Lake Badges',
    seoTitle:
      'Drain the Lake Badges - First Drop, Phone, Buckets and Skill Tree',
    seoDescription:
      'Use Drain the Lake badges as a progress checklist for first drain, swimming, shark, Skill Tree, buckets, depth, treasure, and phone goals.',
    summary:
      'Treat badges as route milestones: easy checks early, full completion goals after the loop is strong.',
    image: '/drainthelake/og-image.jpg',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/guides/all-badges-guide', '/buckets', '/endings'],
    sections: [
      {
        heading: 'Badge order should follow progression',
        paragraphs: [
          'Early badges belong inside the starter route. Completion badges such as all buckets, full Skill Tree, depth checkpoints, and phone goals belong after you can farm consistently.',
        ],
      },
      {
        heading: 'Do side attempts deliberately',
        paragraphs: [
          'If a badge asks you to swim, risk a shark, or inspect a specific layer, do it as a side attempt after banking progress. Do not mix risky badge checks into the route meant to fund your next upgrade.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does this page list exact badge values?',
        answer:
          'It stays conservative because badge values can change. Check the in-game badge panel for the final live value.',
      },
      {
        question: 'When do I chase all badges?',
        answer: 'After the main loop, token plan, and depth route are stable.',
      },
    ],
  },
  {
    slug: 'buckets',
    route: '/buckets',
    label: 'Buckets',
    navGroup: 'Reference',
    eyebrow: 'Equipment',
    title: 'Drain the Lake Buckets',
    seoTitle: 'Drain the Lake Buckets - Capacity, Unlocks and Progression Tips',
    seoDescription:
      'Plan Drain the Lake bucket progress around capacity, trips, passive bonuses, unlock requirements, token farming, and all-bucket completion.',
    summary:
      'Buckets matter when they reduce trip count or unlock reliable progress. Treat all-bucket goals as completion content.',
    image: '/drainthelake/og-image.jpg',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/tokens', '/badges', '/guides/fastest-way-to-drain'],
    sections: [
      {
        heading: 'Capacity is useful only when the route supports it',
        paragraphs: [
          'A larger bucket helps when it reduces trips without adding enough delay to hurt the cycle. If it takes too long to fill or carry, route comfort may beat raw capacity for a while.',
        ],
      },
      {
        heading: 'All-bucket goals come after farming stability',
        paragraphs: [
          'Search results show bucket completion demand. For launch, the safe recommendation is route-based: unlock buckets when they help progression, then return for all-bucket completion after the main route can fund it.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I always buy the biggest bucket?',
        answer:
          'No. Buy the bucket or upgrade that improves useful progress per minute on your current route.',
      },
      {
        question: 'Are buckets tied to badges?',
        answer:
          'Search results reference all-bucket badge demand, so bucket completion is a late checklist target.',
      },
    ],
  },
  {
    slug: 'updates',
    route: '/updates',
    label: 'Updates',
    navGroup: 'Status',
    eyebrow: 'Live check',
    title: 'Drain the Lake Updates',
    seoTitle: 'Drain the Lake Updates - Roblox Patch and Route Check',
    seoDescription:
      'Track Drain the Lake update checks, Roblox API date, code watch, route retests, Skill Tree changes, and what to verify after patches.',
    summary: `The official Roblox experience was last seen updated on ${officialGameFacts.updatedAt.slice(
      0,
      10
    )}. Retest routes after any visible update.`,
    image: '/drainthelake/og-image.jpg',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/codes', '/skill-tree', '/tools/route-efficiency'],
    cards: [
      {
        title: 'Official update timestamp',
        body: officialGameFacts.updatedAt,
        meta: 'Roblox API snapshot',
      },
      {
        title: 'Launch baseline',
        body: 'Bucket, tokens, Skill Tree, depth, and phone goal are confirmed by the official description.',
        meta: CHECKED_AT,
      },
      {
        title: 'Code watch',
        body: 'No active public code verified during the launch check.',
        meta: '0 active',
      },
    ],
    sections: [
      {
        heading: 'What to retest after an update',
        paragraphs: [
          'After any visible update, retest the starter loop, one deeper route, one Skill Tree spend, and the code page status. Do this before changing a long-term token plan, because small balance shifts can move the bottleneck.',
        ],
      },
      {
        heading: 'What not to trust immediately',
        paragraphs: [
          'A video title, comment, or copied code list is a lead, not a final source. Confirm the change in the official game or a reliable current source before treating it as permanent.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where does the update date come from?',
        answer:
          'From the public Roblox universe API snapshot checked for this site.',
      },
      {
        question: 'Do updates change upgrade advice?',
        answer:
          'They can. That is why this site focuses on retesting bottlenecks instead of fragile fixed values.',
      },
    ],
  },
  {
    slug: 'download',
    route: '/download',
    label: 'Official Roblox',
    navGroup: 'Status',
    eyebrow: 'Official access',
    title: 'Drain the Lake Official Roblox Page',
    seoTitle: 'Drain the Lake Roblox - Official Game Link and Safety Check',
    seoDescription:
      'Open the official Drain the Lake Roblox page, verify the place ID, avoid fake downloads, and use safe official access for the game.',
    summary:
      'Use the official Roblox place ID 138381251771774. Do not download APKs, executors, or off-platform clients.',
    image: '/drainthelake/og-image.jpg',
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/beginner', '/codes', '/updates'],
    sections: [
      {
        heading: 'Use the verified Roblox place',
        paragraphs: [
          `The official game URL is ${officialGameFacts.officialRobloxUrl}. The Roblox API maps place ${officialGameFacts.robloxPlaceId} to universe ${officialGameFacts.robloxUniverseId}, created by ${officialGameFacts.creatorName}.`,
          'If you see a download mirror, APK, executor page, or private server claiming faster progress, skip it. Drain the Lake should be played through Roblox.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the official Drain the Lake place ID?',
        answer: officialGameFacts.robloxPlaceId,
      },
      {
        question: 'Can I play outside Roblox?',
        answer:
          'Use Roblox official clients and the official game page. This site does not recommend mirrors or modified clients.',
      },
    ],
  },
];

export const topicPageList = topicPages;

export function getTopicPage(slug: string) {
  return topicPages.find((page) => page.slug === slug);
}

export const topicRoutes = topicPages.map((page) => page.route);
