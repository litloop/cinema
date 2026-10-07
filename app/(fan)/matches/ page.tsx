"use client";

import { useEffect, useState } from "react";

import { Match } from "./types/match";
import { getMatches } from "./lib/getMatches";

import MatchCard from "./components/MatchCard";
import MatchFilters from "./components/MatchFilters";
import MatchDateSelector from "./components/MatchDateSelector";
import MatchEmptyState from "./components/MatchEmptyState";

export default function MatchesPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [filter, setFilter] = useState("all");
  const [date, setDate] = useState("today");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMatches() {
      try {
        const data = await getMatches();
        setMatches(data);
      } finally {
        setLoading(false);
      }
    }

    loadMatches();
  }, []);

  const filteredMatches = matches.filter(() => {
    // Temporary prototype filtering.
    // Real date filtering will happen once
    // backend match data is connected.
    return true;
  });

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest opacity-60">
          Football Cinema
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Find your next match.
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-7 opacity-70 md:text-lg">
          Discover the matches worth experiencing
          together on the big screen.
        </p>
      </section>

      <section className="mt-10">
        <div className="flex flex-col gap-5">
          <MatchDateSelector
            selectedDate={date}
            onChange={setDate}
          />

          <MatchFilters
            value={filter}
            onChange={setFilter}
          />
        </div>
      </section>

      <section className="mt-10">
        {loading ? (
          <div className="rounded-3xl border p-10 text-center">
            Loading matches...
          </div>
        ) : filteredMatches.length === 0 ? (
          <MatchEmptyState />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredMatches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
