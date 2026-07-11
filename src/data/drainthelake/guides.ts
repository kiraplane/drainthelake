import { CHECKED_AT, siteDescription } from './sources';
import type { Guide, GuideCategory, GuideVideo } from './types';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  beginner: {
    id: 'egTySQBzI7Y',
    title: 'Drain the Lake Roblox Beginners Tips for Easy Fast Win',
    channel: 'Ricoko Tutorial & Showcase',
    url: 'https://www.youtube.com/watch?v=egTySQBzI7Y',
    thumbnailUrl: youtubeThumbnail('egTySQBzI7Y'),
    publishedAt: '2026-07',
    viewCountLabel: 'Current beginner guide result',
    checkedAt: CHECKED_AT,
  },
  walkthrough: {
    id: 'HuXqmZXOdDg',
    title: 'Drain the Lake Full Game Walkthrough Roblox',
    channel: 'DustPlays',
    url: 'https://www.youtube.com/watch?v=HuXqmZXOdDg',
    thumbnailUrl: youtubeThumbnail('HuXqmZXOdDg'),
    publishedAt: '2026-07',
    viewCountLabel: 'Fresh full walkthrough result',
    checkedAt: CHECKED_AT,
  },
  fullGuide: {
    id: 'lDDCV09nIEA',
    title: 'How to Play Drain The Lake Roblox - Full Guide',
    channel: 'VendoPlus',
    url: 'https://www.youtube.com/watch?v=lDDCV09nIEA',
    thumbnailUrl: youtubeThumbnail('lDDCV09nIEA'),
    publishedAt: '2026',
    viewCountLabel: 'How-to guide result',
    checkedAt: CHECKED_AT,
  },
  challenge: {
    id: '0YhkNXzsx_k',
    title: "I can't leave until i DRAIN THE LAKE in Roblox...",
    channel: 'OTTER ROBLOX',
    url: 'https://www.youtube.com/watch?v=0YhkNXzsx_k',
    thumbnailUrl: youtubeThumbnail('0YhkNXzsx_k'),
    publishedAt: '2026',
    viewCountLabel: 'Popular gameplay challenge result',
    checkedAt: CHECKED_AT,
  },
  badges: {
    id: 'ayulrLmQk_w',
    title: 'How to GET ALL BADGES in DRAIN THE LAKE Roblox',
    channel: 'Roblox guide creator',
    url: 'https://www.youtube.com/watch?v=ayulrLmQk_w',
    thumbnailUrl: youtubeThumbnail('ayulrLmQk_w'),
    publishedAt: '2026',
    viewCountLabel: 'Badge intent result',
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

export { siteDescription };

export const guideCategoryIntro: Record<GuideCategory, string> = {
  Beginner:
    'Start with the first bucket loop, the drain point, and the first upgrades that make the route feel shorter.',
  Walkthrough:
    'Use full-route pages when you need the phone objective, deeper water, or a clean finish order.',
  Progression:
    'Spend tokens and Skill Tree points as fixes for the slowest part of the loop, not as random decoration.',
  Badges:
    'Track badge and bucket goals after the basic route is stable enough to repeat without guessing.',
  Codes:
    'Keep code status honest. Publish active codes only when a reliable source verifies them for this exact game.',
  Safety:
    'Avoid copied code lists, script pages, fake private servers, and off-platform download traps.',
  Updates:
    'Use update checks to retest routes before spending saved tokens or changing your upgrade plan.',
};

export const relatedRouteLabels: Record<string, string> = {
  '/': 'Drain the Lake Wiki',
  '/guides': 'All Guides',
  '/codes': 'Codes Status',
  '/beginner': 'Beginner Route',
  '/drain-cycle': 'Drain Cycle',
  '/tokens': 'Token Planning',
  '/skill-tree': 'Skill Tree',
  '/depth': 'Depth Progress',
  '/endings': 'Phone Ending',
  '/badges': 'Badges',
  '/buckets': 'Buckets',
  '/updates': 'Updates',
  '/download': 'Official Roblox',
  '/tools': 'Tools',
  '/tools/route-efficiency': 'Route Efficiency Tool',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/full-walkthrough': 'Full Walkthrough',
  '/guides/fastest-way-to-drain': 'Fastest Way to Drain',
  '/guides/skill-tree-upgrades': 'Skill Tree Upgrades',
  '/guides/all-badges-guide': 'All Badges Guide',
  '/guides/phone-ending-guide': 'Phone Ending Guide',
  '/guides/codes-status-guide': 'Codes Status Guide',
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Drain the Lake Beginner Guide',
    seoTitle: 'Drain the Lake Beginner Guide - First Bucket Loop and Upgrades',
    seoDescription:
      'Start Drain the Lake on Roblox with a clean first route for filling, draining, tokens, Skill Tree upgrades, depth, and the phone objective.',
    summary:
      'A first-session route for players who need to stop wandering, learn where the loop pays out, and spend early tokens on the bottleneck that actually slows progress.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videos.beginner.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Built from the official Roblox description, Roblox API data, Serper long-tail discovery, competitor route coverage, and current beginner video results.',
    video: videos.beginner,
    videoSearchQueries: [
      'Drain the Lake Roblox beginner guide',
      'Drain the Lake Roblox beginners tips',
      'Drain the Lake guide',
    ],
    tags: ['Roblox', 'Beginner', 'Tokens'],
    relatedRoutes: ['/codes', '/drain-cycle', '/tokens', '/skill-tree'],
    body: [
      {
        heading: 'Start by making one repeatable loop',
        paragraphs: [
          'Drain the Lake is not complicated at the surface: fill the bucket, carry the water to the drain, receive tokens, upgrade, and repeat. The early mistake is trying to inspect every corner before the loop is stable. Your first goal is to find the shortest comfortable path between the fill point and the drain point, then repeat it enough times to see what actually slows you down.',
          'Do not spend the first tokens just because a button is available. Watch the run. If you are waiting on fill time, buy the upgrade that reduces waiting. If you are running too many trips, prioritize capacity or movement comfort. If the drain reward feels weak, improve payout only after the path itself is not wasting time.',
        ],
        bullets: [
          'Find the fill point and drain point before exploring deeper water.',
          'Run the same path two or three times so the bottleneck is obvious.',
          'Buy the upgrade that fixes the bottleneck, then retest the same path.',
          'Push depth only after the current layer feels repeatable.',
        ],
      },
      {
        heading: 'Check codes once, then ignore rumor lists',
        paragraphs: [
          'Roblox simulator players naturally search for codes, but no verified public Drain the Lake code is confirmed as of the July 8, 2026 check. That means the right opening move is quick: check the codes page, confirm there is nothing safe to claim, and return to upgrades. Rechecking random pages every few minutes costs more progress than it saves.',
          'If the developer later adds a code box or official social code drop, the code page can become a real reward page. Until then, treat copied lists as a distraction and do not paste code strings from other water, lake, or bucket games into this one.',
        ],
      },
      {
        heading: 'Spend for comfort before chasing depth',
        paragraphs: [
          'Depth feels like progress, but it can make a weak route slower. If deeper water adds travel time or makes each bucket cycle awkward, step back and invest one more upgrade in the part of the loop that feels bad. A clean shallow loop that buys upgrades quickly is better than a deep route that takes too long to repeat.',
          'The first good milestone is not the phone ending. It is the moment when you can drain, spend, and repeat without thinking about the path. Once that happens, the rest of the site becomes useful: token planning for spend choices, Skill Tree for branch logic, depth for timing, and badges for side goals.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I do first in Drain the Lake?',
        answer:
          'Find the fill point, find the drain point, repeat the same route, and spend the first upgrades on the slowest part of that loop.',
      },
      {
        question: 'Should I push deeper immediately?',
        answer:
          'No. Push depth after the current loop is stable. If a deeper layer makes the route slower, farm one more useful upgrade first.',
      },
      {
        question: 'Are there working Drain the Lake codes?',
        answer:
          'No verified public codes are confirmed as of July 8, 2026. Use the codes page as a status check rather than trusting copied lists.',
      },
    ],
  },
  {
    slug: 'full-walkthrough',
    title: 'Drain the Lake Full Walkthrough',
    seoTitle: 'Drain the Lake Full Walkthrough - Route to the Phone Ending',
    seoDescription:
      'Follow a Drain the Lake walkthrough plan for the full Roblox route: stable loop, token spend order, depth checks, badges, and phone ending prep.',
    summary:
      'A start-to-finish route framework for players who want the phone objective without wasting long sessions on bad upgrades or unclear depth pushes.',
    category: 'Walkthrough',
    difficulty: 'Intermediate',
    coverImageUrl: videos.walkthrough.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Selected because Serper results show full walkthrough and endings demand for this exact Roblox game.',
    video: videos.walkthrough,
    videoSearchQueries: [
      'Drain the Lake Roblox full game walkthrough',
      'Drain the Lake Roblox endings',
      'Drain the Lake Roblox phone ending',
    ],
    tags: ['Walkthrough', 'Ending', 'Depth'],
    relatedRoutes: ['/endings', '/depth', '/tokens', '/guides/beginner-guide'],
    body: [
      {
        heading: 'Think in phases instead of one long grind',
        paragraphs: [
          'A full Drain the Lake run is easier when you split it into phases: starter route, efficient farming, depth tests, late upgrades, and phone recovery. Each phase has a different question. The starter phase asks where to walk. The farming phase asks which upgrade pays back fastest. The depth phase asks whether the next layer is worth the travel and bucket pressure. The ending phase asks whether you can keep progress steady long enough to finish.',
          'If you try to brute force the whole lake with whatever upgrade looks exciting, the run starts to feel random. Instead, finish one phase, buy the upgrade that unlocks the next phase, and retest before committing to a longer route.',
        ],
      },
      {
        heading: 'Use the same test after every major spend',
        paragraphs: [
          'After every meaningful token spend, run one short cycle on a known route. Did the bucket fill faster? Did you make fewer trips? Did the travel feel shorter? Did the drain payout make the next upgrade closer? If the answer is no, stop buying along that branch until you understand what changed.',
          'This habit prevents the most common midgame stall: buying several upgrades that look powerful but do not fix the actual blocker. A walkthrough is only useful if your account state matches the route, so keep testing locally instead of copying a final route too early.',
        ],
      },
      {
        heading: 'Route phone progress before badge cleanup',
        paragraphs: [
          'The phone route is the strongest ending-style intent in current search. Treat it as the main clear path: stable bucket loop, enough upgrades for deeper water, then one focused phone push.',
          'Badge cleanup belongs around that route, not ahead of it. If a badge takes you away from the phone path for too long, bank the next useful upgrade first, then return for the badge with a faster route.',
        ],
        bullets: [
          'Main route: fill, drain, upgrade, push depth, recover phone.',
          'Side route: collect easy badges that naturally happen on the main path.',
          'Cleanup route: all buckets, risky depth, and shark-style goals after income is stable.',
        ],
      },
      {
        heading: 'Save ending attempts for a stable late route',
        paragraphs: [
          'The phone ending should be treated as a finish objective, not the first target. Before pushing it, make sure you can run deeper water without losing time to confusion. If you still forget where to drain, or you still need too many trips to afford one useful upgrade, improve the loop before making an ending push.',
          'Badge goals can fit around the walkthrough, but do not let them break the main route. First Drop and Plunge-style badges are natural early checks. Completion and all-bucket goals belong later, after the route already supports repeat farming.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long does a full Drain the Lake run take?',
        answer:
          'It depends on upgrades and server state. Use route phases rather than a fixed time promise, because balance and update changes can shift the pace.',
      },
      {
        question: 'What is the main ending objective?',
        answer:
          'The official description frames the main goal as recovering your phone after draining deeper into the lake.',
      },
      {
        question: 'Should I follow a no-cut video exactly?',
        answer:
          'Use it for route rhythm, but make upgrade decisions from your own bottleneck after each test cycle.',
      },
    ],
  },
  {
    slug: 'fastest-way-to-drain',
    title: 'Fastest Way to Drain the Lake',
    seoTitle: 'Fastest Way to Drain the Lake - Tokens, Route Tests and Depth',
    seoDescription:
      'Improve Drain the Lake speed with route tests, token spend rules, bucket capacity choices, Skill Tree fixes, and depth timing.',
    summary:
      'A speed-focused guide that compares progress per minute instead of chasing the biggest single drain number.',
    category: 'Progression',
    difficulty: 'Intermediate',
    coverImageUrl: videos.fullGuide.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'youtube_explainer',
    sourceNotes:
      'Built from current how-to and beginner guide results plus the official gameplay loop.',
    video: videos.fullGuide,
    videoSearchQueries: [
      'Drain the Lake fastest way',
      'Drain the Lake Roblox easy fast win',
      'Drain the Lake Roblox guide',
    ],
    tags: ['Efficiency', 'Tokens', 'Skill Tree'],
    relatedRoutes: [
      '/tools/route-efficiency',
      '/drain-cycle',
      '/tokens',
      '/skill-tree',
    ],
    body: [
      {
        heading: 'Measure the whole cycle, not one bucket',
        paragraphs: [
          'The fastest route is not always the route with the biggest bucket number. A huge bucket that takes too long to fill, too long to carry, or too long to cash out can lose to a smaller loop that repeats quickly. Time the whole cycle from fill start to token spend, then compare how much useful progress it creates.',
          'Use two short tests: one on your current comfortable depth and one on the next deeper layer. If the deeper layer does not clearly beat the old route after one or two cycles, farm the old route for another upgrade and test again.',
        ],
      },
      {
        heading: 'Buy upgrades that remove idle time first',
        paragraphs: [
          'Idle time kills speed. If you stand still waiting for fill, improve fill speed or capacity. If you run long paths with little reward, improve movement or stay shallower. If the drain payout is the only weak piece, then reward upgrades become attractive. The order changes by account state, which is why copying a fixed spend list can fail.',
          'A useful rule is simple: one upgrade, one retest. If the retest feels better, continue that branch. If it does not, switch to the bottleneck you can actually feel.',
        ],
      },
      {
        heading: 'Use the tool when two routes feel close',
        paragraphs: [
          'When two routes seem similar, open the route efficiency tool and enter rough numbers for fill time, travel time, drain time, bucket value, and upgrade cost. The tool does not need perfect data to help. It exists to show whether a route is obviously better, obviously worse, or close enough that comfort should decide.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is deeper always faster?',
        answer:
          'No. Deeper is faster only when the extra reward beats the added fill, travel, and drain time.',
      },
      {
        question: 'What upgrade should I buy first?',
        answer:
          'Buy the upgrade that fixes the slowest part of your current loop, usually fill wait, trip count, route time, or payout.',
      },
      {
        question: 'Can the route efficiency tool be exact?',
        answer:
          'It is an estimate tool. Use it to compare choices, then verify with one real in-game test cycle.',
      },
    ],
  },
  {
    slug: 'skill-tree-upgrades',
    title: 'Drain the Lake Skill Tree Upgrades',
    seoTitle: 'Drain the Lake Skill Tree Guide - Which Upgrades to Buy First',
    seoDescription:
      'Choose Drain the Lake Skill Tree upgrades by bottleneck: fill speed, capacity, movement, tokens, depth walls, and late route comfort.',
    summary:
      'A decision guide for choosing Skill Tree upgrades as loop fixes instead of buying branches in a random order.',
    category: 'Progression',
    difficulty: 'Beginner',
    coverImageUrl: '/drainthelake/og-image.jpg',
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'The official Roblox description confirms Skill Tree upgrades; branch advice is conservative because exact values can change.',
    videoSearchQueries: [
      'Drain the Lake Roblox skill tree',
      'Drain the Lake Roblox upgrades',
    ],
    tags: ['Skill Tree', 'Upgrades', 'Tokens'],
    relatedRoutes: ['/skill-tree', '/tokens', '/depth', '/drain-cycle'],
    body: [
      {
        heading: 'Treat each branch as a fix',
        paragraphs: [
          'The Skill Tree is best read as a set of fixes. If the bucket fills slowly, buy the branch that reduces waiting. If every upgrade requires too many trips, improve capacity or route value. If deeper water makes the path feel bad, buy comfort before pushing again. This decision-first approach is safer than assuming one universal best branch exists for every account.',
          'Because Drain the Lake is new and update-driven, exact upgrade values can shift. The stable rule is the diagnosis: identify the slowest part of your current loop, buy one fix, then run the same route again.',
        ],
      },
      {
        heading: 'Do not split tokens across too many problems',
        paragraphs: [
          'A scattered tree feels busy but may not change the route. If you buy a little fill, a little reward, a little movement, and a little depth pressure without retesting, you may not know which spend worked. Focus on one bottleneck for one cycle, then change direction only after the result is obvious.',
        ],
      },
      {
        heading: 'Late upgrades should protect the ending route',
        paragraphs: [
          'As you move toward the phone objective, prioritize upgrades that make deeper loops reliable. The best late upgrade is the one that keeps you from abandoning the route: enough capacity to reduce trips, enough speed to avoid long walking, and enough payout to keep the next goal visible.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a best Skill Tree build?',
        answer:
          'Not a fixed one. The best path is the branch that fixes your current bottleneck and still helps the next depth push.',
      },
      {
        question: 'Should I save tokens for expensive upgrades?',
        answer:
          'Save only when the target is one or two clean loops away. If saving creates a long stall, buy a smaller useful fix first.',
      },
      {
        question: 'Can update changes affect this guide?',
        answer:
          'Yes. Exact values can change, so the guide focuses on decision logic rather than fragile numbers.',
      },
    ],
  },
  {
    slug: 'all-badges-guide',
    title: 'Drain the Lake All Badges Guide',
    seoTitle:
      'Drain the Lake Badges Guide - Phone Ending, Buckets and Skill Tree',
    seoDescription:
      'Plan Drain the Lake badges with safe route order for first drain, swimming, shark, Skill Tree, buckets, depth, treasure, and phone ending goals.',
    summary:
      'A badge route that keeps easy badges early and saves completion-style badges for the point where the loop can carry them.',
    category: 'Badges',
    difficulty: 'Intermediate',
    coverImageUrl: videos.badges.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Search results show all-badges demand. Badge names and gem values should be treated as source-checked, not game-tested here.',
    video: videos.badges,
    videoSearchQueries: [
      'Drain the Lake Roblox all badges',
      'How to get all badges in Drain the Lake Roblox',
    ],
    tags: ['Badges', 'Buckets', 'Ending'],
    relatedRoutes: [
      '/badges',
      '/buckets',
      '/endings',
      '/guides/full-walkthrough',
    ],
    body: [
      {
        heading: 'Collect easy badges without breaking the route',
        paragraphs: [
          'Badge hunting should not interrupt the first loop. Early badges such as a first drain or a basic swim-style check naturally happen while learning the map. Take those when they fit, but do not turn the first session into a badge scavenger hunt before the token route works.',
          'The better order is route first, easy badges second, completion badges last. A badge that asks for the phone ending, all buckets, or full Skill Tree progress is really a late-game milestone. If you chase it early, you will spend more time walking than progressing.',
        ],
      },
      {
        heading: 'Use badges as a checklist for account readiness',
        paragraphs: [
          'Badges can show what your account is ready to do. If you have early drain and exploration badges but not bucket or Skill Tree badges, your next focus is farming and spending. If you have many upgrade badges but not the phone ending, your route may need depth stability or a cleaner final push.',
          'When a badge requirement is unclear, do one controlled test instead of guessing. Run the relevant loop, note what changed, then return to the route. This keeps badge hunting from becoming random movement around the lake.',
        ],
      },
      {
        heading: 'Keep shark and depth badges separate from farming',
        paragraphs: [
          'Risk or depth badges can cost time if you mix them into normal farming. Do them as deliberate side attempts after you bank an upgrade, not during the route that is supposed to pay for the next Skill Tree choice.',
        ],
      },
      {
        heading: 'Use video badge routes as order checks, not scripts',
        paragraphs: [
          'Recent all-badges videos are useful because they show the order of goals players care about: easy badges first, phone route later, completion badges last. Do not copy every movement if your upgrades are different.',
          'Instead, use the video order as a checklist. If your route is slower, stop and farm the upgrade that fixes the slow step before continuing badge cleanup.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many badges does Drain the Lake have?',
        answer:
          'Search results currently reference 18 badges, but badge pages can update. Use the in-game badge panel as the final count.',
      },
      {
        question: 'When should I chase all-bucket badges?',
        answer:
          'After your token route is stable enough to farm repeatedly. All-bucket goals are completion goals, not first-hour goals.',
      },
      {
        question: 'Is the phone ending a badge target?',
        answer:
          'Search snippets reference a Find My Phone badge for the phone ending. Treat it as a late route objective.',
      },
    ],
  },
  {
    slug: 'phone-ending-guide',
    title: 'Drain the Lake Phone Ending Guide',
    seoTitle:
      'Drain the Lake Phone Ending - How to Prepare for the Final Route',
    seoDescription:
      'Prepare for the Drain the Lake phone ending with depth timing, token upgrades, bucket goals, and a final route checklist.',
    summary:
      'A final-goal guide for the official phone objective: when to push, what to upgrade first, and how to avoid forcing the ending too early.',
    category: 'Walkthrough',
    difficulty: 'Advanced',
    coverImageUrl: videos.challenge.thumbnailUrl,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'popular_youtube',
    sourceNotes:
      'Built from official phone-goal wording, endings autocomplete, and current completion-style video results.',
    video: videos.challenge,
    videoSearchQueries: [
      'Drain the Lake Roblox endings',
      'Drain the Lake Roblox phone ending',
      'I cannot leave until I drain the lake Roblox',
    ],
    tags: ['Ending', 'Depth', 'Walkthrough'],
    relatedRoutes: [
      '/endings',
      '/depth',
      '/guides/full-walkthrough',
      '/badges',
    ],
    body: [
      {
        heading: 'The phone is the finish, not the opener',
        paragraphs: [
          'The official premise is clear: your phone fell into the lake, and you drain deeper to get it back. That makes the phone ending the natural finish goal. It should come after the bucket loop, tokens, Skill Tree, and depth route are all under control.',
          'If you are still waiting too long to fill, still making too many trips, or still losing your path after every upgrade, the ending attempt is premature. Improve the loop first. A stable route turns the phone objective from a wall into a checklist.',
        ],
      },
      {
        heading: 'Prepare with three checks',
        paragraphs: [
          'Before an ending push, check route comfort, upgrade return, and depth stability. Route comfort means you know where to go without hesitation. Upgrade return means one or two cycles still move you toward the next useful spend. Depth stability means deeper water does not make the loop collapse into long travel or awkward waiting.',
          'If any check fails, do not keep forcing the same ending attempt. Step back to tokens or Skill Tree, buy one clear fix, and retest.',
        ],
      },
      {
        heading: 'Use badges to confirm the account is ready',
        paragraphs: [
          'Badge progress can be a useful signal. If you have not cleared basic drain, exploration, bucket, or Skill Tree milestones, there is probably still cheap progress available before the ending. Finish those natural route checks first, then return to the phone goal.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Drain the Lake ending?',
        answer:
          'The main objective is to drain deep enough to recover the phone that fell into the lake.',
      },
      {
        question: 'Why am I stuck before the ending?',
        answer:
          'Usually the current route is not efficient enough for the depth you are attempting. Improve the bottleneck and retest.',
      },
      {
        question: 'Should I follow an ending video exactly?',
        answer:
          'Use it for path rhythm, but spend tokens based on your own route timing and bottleneck.',
      },
    ],
  },
  {
    slug: 'codes-status-guide',
    title: 'Drain the Lake Codes Status Guide',
    seoTitle: 'Drain the Lake Codes - Active Code Status and Safe Redeem Check',
    seoDescription:
      'Check Drain the Lake codes safely. See current active code status, why no public codes are verified, and how to handle future code drops.',
    summary:
      'A conservative code-watch page for players searching codes without exposing them to fake lists, scripts, or unrelated Roblox games.',
    category: 'Codes',
    difficulty: 'Beginner',
    coverImageUrl: '/drainthelake/og-image.jpg',
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Code status is based on official Roblox page checks, Roblox API description, Serper code results, and current guide surfaces.',
    videoSearchQueries: ['Drain the Lake Roblox codes', 'Drain the Lake codes'],
    tags: ['Codes', 'Safety', 'Status'],
    relatedRoutes: [
      '/codes',
      '/updates',
      '/download',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Current status',
        paragraphs: [
          'No verified public Drain the Lake codes are confirmed as of July 11, 2026. The official Roblox page describes the bucket, tokens, Skill Tree, depth, and phone loop, but it does not currently verify a public code list. Search results include code demand because Roblox simulator players expect codes, not because a reliable active code has been confirmed.',
          'That status can change quickly if the developer adds a code box, social drop, or update reward. When it does, the safe rule is to verify the code against the official game or a reliable current source before adding it to a public list.',
        ],
      },
      {
        heading: 'How to handle future codes',
        paragraphs: [
          'If a code system appears, redeem inside the official Roblox experience only. Check spelling, casing, server age, and whether the code is meant for Drain the Lake specifically. Do not paste strings from other lake, bucket, water, or simulator games just because the reward sounds similar.',
          'If a code fails, assume one of four causes first: it expired, it belongs to a different game, it requires a fresh server, or it was never real. Do not install scripts, executors, or browser extensions to make a code work.',
        ],
      },
      {
        heading: 'What to do while there are no codes',
        paragraphs: [
          'Spend the time on upgrades. A clean drain cycle creates guaranteed tokens, while rumor checking creates nothing. Check the code page once per session, then return to route efficiency, Skill Tree choices, and depth timing.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are there active Drain the Lake codes?',
        answer:
          'No verified active public codes are confirmed as of July 8, 2026.',
      },
      {
        question: 'Where will codes be listed if they appear?',
        answer:
          'The codes page will list active codes only after a reliable source verifies them for this exact game.',
      },
      {
        question: 'Does this site provide scripts?',
        answer:
          'No. It covers official gameplay and safe status checks, not executors, scripts, or modified clients.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);
