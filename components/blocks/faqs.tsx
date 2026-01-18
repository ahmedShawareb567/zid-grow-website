import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  className?: string;
  data: FaqsBlockType;
};

export default function FaqBlock({ className, data }: Props) {
  return (
    <div
      className={cn(
        "container flex max-w-2xl flex-col gap-10 md:gap-12",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-y-4 text-center">
        {data?.tagline && (
          <span className="text-muted-foreground">{data?.tagline}</span>
        )}

        <h2 className="text-foreground text-3xl font-bold lg:text-5xl">
          {data?.headline}
        </h2>

        {data?.description && (
          <div
            className="text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></div>
        )}
      </div>

      {data?.faqs_items?.length > 0 && (
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-y-2"
        >
          {data?.faqs_items?.map((faq) => {
            const faqItem = faq?.faqs_id;

            if (!faqItem) {
              return null;
            }

            return (
              <AccordionItem key={faqItem?.id} value={String(faqItem?.id)}>
                <AccordionTrigger>{faqItem?.question}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <div
                    className="text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: faqItem?.answer }}
                  ></div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
    </div>
  );
}
