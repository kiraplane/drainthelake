import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-sky-900/15 bg-white/75 px-3 py-2 font-medium text-slate-600 text-xs">
      <CalendarDays className="size-4 text-cyan-700" />
      Last checked {date}
    </div>
  );
}
