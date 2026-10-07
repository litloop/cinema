"use client";

interface MatchDateSelectorProps {
  selectedDate: string;
  onChange: (date: string) => void;
}

export default function MatchDateSelector({
  selectedDate,
  onChange,
}: MatchDateSelectorProps) {
  const dates = [
    {
      id: "today",
      label: "Today",
    },
    {
      id: "tomorrow",
      label: "Tomorrow",
    },
    {
      id: "weekend",
      label: "Weekend",
    },
  ];

  return (
    <div className="flex gap-2 overflow-x-auto">
      {dates.map((date) => (
        <button
          key={date.id}
          type="button"
          onClick={() => onChange(date.id)}
          className={`whitespace-nowrap rounded-2xl border px-5 py-3 text-sm ${
            selectedDate === date.id
              ? "bg-black text-white"
              : ""
          }`}
        >
          {date.label}
        </button>
      ))}
    </div>
  );
}
