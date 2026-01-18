import Image from "next/image";

import { cn, getImageUrl } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

type Props = {
  className?: string;
  item: TestimonialType;
};

export default function TestimonialsCard({ className, item }: Props) {
  return (
    <Card className={cn("gap-y-4", className)}>
      <CardContent>
        <CardDescription>{item?.quote}</CardDescription>
      </CardContent>

      <CardFooter className="gap-x-3">
        <Image
          src={getImageUrl(item?.author_image)}
          width={50}
          height={50}
          alt="Author"
          className="w-12 rounded-full"
        />

        <div className="flex flex-col">
          <h3 className="line-clamp-1">{item?.author_name}</h3>
          <p className="text-muted-foreground line-clamp-1 text-sm">
            {item?.author_title}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
