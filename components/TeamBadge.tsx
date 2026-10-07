import { Team } from "../types/match";

interface TeamBadgeProps {
  team: Team;
}

export default function TeamBadge({ team }: TeamBadgeProps) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border text-xs font-semibold">
      {team.shortName}
    </div>
  );
}
