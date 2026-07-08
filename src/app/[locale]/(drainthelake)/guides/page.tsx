import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/drainthelake/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guideCategoryIntro, guides } from '@/data/drainthelake/guides';
import { officialGameFacts } from '@/data/drainthelake/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Drain the Lake Guides - Beginner, Codes, Skill Tree and Endings',
    description:
      'Read Drain the Lake guides for beginner routes, full walkthrough, fast draining, Skill Tree upgrades, badges, phone ending, and safe code status.',
    locale,
    pathname: '/guides',
    image: '/drainthelake/og-image.jpg',
  });
}

export default function GuidesPage() {
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Drain the Lake Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${officialGameFacts.domain}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <div className="py-8 text-slate-950 md:py-12">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-0">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-teal-700 text-white">Guides</Badge>
          <h1 className="font-display text-4xl font-black tracking-normal md:text-6xl">
            Drain the Lake Guides
          </h1>
          <p className="text-lg text-slate-700 leading-8">
            Decision-first Roblox guides for the bucket loop, token spending,
            Skill Tree upgrades, depth pushes, badges, code status, full
            walkthrough, and phone ending.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-slate-900/10 bg-white/85 py-4"
          label
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-slate-900/10 bg-white/85 p-5"
            >
              <h2 className="font-display font-bold text-xl">{category}</h2>
              <p className="mt-2 text-slate-600 text-sm leading-6">
                {guideCategoryIntro[category]}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-slate-900/10 bg-white/90 shadow-sm"
            >
              <div className="relative aspect-video border-slate-900/10 border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-teal-100 text-slate-950">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-slate-900/10 text-slate-600"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-slate-900/10 text-slate-600"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display font-bold text-2xl">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-slate-600 text-sm leading-6">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-teal-700 text-white hover:bg-teal-800"
                >
                  <LocaleLink href={`/guides/${guide.slug}`}>
                    Read guide
                  </LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FaqSection
          items={[
            {
              question: 'Which Drain the Lake guide should I read first?',
              answer:
                'Start with the beginner guide, then use the drain cycle, token, Skill Tree, and depth pages when one part of the loop starts slowing you down.',
            },
            {
              question: 'Does the site list active codes?',
              answer:
                'Only verified codes will be listed. As of July 8, 2026, no active public Drain the Lake code is confirmed.',
            },
            {
              question: 'Are the walkthroughs official?',
              answer:
                'Official facts come from Roblox and public Roblox APIs. Route advice is cross-checked with current search and video results, then written conservatively.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
