import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type StatCardProps = {
  icon: LucideIcon;
  value: string;
  label: string;
  iconClassName?: string;
  className?: string;
};

export function StatCard({
  icon: Icon,
  value,
  label,
  iconClassName,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        `
        flex
        items-center
        gap-5

        w-[360px]

        rounded-2xl
        border
        border-slate-200
        bg-white

        px-6 py-5

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
  className={cn(
    `
    flex
    h-12
    w-12
    shrink-0
    items-center
    justify-center

    rounded-xl

    border
    border-slate-200

    bg-slate-50
    text-[#146ab1]
    `,
    iconClassName
  )}
>
  <Icon
    className="h-6 w-6"
    strokeWidth={1.8}
  />
</div>

      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          {value}
        </h3>

        <p className="mt-1 text-[15px] leading-6 text-slate-600">
          {label}
        </p>
      </div>
    </div>
  );
}
