import { Match } from "../types/match";
import { getMatches } from "./getMatches";

export async function getMatch(
  matchId: string
): Promise<Match | null> {
  const matches = await getMatches();

  return (
    matches.find((match) => match.id === matchId) ??
    null
  );
}
