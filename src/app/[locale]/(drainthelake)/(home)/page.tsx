import { DrainTheLakeHomePage } from '@/components/drainthelake/home-page';
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
    title: 'Drain the Lake Wiki - Roblox Codes, Guide and Walkthrough',
    description:
      'Drain the Lake Wiki helps Roblox players plan bucket routes, tokens, Skill Tree upgrades, depth, codes status, badges, and the phone ending.',
    locale,
    pathname: '',
    image: '/drainthelake/og-image.jpg',
  });
}

export default function HomePage() {
  return <DrainTheLakeHomePage />;
}
