import { Match } from "../types/match";

export function formatMatchTime(dateString: string) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-NG", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);
}

export function formatMatchDate(dateString: string) {
  const date = new Date(dateString);

  return new Intl.DateTimeFormat("en-NG", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).format(date);
}

export function getMatchStatusLabel(match: Match) {
  switch (match.status) {
    case "live":
      return "LIVE";

    case "halftime":
      return "HALF TIME";

    case "finished":
      return "FULL TIME";

    case "postponed":
      return "POSTPONED";

    case "cancelled":
      return "CANCELLED";

    default:
      return "UPCOMING";
  }
}

export function isUpcoming(match: Match) {
  return new Date(match.kickoff).getTime() > Date.now();
}
