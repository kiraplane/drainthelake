'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';

export function useFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: t('wiki.title'),
      items: [
        {
          title: t('wiki.items.stones'),
          href: Routes.Stones,
          external: false,
        },
        {
          title: t('wiki.items.weapons'),
          href: Routes.Weapons,
          external: false,
        },
        {
          title: t('wiki.items.bosses'),
          href: Routes.Bosses,
          external: false,
        },
        {
          title: t('wiki.items.map'),
          href: Routes.Map,
          external: false,
        },
        {
          title: t('wiki.items.codes'),
          href: Routes.Codes,
          external: false,
        },
      ],
    },
    {
      title: t('guides.title'),
      items: [
        {
          title: t('guides.items.all'),
          href: Routes.Guides,
          external: false,
        },
        {
          title: t('guides.items.beginner'),
          href: Routes.BeginnerGuide,
          external: false,
        },
        {
          title: t('guides.items.stones'),
          href: Routes.StonesGuide,
          external: false,
        },
        {
          title: t('guides.items.controls'),
          href: Routes.ControlsGuide,
          external: false,
        },
      ],
    },
    {
      title: 'Tools',
      items: [
        {
          title: 'Boss Checklist',
          href: Routes.BossChecklist,
          external: false,
        },
        {
          title: 'Weapon Planner',
          href: Routes.WeaponPlanner,
          external: false,
        },
        {
          title: 'Stones Tracker',
          href: Routes.StonesTracker,
          external: false,
        },
        {
          title: 'Wiki Database',
          href: Routes.Database,
          external: false,
        },
      ],
    },
    {
      title: t('legal.title'),
      items: [
        {
          title: t('legal.items.privacyPolicy'),
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('legal.items.termsOfService'),
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: t('legal.items.cookiePolicy'),
          href: Routes.CookiePolicy,
          external: false,
        },
        {
          title: t('legal.items.disclaimer'),
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
  ];
}
