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

        px-10
py-10

        shadow-[0_12px_40px_rgba(15,23,42,0.05)]

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#146ab1]/20
        hover:shadow-[0_30px_70px_rgba(20,106,177,0.18)]
        `,
        className
      )}
    >
      <div className="flex items-start gap-5">
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
    text-[28px]
    font-semibold
    leading-tight
    tracking-tight

    text-slate-900

    transition-colors
    duration-300

    group-hover:text-[#146ab1]
  "
>
    {title}
  </h3>
</div>

      <p
        className="
          mt-6

        text-left

          leading-7

          text-slate-600
        "
      >
        {description}
      </p>

    </div>
  );
}
