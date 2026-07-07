'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { weapons } from '@/data/thanos/database';
import { relatedRouteLabels } from '@/data/thanos/guides';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { useState } from 'react';

function getRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? route.replace(/^\/+/, '');
}

export function WeaponPlannerTool() {
  const [selectedId, setSelectedId] = useState('mechanical-gloves');
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const selectedWeapon =
    weapons.find((weapon) => weapon.id === selectedId) ?? weapons[0];
  const steps = [...selectedWeapon.prerequisites, ...selectedWeapon.unlockPath];
  const progress = steps.filter((step) => completedSteps.includes(step)).length;

  function selectWeapon(id: string) {
    setSelectedId(id);
    setCompletedSteps([]);
  }

  function toggleStep(step: string) {
    setCompletedSteps((current) =>
      current.includes(step)
        ? current.filter((item) => item !== step)
        : [...current, step]
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {weapons.map((weapon) => (
          <button
            key={weapon.id}
            type="button"
            onClick={() => selectWeapon(weapon.id)}
            className={cn(
              'rounded-lg border p-4 text-left transition',
              weapon.id === selectedWeapon.id
                ? 'border-[#F6C453] bg-[#332615]'
                : 'border-[#3A2D4E] bg-[#151024] hover:border-[#F6C453]'
            )}
          >
            <p className="font-display font-bold text-[#FFE7A8]">
              {weapon.name}
            </p>
            <p className="mt-2 text-[#C6BCD8] text-xs leading-5">
              {weapon.stage} · {weapon.category}
            </p>
          </button>
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <Badge className="bg-[#F6C453] text-[#120C05]">
                {selectedWeapon.role}
              </Badge>
              <h2 className="mt-3 font-display text-3xl font-black">
                {selectedWeapon.name}
              </h2>
              <p className="mt-3 text-[#C6BCD8] leading-7">
                {selectedWeapon.summary}
              </p>
            </div>
            <div className="rounded-md border border-[#3A2D4E] bg-[#080611] px-4 py-3 text-right">
              <p className="font-display text-2xl font-black text-[#57D68D]">
                {progress}/{steps.length}
              </p>
              <p className="text-[#C6BCD8] text-xs">route steps</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3">
            {steps.map((step, index) => {
              const isChecked = completedSteps.includes(step);

              return (
                <button
                  key={`${step}-${index}`}
                  type="button"
                  onClick={() => toggleStep(step)}
                  className={cn(
                    'flex items-start gap-3 rounded-md border p-3 text-left transition',
                    isChecked
                      ? 'border-[#57D68D] bg-[#102416]'
                      : 'border-[#3A2D4E] bg-[#080611] hover:border-[#F6C453]'
                  )}
                >
                  {isChecked ? (
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#57D68D]" />
                  ) : (
                    <Circle className="mt-0.5 size-5 shrink-0 text-[#F6C453]" />
                  )}
                  <span className="text-[#F8F1FF] leading-6">{step}</span>
                </button>
              );
            })}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-5">
            <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
              Useful for
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedWeapon.usefulFor.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="border-[#3A2D4E] text-[#C6BCD8]"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-5">
            <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
              Planner note
            </h3>
            <p className="mt-3 text-[#C6BCD8] text-sm leading-6">
              {selectedWeapon.routeHint}
            </p>
          </div>

          <div className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-5">
            <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
              Related routes
            </h3>
            <div className="mt-3 grid gap-2">
              {selectedWeapon.relatedRoutes.map((route) => (
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
              ))}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
