import type { Metadata } from "next/types";

import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/constants";
import { getImageUrl } from "@/lib/utils";

export const mapPagesMetaData = (seo: SeoPagesType): Metadata => {
  const title = seo?.title ?? DEFAULT_TITLE;
  const description = seo?.meta_description ?? DEFAULT_DESCRIPTION;

  const imageUrl = seo?.og_image ? getImageUrl(seo?.og_image) : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
            width: 800,
            height: 600,
          },
        ],
      }),
    },
    twitter: {
      card: imageUrl ? "summary_large_image" : "summary",
      title,
      description,
      ...(imageUrl && {
        images: [imageUrl],
      }),
    },
  };
};
