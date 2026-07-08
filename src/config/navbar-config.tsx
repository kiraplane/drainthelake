'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Download,
  Droplets,
  Gauge,
  ListChecks,
  RadioTower,
  Route,
  Smartphone,
  TreePine,
  Trophy,
  Wrench,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      href: Routes.Beginner,
      external: false,
      icon: <Route className="size-4" />,
      items: [
        {
          title: 'Beginner Route',
          description: 'First bucket loop, first tokens, and first upgrade.',
          href: Routes.Beginner,
          external: false,
          icon: <Route className="size-4" />,
        },
        {
          title: 'Beginner Guide',
          description: 'A full first-session path for new Roblox players.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Official Roblox',
          description: 'Open the verified Drain the Lake place page.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
    {
      title: 'Progress',
      href: Routes.DrainCycle,
      external: false,
      icon: <Droplets className="size-4" />,
      items: [
        {
          title: 'Drain Cycle',
          description: 'Fill, move, drain, spend, and retest.',
          href: Routes.DrainCycle,
          external: false,
          icon: <Droplets className="size-4" />,
        },
        {
          title: 'Tokens',
          description: 'Spend when it shortens the next useful route.',
          href: Routes.Tokens,
          external: false,
          icon: <Gauge className="size-4" />,
        },
        {
          title: 'Skill Tree',
          description: 'Pick upgrades that fix the current bottleneck.',
          href: Routes.SkillTree,
          external: false,
          icon: <TreePine className="size-4" />,
        },
        {
          title: 'Depth',
          description: 'Push deeper only when the route still wins.',
          href: Routes.Depth,
          external: false,
          icon: <Droplets className="size-4" />,
        },
      ],
    },
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'All Guides',
          description: 'Beginner, walkthrough, speed, badges, and codes.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Full Walkthrough',
          description: 'Route phases toward the phone objective.',
          href: Routes.FullWalkthroughGuide,
          external: false,
          icon: <Smartphone className="size-4" />,
        },
        {
          title: 'Fast Drain Guide',
          description: 'Compare progress per minute before going deeper.',
          href: Routes.FastDrainGuide,
          external: false,
          icon: <Gauge className="size-4" />,
        },
        {
          title: 'All Badges',
          description: 'Badge order, buckets, Skill Tree, and phone goals.',
          href: Routes.AllBadgesGuide,
          external: false,
          icon: <Trophy className="size-4" />,
        },
      ],
    },
    {
      title: 'Status',
      href: Routes.Codes,
      external: false,
      icon: <RadioTower className="size-4" />,
      items: [
        {
          title: 'Codes Status',
          description: 'No verified active public code at the latest check.',
          href: Routes.Codes,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
        {
          title: 'Updates',
          description: 'Roblox timestamp, route retests, and code watch.',
          href: Routes.Updates,
          external: false,
          icon: <ListChecks className="size-4" />,
        },
        {
          title: 'Endings',
          description: 'Phone goal and final route readiness.',
          href: Routes.Endings,
          external: false,
          icon: <Smartphone className="size-4" />,
        },
      ],
    },
    {
      title: 'Tools',
      href: Routes.Tools,
      external: false,
      icon: <Wrench className="size-4" />,
      items: [
        {
          title: 'Tools Hub',
          description: 'Small route helpers for the live game.',
          href: Routes.Tools,
          external: false,
          icon: <Wrench className="size-4" />,
        },
        {
          title: 'Route Efficiency',
          description: 'Compare two bucket routes by tokens per minute.',
          href: Routes.RouteEfficiency,
          external: false,
          icon: <Gauge className="size-4" />,
        },
        {
          title: 'Buckets',
          description: 'Capacity, unlock goals, and completion timing.',
          href: Routes.Buckets,
          external: false,
          icon: <Droplets className="size-4" />,
        },
      ],
    },
  ];
}
