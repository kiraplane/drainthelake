'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Database,
  Download,
  Gamepad2,
  Gem,
  Hammer,
  ListChecks,
  Map,
  RadioTower,
  ShieldAlert,
  Swords,
  Zap,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'All Guides',
          description:
            'Stones, controls, weapons, bosses, update routes, and safety.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner Guide',
          description:
            'Start with official access, stones, controls, and safe route order.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Zap className="size-4" />,
        },
        {
          title: 'Codes Safety',
          description: 'No verified active codes; avoid scripts and executors.',
          href: Routes.CodesSafetyGuide,
          external: false,
          icon: <ShieldAlert className="size-4" />,
        },
      ],
    },
    {
      title: t('stones.title'),
      href: Routes.Stones,
      external: false,
      icon: <Gem className="size-4" />,
      items: [
        {
          title: 'Stones Hub',
          description:
            'Plan Reality, Space, Time, Power, Mind, and Soul Stone progress.',
          href: Routes.Stones,
          external: false,
          icon: <Gem className="size-4" />,
        },
        {
          title: 'All Infinity Stones',
          description:
            'Route obby stones, NPC stones, and the Soul Stone drop.',
          href: Routes.StonesGuide,
          external: false,
          icon: <Gem className="size-4" />,
        },
        {
          title: 'Gauntlet Controls',
          description: 'Focus, teleport, shield, charge, dash, snap, and more.',
          href: Routes.ControlsGuide,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
      ],
    },
    {
      title: t('weapons.title'),
      href: Routes.Weapons,
      external: false,
      icon: <Hammer className="size-4" />,
      items: [
        {
          title: 'Weapons Hub',
          description: 'Progression routes instead of thin fixed tier claims.',
          href: Routes.Weapons,
          external: false,
          icon: <Hammer className="size-4" />,
        },
        {
          title: 'Weapon Progression',
          description:
            'Pick the next realistic unlock for your stones, map, and bosses.',
          href: Routes.WeaponsGuide,
          external: false,
          icon: <Hammer className="size-4" />,
        },
        {
          title: 'Gungnir',
          description: 'Fragments, Forge routing, and charge behavior.',
          href: Routes.GungnirGuide,
          external: false,
          icon: <Hammer className="size-4" />,
        },
      ],
    },
    {
      title: t('bosses.title'),
      href: Routes.Bosses,
      external: false,
      icon: <Swords className="size-4" />,
      items: [
        {
          title: 'Bosses Hub',
          description: 'Doom, Surtur, Eson, Lazarus, Astra, and prerequisites.',
          href: Routes.Bosses,
          external: false,
          icon: <Swords className="size-4" />,
        },
        {
          title: 'Mechanical Gloves',
          description: 'Update 3.2 Doom route and setup checks.',
          href: Routes.MechanicalGlovesGuide,
          external: false,
          icon: <Swords className="size-4" />,
        },
        {
          title: 'Surtur Sword',
          description: 'Twilight Sword, Catacombs, Heart of Ymir, and prep.',
          href: Routes.SurturGuide,
          external: false,
          icon: <Swords className="size-4" />,
        },
      ],
    },
    {
      title: 'Tools',
      href: Routes.Tools,
      external: false,
      icon: <ListChecks className="size-4" />,
      items: [
        {
          title: 'Boss Checklist',
          description:
            'Check Doom, Surtur, Eson, and other boss prerequisites.',
          href: Routes.BossChecklist,
          external: false,
          icon: <ListChecks className="size-4" />,
        },
        {
          title: 'Weapon Planner',
          description:
            'Plan Gungnir, Heart of Ymir, Mechanical Gloves, and other unlocks.',
          href: Routes.WeaponPlanner,
          external: false,
          icon: <Hammer className="size-4" />,
        },
        {
          title: 'Wiki Database',
          description: 'Filter stones, weapons, bosses, and map route data.',
          href: Routes.Database,
          external: false,
          icon: <Database className="size-4" />,
        },
      ],
    },
    {
      title: t('codes.title'),
      href: Routes.Codes,
      external: false,
      icon: <RadioTower className="size-4" />,
      items: [
        {
          title: 'Codes Status',
          description: '0 verified active codes with watch terms documented.',
          href: Routes.Codes,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
        {
          title: 'Map Routes',
          description:
            'Main map, Catacombs, World5, Forge, temples, and trials.',
          href: Routes.Map,
          external: false,
          icon: <Map className="size-4" />,
        },
        {
          title: 'Official Roblox',
          description: 'Open place ID 3261957210 by Blg42598.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
  ];
}
