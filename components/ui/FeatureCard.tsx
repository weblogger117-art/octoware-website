import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        `
        group

        rounded-3xl
        w-full
        border
        border-slate-200

        bg-white

        px-8
py-7

        shadow-[0_12px_40px_rgba(15,23,42,0.05)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#146ab1]/20
        hover:shadow-[0_22px_60px_rgba(20,106,177,0.12)]
        `,
        className
      )}
    >
      <div className="flex items-center gap-5">
  <div
    className="
      flex
      h-14
      w-14
      shrink-0
      items-center
      justify-center

      rounded-xl

      bg-[#146ab1]/8

      text-[#146ab1]

      transition-all
      duration-300

      group-hover:bg-[#146ab1]
      group-hover:text-white
    "
  >
    <Icon
      className="h-7 w-7"
      strokeWidth={1.8}
    />
  </div>

  <h3
    className="
      text-2xl
      font-semibold
      leading-tight
      tracking-tight

      text-slate-900
    "
  >
    {title}
  </h3>
</div>

      <p
        className="
          mt-6

          leading-7

          text-slate-600
        "
      >
        {description}
      </p>

    </div>
  );
}
