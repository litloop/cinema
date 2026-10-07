"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-xl px-5 py-20 text-center">
      <h1 className="text-2xl font-bold">
        Something went wrong.
      </h1>

      <p className="mt-3 opacity-60">
        We couldn't load the matches right now.
      </p>

      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white"
      >
        Try again
      </button>
    </main>
  );
}
