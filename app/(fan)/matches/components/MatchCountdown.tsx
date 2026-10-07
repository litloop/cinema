"use client";

import { useMatchCountdown } from "../hooks/useMatchCountdown";

interface MatchCountdownProps {
  kickoff: string;
}

export default function MatchCountdown({
  kickoff,
}: MatchCountdownProps) {
  const {
    remaining,
    days,
    hours,
    minutes,
    seconds,
  } = useMatchCountdown(kickoff);

  if (remaining <= 0) {
    return (
      <span className="text-sm font-semibold">
        Starting now
      </span>
    );
  }

  return (
    <div className="text-center">
      <p className="text-xs uppercase tracking-widest opacity-60">
        Starts in
      </p>

      <p className="mt-1 font-mono text-lg font-semibold">
        {days > 0 && `${days}d `}
        {String(hours).padStart(2, "0")}:
        {String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </p>
    </div>
  );
}
