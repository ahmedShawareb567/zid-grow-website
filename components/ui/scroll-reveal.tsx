"use client";

import { createContext, useContext } from "react";

import { cn } from "@/lib/utils";
import {
  useScrollReveal,
  UseScrollRevealOptionsType,
} from "@/hooks/use-scroll-reveal";

type ScrollRevealContextType = Partial<UseScrollRevealOptionsType>;

const ScrollRevealContext = createContext<ScrollRevealContextType>({});

type ScrollRevealWrapperProps = {
  children: React.ReactNode;
  className?: string;
} & Partial<UseScrollRevealOptionsType>;

export function ScrollRevealWrapper({
  children,
  className,
  ...props
}: ScrollRevealWrapperProps) {
  return (
    <ScrollRevealContext.Provider value={props}>
      <section className={cn(className)}>{children}</section>
    </ScrollRevealContext.Provider>
  );
}

type ScrollRevealSlotProps = {
  children: React.ReactNode;
  className?: string;
};

export function ScrollRevealSlot({
  children,
  className,
}: ScrollRevealSlotProps) {
  const options = useContext(ScrollRevealContext);
  const { ref } = useScrollReveal(options);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
