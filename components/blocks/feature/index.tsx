import { cn } from "@/lib/utils";
import FeatureCard from "@/components/blocks/feature/card";

type Props = {
  className?: string;
  data: FeatureBlockType;
};

export default function FeatureBlock({ className, data }: Props) {
  return (
    <div
      className={cn(
        "container flex flex-col gap-y-10 lg:max-w-7xl lg:gap-y-12",
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

      {data?.features?.length > 0 && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {data?.features?.map((feature) => {
            const featureItem = feature?.feature_block_item_id;

            if (!featureItem) {
              return null;
            }

            return <FeatureCard key={featureItem?.id} feature={featureItem} />;
          })}
        </div>
      )}
    </div>
  );
}
