'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Calculator, RotateCcw } from 'lucide-react';
import { useMemo, useState } from 'react';

type RouteKey = 'current' | 'deeper';

interface RouteValues {
  label: string;
  fillSeconds: number;
  travelSeconds: number;
  drainSeconds: number;
  tokenReward: number;
}

const defaultRoutes: Record<RouteKey, RouteValues> = {
  current: {
    label: 'Current route',
    fillSeconds: 10,
    travelSeconds: 12,
    drainSeconds: 6,
    tokenReward: 35,
  },
  deeper: {
    label: 'Deeper test',
    fillSeconds: 16,
    travelSeconds: 18,
    drainSeconds: 8,
    tokenReward: 65,
  },
};

function clampNumber(value: number) {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.max(0, value);
}

function scoreRoute(route: RouteValues) {
  const totalSeconds =
    route.fillSeconds + route.travelSeconds + route.drainSeconds;
  const tokensPerMinute =
    totalSeconds > 0 ? (route.tokenReward / totalSeconds) * 60 : 0;

  return {
    totalSeconds,
    tokensPerMinute,
  };
}

export function RouteEfficiencyTool() {
  const [routes, setRoutes] =
    useState<Record<RouteKey, RouteValues>>(defaultRoutes);

  const results = useMemo(
    () => ({
      current: scoreRoute(routes.current),
      deeper: scoreRoute(routes.deeper),
    }),
    [routes]
  );

  const winner =
    results.current.tokensPerMinute === results.deeper.tokensPerMinute
      ? 'Tie'
      : results.current.tokensPerMinute > results.deeper.tokensPerMinute
        ? routes.current.label
        : routes.deeper.label;

  function updateRoute(
    routeKey: RouteKey,
    field: keyof RouteValues,
    value: string
  ) {
    setRoutes((current) => ({
      ...current,
      [routeKey]: {
        ...current[routeKey],
        [field]:
          field === 'label'
            ? value
            : clampNumber(Number.parseFloat(value || '0')),
      },
    }));
  }

  function reset() {
    setRoutes(defaultRoutes);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
      <section className="rounded-lg border border-slate-900/10 bg-white/90 p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <Badge className="bg-teal-700 text-white">Estimate tool</Badge>
            <h2 className="mt-3 font-display text-3xl font-black text-slate-950">
              Compare two drain routes
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-6">
              Enter rough cycle numbers. The goal is to reveal obvious route
              differences before you spend tokens or push depth.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            className="border-slate-900/15"
            onClick={reset}
          >
            <RotateCcw className="size-4" />
            Reset
          </Button>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {(Object.keys(routes) as RouteKey[]).map((routeKey) => {
            const route = routes[routeKey];
            const result = results[routeKey];
            const isWinner = winner === route.label;

            return (
              <div
                key={routeKey}
                className={cn(
                  'rounded-lg border p-4',
                  isWinner
                    ? 'border-teal-300 bg-teal-50'
                    : 'border-slate-900/10 bg-slate-50'
                )}
              >
                <label className="block" htmlFor={`${routeKey}-label`}>
                  <span className="font-semibold text-slate-700 text-sm">
                    Route name
                  </span>
                  <Input
                    id={`${routeKey}-label`}
                    value={route.label}
                    onChange={(event) =>
                      updateRoute(routeKey, 'label', event.target.value)
                    }
                    className="mt-2 border-slate-900/15 bg-white"
                  />
                </label>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    ['fillSeconds', 'Fill seconds'],
                    ['travelSeconds', 'Travel seconds'],
                    ['drainSeconds', 'Drain seconds'],
                    ['tokenReward', 'Token reward'],
                  ].map(([field, label]) => {
                    const inputId = `${routeKey}-${field}`;

                    return (
                      <label key={field} className="block" htmlFor={inputId}>
                        <span className="font-semibold text-slate-700 text-sm">
                          {label}
                        </span>
                        <Input
                          id={inputId}
                          type="number"
                          min={0}
                          step="1"
                          value={route[field as keyof RouteValues]}
                          onChange={(event) =>
                            updateRoute(
                              routeKey,
                              field as keyof RouteValues,
                              event.target.value
                            )
                          }
                          className="mt-2 border-slate-900/15 bg-white"
                        />
                      </label>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-md border border-slate-900/10 bg-white p-3">
                  <p className="text-slate-600 text-xs">Cycle time</p>
                  <p className="font-display font-black text-2xl text-slate-950">
                    {result.totalSeconds.toFixed(0)}s
                  </p>
                  <p className="mt-2 text-slate-600 text-xs">
                    Tokens per minute
                  </p>
                  <p className="font-display font-black text-2xl text-teal-800">
                    {result.tokensPerMinute.toFixed(1)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <aside className="space-y-4">
        <div className="rounded-lg border border-slate-900/10 bg-[#10232a] p-5 text-white">
          <div className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-md bg-teal-100 text-slate-950">
              <Calculator className="size-5" />
            </span>
            <div>
              <p className="font-semibold text-teal-100 text-xs uppercase">
                Result
              </p>
              <h3 className="font-display text-xl font-bold">
                {winner === 'Tie' ? 'Routes are tied' : `${winner} wins`}
              </h3>
            </div>
          </div>
          <p className="mt-4 text-slate-300 text-sm leading-6">
            Use this as a direction check, then confirm with one real in-game
            cycle. If the result is close, choose the route that feels easier to
            repeat without mistakes.
          </p>
        </div>

        <div className="rounded-lg border border-slate-900/10 bg-white/90 p-5">
          <h3 className="font-display text-xl font-bold text-slate-950">
            What to measure
          </h3>
          <ul className="mt-3 space-y-2 text-slate-700 text-sm leading-6">
            <li>- Fill time starts when you begin collecting water.</li>
            <li>- Travel time includes the path from fill to drain.</li>
            <li>- Drain time ends when tokens are received.</li>
            <li>- Token reward should be the useful reward from one cycle.</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
