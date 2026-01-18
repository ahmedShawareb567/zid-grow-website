import Image from "next/image";

import { cn, getImageUrl } from "@/lib/utils";
import ButtonsBlock from "@/components/blocks/buttons";

type Props = {
  className?: string;
  data: HeroBlockType;
};

export default function HeroBlock({ className, data }: Props) {
  const imagePosition = data?.image_position;

  const gridConfig = {
    left: "grid-cols-1 lg:grid-cols-[auto_1fr]",
    right: "grid-cols-1 lg:grid-cols-[1fr_auto]",
    top: "grid-cols-1",
    bottom: "grid-cols-1",
  };

  const rowConfig = {
    top: "grid-rows-[auto_1fr]",
    bottom: "grid-rows-[1fr_auto]",
    left: "",
    right: "",
  };

  const contentOrder = {
    left: "order-1 lg:order-2",
    right: "lg:order-1",
    top: "order-2 text-center items-center",
    bottom: "order-1 text-center items-center",
  };

  const imageOrder = {
    left: "lg:order-1",
    right: "lg:order-2",
    top: "order-1",
    bottom: "order-2",
  };

  return (
    <div
      className={cn(
        "container mx-auto grid max-w-7xl gap-12 lg:gap-16",
        gridConfig[imagePosition],
        rowConfig[imagePosition],
        className,
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-center gap-6",
          contentOrder[imagePosition],
        )}
      >
        <h1 className="text-foreground text-4xl font-bold lg:text-6xl">
          {data?.headline}
        </h1>

        {data?.description && (
          <div
            className="text-muted-foreground lg:text-lg"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></div>
        )}

        <ButtonsBlock items={data?.buttons} />
      </div>

      {data?.image && (
        <div
          className={cn(
            "flex items-center justify-center",
            imageOrder[imagePosition],
          )}
        >
          <Image
            src={getImageUrl(data?.image)}
            alt={data?.headline}
            width={500}
            height={500}
            className="aspect-square w-full max-w-146.5 rounded-md object-cover"
            fetchPriority="high"
            loading="eager"
            priority
          />
        </div>
      )}
    </div>
  );
}
