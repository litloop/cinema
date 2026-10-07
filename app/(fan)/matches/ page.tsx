"use client";

import { useEffect, useMemo, useState } from "react";

import type { Match } from "@/features/football/types/match";
import { getMatches } from "@/features/football/lib/getMatches";

import MatchCard from "@/features/football/components/MatchCard";
import MatchFilters from "@/features/football/components/MatchFilters";
import MatchDateSelector from "@/features/football/components/MatchDateSelector";
import MatchEmptyState from "@/features/football/components/MatchEmptyState";

function isSameDay(a: Date, b: Date) {
  return a.toDateString() === b.toDateString();
}

function matchesDate(kickoff: string, date: string) {
  const k = new Date(kickoff);
  const now = new Date();

  if (date === "today") return isSameDay(k, now);

  if (date === "tomorrow") {
    const t = new Date(now);
    t.setDate(now.getDate() + 1);
    return isSameDay(k, t);
  }

  if (date === "weekend") {
    const day = k.getDay();
    return day === 0 || day === 6;
  }

  return true;
}

export default function MatchesPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [filter, setFilter] = useState("all");
  const [date, setDate] = useState("today");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadMatches() {
      try {
        const data = await getMatches();
        if (!cancelled) setMatches(data);
      } catch (err) {
        console.error(err);
        if (!cancelled) setError("We couldn't load matches. Please try again.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadMatches();
    return () => {
      cancelled = true;
    };
  }, []);

  const filteredMatches = useMemo(
    () =>
      matches.filter(
        (m) =>
          matchesDate(m.kickoffAt, date) &&
          (filter === "all" || m.competition === filter)
      ),
    [matches, date, filter]
  );

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
          Discover the matches worth experiencing together on the big screen.
        </p>
      </section>

      <section className="mt-10 flex flex-col gap-5">
        <MatchDateSelector selectedDate={date} onChange={setDate} />
        <MatchFilters value={filter} onChange={setFilter} />
      </section>

      <section className="mt-10">
        {loading ? (
          <div role="status" className="rounded-3xl border p-10 text-center">
            Loading matches...
          </div>
        ) : error ? (
          <div role="alert" className="rounded-3xl border p-10 text-center">
            {error}
          </div>
        ) : filteredMatches.length === 0 ? (
          <MatchEmptyState />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredMatches.map((match) => (
              <MatchCard key={match.id} match={match} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
