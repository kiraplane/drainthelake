# Thanos Simulator Wiki PRD 与实现计划

目标站点：Thanos Simulator Wiki  
目标域名：www.thanossimulator.wiki  
官方 Roblox：`https://www.roblox.com/games/3261957210/Infinity-Gauntlet-Thanos-Simulator`  
检查日期：2026-07-07

## 1. 项目定位

将现有 Roblox wiki 模板改造成只服务 `Infinity Gauntlet | Thanos Simulator` 的英文攻略站。玩家同时搜索 `thanos simulator`、`thanos simulator wiki`、`infinity gauntlet thanos simulator`、`thanos simulator roblox`，因此首页和 metadata 使用 `Thanos Simulator Wiki`，正文说明官方 Roblox 标题目前是 `[ Update ] Infinity Gauntlet | Thanos Simulator`。

首版不做空数据库和虚假兑换码页，重点覆盖可被官方/Fandom/YouTube 支撑的高意图攻略：

- Infinity Stones 获取路线
- Gauntlet controls/keybinds
- weapon progression
- Doom / Mechanical Gloves / Update 3.2
- Surtur / Twilight Sword
- Heart of Ymir
- Stormbreaker / Mjolnir
- Gungnir / fragments / Forge
- codes 状态与 scripts 安全边界

## 2. 官方事实

| 字段 | 结果 |
| --- | --- |
| Roblox place ID | `3261957210` |
| Universe ID | `1177208440` |
| 官方标题 | `[ Update ] Infinity Gauntlet | Thanos Simulator` |
| 常用搜索名 | `Thanos Simulator`, `Infinity Gauntlet Thanos Simulator` |
| Creator | `Blg42598` |
| Genre | Fighting |
| Created | 2019-06-05 |
| Updated | 2026-07-05 |
| Max players | 7 |
| Visits at check | 75M+ |
| Official update signal | Update 3.2 added Doom and Mechanical Glove |

配色：官方缩略图是黑紫背景、金色 Infinity Gauntlet、绿色/蓝色/红色宝石能量。站点采用 dark cosmic base `#080611`、panel `#151024`、gold `#F6C453`、time-stone green `#57D68D`、stone violet border `#3A2D4E`。

## 3. Keyword Matrix

Serper balanced discovery used autocomplete/related only, not bulk SERP validation.

| keyword | intent | route | priority | status | evidence | notes |
| --- | --- | --- | --- | --- | --- | --- |
| thanos simulator | head term | `/` | P0 | keep | Serper autocomplete, Roblox official | H1 and brand |
| thanos simulator wiki | wiki hub | `/`, `/guides` | P0 | keep | Serper autocomplete, Fandom exists | 首页和 guides index 承接 |
| infinity gauntlet thanos simulator | official-name variant | `/`, `/download` | P0 | keep | Roblox official, Serper | copy 中解释同一游戏 |
| thanos simulator roblox | official access | `/download` | P0 | keep | Serper, Roblox official | place ID verification |
| thanos simulator codes | codes/status | `/codes` | P0 | keep | Serper autocomplete | 0 active; watch terms only |
| infinity gauntlet simulator roblox codes | codes/status | `/codes` | P1 | keep | Serper related | 不复制低质 codes |
| thanos simulator script | unsafe shortcut | `/guides/codes-and-scripts-safety-guide` | P0 | keep | SERP/Serper | 安全页，不提供脚本 |
| infinity gauntlet thanos simulator script | unsafe shortcut | `/guides/codes-and-scripts-safety-guide` | P0 | keep | Serper autocomplete | no executor instructions |
| thanos simulator controls | controls | `/controls`, `/guides/gauntlet-controls-guide` | P0 | keep | Serper autocomplete, Fandom ability table | keybind intent 强 |
| infinity gauntlet thanos simulator controls | controls | `/controls` | P0 | keep | Serper autocomplete/related | variant |
| thanos simulator soul stone | stone route | `/guides/all-infinity-stones-guide` | P0 | keep | Serper, Fandom Stones | low-chance drop guidance |
| how to get all stones | stones route | `/guides/all-infinity-stones-guide` | P0 | keep | Serper, YouTube | selected 2026 video |
| mechanical gloves | update weapon | `/guides/mechanical-gloves-doom-guide` | P0 | keep | Serper, official Update 3.2, Fandom | current update page |
| thanos simulator doom / doom guide | boss/update | `/guides/mechanical-gloves-doom-guide` | P0 | keep | Roblox description, YouTube | update route |
| twilight sword | boss weapon | `/guides/surtur-twilight-sword-guide` | P1 | keep | Serper related, Fandom, YouTube | Surtur route |
| surtur code | ambiguous | `/guides/surtur-twilight-sword-guide`, `/codes` | P1 | watch | Serper autocomplete | treat as route/search confusion |
| thanos simulator gungnir | weapon | `/guides/gungnir-fragments-guide` | P1 | keep | Serper autocomplete, Fandom, YouTube | fragments/Forge |
| stormbreaker | weapon | `/guides/stormbreaker-mjolnir-guide` | P1 | keep | Serper related, YouTube | route guide |
| weapon tier list | ranking | `/guides/weapons-progression-guide` | P2 | watch | TierMaker/YouTube low evidence | no hard tier list at launch |
| discord | community | none | P2 | watch | Serper autocomplete | only add if official link verified |

## 4. Competitor Benchmark

| Source | What exists | What we improve |
| --- | --- | --- |
| Thanos Simulator Official Wiki / Fandom | 70+ community pages: Infinity Gauntlet, Stones, Weapons, Bosses, Map, Mechanical Gloves, Surtur, Heart of Ymir, Gungnir | Convert database fragments into player-decision routes, add SEO hubs, safer source wording, related links |
| Roblox official page | official title, description, creator, update signal, media | Use as canonical truth for name, place, update, schema, safe access |
| RobloxDatabase | head-term game page plus unsafe script/code surfaces | Use only as search-surface evidence; no script instructions |
| TierMaker | low-confidence weapon tier templates | Use as watch signal; build progression guide instead of fake rankings |
| YouTube creators | current walkthrough videos for stones, Doom, weapons, Gungnir, Stormbreaker, Heart of Ymir, Surtur | Select video references, write original guides, avoid transcript spinning |

## 5. Launch Sitemap

| Route | Purpose |
| --- | --- |
| `/` | homepage hub |
| `/guides` | guide index |
| `/guides/beginner-guide` | first route |
| `/guides/all-infinity-stones-guide` | all stones |
| `/guides/gauntlet-controls-guide` | controls/keybinds |
| `/guides/mechanical-gloves-doom-guide` | Update 3.2/Doom |
| `/guides/weapons-progression-guide` | weapons route |
| `/guides/surtur-twilight-sword-guide` | Surtur/Twilight Sword |
| `/guides/heart-of-ymir-guide` | Heart of Ymir |
| `/guides/stormbreaker-mjolnir-guide` | Stormbreaker/Mjolnir |
| `/guides/gungnir-fragments-guide` | Gungnir/fragments/Forge |
| `/guides/codes-and-scripts-safety-guide` | codes/scripts safety |
| `/stones` | stones hub |
| `/weapons` | weapons hub |
| `/bosses` | bosses hub |
| `/map` | map routes hub |
| `/controls` | controls hub |
| `/codes` | code status |
| `/download` | official Roblox link |
| `/updates` | update/source log |
| `/disclaimer`, `/privacy`, `/terms`, `/cookie` | legal |

## 6. YouTube Selection

| Video ID | Title | Use |
| --- | --- | --- |
| `82KAKWuWysU` | Starting OVER In Infinity Gauntlet Thanos Simulator...(EP 1) | beginner |
| `EmS1GAj91SE` | How To Get ALL Infinity Stones in Thanos Simulator Roblox (Full Guide) 2026 | all stones |
| `7mxq-ImMj3g` | Fighting Dr DOOM In Infinity Gauntlet Thanos Simulator... | Doom / Mechanical Gloves |
| `kO-M2ytmDUg` | Forging All New UPGRADES In Infinity Gauntlet Thanos Simulator... | weapons progression |
| `VO2By5KIyrg` | Forging The All-Father's GUNGNIR... | Gungnir |
| `QofcwDoDYLE` | Forging STORM BREAKER... | Stormbreaker |
| `Duci-XtxZt0` | Defeating The Celestial And Unlocking The Heart of Ymir... | Heart of Ymir |
| `1x1cpAJfsts` | How To Get Surturs Sword Full Tutorial... | Surtur/Twilight Sword |

## 7. Tool Opportunities

| Idea | Status | Reason |
| --- | --- | --- |
| Interactive map | watch | Fandom map exists but maintained route data is thin; route hub first |
| Weapon tier engine | watch | TierMaker demand exists but current evidence is not strong enough |
| Code tracker | direct-lite | codes page with checked date and watch terms implemented |
| Boss prerequisite checklist | implemented | `/tools/boss-checklist` uses structured boss prerequisite data |
| Weapon unlock planner | implemented | `/tools/weapon-planner` routes weapons through prerequisites and related guides |
| Infinity Stones tracker | implemented | `/tools/infinity-stones-tracker` tracks all six stones and next route focus |
| Structured database pages | implemented | `/database/stones`, `/database/weapons`, `/database/bosses`, `/database/zones` provide filterable tables |

## 8. Implementation Notes

- `src/data/thanos/*` now stores facts, sources, guide data, codes status, and topic hubs.
- App route group is `src/app/[locale]/(thanos)/`.
- Components are under `src/components/thanos/`.
- Official Roblox media downloaded into `public/thanos/` and synced to logo/favicon.
- Ad code was not re-authored; existing iframe-based ad components remain in place.
- Unsafe script demand is answered by safety copy only.
