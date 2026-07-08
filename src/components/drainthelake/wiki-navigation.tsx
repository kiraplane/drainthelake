'use client';

import { Badge } from '@/components/ui/badge';
import { codeCheckSummary } from '@/data/drainthelake/codes';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  CircleHelp,
  Compass,
  Download,
  Droplets,
  Gauge,
  ListChecks,
  RadioTower,
  Route,
  ShieldQuestion,
  Smartphone,
  TreePine,
  Trophy,
  Wrench,
} from 'lucide-react';
import type { ReactNode } from 'react';

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: WikiNavLink[];
  activePrefixes?: string[];
}

const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Home' },
      { href: '/beginner', label: 'Beginner Route' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      { href: '/download', label: 'Official Roblox' },
    ],
  },
  {
    title: 'Progression',
    icon: Droplets,
    links: [
      { href: '/drain-cycle', label: 'Drain Cycle' },
      { href: '/tokens', label: 'Token Planning' },
      { href: '/skill-tree', label: 'Skill Tree' },
      { href: '/depth', label: 'Depth Progress' },
      { href: '/guides/fastest-way-to-drain', label: 'Fast Drain Guide' },
    ],
  },
  {
    title: 'Reference',
    icon: ListChecks,
    links: [
      { href: '/endings', label: 'Phone Ending' },
      { href: '/badges', label: 'Badges' },
      { href: '/buckets', label: 'Buckets' },
      { href: '/guides/full-walkthrough', label: 'Full Walkthrough' },
      { href: '/guides/all-badges-guide', label: 'All Badges Guide' },
    ],
  },
  {
    title: 'Status',
    icon: RadioTower,
    links: [
      { href: '/codes', label: 'Codes Status' },
      { href: '/guides/codes-status-guide', label: 'Codes Guide' },
      { href: '/updates', label: 'Updates' },
      { href: '/guides/phone-ending-guide', label: 'Ending Prep' },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    links: [
      { href: '/tools', label: 'Tools Hub' },
      { href: '/tools/route-efficiency', label: 'Route Efficiency' },
      { href: '/guides/skill-tree-upgrades', label: 'Upgrade Guide' },
    ],
    activePrefixes: ['/tools'],
  },
  {
    title: 'Guides',
    icon: BookOpen,
    links: [
      { href: '/guides', label: 'All Guides' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      { href: '/guides/full-walkthrough', label: 'Full Walkthrough' },
      { href: '/guides/skill-tree-upgrades', label: 'Skill Tree Guide' },
    ],
    activePrefixes: ['/guides'],
  },
] as const;

const iconMap = {
  '/beginner': Route,
  '/drain-cycle': Droplets,
  '/tokens': Gauge,
  '/skill-tree': TreePine,
  '/depth': Droplets,
  '/endings': Smartphone,
  '/badges': Trophy,
  '/buckets': Droplets,
  '/download': Download,
  '/codes': RadioTower,
  '/updates': RadioTower,
};

function isCurrentPath(currentPath: string | undefined, href: string) {
  return Boolean(currentPath && currentPath === href);
}

function isGroupCurrentPath(
  currentPath: string | undefined,
  group: WikiNavGroup
) {
  if (!currentPath) {
    return false;
  }

  return (
    group.links.some((link) => isCurrentPath(currentPath, link.href)) ||
    Boolean(
      group.activePrefixes?.some(
        (prefix) =>
          currentPath === prefix || currentPath.startsWith(`${prefix}/`)
      )
    )
  );
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);
  const Icon = iconMap[href as keyof typeof iconMap] ?? ArrowRight;

  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm leading-6 transition',
        isActive
          ? 'border-teal-700 bg-teal-700 font-semibold text-white'
          : 'border-slate-900/10 bg-white/80 text-slate-700 hover:border-teal-300 hover:bg-teal-50 hover:text-slate-950'
      )}
    >
      <span className="inline-flex min-w-0 items-center gap-2">
        <Icon className="size-4 shrink-0" />
        <span className="min-w-0 break-words">{label}</span>
      </span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-white' : 'text-teal-700'
        )}
      />
    </LocaleLink>
  );
}

function CodesSidebarCard() {
  return (
    <div className="rounded-lg border border-slate-900/10 bg-white/85 p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display font-bold text-lg text-slate-950">
          Codes Status
        </h2>
        <Badge className="bg-amber-100 text-amber-900 ring-1 ring-amber-200">
          0 active
        </Badge>
      </div>
      <p className="text-slate-600 text-xs leading-5">
        {codeCheckSummary.status}
      </p>
      <LocaleLink
        href="/codes"
        className="mt-4 flex items-center justify-center gap-2 border-slate-900/10 border-t pt-3 font-medium text-slate-700 text-sm transition hover:text-teal-700"
      >
        View code check
        <ArrowRight className="size-4" />
      </LocaleLink>
    </div>
  );
}

export function DrainTheLakeMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mx-4 mb-6 rounded-lg border border-slate-900/10 bg-white/85 p-4 shadow-sm lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-slate-950 [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <Compass className="size-5 text-teal-700" />
          Drain the Lake Menu
        </span>
        <ChevronDown className="size-5" />
      </summary>
      <div className="mt-4 grid gap-4">
        {wikiNavGroups.map((group) => {
          const Icon = group.icon;
          return (
            <div key={group.title}>
              <h2 className="mb-2 flex items-center gap-2 font-semibold text-slate-500 text-xs uppercase">
                <Icon className="size-4" />
                {group.title}
              </h2>
              <div className="grid gap-2">
                {group.links.map((link) => (
                  <WikiNavLinkItem
                    key={link.href}
                    currentPath={currentPath}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </details>
  );
}

export function DrainTheLakeRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="sticky top-24 hidden max-h-[calc(100vh-7rem)] w-[264px] shrink-0 self-start overflow-y-auto rounded-lg border border-slate-900/10 bg-white/85 p-4 shadow-sm shadow-slate-950/5 lg:block">
      <div className="mb-4 rounded-lg bg-[#10232a] p-4 text-white">
        <p className="font-semibold text-teal-100 text-xs uppercase">
          Drain the Lake Wiki
        </p>
        <h2 className="mt-1 font-display font-black text-xl">Route Board</h2>
        <p className="mt-2 text-slate-300 text-xs leading-5">
          Bucket loop, tokens, Skill Tree, depth, codes, and phone ending.
        </p>
      </div>
      <div className="space-y-3">
        {wikiNavGroups.map((group) => {
          const Icon = group.icon;
          const isOpen = isGroupCurrentPath(currentPath, group);
          return (
            <details key={group.title} open={isOpen} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-2 py-2 font-semibold text-slate-700 text-sm hover:bg-teal-50 [&::-webkit-details-marker]:hidden">
                <span className="inline-flex items-center gap-2">
                  <Icon className="size-4 text-teal-700" />
                  {group.title}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-slate-900/10 text-slate-500"
                  >
                    {group.links.length}
                  </Badge>
                  <ChevronDown className="size-4 transition group-open:rotate-180" />
                </span>
              </summary>
              <div className="mt-2 grid gap-2">
                {group.links.map((link) => (
                  <WikiNavLinkItem
                    key={link.href}
                    currentPath={currentPath}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </details>
          );
        })}
      </div>
      <div className="mt-4">
        <CodesSidebarCard />
      </div>
    </aside>
  );
}

export function DrainTheLakePageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <>
      <DrainTheLakeMobileMenu currentPath={currentPath} />
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 lg:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <DrainTheLakeRouteSidebar currentPath={currentPath} />
      </div>
    </>
  );
}

export function DisclaimerNote() {
  return (
    <div className="rounded-lg border border-slate-900/10 bg-white/80 p-4 text-slate-600 text-sm leading-6">
      <div className="mb-2 flex items-center gap-2 font-semibold text-slate-950">
        <ShieldQuestion className="size-4 text-teal-700" />
        Independent guide site
      </div>
      Drain the Lake Wiki is an independent guide hub. Roblox and Drain the Lake
      belong to their respective owners.
    </div>
  );
}
