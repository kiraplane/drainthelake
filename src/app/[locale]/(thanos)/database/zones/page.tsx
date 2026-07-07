import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { DatabaseTable } from '@/components/thanos/database/database-table';
import { Badge } from '@/components/ui/badge';
import {
  databaseSourceNote,
  databaseUpdatedAt,
  toDatabaseTableRecords,
  zones,
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
    title: 'Thanos Simulator Zones Database - Map, Catacombs, World5',
    description:
      'Filter Thanos Simulator zones by map purpose, stage, route objectives, prerequisites, and related unlocks.',
    locale,
    pathname: '/database/zones',
    image: '/thanos/og-image.png',
  });
}

export default function ZonesDatabasePage() {
  const records = toDatabaseTableRecords(zones);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Thanos Simulator Zones Database',
    itemListElement: records.map((record, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: record.name,
      url: `${officialGameFacts.domain}/database/zones#${record.id}`,
    })),
  };

  return (
    <div className="bg-[#080611] py-12 text-[#F8F1FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F6C453] text-[#120C05]">Zones Database</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Thanos Simulator Zones Database
          </h1>
          <p className="text-[#C6BCD8] text-lg leading-8">
            Browse route zones including Main Map, Catacombs, World5, Forge,
            Power Temple, stone obbies, Lunar World, and challenge areas.
          </p>
          <p className="text-[#81768F] text-sm">
            Checked {databaseUpdatedAt}. {databaseSourceNote}
          </p>
        </header>
        <DatabaseTable records={records} label="zones" />
      </Container>
    </div>
  );
}
