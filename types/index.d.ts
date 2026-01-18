type PageResponseType = {
  id: number;
  title: string;
  slug: string;
  blocks: BlockType[];
};

type PageSeoResponseType = Omit<PageResponseType, "blocks"> & {
  seo: SeoPagesType;
};

type SeoPagesType = {
  title?: string;
  meta_description?: string;
  og_image?: string;
};

type BlockType = {
  id: number;
  collection: CollectionType;
  hide_block: boolean;
  item: HeroBlockType &
    FeatureBlockType &
    CtaBlockType &
    FaqsBlockType &
    PricingBlockType &
    TestimonialBlockType;
};

type CollectionType =
  | "hero_block"
  | "feature_block"
  | "cta_block"
  | "faqs_block"
  | "pricing_block";

type HeroBlockType = {
  id: number;
  headline: string;
  description?: string;
  image?: string;
  image_position: "left" | "right" | "top" | "bottom";
  buttons: ButtonsBlockType[];
};

type FeatureBlockType = {
  id: number;
  headline: string;
  tagline?: string;
  description?: string;
  features: {
    feature_block_item_id: FeatureItemType;
  }[];
};

type FeatureItemType = {
  id: number;
  title: string;
  description?: string;
  icon: string;
};

type CtaBlockType = {
  id: number;
  tagline?: string;
  headline: string;
  description?: string;
  buttons: ButtonsBlockType[];
};

type FaqsBlockType = {
  id: number;
  tagline?: string;
  headline: string;
  description?: string;
  faqs_items: {
    faqs_id: FaqType;
  }[];
};

type FaqType = {
  id: number;
  question: string;
  answer: string;
};

type PricingBlockType = {
  id: number;
  tagline?: string;
  headline: string;
  description?: string;
  pricing_items: {
    pricing_id: PricingType;
  }[];
};

type PricingType = {
  id: number;
  title: string;
  description?: string;
  price: string;
  currency_symbol: string;
  billing_period?: string;
  purchase_cta_label: string;
  purchase_cta_url: string;
  features_title: string;
  features_items: PricingFeatureItem[];
};

type PricingFeatureItem = {
  content: string;
};

type TestimonialBlockType = {
  id: number;
  tagline?: string;
  headline: string;
  description?: string;
  testimonials_items: {
    testimonials_id: TestimonialType;
  }[];
};

type TestimonialType = {
  id: number;
  quote: string;
  author_image: string;
  author_name: string;
  author_title: string;
};

type ButtonsBlockType = {
  buttons_id: ButtonType;
};

type ButtonType = {
  status: string;
  label: string;
  url: string;
  icon?: string;
  variant: "default" &
    "link" &
    "destructive" &
    "outline" &
    "secondary" &
    "ghost" &
    "primary";
};
