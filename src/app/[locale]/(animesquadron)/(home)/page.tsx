import { AnimeSquadronHomePage } from '@/components/animesquadron/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Anime Squadron Wiki - Codes, Tier List & Guides',
    description:
      'Anime Squadron Wiki with active codes, unit-role tier list, traits, stat rerolls, game modes, Discord links, safe Roblox download notes, and beginner guides.',
    locale,
    pathname: '',
    image: '/animesquadron/og-image.png',
  });
}

export default function HomePage() {
  return <AnimeSquadronHomePage />;
}
