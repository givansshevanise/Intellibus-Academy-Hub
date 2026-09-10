import type { FAQ } from "../../models/content";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../ui/accordion";

export interface FAQAccordionProps {
  items: Pick<FAQ, "id" | "question" | "answer">[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion className="w-full" collapsible type="single">
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
