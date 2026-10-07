"use client";

interface MatchFiltersProps {
  value: string;
  onChange: (value: string) => void;
}

export default function MatchFilters({
  value,
  onChange,
}: MatchFiltersProps) {
  const filters = [
    "all",
    "today",
    "tomorrow",
    "this-week",
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={`rounded-full border px-4 py-2 text-sm ${
            value === filter
              ? "bg-black text-white"
              : ""
          }`}
        >
          {filter
            .replace("-", " ")
            .replace(/\b\w/g, (letter) =>
              letter.toUpperCase()
            )}
        </button>
      ))}
    </div>
  );
}
