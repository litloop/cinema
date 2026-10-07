import Link from "next/link";
import { notFound } from "next/navigation";

import { getMatch } from "../lib/getMatch";
import {
  formatMatchDate,
  formatMatchTime,
} from "../lib/match-utils";

import CompetitionBadge from "../components/CompetitionBadge";
import TeamBadge from "../components/TeamBadge";
import MatchCountdown from "../components/MatchCountdown";

interface MatchPageProps {
  params: Promise<{
    matchId: string;
  }>;
}

export default async function MatchPage({
  params,
}: MatchPageProps) {
  const { matchId } = await params;

  const match = await getMatch(matchId);

  if (!match) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-5 py-10 md:px-8">
      <Link
        href="/matches"
        className="text-sm opacity-60 hover:opacity-100"
      >
        ← Back to matches
      </Link>

      <section className="mt-8 rounded-[2rem] border p-6 md:p-12">
        <div className="flex justify-center">
          <CompetitionBadge
            competition={match.competition}
          />
        </div>

        <div className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-5">
          <div className="flex flex-col items-center gap-4 text-center">
            <TeamBadge team={match.homeTeam} />

            <h1 className="text-xl font-bold">
              {match.homeTeam.name}
            </h1>
          </div>

          <div className="text-center">
            <p className="text-sm opacity-60">
              {formatMatchDate(match.kickoff)}
            </p>

            <p className="mt-2 text-3xl font-bold">
              {formatMatchTime(match.kickoff)}
            </p>

            <p className="mt-1 text-xs opacity-50">
              VS
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-center">
            <TeamBadge team={match.awayTeam} />

            <h1 className="text-xl font-bold">
              {match.awayTeam.name}
            </h1>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <MatchCountdown
            kickoff={match.kickoff}
          />
        </div>

        <div className="mt-10 border-t pt-8 text-center">
          <p className="text-sm opacity-60">
            {match.availableCinemas ?? 0} cinemas
            showing this match
          </p>

          <Link
            href={`/cinemas?matchId=${match.id}`}
            className="mt-5 inline-flex rounded-full bg-black px-7 py-4 text-sm font-semibold text-white"
          >
            Find a Cinema
          </Link>
        </div>
      </section>
    </main>
  );
}
