import { Competition } from "../types/match";

interface CompetitionBadgeProps {
  competition: Competition;
}

export default function CompetitionBadge({
  competition,
}: CompetitionBadgeProps) {
  return (
    <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
      {competition.shortName ?? competition.name}
    </div>
  );
}
