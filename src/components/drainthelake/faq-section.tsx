import type { GuideFaq } from '@/data/drainthelake/types';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export function FaqSection({
  title = 'FAQ',
  items,
  className,
}: {
  title?: string;
  items: GuideFaq[];
  className?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-lg border border-sky-900/40 bg-white/80 p-6 shadow-sm shadow-sky-950/5 backdrop-blur',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-slate-950">
        {title}
      </h2>
      <Accordion
        type="single"
        collapsible
        className="mt-6 w-full rounded-lg border border-sky-900/15 bg-slate-50 px-5"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`faq-${index}`}
            className="border-sky-900/15"
          >
            <AccordionTrigger className="cursor-pointer py-4 text-left text-base font-semibold text-slate-950 hover:text-cyan-700 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-slate-700 text-sm leading-7">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
