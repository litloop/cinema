"use client";

import { useEffect, useState } from "react";

function calculateRemaining(target: string) {
  const difference =
    new Date(target).getTime() - Date.now();

  if (difference <= 0) {
    return 0;
  }

  return difference;
}

export function useMatchCountdown(target: string) {
  const [remaining, setRemaining] = useState(() =>
    calculateRemaining(target)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(calculateRemaining(target));
    }, 1000);

    return () => clearInterval(interval);
  }, [target]);

  const totalSeconds = Math.floor(remaining / 1000);

  const days = Math.floor(totalSeconds / 86400);

  const hours = Math.floor(
    (totalSeconds % 86400) / 3600
  );

  const minutes = Math.floor(
    (totalSeconds % 3600) / 60
  );

  const seconds = totalSeconds % 60;

  return {
    remaining,
    days,
    hours,
    minutes,
    seconds,
  };
}
