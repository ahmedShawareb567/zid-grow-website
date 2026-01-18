import { createDirectus, rest } from "@directus/sdk";

if (!process.env.NEXT_PUBLIC_DIRECTUS_URL) {
  throw new Error("NEXT_PUBLIC_DIRECTUS_URL is not set");
}

const $directusClient = createDirectus(
  process.env.NEXT_PUBLIC_DIRECTUS_URL,
).with(
  rest({
    onRequest: (options) => ({ ...options, cache: "no-store" }),
  }),
);

export { $directusClient };
