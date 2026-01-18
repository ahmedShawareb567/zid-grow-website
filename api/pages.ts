import { readItems } from "@directus/sdk";

import { $directusClient } from "@/lib/directus-client";

export async function getPages(slug: string = "/") {
  const data = await $directusClient.request<PageResponseType[]>(
    readItems("pages", {
      filter: {
        _and: [
          {
            slug: {
              _eq: slug,
            },
          },
        ],
      },
      fields: [
        "title",
        "slug",
        "status",
        "is_home",
        {
          blocks: [
            "id",
            "collection",
            "hide_block",
            {
              item: {
                hero_block: [
                  "id",
                  "headline",
                  "description",
                  "image",
                  "image_position",
                  {
                    buttons: [
                      {
                        buttons_id: ["id", "label", "url", "variant", "icon"],
                      },
                    ],
                  },
                ],
                feature_block: [
                  "id",
                  "headline",
                  "description",
                  "tagline",
                  {
                    features: [
                      {
                        feature_block_item_id: [
                          "id",
                          "title",
                          "description",
                          "icon",
                        ],
                      },
                    ],
                  },
                ],
                cta_block: [
                  "id",
                  "headline",
                  "description",
                  "tagline",
                  {
                    buttons: [
                      {
                        buttons_id: ["id", "label", "url", "variant", "icon"],
                      },
                    ],
                  },
                ],
                faqs_block: [
                  "id",
                  "headline",
                  "description",
                  "tagline",
                  {
                    faqs_items: [
                      {
                        faqs_id: ["id", "question", "answer"],
                      },
                    ],
                  },
                ],
                pricing_block: [
                  "id",
                  "headline",
                  "description",
                  "tagline",
                  {
                    pricing_items: [
                      {
                        pricing_id: [
                          "id",
                          "title",
                          "description",
                          "price",
                          "currency_symbol",
                          "billing_period",
                          "purchase_cta_label",
                          "purchase_cta_url",
                          "features_title",
                          "features_items",
                        ],
                      },
                    ],
                  },
                ],
                testimonials_block: [
                  "id",
                  "headline",
                  "description",
                  "tagline",
                  {
                    testimonials_items: [
                      {
                        testimonials_id: [
                          "id",
                          "quote",
                          "author_image",
                          "author_name",
                          "author_title",
                        ],
                      },
                    ],
                  },
                ],
              },
            },
          ],
        },
      ],
      deep: {
        blocks: {
          _filter: {
            _or: [
              { hide_block: { _eq: false } },
              { hide_block: { _null: true } },
            ],
          },
        },
      },
    }),
  );

  return {
    data,
    status: 200,
  };
}

export const getPagesSeoBySlug = async (slug: string = "/") => {
  const data = await $directusClient.request<PageSeoResponseType[]>(
    readItems("pages", {
      filter: {
        slug: {
          _eq: slug,
        },
      },
      fields: ["id", "slug", "title", "seo"],
    }),
  );

  return {
    data,
    status: 200,
  };
};
