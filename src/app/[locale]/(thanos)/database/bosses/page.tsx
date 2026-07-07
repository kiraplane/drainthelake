import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { DatabaseTable } from '@/components/thanos/database/database-table';
import { Badge } from '@/components/ui/badge';
import {
  bosses,
  databaseSourceNote,
  databaseUpdatedAt,
  toDatabaseTableRecords,
} from '@/data/thanos/database';
import { officialGameFacts } from '@/data/thanos/sources';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Thanos Simulator Bosses Database - Doom, Surtur and Eson',
    description:
      'Filter Thanos Simulator bosses by stage, location, prerequisites, rewards, route hints, and source confidence.',
    locale,
    pathname: '/database/bosses',
    image: '/thanos/og-image.png',
  });
}

export default function BossesDatabasePage() {
  const records = toDatabaseTableRecords(bosses);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Thanos Simulator Bosses Database',
    itemListElement: records.map((record, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: record.name,
      url: `${officialGameFacts.domain}/database/bosses#${record.id}`,
    })),
  };

  return (
    <div className="bg-[#080611] py-12 text-[#F8F1FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F6C453] text-[#120C05]">Bosses Database</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Thanos Simulator Bosses Database
          </h1>
          <p className="text-[#C6BCD8] text-lg leading-8">
            Browse boss and special NPC checks for Doom, Surtur, Eson, Lazarus,
            Astra, Power Stone NPC, and prerequisite planning.
          </p>
          <p className="text-[#81768F] text-sm">
            Checked {databaseUpdatedAt}. {databaseSourceNote}
          </p>
        </header>
        <DatabaseTable records={records} label="bosses" />
      </Container>
    </div>
  );
}
