import { cn } from "@/lib/utils";
import PricingCard from "@/components/blocks/pricing/card";

type Props = {
  className?: string;
  data: PricingBlockType;
};

export default function PricingBlock({ className, data }: Props) {
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

      {data?.pricing_items?.length > 0 && (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
          {data?.pricing_items.map((item) => {
            const pricingItem = item?.pricing_id;

            if (!pricingItem) {
              return null;
            }

            return <PricingCard key={pricingItem?.id} item={pricingItem} />;
          })}
        </div>
      )}
    </div>
  );
}
