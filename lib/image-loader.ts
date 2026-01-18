import type { ImageLoaderProps } from "next/image";

export default function directusImageLoader({
  src,
  width,
  quality,
}: ImageLoaderProps): string {
  // Check if src is a relative path (static image from public folder)
  // Relative paths start with / and don't contain a protocol
  if (src.startsWith("/")) {
    // For static images, return the src as-is
    // Next.js will serve these from the public folder
    return src;
  }

  // Try to parse as URL for Directus images
  try {
    const url = new URL(src);

    // Apply Directus transformations
    if (width) {
      url.searchParams.set("width", String(width));
    }

    if (quality) {
      url.searchParams.set("quality", String(quality));
    }

    /**
     * In development (localhost), we bypass Next.js optimization
     * because private IPs are not allowed.
     * In production, Next.js can still optimize if configured,
     * but Directus transformations will work in both cases.
     */
    return url.toString();
  } catch {
    // If URL parsing fails, return src as-is
    // This handles edge cases where src might be malformed
    return src;
  }
}
