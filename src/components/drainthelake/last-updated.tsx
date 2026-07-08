import { CalendarDays } from 'lucide-react';

export function LastUpdated({ date }: { date: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-slate-900/10 bg-white/75 px-3 py-2 font-medium text-slate-600 text-xs">
      <CalendarDays className="size-4 text-teal-700" />
      Last checked {date}
    </div>
  );
}
