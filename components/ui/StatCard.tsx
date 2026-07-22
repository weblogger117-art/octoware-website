import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type StatCardProps = {
  icon: ReactNode;
  value: string;
  label: string;
  className?: string;
};

export function StatCard({
  icon,
  value,
  label,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-2xl
        border
        border-white/40
        bg-white/70
        backdrop-blur-xl
        shadow-[0_20px_60px_rgba(20,106,177,0.15)]
        px-6
        py-5
        w-[230px]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_25px_70px_rgba(20,106,177,0.22)]
        `,
        className
      )}
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#146ab1]/10 text-[#146ab1]">
        {icon}
      </div>

      <div className="text-3xl font-bold tracking-tight text-slate-900">
        {value}
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {label}
      </p>
    </div>
  );
}
