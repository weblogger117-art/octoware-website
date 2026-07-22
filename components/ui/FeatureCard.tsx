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
        border
        border-slate-200

        bg-white

        p-8

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
      <div
        className="
          mb-8

          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-2xl

          bg-[#146ab1]/8

          text-[#146ab1]

          transition-colors
          duration-300

          group-hover:bg-[#146ab1]
          group-hover:text-white
        "
      >
        <Icon
          className="h-8 w-8"
          strokeWidth={1.8}
        />
      </div>

      <h3
        className="
          text-2xl
          font-semibold
          tracking-tight

          text-slate-900
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-4

          leading-8

          text-slate-600
        "
      >
        {description}
      </p>

      <div
        className="
          mt-8

          inline-flex

          items-center

          gap-2

          text-sm
          font-semibold

          text-[#146ab1]
        "
      >
        Mehr erfahren →

      </div>
    </div>
  );
}
