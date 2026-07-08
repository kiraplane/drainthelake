import { RouteEfficiencyTool } from '@/components/drainthelake/tools/route-efficiency-tool';
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
    title: 'Drain the Lake Route Efficiency Tool - Compare Bucket Routes',
    description:
      'Compare Drain the Lake routes with fill time, travel time, drain time, token reward, and tokens per minute before pushing depth.',
    locale,
    pathname: '/tools/route-efficiency',
    image: '/drainthelake/og-image.jpg',
  });
}

export default function RouteEfficiencyPage() {
  return (
    <div className="py-8 text-slate-950 md:py-12">
      <Container className="space-y-8 px-0">
        <header className="max-w-3xl space-y-4">
          <div className="inline-flex rounded-md bg-teal-50 px-3 py-1 font-semibold text-teal-900 text-xs uppercase">
            Route tool
          </div>
          <h1 className="font-display text-4xl font-black tracking-normal md:text-6xl">
            Drain the Lake Route Efficiency Tool
          </h1>
          <p className="text-lg text-slate-700 leading-8">
            Compare two bucket routes with rough numbers before deciding whether
            deeper water, a new bucket, or a Skill Tree branch is worth it.
          </p>
        </header>

        <RouteEfficiencyTool />
      </Container>
    </div>
  );
}
