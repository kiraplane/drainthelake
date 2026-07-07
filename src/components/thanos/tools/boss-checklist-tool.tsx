'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { bosses } from '@/data/thanos/database';
import { relatedRouteLabels } from '@/data/thanos/guides';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { ArrowRight, CheckCircle2, Circle } from 'lucide-react';
import { useMemo, useState } from 'react';

function getRouteLabel(route: string) {
  return relatedRouteLabels[route] ?? route.replace(/^\/+/, '');
}

export function BossChecklistTool() {
  const [selectedId, setSelectedId] = useState(bosses[0]?.id ?? '');
  const [checkedTasks, setCheckedTasks] = useState<string[]>([]);

  const selectedBoss =
    bosses.find((boss) => boss.id === selectedId) ?? bosses[0];
  const tasks = useMemo(
    () =>
      selectedBoss
        ? [
            ...selectedBoss.prerequisites.map((task) => `Prereq: ${task}`),
            ...selectedBoss.recommendedPrep.map((task) => `Prep: ${task}`),
          ]
        : [],
    [selectedBoss]
  );
  const completedCount = tasks.filter((task) =>
    checkedTasks.includes(task)
  ).length;

  function toggleTask(task: string) {
    setCheckedTasks((current) =>
      current.includes(task)
        ? current.filter((item) => item !== task)
        : [...current, task]
    );
  }

  function selectBoss(id: string) {
    setSelectedId(id);
    setCheckedTasks([]);
  }

  if (!selectedBoss) {
    return null;
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
      <aside className="space-y-3">
        {bosses.map((boss) => (
          <button
            key={boss.id}
            type="button"
            onClick={() => selectBoss(boss.id)}
            className={cn(
              'w-full rounded-lg border p-4 text-left transition',
              boss.id === selectedBoss.id
                ? 'border-[#F6C453] bg-[#332615] text-[#FFE7A8]'
                : 'border-[#3A2D4E] bg-[#151024] text-[#F8F1FF] hover:border-[#F6C453]'
            )}
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-display font-bold">{boss.name}</span>
              <Badge
                variant="outline"
                className="border-[#3A2D4E] text-[#C6BCD8]"
              >
                {boss.stage}
              </Badge>
            </div>
            <p className="mt-2 line-clamp-2 text-[#C6BCD8] text-sm leading-6">
              {boss.location}
            </p>
          </button>
        ))}
      </aside>

      <section className="rounded-lg border border-[#3A2D4E] bg-[#151024] p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <Badge className="bg-[#F6C453] text-[#120C05]">
              {selectedBoss.category}
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-black">
              {selectedBoss.name}
            </h2>
            <p className="mt-3 max-w-3xl text-[#C6BCD8] leading-7">
              {selectedBoss.summary}
            </p>
          </div>
          <div className="rounded-md border border-[#3A2D4E] bg-[#080611] px-4 py-3 text-right">
            <p className="font-display text-2xl font-black text-[#57D68D]">
              {completedCount}/{tasks.length}
            </p>
            <p className="text-[#C6BCD8] text-xs">checks ready</p>
          </div>
        </div>

        <div className="mt-6 grid gap-3">
          {tasks.map((task) => {
            const isChecked = checkedTasks.includes(task);

            return (
              <button
                key={task}
                type="button"
                onClick={() => toggleTask(task)}
                className={cn(
                  'flex items-start gap-3 rounded-md border p-3 text-left transition',
                  isChecked
                    ? 'border-[#57D68D] bg-[#102416] text-[#F8F1FF]'
                    : 'border-[#3A2D4E] bg-[#080611] text-[#C6BCD8] hover:border-[#F6C453]'
                )}
              >
                {isChecked ? (
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#57D68D]" />
                ) : (
                  <Circle className="mt-0.5 size-5 shrink-0 text-[#F6C453]" />
                )}
                <span className="leading-6">{task}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-md border border-[#3A2D4E] bg-[#080611] p-4">
          <h3 className="font-display text-xl font-bold text-[#FFE7A8]">
            Route hint
          </h3>
          <p className="mt-2 text-[#C6BCD8] leading-7">
            {selectedBoss.routeHint}
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {selectedBoss.relatedRoutes.map((route) => (
            <Button
              key={route}
              asChild
              variant="outline"
              className="h-auto whitespace-normal border-[#3A2D4E] bg-[#080611] text-left text-[#F8F1FF] hover:border-[#F6C453] hover:bg-[#151024]"
            >
              <LocaleLink href={route}>
                {getRouteLabel(route)}
                <ArrowRight className="size-4 shrink-0" />
              </LocaleLink>
            </Button>
          ))}
        </div>
      </section>
    </div>
  );
}
