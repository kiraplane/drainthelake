import Container from '@/components/layout/container';
import { officialGameFacts } from '@/data/drainthelake/sources';
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
    title: 'Drain the Lake Wiki Disclaimer',
    description:
      'Drain the Lake Wiki is an independent guide site for the Roblox game and is not affiliated with Roblox or the game creator.',
    locale,
    pathname: '/disclaimer',
    image: '/drainthelake/og-image.jpg',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="py-8 text-slate-950 md:py-12">
      <Container className="px-0">
        <article className="max-w-3xl rounded-lg border border-slate-900/10 bg-white/90 p-6 shadow-sm md:p-8">
          <h1 className="font-display text-4xl font-black">
            Drain the Lake Wiki Disclaimer
          </h1>
          <div className="mt-6 space-y-5 text-slate-700 leading-8">
            <p>
              Drain the Lake Wiki is an independent guide site for players. It
              is not affiliated with Roblox Corporation or the Drain the Lake
              creator.
            </p>
            <p>
              Official game access should use the Roblox page at{' '}
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
                className="text-teal-700 underline underline-offset-4"
              >
                {officialGameFacts.officialRobloxUrl}
              </a>
              .
            </p>
            <p>
              Guide content is based on public official pages, Roblox API
              checks, search demand, competitor observation, and current video
              research. Game balance, badges, buckets, upgrades, and code status
              can change after updates.
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
}
