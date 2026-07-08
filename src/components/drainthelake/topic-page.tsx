import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import {
  relatedRouteLabels,
  siteDescription,
} from '@/data/drainthelake/guides';
import { officialGameFacts } from '@/data/drainthelake/sources';
import type { TopicPage as TopicPageData } from '@/data/drainthelake/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { FaqSection } from './faq-section';

function getRelatedRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? (route.replace(/^\/+/, '') || 'Home');
}

export function TopicPage({ topic }: { topic: TopicPageData }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: topic.title,
        description: topic.summary,
        dateModified: topic.updatedAt,
        image: `${officialGameFacts.domain}${topic.image}`,
        mainEntityOfPage: `${officialGameFacts.domain}${topic.route}`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Drain the Lake Wiki',
            item: officialGameFacts.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: topic.title,
            item: `${officialGameFacts.domain}${topic.route}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="py-8 text-slate-950 md:py-12">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex rounded-md bg-cyan-100 px-3 py-1 font-semibold text-cyan-900 text-xs uppercase">
              {topic.eyebrow}
            </div>
            <h1 className="font-display text-4xl font-black tracking-normal md:text-6xl">
              {topic.title}
            </h1>
            <p className="text-lg text-slate-700 leading-8">{topic.summary}</p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-md border border-sky-900/15 bg-white/75 px-3 py-2 font-medium text-slate-700 text-xs">
                Drain the Lake route guide
              </span>
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-sky-900/15 bg-white/75 px-3 py-2 font-medium text-slate-700 text-xs hover:text-cyan-700"
              >
                Official Roblox
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg border border-sky-900/15 bg-slate-200">
            <Image
              src={topic.image}
              alt={`${topic.title} artwork`}
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover"
            />
          </div>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-sky-900/15 bg-white/85 py-4"
          label
        />

        {topic.cards ? (
          <section className="grid gap-4 md:grid-cols-3">
            {topic.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-sky-900/15 bg-white/85 p-5 shadow-sm"
              >
                {card.meta ? (
                  <p className="mb-2 font-semibold text-cyan-800 text-xs uppercase">
                    {card.meta}
                  </p>
                ) : null}
                <h2 className="font-display font-bold text-xl text-slate-950">
                  {card.title}
                </h2>
                <p className="mt-2 text-slate-600 text-sm leading-6">
                  {card.body}
                </p>
                {card.href ? (
                  <LocaleLink
                    href={card.href}
                    className="mt-3 inline-flex items-center gap-2 font-semibold text-cyan-700 text-sm"
                  >
                    Open
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                ) : null}
              </article>
            ))}
          </section>
        ) : null}

        <section className="grid gap-4 md:grid-cols-3">
          {topic.featuredRoutes.map((route) => (
            <LocaleLink
              key={route}
              href={route}
              className="group rounded-lg border border-sky-900/15 bg-white/85 p-5 transition hover:border-cyan-400 hover:bg-cyan-50"
            >
              <div className="flex items-center justify-between gap-3">
                <h2 className="font-display font-bold text-slate-950 text-xl">
                  {getRelatedRouteLabel(route)}
                </h2>
                <ArrowRight className="size-4 shrink-0 text-cyan-700 transition group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 text-slate-600 text-sm leading-6">
                Continue here when this route matches your next Drain the Lake
                decision.
              </p>
            </LocaleLink>
          ))}
        </section>

        <article className="rounded-lg border border-sky-900/15 bg-white/90 p-6 shadow-sm md:p-8">
          <div className="space-y-8">
            {topic.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold text-slate-950">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-base text-slate-700 leading-8">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 text-slate-700 text-sm leading-7">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-cyan-600 text-white hover:bg-cyan-700"
            >
              <LocaleLink href="/guides">All Guides</LocaleLink>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-cyan-700 bg-white text-cyan-800 hover:bg-cyan-50"
            >
              <LocaleLink href="/tools/route-efficiency">Route Tool</LocaleLink>
            </Button>
          </div>
        </article>

        <FaqSection items={topic.faq} />

        <p className="sr-only">{siteDescription}</p>
      </Container>
    </div>
  );
}
