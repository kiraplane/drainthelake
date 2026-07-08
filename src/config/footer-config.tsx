'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Wiki',
      items: [
        {
          title: 'Beginner',
          href: Routes.Beginner,
          external: false,
        },
        {
          title: 'Drain Cycle',
          href: Routes.DrainCycle,
          external: false,
        },
        {
          title: 'Tokens',
          href: Routes.Tokens,
          external: false,
        },
        {
          title: 'Skill Tree',
          href: Routes.SkillTree,
          external: false,
        },
        {
          title: 'Depth',
          href: Routes.Depth,
          external: false,
        },
      ],
    },
    {
      title: 'Guides',
      items: [
        {
          title: 'All Guides',
          href: Routes.Guides,
          external: false,
        },
        {
          title: 'Full Walkthrough',
          href: Routes.FullWalkthroughGuide,
          external: false,
        },
        {
          title: 'Fast Drain',
          href: Routes.FastDrainGuide,
          external: false,
        },
        {
          title: 'Badges',
          href: Routes.Badges,
          external: false,
        },
      ],
    },
    {
      title: 'Status',
      items: [
        {
          title: 'Codes',
          href: Routes.Codes,
          external: false,
        },
        {
          title: 'Updates',
          href: Routes.Updates,
          external: false,
        },
        {
          title: 'Official Roblox',
          href: Routes.Download,
          external: false,
        },
        {
          title: 'Disclaimer',
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
    {
      title: 'Tools',
      items: [
        {
          title: 'Tools Hub',
          href: Routes.Tools,
          external: false,
        },
        {
          title: 'Route Efficiency',
          href: Routes.RouteEfficiency,
          external: false,
        },
        {
          title: 'Buckets',
          href: Routes.Buckets,
          external: false,
        },
        {
          title: 'Phone Ending',
          href: Routes.Endings,
          external: false,
        },
      ],
    },
    {
      title: 'Legal',
      items: [
        {
          title: 'Privacy Policy',
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: 'Terms',
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: 'Cookie Policy',
          href: Routes.CookiePolicy,
          external: false,
        },
      ],
    },
  ];
}
