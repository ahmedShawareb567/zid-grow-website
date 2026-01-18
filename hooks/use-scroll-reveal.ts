"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PRESETS = {
  fadeUp: { y: 30, opacity: 0 },
  fadeDown: { y: -30, opacity: 0 },
  fadeLeft: { x: -30, opacity: 0 },
  fadeRight: { x: 30, opacity: 0 },
  zoomIn: { scale: 0.95, opacity: 0 },
} as const;

type PresetName = keyof typeof PRESETS;

export type UseScrollRevealOptionsType = {
  preset?: PresetName;
  duration?: number;
  delay?: number;
  once?: boolean;
};

export function useScrollReveal({
  preset = "fadeUp",
  duration = 0.8,
  delay = 0,
  once = true,
}: UseScrollRevealOptionsType = {}) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!elementRef.current) return;

      const element = elementRef.current;

      gsap.set(element, { willChange: "transform, opacity" });

      gsap.from(element, {
        ...PRESETS[preset],
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
        },
      });
    },
    { scope: elementRef },
  );

  return { ref: elementRef as React.RefObject<HTMLDivElement> };
}
