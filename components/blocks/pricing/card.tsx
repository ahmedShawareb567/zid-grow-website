import Link from "next/link";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  className?: string;
  item: PricingType;
};

export default function PricingCard({ className, item }: Props) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{item?.title}</CardTitle>

        {item?.description && (
          <div
            className="text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: item?.description }}
          ></div>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <div className="flex items-end gap-0.5">
          <span className="text-5xl font-medium tracking-tight">
            {item?.currency_symbol}
            {item?.price}
          </span>
          {item?.billing_period && (
            <span className="text-muted-foreground">
              /{item?.billing_period}
            </span>
          )}
        </div>

        <Button variant="secondary" asChild>
          <Link href={item?.purchase_cta_url}>{item?.purchase_cta_label}</Link>
        </Button>
      </CardContent>

      <CardFooter className="mt-2 flex-col items-start gap-4">
        <CardTitle className="text-sm font-medium">
          {item?.features_title}
        </CardTitle>

        <div className="flex flex-col gap-3">
          {item?.features_items?.map((feature, index) => (
            <p key={`feature-${index}`} className="flex gap-2">
              <Check className="size-5" />
              <span className="text-muted-foreground flex-1 text-sm leading-5 font-medium">
                {feature?.content}
              </span>
            </p>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
