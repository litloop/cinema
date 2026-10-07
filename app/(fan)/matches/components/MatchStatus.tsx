import { Match } from "../types/match";
import { getMatchStatusLabel } from "../lib/match-utils";

interface MatchStatusProps {
  match: Match;
}

export default function MatchStatus({
  match,
}: MatchStatusProps) {
  const label = getMatchStatusLabel(match);

  return (
    <span className="text-xs font-semibold uppercase tracking-wider">
      {label}
    </span>
  );
}
