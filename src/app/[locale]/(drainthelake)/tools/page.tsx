import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/drainthelake/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight, Calculator, Gauge } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Drain the Lake Tools - Route Efficiency Calculator',
    description:
      'Use Drain the Lake tools to compare bucket routes, token rewards, fill time, travel time, drain time, and depth efficiency.',
    locale,
    pathname: '/tools',
    image: '/drainthelake/og-image.jpg',
  });
}

export default function ToolsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Drain the Lake Tools',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Route Efficiency Tool',
        url: `${officialGameFacts.domain}/tools/route-efficiency`,
      },
    ],
  };

  return (
    <div className="py-8 text-slate-950 md:py-12">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="max-w-3xl space-y-4">
          <div className="inline-flex rounded-md bg-cyan-100 px-3 py-1 font-semibold text-cyan-900 text-xs uppercase">
            Tools
          </div>
          <h1 className="font-display text-4xl font-black tracking-normal md:text-6xl">
            Drain the Lake Tools
          </h1>
          <p className="text-lg text-slate-700 leading-8">
            Lightweight tools for comparing routes and making cleaner token
            decisions while the game is still changing quickly.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-sky-900/15 bg-white/90 p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-md bg-cyan-100 text-cyan-800">
                <Calculator className="size-6" />
              </span>
              <div>
                <p className="font-semibold text-cyan-800 text-xs uppercase">
                  Estimate
                </p>
                <h2 className="font-display font-bold text-2xl">
                  Route Efficiency Tool
                </h2>
              </div>
            </div>
            <p className="mt-4 text-slate-700 leading-7">
              Compare two routes using rough fill time, travel time, drain time,
              and token reward. Use the result to decide whether a deeper route
              is actually faster.
            </p>
            <Button
              asChild
              className="mt-5 bg-cyan-600 text-white hover:bg-cyan-700"
            >
              <LocaleLink href="/tools/route-efficiency">
                Open tool
                <ArrowRight className="size-4" />
              </LocaleLink>
            </Button>
          </article>

          <article className="rounded-lg border border-sky-900/15 bg-slate-950 p-6 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-md bg-cyan-200 text-slate-950">
                <Gauge className="size-6" />
              </span>
              <div>
                <p className="font-semibold text-cyan-200 text-xs uppercase">
                  Rule
                </p>
                <h2 className="font-display font-bold text-2xl">
                  One upgrade, one retest
                </h2>
              </div>
            </div>
            <p className="mt-4 text-slate-300 leading-7">
              The tool is intentionally simple: it helps you see when a route is
              obviously better. If the routes are close, pick the one you can
              repeat cleanly without mistakes.
            </p>
          </article>
        </section>
      </Container>
    </div>
  );
}
