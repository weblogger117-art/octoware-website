import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type LaptopProps = {
  children: ReactNode;
  className?: string;
};

export function Laptop({
  children,
  className,
}: LaptopProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-5xl",
        className
      )}
    >
      {/* Display */}
      <div className="overflow-hidden rounded-[28px] border border-slate-300 bg-black shadow-[0_30px_80px_rgba(15,23,42,0.18)]">

        <div className="h-8 bg-neutral-900" />

        <div className="bg-white">
          {children}
        </div>

      </div>

      {/* Unterkante */}
      <div className="mx-auto h-3 w-[92%] rounded-b-full bg-gradient-to-b from-slate-300 to-slate-500" />

      {/* Standfuß */}
      <div className="mx-auto h-2 w-32 rounded-b-full bg-slate-400" />

    </div>
  );
}
