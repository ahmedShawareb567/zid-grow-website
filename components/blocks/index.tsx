import dynamic from "next/dynamic";

import { cn } from "@/lib/utils";
import {
  ScrollRevealSlot,
  ScrollRevealWrapper,
} from "@/components/ui/scroll-reveal";

const HeroBlock = dynamic(() => import("@/components/blocks/hero"));
const FeatureBlock = dynamic(() => import("@/components/blocks/feature"));
const CtaBlock = dynamic(() => import("@/components/blocks/cta"));
const PricingBlock = dynamic(() => import("@/components/blocks/pricing"));
const FaqsBlock = dynamic(() => import("@/components/blocks/faqs"));
const TestimonialsBlock = dynamic(
  () => import("@/components/blocks/testimonials"),
);

const mapBlocks = {
  hero_block: HeroBlock,
  feature_block: FeatureBlock,
  cta_block: CtaBlock,
  pricing_block: PricingBlock,
  faqs_block: FaqsBlock,
  testimonials_block: TestimonialsBlock,
} as const;

type Props = {
  className?: string;
  blocks: BlockType[];
};
export default function Blocks({ className, blocks }: Props) {
  return (
    <ScrollRevealWrapper
      className={cn(
        "flex flex-col gap-18 py-24 lg:gap-24 xl:gap-32",
        className,
      )}
    >
      {blocks?.map((block, index) => {
        const BlockComponent = mapBlocks[block.collection];
        if (!BlockComponent) return null;

        const content = <BlockComponent key={block.id} data={block.item} />;

        // Skip reveal for first three blocks (no CLS)
        if (index < 3) {
          return content;
        }

        // Reveal everything else
        return <ScrollRevealSlot key={block.id}>{content}</ScrollRevealSlot>;
      })}
    </ScrollRevealWrapper>
  );
}
