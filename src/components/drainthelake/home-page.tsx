import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  guides,
  relatedRouteLabels,
  siteDescription,
} from '@/data/drainthelake/guides';
import {
  officialGameFacts,
  officialQuickLinks,
} from '@/data/drainthelake/sources';
import { topicPageList } from '@/data/drainthelake/topics';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Droplets,
  ExternalLink,
  Gauge,
  RadioTower,
  Route,
  Smartphone,
  TreePine,
  Trophy,
  Wrench,
} from 'lucide-react';
import Image from 'next/image';

const quickLinks = [
  { label: 'Beginner', href: '/beginner', icon: Route },
  { label: 'Cycle', href: '/drain-cycle', icon: Droplets },
  { label: 'Tokens', href: '/tokens', icon: Gauge },
  { label: 'Skill Tree', href: '/skill-tree', icon: TreePine },
  { label: 'Ending', href: '/endings', icon: Smartphone },
  { label: 'Codes', href: '/codes', icon: RadioTower },
];

const startSteps = [
  {
    title: 'Check codes once',
    body: 'No active public code is verified, so avoid rumor loops and start farming.',
    href: '/codes',
  },
  {
    title: 'Make one route repeatable',
    body: 'Find the fill point, drain point, token return, and first useful upgrade.',
    href: '/beginner',
  },
  {
    title: 'Fix the slowest step',
    body: 'Use tokens and Skill Tree upgrades as bottleneck fixes, then retest.',
    href: '/skill-tree',
  },
  {
    title: 'Push depth on purpose',
    body: 'Go deeper only when the current route still wins after timing the cycle.',
    href: '/depth',
  },
];

const hubModules = [
  {
    title: 'Progression Routes',
    body: 'Use these pages to decide what to do after each bucket loop.',
    hrefs: ['/drain-cycle', '/tokens', '/skill-tree', '/depth'],
    icon: Droplets,
  },
  {
    title: 'Completion Goals',
    body: 'Work toward the phone ending, badges, and bucket completion after the route is stable.',
    hrefs: ['/endings', '/badges', '/buckets', '/guides/full-walkthrough'],
    icon: Trophy,
  },
  {
    title: 'Tools and Status',
    body: 'Compare rough route efficiency and keep codes/update checks honest.',
    hrefs: ['/tools/route-efficiency', '/codes', '/updates', '/download'],
    icon: Wrench,
  },
];

const keywordLinks = [
  { keyword: 'drain the lake', href: '/' },
  { keyword: 'drain the lake wiki', href: '/' },
  { keyword: 'drain the lake roblox', href: '/download' },
  { keyword: 'drain the lake codes', href: '/codes' },
  { keyword: 'drain the lake guide', href: '/guides' },
  { keyword: 'drain the lake endings', href: '/endings' },
  { keyword: 'drain the lake skill tree', href: '/skill-tree' },
  { keyword: 'drain the lake badges', href: '/badges' },
  { keyword: 'drain the lake buckets', href: '/buckets' },
  {
    keyword: 'fastest way to drain the lake',
    href: '/guides/fastest-way-to-drain',
  },
  { keyword: 'full walkthrough', href: '/guides/full-walkthrough' },
  { keyword: 'route efficiency', href: '/tools/route-efficiency' },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(value);
}

function getRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? route.replace(/^\/+/, '');
}

export function DrainTheLakeHomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'Drain the Lake Wiki',
        url: officialGameFacts.domain,
        description: siteDescription,
        inLanguage: 'en',
      },
      {
        '@type': 'Organization',
        name: 'Drain the Lake Wiki',
        url: officialGameFacts.domain,
        logo: `${officialGameFacts.domain}/drainthelake/icon.png`,
      },
      {
        '@type': 'VideoGame',
        name: 'Drain the Lake',
        url: officialGameFacts.officialRobloxUrl,
        genre: ['Roblox simulator', 'Incremental simulator'],
        gamePlatform: ['Roblox', 'PC', 'Mobile', 'Console'],
        description: officialGameFacts.officialDescriptionSummary,
        image: `${officialGameFacts.domain}/drainthelake/og-image.jpg`,
      },
      {
        '@type': 'VideoObject',
        name: 'Drain the Lake Roblox beginners tips video',
        description:
          'A gameplay guide reference for the early bucket loop, tokens, upgrades, and route rhythm.',
        thumbnailUrl: 'https://i.ytimg.com/vi/egTySQBzI7Y/hqdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/egTySQBzI7Y',
        uploadDate: '2026-07-01',
      },
    ],
  };

  return (
    <div className="text-slate-950">
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden border-slate-900/10 border-b bg-[linear-gradient(135deg,#f4f8f6_0%,#edf4f1_48%,#ffffff_100%)]">
        <Container className="px-4 py-8 md:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge className="bg-teal-700 text-white">
                  Roblox incremental simulator
                </Badge>
                <Badge
                  variant="outline"
                  className="border-slate-900/15 bg-white/70 text-slate-700"
                >
                  Codes, routes, tokens, depth
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black tracking-normal md:text-6xl">
                Drain the Lake Wiki
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-slate-700 leading-8">
                Plan the bucket loop, tokens, Skill Tree upgrades, depth pushes,
                badges, codes status, and the phone ending for Drain the Lake on
                Roblox.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-teal-700 text-white hover:bg-teal-800"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    Start Route
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-teal-700 bg-white text-teal-800 hover:bg-teal-50"
                >
                  <LocaleLink href="/codes">Codes Status</LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-slate-900/15 bg-white text-slate-800 hover:bg-slate-50"
                >
                  <a
                    href={officialGameFacts.officialRobloxUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Official Roblox
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {quickLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <LocaleLink
                      key={link.href}
                      href={link.href}
                      className="inline-flex min-w-0 items-center gap-2 rounded-md border border-slate-900/10 bg-white/75 px-3 py-2 font-medium text-slate-700 text-sm transition hover:border-teal-300 hover:text-teal-800"
                    >
                      <Icon className="size-4 shrink-0" />
                      <span className="min-w-0 break-words">{link.label}</span>
                    </LocaleLink>
                  );
                })}
              </div>
              <div className="mt-5 grid max-w-3xl gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-slate-900/10 bg-white/75 p-3">
                  <p className="font-display font-black text-2xl text-teal-800">
                    {formatNumber(officialGameFacts.visitsAtCheck)}
                  </p>
                  <p className="text-slate-600 text-xs">Roblox visits</p>
                </div>
                <div className="rounded-lg border border-slate-900/10 bg-white/75 p-3">
                  <p className="font-display font-black text-2xl text-teal-800">
                    {formatNumber(officialGameFacts.activePlayersAtCheck)}
                  </p>
                  <p className="text-slate-600 text-xs">active at check</p>
                </div>
                <div className="rounded-lg border border-slate-900/10 bg-white/75 p-3">
                  <p className="font-display font-black text-2xl text-teal-800">
                    {officialGameFacts.maxPlayers}
                  </p>
                  <p className="text-slate-600 text-xs">players per server</p>
                </div>
              </div>
            </div>
            <div className="min-w-0">
              <div className="overflow-hidden rounded-lg border border-slate-900/10 bg-[#10232a] shadow-xl shadow-slate-950/10">
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/egTySQBzI7Y?rel=0"
                    title="Drain the Lake Roblox beginners tips video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="eager"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3 text-slate-200 text-sm">
                  <span className="inline-flex items-center gap-2">
                    <BadgeCheck className="size-4 text-teal-200" />
                    Gameplay guide reference
                  </span>
                  <a
                    href="https://www.youtube.com/watch?v=egTySQBzI7Y"
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-100 hover:text-white"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container className="space-y-8 px-4 py-8">
        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
          <div className="rounded-lg border border-slate-900/10 bg-white/85 p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-teal-800 text-xs uppercase">
                  Start here
                </p>
                <h2 className="font-display font-black text-2xl">
                  Your first Drain the Lake route
                </h2>
              </div>
              <BookOpen className="size-6 text-teal-700" />
            </div>
            <div className="grid gap-3">
              {startSteps.map((step, index) => (
                <LocaleLink
                  key={step.href}
                  href={step.href}
                  className="group flex gap-3 rounded-lg border border-slate-900/10 bg-slate-50 p-4 transition hover:border-teal-300 hover:bg-teal-50"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-teal-700 font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="min-w-0">
                    <strong className="block text-slate-950">
                      {step.title}
                    </strong>
                    <span className="mt-1 block text-slate-600 text-sm leading-6">
                      {step.body}
                    </span>
                  </span>
                  <ArrowRight className="ml-auto size-4 shrink-0 text-teal-700 transition group-hover:translate-x-0.5" />
                </LocaleLink>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-slate-900/10 bg-[#10232a] p-5 text-white shadow-sm">
            <p className="font-semibold text-teal-100 text-xs uppercase">
              Status board
            </p>
            <h2 className="mt-1 font-display font-black text-2xl">
              Codes and update checks
            </h2>
            <div className="mt-4 grid gap-3">
              <LocaleLink
                href="/codes"
                className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-teal-300"
              >
                <div className="flex items-center justify-between gap-3">
                  <strong>0 verified active codes</strong>
                  <RadioTower className="size-5 text-teal-100" />
                </div>
                <p className="mt-2 text-slate-300 text-sm leading-6">
                  Keep a code-watch page without publishing fake rewards.
                </p>
              </LocaleLink>
              <LocaleLink
                href="/updates"
                className="rounded-lg border border-white/10 bg-white/5 p-4 transition hover:border-teal-300"
              >
                <div className="flex items-center justify-between gap-3">
                  <strong>Retest after updates</strong>
                  <Badge className="bg-teal-100 text-slate-950">
                    Route note
                  </Badge>
                </div>
                <p className="mt-2 text-slate-300 text-sm leading-6">
                  Retest route timing after visible game changes.
                </p>
              </LocaleLink>
              <div className="flex flex-wrap gap-2 pt-1">
                {officialQuickLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 text-sm text-slate-200 hover:bg-white/15"
                  >
                    {link.label}
                    <ExternalLink className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="font-semibold text-teal-800 text-xs uppercase">
                Wiki hubs
              </p>
              <h2 className="font-display font-black text-3xl">
                Open the page that matches your blocker
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden border-teal-700 text-teal-800 sm:inline-flex"
            >
              <LocaleLink href="/guides">All Guides</LocaleLink>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {hubModules.map((module) => {
              const Icon = module.icon;
              return (
                <article
                  key={module.title}
                  className="rounded-lg border border-slate-900/10 bg-white/85 p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-md bg-teal-50 text-teal-800">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display font-bold text-xl">
                      {module.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-slate-600 text-sm leading-6">
                    {module.body}
                  </p>
                  <div className="mt-4 grid gap-2">
                    {module.hrefs.map((href) => (
                      <LocaleLink
                        key={href}
                        href={href}
                        className="flex min-w-0 items-center justify-between gap-3 rounded-md border border-slate-900/10 bg-slate-50 px-3 py-2 text-slate-700 text-sm hover:border-teal-300 hover:text-teal-800"
                      >
                        <span className="min-w-0 break-words">
                          {getRouteLabel(href)}
                        </span>
                        <ArrowRight className="size-4 shrink-0" />
                      </LocaleLink>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-lg border border-slate-900/10 bg-white/85 p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-teal-800 text-xs uppercase">
                Latest guides
              </p>
              <h2 className="font-display font-black text-3xl">
                Current launch coverage
              </h2>
            </div>
            <BookOpen className="size-6 text-teal-700" />
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {guides.slice(0, 6).map((guide) => (
              <LocaleLink
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group overflow-hidden rounded-lg border border-slate-900/10 bg-slate-50 transition hover:border-teal-300 hover:bg-teal-50"
              >
                <div className="relative aspect-video">
                  <Image
                    src={guide.coverImageUrl}
                    alt={`${guide.title} cover`}
                    fill
                    sizes="(min-width: 1280px) 320px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="font-semibold text-teal-800 text-xs uppercase">
                    {guide.category}
                  </p>
                  <h3 className="mt-2 font-display font-bold text-xl text-slate-950">
                    {guide.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-slate-600 text-sm leading-6">
                    {guide.summary}
                  </p>
                </div>
              </LocaleLink>
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-slate-900/10 bg-[#10232a] p-5 text-white">
          <p className="font-semibold text-teal-100 text-xs uppercase">
            Keyword hub
          </p>
          <h2 className="mt-1 font-display font-black text-3xl">
            Drain the Lake topics covered here
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {keywordLinks.map((item) => (
              <LocaleLink
                key={`${item.keyword}-${item.href}`}
                href={item.href}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-slate-200 text-sm transition hover:border-teal-300 hover:text-white"
              >
                {item.keyword}
              </LocaleLink>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {topicPageList.slice(0, 8).map((topic) => (
            <LocaleLink
              key={topic.route}
              href={topic.route}
              className="rounded-lg border border-slate-900/10 bg-white/85 p-4 transition hover:border-teal-300 hover:bg-teal-50"
            >
              <p className="font-semibold text-teal-800 text-xs uppercase">
                {topic.navGroup}
              </p>
              <h3 className="mt-2 font-display font-bold text-lg text-slate-950">
                {topic.label}
              </h3>
              <p className="mt-2 line-clamp-3 text-slate-600 text-sm leading-6">
                {topic.summary}
              </p>
            </LocaleLink>
          ))}
        </section>
      </Container>
    </div>
  );
}
