# Drain the Lake Wiki PRD and Implementation Plan

Checked date: 2026-07-08

## 1. Demand Packet

- Site name: `Drain the Lake Wiki`
- Domain: `https://www.drainthelake.top`
- Official Roblox URL: `https://www.roblox.com/games/138381251771774/Drain-the-Lake`
- Roblox place ID: `138381251771774`
- Roblox universe ID: `10267363348`
- Official gameplay positioning: bucket filling, draining for tokens, Skill Tree upgrades, deeper water, and recovering the phone.
- Genre: Roblox Simulation / Incremental Simulator.
- Serper key path used: parent workspace local env, `/Users/he/Documents/AI/vibe coding/levels&wikis/.local.env`.
- Visual direction: official lake/bucket thumbnail supports a bright water palette: cyan, pale aqua, slate, white, and small amber code/status accents.

## 2. Keyword Matrix

| Keyword | Intent | Route | Priority | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| drain the lake | head term | `/` | P0 | keep | Roblox official, Serper | Homepage brand and core hub. |
| drain the lake wiki | wiki hub | `/`, `/guides` | P0 | keep | Serper, competitor `.wiki` | Homepage links all high-value pages. |
| drain the lake roblox | official access | `/download` | P0 | keep | Roblox official, Serper | Verify place ID and avoid unsafe mirrors. |
| roblox drain the lake | official/access variant | `/download`, `/beginner` | P0 | keep | Serper | Alias copy and nav. |
| drain the lake guide | guide index | `/guides` | P0 | keep | Serper, YouTube | Guides index and beginner route. |
| drain the lake codes | code status | `/codes`, `/guides/codes-status-guide` | P0 | keep | Serper code result set | No verified active codes; publish safe code-watch page. |
| drain the lake roblox codes | code status | `/codes` | P0 | keep | Serper | Same page; no fake rewards. |
| drain the lake roblox endings | ending/phone goal | `/endings`, `/guides/phone-ending-guide` | P0 | keep | Serper autocomplete/SERP, YouTube | Phone objective from official description supports page. |
| drain the lake full game walkthrough | walkthrough | `/guides/full-walkthrough` | P0 | keep | Serper, YouTube | Selected current walkthrough video. |
| drain the lake beginner guide | beginner | `/beginner`, `/guides/beginner-guide` | P0 | keep | Sportskeeda SERP, YouTube | Core launch article. |
| drain the lake skill tree | upgrades | `/skill-tree`, `/guides/skill-tree-upgrades` | P0 | keep | Official description, Serper | Exact values avoided; decision logic used. |
| drain the lake tokens | spending | `/tokens` | P1 | keep | Official description, competitor sitemap | Supports progression hub. |
| drain the lake depth | deeper progress | `/depth` | P1 | keep | Official description, competitor sitemap | Route decision page. |
| drain the lake badges | badge checklist | `/badges`, `/guides/all-badges-guide` | P1 | keep | Sportskeeda SERP, YouTube | Conservative, no fragile full database. |
| drain the lake buckets | bucket progression | `/buckets` | P1 | keep | Sportskeeda SERP snippets, competitor | Completion/support page. |
| fastest way to drain the lake | efficiency | `/guides/fastest-way-to-drain`, `/tools/route-efficiency` | P1 | keep | YouTube and guide intent | Lightweight tool implemented. |
| drain the lake script | unsafe shortcut | none | P2 | ignore | Roblox safety policy | No scripts/executors. |
| drain the lake mod apk | unsafe download | `/download` if needed | P2 | watch | Generic Roblox risk | No APK pages at launch. |
| drain the lake fandom | wiki search variant | `/` | P2 | watch | Autocomplete weak | No Fandom exists as primary competitor at launch. |

## 3. Competitor Benchmark

| Competitor / Source | Pages we must match | Pages we can improve | Data/source opportunities | SEO notes |
| --- | --- | --- | --- | --- |
| `drain-the-lake.wiki` | Home, updates, beginner, drain-cycle, token, skill, depth, stuck, efficiency, codes | Add YouTube-supported original guides, phone-ending page, clearer tool page, less public source/debug wording | Sitemap has 10 English core pages plus localized copies | Homepage hub + category-style topic pages are the right breadth for this game. |
| `drain-the-lake-wiki.wiki` | Walkthrough, endings, codes-style entry points | Treat as watch competitor; do not copy | SERP confirms endings/walkthrough demand | Good reason to add `/endings` and walkthrough guide. |
| Sportskeeda | Beginner, badges, buckets | Build player-first route advice instead of list-only coverage | WAF blocks full fetch; use snippets only as demand signal | Good evidence for badges/buckets, but not enough for a large database. |
| YouTube | Beginner tips, full walkthrough, badges, challenge videos | Use thumbnails and write original guides | oEmbed confirms current videos | Guides should be hand-authored, not transcript-spun. |
| Roblox official/API | Official description, creator, live stats, icon, thumbnail | Use official assets and safe official link | Place/universe IDs and game premise are high confidence | Homepage and metadata must mention Roblox/game loop naturally. |

## 4. Launch Page Scope

This game is high-traffic but mechanically narrow, so the launch scope is 10-15 high-intent pages, not a large database:

- `/`
- `/guides`
- `/guides/beginner-guide`
- `/guides/full-walkthrough`
- `/guides/fastest-way-to-drain`
- `/guides/skill-tree-upgrades`
- `/guides/all-badges-guide`
- `/guides/phone-ending-guide`
- `/guides/codes-status-guide`
- `/codes`
- `/beginner`
- `/drain-cycle`
- `/tokens`
- `/skill-tree`
- `/depth`
- `/endings`
- `/badges`
- `/buckets`
- `/updates`
- `/download`
- `/tools`
- `/tools/route-efficiency`
- `/disclaimer`, `/privacy`, `/terms`, `/cookie`

## 5. Implementation Summary

- Replaced the old `thanos` route group, data folder, component folder, and public images with `drainthelake`.
- Added official/local assets under `public/drainthelake/`.
- Added topic pages, guide data, route labels, codes status, and source records under `src/data/drainthelake/`.
- Added compact wiki navigation with desktop sidebar and mobile menu.
- Added homepage hub, guides index, guide detail pages, flat topic pages, disclaimer, tools hub, and route efficiency tool.
- Updated metadata, manifest, sitemap, robots canonical behavior, navbar/footer, README, env examples, and Cloudflare Worker config.

## 6. Launch Follow-Up

- Create GitHub repo `drainthelake` and push `main`.
- Deploy Cloudflare Worker `drainthelake`.
- Bind `drainthelake.top` and `www.drainthelake.top`, with `www` as canonical.
- Create GA4 property and web stream for `https://www.drainthelake.top`, then add the measurement ID to env/wrangler and GA-GTM registries.
