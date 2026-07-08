import { TopicPage } from '@/components/drainthelake/topic-page';
import { getTopicPage, topicPageList } from '@/data/drainthelake/topics';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    topicPageList.map((topic) => ({ locale, slug: topic.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const topic = getTopicPage(slug);

  if (!topic) {
    return {};
  }

  return constructMetadata({
    title: topic.seoTitle,
    description: topic.seoDescription,
    locale,
    pathname: topic.route,
    image: '/drainthelake/og-image.jpg',
  });
}

export default async function FlatTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopicPage(slug);

  if (!topic) {
    notFound();
  }

  return <TopicPage topic={topic} />;
}
