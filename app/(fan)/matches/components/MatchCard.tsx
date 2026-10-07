import Link from "next/link";

import { Match } from "../types/match";
import {
  formatMatchDate,
  formatMatchTime,
} from "../lib/match-utils";

import CompetitionBadge from "./CompetitionBadge";
import MatchStatus from "./MatchStatus";
import MatchCountdown from "./MatchCountdown";
import TeamBadge from "./TeamBadge";

interface MatchCardProps {
  match: Match;
}

export default function MatchCard({
  match,
}: MatchCardProps) {
  return (
    <article className="rounded-3xl border p-5 transition hover:-translate-y-1">
      <div className="flex items-center justify-between gap-4">
        <CompetitionBadge
          competition={match.competition}
        />

        <MatchStatus match={match} />
      </div>

      <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <TeamBadge team={match.homeTeam} />

          <span className="font-semibold">
            {match.homeTeam.name}
          </span>
        </div>

        <div className="text-center">
          <p className="text-xs opacity-60">
            {formatMatchDate(match.kickoff)}
          </p>

          <p className="mt-1 text-xl font-bold">
            {formatMatchTime(match.kickoff)}
          </p>

          <span className="text-xs opacity-60">
            VS
          </span>
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <TeamBadge team={match.awayTeam} />

          <span className="font-semibold">
            {match.awayTeam.name}
          </span>
        </div>
      </div>

      {match.status === "scheduled" && (
        <div className="mt-6">
          <MatchCountdown
            kickoff={match.kickoff}
          />
        </div>
      )}

      <div className="mt-6 flex items-center justify-between border-t pt-5">
        <div>
          <p className="text-xs opacity-60">
            Cinemas showing
          </p>

          <p className="font-semibold">
            {match.availableCinemas ?? 0} locations
          </p>
        </div>

        <Link
          href={`/matches/${match.id}`}
          className="rounded-full border px-5 py-3 text-sm font-semibold transition hover:bg-black hover:text-white"
        >
          Watch at a Cinema
        </Link>
      </div>
    </article>
  );
}
