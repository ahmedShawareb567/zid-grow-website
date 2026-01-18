import type { Metadata } from "next";
import { geistMono, geistSans } from "@/assets/fonts";

import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "@/lib/constants";

import "@/assets/globals.css";

export const metadata: Metadata = {
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
      </head>
      <body
        className={`${geistSans?.variable} ${geistMono?.variable} dark antialiased`}
      >
        <div className="min-h-dvh">{children}</div>
      </body>
    </html>
  );
}
