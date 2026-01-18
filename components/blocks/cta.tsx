import { cn } from "@/lib/utils";
import ButtonsBlock from "@/components/blocks/buttons";

type Props = {
  className?: string;
  data: CtaBlockType;
};

export default function CtaBlock({ className, data }: Props) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-xl flex-col items-center gap-y-6 text-center",
        className,
      )}
    >
      <span className="text-muted-foreground">{data?.tagline}</span>

      <h2 className="text-foreground text-3xl font-bold lg:text-5xl">
        {data?.headline}
      </h2>
      {data?.description && (
        <div
          className="text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></div>
      )}

      <ButtonsBlock items={data?.buttons} className="justify-center" />
    </div>
  );
}
