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
        flex
        items-start
        gap-5

        w-[360px]

        rounded-2xl
        border
        border-slate-200
        bg-white

        p-6

        shadow-[0_10px_35px_rgba(15,23,42,0.06)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-[0_18px_45px_rgba(20,106,177,0.12)]
        `,
        className
      )}
    >
      <div
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center

          rounded-2xl

          bg-[#146ab1]/8
          text-[#146ab1]
        "
      >
        {icon}
      </div>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          {value}
        </h3>

        <p className="mt-2 text-[15px] leading-7 text-slate-600">
          {label}
        </p>
      </div>
    </div>
  );
}
