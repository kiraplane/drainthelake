import Container from '@/components/layout/container';
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
    title: 'Privacy Policy | Drain the Lake Wiki',
    description:
      'Privacy policy for the independent Drain the Lake Wiki and Roblox guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0F1117] py-12 text-[#F8FAFC]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#CBD5E1]">
          Drain the Lake Wiki is an independent Roblox guide site. We do not
          require accounts for browsing codes status, bucket routes, tokens,
          Skill Tree upgrades, depth notes, badge guides, official links, or
          safety pages.
        </p>
        <p className="leading-8 text-[#CBD5E1]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#CBD5E1]">
          Local image assets are used for faster page loading. We do not sell
          asset files or provide downloads as standalone packs.
        </p>
        <p className="leading-8 text-[#CBD5E1]">
          Privacy questions can be sent to hello@drainthelake.top.
        </p>
      </Container>
    </div>
  );
}
