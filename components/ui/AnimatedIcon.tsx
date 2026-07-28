"use client";

import { ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AnimatedIconProps = {
  children: ReactNode;
  active: boolean;
  delay?: number;
};

export function AnimatedIcon({
  children,
  active,
  delay = 0,
}: AnimatedIconProps) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    if (!active) return;

    const t1 = setTimeout(() => setPhase(1), delay);
    const t2 = setTimeout(() => setPhase(2), delay + 220);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active, delay]);

  return (
    <div
      className={cn(
        "transition-all duration-300 ease-out",

        phase === 0 &&
          "translate-y-0 scale-100",

        phase === 1 &&
          "-translate-y-2 scale-110",

        phase === 2 &&
          "translate-y-0 scale-100"
      )}
    >
      {children}
    </div>
  );
}
