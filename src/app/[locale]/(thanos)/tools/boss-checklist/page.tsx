import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { BossChecklistTool } from '@/components/thanos/tools/boss-checklist-tool';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { bosses, databaseUpdatedAt } from '@/data/thanos/database';
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
    title: 'Thanos Simulator Boss Checklist - Doom, Surtur, Eson Prep',
    description:
      'Pick a Thanos Simulator boss and check prerequisites for Doom, Surtur, Eson, Lazarus, Astra, and Power Stone NPC routes.',
    locale,
    pathname: '/tools/boss-checklist',
    image: '/thanos/og-image.png',
  });
}

export default function BossChecklistPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Thanos Simulator Boss Prerequisite Checklist',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    url: `${officialGameFacts.domain}/tools/boss-checklist`,
  };

  return (
    <div className="bg-[#080611] py-12 text-[#F8F1FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F6C453] text-[#120C05]">Boss Checklist</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Thanos Simulator Boss Prerequisite Checklist
          </h1>
          <p className="text-[#C6BCD8] text-lg leading-8">
            Pick a boss, check the required map access, weapon prep, stone
            progress, and related guide before committing to a long attempt.
          </p>
          <p className="text-[#81768F] text-sm">
            {bosses.length} boss entries · checked {databaseUpdatedAt}
          </p>
        </header>

        <BossChecklistTool />

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#F6C453] text-[#120C05] hover:bg-[#FFE08A]"
          >
            <LocaleLink href="/database/bosses">
              Boss database
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
