export default function MatchEmptyState() {
  return (
    <div className="rounded-3xl border px-6 py-16 text-center">
      <h2 className="text-xl font-semibold">
        No matches found
      </h2>

      <p className="mt-2 text-sm opacity-60">
        Try another date or check back later.
      </p>
    </div>
  );
}

