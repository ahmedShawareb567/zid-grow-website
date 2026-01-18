import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrl(image: string, params?: string) {
  return `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/assets/${image}${params ? `?${params}` : ""}`;
}
