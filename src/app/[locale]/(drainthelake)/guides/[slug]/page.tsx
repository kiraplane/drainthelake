import {
  AdsterraAdFrame,
  AdsterraSideRails,
} from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/drainthelake/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import {
  getGuide,
  guides,
  relatedRouteLabels,
} from '@/data/drainthelake/guides';
import { officialGameFacts } from '@/data/drainthelake/sources';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname: `/guides/${slug}`,
    image: guide.coverImageUrl.startsWith('/')
      ? guide.coverImageUrl
      : '/drainthelake/og-image.jpg',
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.summary,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        image: guide.coverImageUrl.startsWith('http')
          ? guide.coverImageUrl
          : `${officialGameFacts.domain}${guide.coverImageUrl}`,
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
            name: 'Guides',
            item: `${officialGameFacts.domain}/guides`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: `${officialGameFacts.domain}/guides/${guide.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <div className="py-8 text-slate-950 md:py-12">
      <JsonLd data={jsonLd} />
      <AdsterraSideRails />
      <Container className="px-0">
        <article className="rounded-lg border border-slate-900/10 bg-white/90 p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-teal-700 text-white">{guide.category}</Badge>
            <Badge
              variant="outline"
              className="border-slate-900/10 text-slate-600"
            >
              {guide.difficulty}
            </Badge>
            {guide.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-slate-900/10 text-slate-600"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 font-display text-4xl font-black tracking-normal md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg text-slate-700 leading-8">
            {guide.summary}
          </p>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg border border-slate-900/10 bg-slate-200">
            <Image
              src={guide.coverImageUrl}
              alt={`${guide.title} cover`}
              fill
              priority
              sizes="(min-width: 1024px) 860px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="mt-8 space-y-8">
            <AdsterraAdFrame slot="banner-300x250" className="mt-8" label />

            {guide.body.map((section, index) => (
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

                {index === 1 && guide.video ? (
                  <div className="mt-8 overflow-hidden rounded-lg border border-slate-900/10 bg-[#10232a]">
                    <iframe
                      className="aspect-video w-full"
                      src={`https://www.youtube.com/embed/${guide.video.id}`}
                      title={guide.video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                    <div className="bg-[#10232a] px-4 py-3 text-slate-300 text-sm">
                      Walkthrough cross-check:{' '}
                      <a
                        href={guide.video.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-teal-100 underline underline-offset-4"
                      >
                        {guide.video.title}
                      </a>{' '}
                      by {guide.video.channel}
                    </div>
                  </div>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-10">
            <FaqSection items={guide.faq} />
          </div>

          <section className="mt-10 rounded-lg border border-slate-900/10 bg-slate-50 p-5">
            <h2 className="font-display text-2xl font-bold text-slate-950">
              Related next steps
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {guide.relatedRoutes.map((route) => (
                <LocaleLink
                  key={route}
                  href={route}
                  className="flex min-w-0 items-center justify-between gap-3 rounded-md border border-slate-900/10 bg-white px-4 py-3 text-slate-700 text-sm transition hover:border-teal-300 hover:text-teal-800"
                >
                  <span className="min-w-0 break-words">
                    {relatedRouteLabels[route] ??
                      (route.replace(/^\/+/, '') || 'Home')}
                  </span>
                </LocaleLink>
              ))}
            </div>
          </section>
        </article>
      </Container>
    </div>
  );
}
