"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <div className="mx-auto max-w-3xl">
      <Accordion className="space-y-4">
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-2xl border border-platinum bg-white px-6 shadow-[0_2px_16px_rgba(10,22,40,0.04)]"
          >
            <AccordionTrigger className="py-6 text-left text-lg font-medium text-navy hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-6 leading-[1.75] text-navy/65">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
