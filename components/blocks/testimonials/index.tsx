import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialsCard from "@/components/blocks/testimonials/card";

type Props = {
  className?: string;
  data: TestimonialBlockType;
};

export default function TestimonialsBlock({ className, data }: Props) {
  return (
    <div
      className={cn(
        "container flex max-w-7xl flex-col gap-10 md:gap-12",
        className,
      )}
    >
      <div className="mx-auto flex max-w-xl flex-col items-center gap-y-4 text-center">
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

      {data?.testimonials_items?.length > 0 && (
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-w-7xl"
        >
          <CarouselContent>
            {data?.testimonials_items?.map((testimonial) => {
              const testimonialItem = testimonial?.testimonials_id;

              if (!testimonialItem) {
                return null;
              }

              return (
                <CarouselItem
                  key={testimonialItem?.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialsCard item={testimonialItem} />
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <div className="mt-4 flex gap-x-2">
            <CarouselPrevious className="relative" />
            <CarouselNext className="relative" />
          </div>
        </Carousel>
      )}
    </div>
  );
}
