export type MatchStatus =
  | "scheduled"
  | "live"
  | "halftime"
  | "finished"
  | "postponed"
  | "cancelled";

export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo?: string;
}

export interface Competition {
  id: string;
  name: string;
  shortName?: string;
  logo?: string;
}

export interface MatchScore {
  home: number;
  away: number;
}

export interface Match {
  id: string;

  competition: Competition;

  homeTeam: Team;
  awayTeam: Team;

  kickoff: string;

  status: MatchStatus;

  score?: MatchScore;

  venue?: string;

  availableCinemas?: number;
}
