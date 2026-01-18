import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-screen flex-col justify-center gap-y-4">
      <h1 className="text-6xl font-bold lg:text-8xl">404 - Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
      <Button className="w-fit rounded-full" size="lg" asChild>
        <Link href="/">Go back to the home page</Link>
      </Button>
    </div>
  );
}
