import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { DatabaseTable } from '@/components/thanos/database/database-table';
import { Badge } from '@/components/ui/badge';
import {
  databaseSourceNote,
  databaseUpdatedAt,
  toDatabaseTableRecords,
  weapons,
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
    title: 'Thanos Simulator Weapons Database - Unlock Routes and Prereqs',
    description:
      'Filter Thanos Simulator weapons by stage, role, prerequisites, unlock path, route hints, and source confidence.',
    locale,
    pathname: '/database/weapons',
    image: '/thanos/og-image.png',
  });
}

export default function WeaponsDatabasePage() {
  const records = toDatabaseTableRecords(weapons);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Thanos Simulator Weapons Database',
    itemListElement: records.map((record, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: record.name,
      url: `${officialGameFacts.domain}/database/weapons#${record.id}`,
    })),
  };

  return (
    <div className="bg-[#080611] py-12 text-[#F8F1FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F6C453] text-[#120C05]">
            Weapons Database
          </Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Thanos Simulator Weapons Database
          </h1>
          <p className="text-[#C6BCD8] text-lg leading-8">
            Browse weapon routes for Infinity Gauntlet, Stormbreaker, Gungnir,
            Heart of Ymir, Surtur Sword, Mechanical Gloves, and more.
          </p>
          <p className="text-[#81768F] text-sm">
            Checked {databaseUpdatedAt}. {databaseSourceNote}
          </p>
        </header>
        <DatabaseTable records={records} label="weapons" />
      </Container>
    </div>
  );
}
