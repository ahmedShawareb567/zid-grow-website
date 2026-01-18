import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
  className?: string;
  items: ButtonsBlockType[];
};
export default function ButtonsBlock({ className, items }: Props) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {items?.map((item, index) => {
        return (
          <Button key={index} variant={item?.buttons_id?.variant} asChild>
            <Link href={item?.buttons_id?.url}>{item?.buttons_id?.label}</Link>
          </Button>
        );
      })}
    </div>
  );
}
