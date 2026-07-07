'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { stones } from '@/data/thanos/database';
import { relatedRouteLabels } from '@/data/thanos/guides';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Circle, Gem } from 'lucide-react';
import { useMemo, useState } from 'react';

function getRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? route.replace(/^\/+/, '');
}

export function StonesTrackerTool() {
  const [checkedStoneIds, setCheckedStoneIds] = useState<string[]>([]);
  const completedCount = checkedStoneIds.length;
  const nextStone = useMemo(
    () => stones.find((stone) => !checkedStoneIds.includes(stone.id)),
    [checkedStoneIds]
  );

  function toggleStone(id: string) {
    setCheckedStoneIds((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
      <section className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-[#F6C453] text-[#120C05]">
              Infinity Stones
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-black">
              Six-stone progress tracker
            </h2>
          </div>
          <div className="rounded-md border border-[#3A2D4E] bg-[#080611] px-4 py-3 text-right">
            <p className="font-display text-2xl font-black text-[#57D68D]">
              {completedCount}/{stones.length}
            </p>
            <p className="text-[#C6BCD8] text-xs">stones tracked</p>
          </div>
        </div>

        <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#080611]">
          <div
            className="h-full bg-[#57D68D] transition-all"
            style={{
              width: `${Math.round((completedCount / stones.length) * 100)}%`,
            }}
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {stones.map((stone) => {
            const isChecked = checkedStoneIds.includes(stone.id);

            return (
              <button
                key={stone.id}
                type="button"
                onClick={() => toggleStone(stone.id)}
                className={cn(
                  'rounded-lg border p-4 text-left transition',
                  isChecked
                    ? 'border-[#57D68D] bg-[#102416]'
                    : 'border-[#3A2D4E] bg-[#080611] hover:border-[#F6C453]'
                )}
              >
                <div className="flex items-start gap-3">
                  {isChecked ? (
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#57D68D]" />
                  ) : (
                    <Circle className="mt-1 size-5 shrink-0 text-[#F6C453]" />
                  )}
                  <div className="min-w-0">
                    <h3 className="font-display font-bold text-[#FFE7A8] text-xl">
                      {stone.name}
                    </h3>
                    <p className="mt-2 text-[#C6BCD8] text-sm leading-6">
                      {stone.unlockMethod}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-[#3A2D4E] text-[#C6BCD8]"
                      >
                        {stone.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#3A2D4E] text-[#C6BCD8]"
                      >
                        {stone.stage}
                      </Badge>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      <aside className="space-y-4">
        <div className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-5">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-[#F6C453] text-[#120C05]">
              <Gem className="size-5" />
            </span>
            <div>
              <p className="font-semibold text-[#57D68D] text-xs uppercase">
                Next Focus
              </p>
              <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
                {nextStone?.name ?? 'Gauntlet complete'}
              </h3>
            </div>
          </div>
          {nextStone ? (
            <>
              <p className="mt-4 text-[#C6BCD8] text-sm leading-6">
                {nextStone.routeHint}
              </p>
              <ul className="mt-4 space-y-2 text-[#C6BCD8] text-sm leading-6">
                {nextStone.trackerTasks.map((task) => (
                  <li key={task}>- {task}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-4 text-[#C6BCD8] text-sm leading-6">
              All six stones are marked. Move to controls, weapons, and boss
              route planning next.
            </p>
          )}
        </div>

        <div className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-5">
          <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
            Useful routes
          </h3>
          <div className="mt-3 grid gap-2">
            {['/guides/all-infinity-stones-guide', '/controls', '/weapons'].map(
              (route) => (
                <Button
                  key={route}
                  asChild
                  variant="outline"
                  className="h-auto justify-between whitespace-normal border-[#3A2D4E] bg-[#080611] text-left text-[#F8F1FF] hover:border-[#F6C453]"
                >
                  <LocaleLink href={route}>
                    {getRouteLabel(route)}
                    <ArrowRight className="size-4 shrink-0" />
                  </LocaleLink>
                </Button>
              )
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
