import { useEffect, useState } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  animateIcon?: boolean;
  animationDelay?: number;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  animateIcon,
  animationDelay,
}: FeatureCardProps) {

  const [iconActive, setIconActive] = useState(false);

  useEffect(() => {
    if (!animateIcon) return;

    const timer1 = setTimeout(() => {
      setIconActive(true);
    }, animationDelay ?? 0);

    const timer2 = setTimeout(() => {
      setIconActive(false);
    }, (animationDelay ?? 0) + 450);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [animateIcon, animationDelay]);

  return (
    <div
  className={cn(
        `
        group

relative
overflow-hidden

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
        hover:border-[#146ab1]/30
        hover:shadow-[0_30px_70px_rgba(20,106,177,0.14)]
        `,
        className
      )}
    >
      <div className="flex items-start gap-5">
 <div
  className={cn(
    `
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
      duration-700

      group-hover:scale-105
      group-hover:bg-[#146ab1]
      group-hover:text-white
    `,
    iconActive
  ? "scale-110 -translate-y-1 shadow-[0_0_26px_rgba(20,106,177,0.28)]"
  : "scale-100 translate-y-0"
  )}
>
  <div
  className={cn(
    "transition-all duration-500",
    animateIcon
      ? "scale-110 -translate-y-2"
      : "scale-100 translate-y-0"
  )}
>
    <AnimatedIcon
  active={!!animateIcon}
  delay={animationDelay}
>
  <Icon
    className="h-7 w-7"
    strokeWidth={1.8}
  />
</AnimatedIcon>
  </div>
</div>

  <h3
  className="
    text-[24px]
lg:text-[26px]
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
