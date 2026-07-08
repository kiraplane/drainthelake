import {
  AdsterraNativeBanner,
  AdsterraTopBanner,
} from '@/components/ads/adsterra-ad';
import { DrainTheLakePageShell } from '@/components/drainthelake/wiki-navigation';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export const dynamic = 'force-dynamic';

export default function DrainTheLakeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#f4f7f5]">
      <Navbar scroll={true} />
      <AdsterraTopBanner />
      <main className="flex-1">
        <DrainTheLakePageShell>{children}</DrainTheLakePageShell>
      </main>
      <AdsterraNativeBanner className="border-slate-900/10 border-t bg-[#f4f7f5]" />
      <Footer />
    </div>
  );
}
