import { Match } from "../types/match";

const matches: Match[] = [
  {
    id: "arsenal-chelsea-001",

    competition: {
      id: "premier-league",
      name: "Premier League",
      shortName: "EPL",
    },

    homeTeam: {
      id: "arsenal",
      name: "Arsenal",
      shortName: "ARS",
    },

    awayTeam: {
      id: "chelsea",
      name: "Chelsea",
      shortName: "CHE",
    },

    kickoff: "2026-10-10T18:30:00+01:00",

    status: "scheduled",

    venue: "Emirates Stadium",

    availableCinemas: 8,
  },

  {
    id: "barcelona-bayern-001",

    competition: {
      id: "champions-league",
      name: "UEFA Champions League",
      shortName: "UCL",
    },

    homeTeam: {
      id: "barcelona",
      name: "Barcelona",
      shortName: "BAR",
    },

    awayTeam: {
      id: "bayern",
      name: "Bayern Munich",
      shortName: "BAY",
    },

    kickoff: "2026-10-11T20:00:00+01:00",

    status: "scheduled",

    venue: "Spotify Camp Nou",

    availableCinemas: 5,
  },

  {
    id: "liverpool-city-001",

    competition: {
      id: "premier-league",
      name: "Premier League",
      shortName: "EPL",
    },

    homeTeam: {
      id: "liverpool",
      name: "Liverpool",
      shortName: "LIV",
    },

    awayTeam: {
      id: "manchester-city",
      name: "Manchester City",
      shortName: "MCI",
    },

    kickoff: "2026-10-12T17:30:00+01:00",

    status: "scheduled",

    venue: "Anfield",

    availableCinemas: 6,
  },
];

export async function getMatches(): Promise<Match[]> {
  return matches;
}
