"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: Props) {
  const message = error?.message ?? "Unknown error";

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <p>{message}</p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
