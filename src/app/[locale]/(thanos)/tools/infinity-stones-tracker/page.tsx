import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { StonesTrackerTool } from '@/components/thanos/tools/stones-tracker-tool';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { databaseUpdatedAt, stones } from '@/data/thanos/database';
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
    title: 'Thanos Simulator Infinity Stones Tracker - Six Stone Checklist',
    description:
      'Track all six Thanos Simulator Infinity Stones, route type, unlock method, ability focus, and next checklist task.',
    locale,
    pathname: '/tools/infinity-stones-tracker',
    image: '/thanos/og-image.png',
  });
}

export default function InfinityStonesTrackerPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Thanos Simulator Infinity Stones Tracker',
    applicationCategory: 'GameApplication',
    operatingSystem: 'Web',
    url: `${officialGameFacts.domain}/tools/infinity-stones-tracker`,
  };

  return (
    <div className="bg-[#080611] py-12 text-[#F8F1FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F6C453] text-[#120C05]">Stones Tracker</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Thanos Simulator Infinity Stones Tracker
          </h1>
          <p className="text-[#C6BCD8] text-lg leading-8">
            Check off Reality, Space, Time, Power, Mind, and Soul Stone while
            keeping route type, ability focus, and safe next steps visible.
          </p>
          <p className="text-[#81768F] text-sm">
            {stones.length} stone entries · checked {databaseUpdatedAt}
          </p>
        </header>

        <StonesTrackerTool />

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#F6C453] text-[#120C05] hover:bg-[#FFE08A]"
          >
            <LocaleLink href="/database/stones">
              Stones database
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
