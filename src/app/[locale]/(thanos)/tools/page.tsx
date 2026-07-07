import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { databaseHubCards, toolCards } from '@/data/thanos/database';
import { officialGameFacts } from '@/data/thanos/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight, Database, ListChecks, Wrench } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Thanos Simulator Tools - Checklists, Planner and Stone Tracker',
    description:
      'Use Thanos Simulator tools for boss prerequisites, weapon unlock planning, Infinity Stones tracking, and structured wiki database pages.',
    locale,
    pathname: '/tools',
    image: '/thanos/og-image.png',
  });
}

export default function ToolsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Thanos Simulator Tools',
    itemListElement: toolCards.map((tool, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: tool.title,
      url: `${officialGameFacts.domain}${tool.href}`,
    })),
  };

  return (
    <div className="bg-[#080611] py-12 text-[#F8F1FF]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#F6C453] text-[#120C05]">Route Tools</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Thanos Simulator Tools
          </h1>
          <p className="text-[#C6BCD8] text-lg leading-8">
            Interactive helpers built from the same source-checked Thanos
            Simulator database: boss prerequisites, weapon unlock routes, and
            Infinity Stones progress.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {toolCards.map((tool, index) => (
            <LocaleLink
              key={tool.href}
              href={tool.href}
              className="group rounded-lg border border-[#3A2D4E] bg-[#151024] p-5 transition hover:border-[#F6C453]"
            >
              <div className="flex items-start gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#F6C453] text-[#120C05]">
                  {index === 0 ? (
                    <ListChecks className="size-5" />
                  ) : index === 1 ? (
                    <Wrench className="size-5" />
                  ) : (
                    <Database className="size-5" />
                  )}
                </span>
                <div className="min-w-0">
                  <h2 className="font-display text-[#FFE7A8] text-xl font-bold">
                    {tool.title}
                  </h2>
                  <p className="mt-2 text-[#C6BCD8] text-sm leading-6">
                    {tool.body}
                  </p>
                </div>
              </div>
              <span className="mt-5 inline-flex items-center gap-2 text-[#57D68D] text-sm">
                Open tool
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </span>
            </LocaleLink>
          ))}
        </section>

        <section className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#57D68D] text-xs uppercase tracking-[0.18em]">
                Structured Wiki Data
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                Database pages behind the tools
              </h2>
            </div>
            <Button
              asChild
              className="bg-[#F6C453] text-[#120C05] hover:bg-[#FFE08A]"
            >
              <LocaleLink href="/database">
                Open database
                <ArrowRight className="size-4" />
              </LocaleLink>
            </Button>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {databaseHubCards.map((card) => (
              <LocaleLink
                key={card.href}
                href={card.href}
                className="rounded-lg border border-[#3A2D4E] bg-[#080611] p-4 transition hover:border-[#F6C453]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display font-bold text-[#FFE7A8]">
                    {card.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className="border-[#3A2D4E] text-[#C6BCD8]"
                  >
                    {card.count}
                  </Badge>
                </div>
                <p className="mt-3 text-[#C6BCD8] text-sm leading-6">
                  {card.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
