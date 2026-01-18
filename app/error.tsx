"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const message = error?.message ?? "Something went wrong!";

  return (
    <div className="container flex min-h-screen flex-col justify-center gap-y-4">
      <h2 className="text-6xl font-bold lg:text-8xl">{message}</h2>
      <Button className="w-fit rounded-full" size="lg" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
