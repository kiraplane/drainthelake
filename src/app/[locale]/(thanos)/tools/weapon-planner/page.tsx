import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { WeaponPlannerTool } from '@/components/thanos/tools/weapon-planner-tool';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { databaseUpdatedAt, weapons } from '@/data/thanos/database';
import { officialGameFacts } from '@/data/thanos/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Thanos Simulator Weapon Planner - Gungnir, Ymir, Gloves Route',
    description:
      'Plan Thanos Simulator weapon unlocks for Gungnir, Heart of Ymir, Surtur Sword, Stormbreaker, Mechanical Gloves, and other route weapons.',
    locale,
    pathname: '/tools/weapon-planner',
    image: '/thanos/og-image.png',
  });
}

export default function WeaponPlannerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Thanos Simulator Weapon Unlock Planner',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    url: `${officialGameFacts.domain}/tools/weapon-planner`,
  };

  return (
    <div className="bg-[#080611] py-12 text-[#F8F1FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F6C453] text-[#120C05]">Weapon Planner</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Thanos Simulator Weapon Unlock Planner
          </h1>
          <p className="text-[#C6BCD8] text-lg leading-8">
            Choose the weapon you want next and see the prerequisite chain,
            unlock path, useful follow-ups, and related guide routes.
          </p>
          <p className="text-[#81768F] text-sm">
            {weapons.length} weapon entries · checked {databaseUpdatedAt}
          </p>
        </header>

        <WeaponPlannerTool />

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#F6C453] text-[#120C05] hover:bg-[#FFE08A]"
          >
            <LocaleLink href="/database/weapons">
              Weapons database
              <ArrowRight className="size-4" />
            </LocaleLink>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[#3A2D4E] bg-[#151024] text-[#F8F1FF] hover:border-[#F6C453]"
          >
            <LocaleLink href="/tools">All tools</LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
