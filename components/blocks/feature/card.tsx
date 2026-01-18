import Image from "next/image";

import { cn, getImageUrl } from "@/lib/utils";

type Props = {
  className?: string;
  feature: FeatureItemType;
};

export default function FeatureCard({ className, feature }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-y-5 text-center",
        className,
      )}
    >
      <div className="bg-background flex size-10 shrink-0 items-center justify-center rounded-md border shadow-xs">
        <Image
          src={getImageUrl(feature?.icon)}
          alt={feature?.title}
          width={20}
          height={20}
          className="size-5 object-contain"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <h3 className="text-foreground font-semibold tracking-tight">
          {feature?.title}
        </h3>
        {feature?.description && (
          <div
            className="text-muted-foreground"
            dangerouslySetInnerHTML={{
              __html: feature?.description,
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
