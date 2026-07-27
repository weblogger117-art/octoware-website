import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionBadge({
  children,
  className,
}: SectionBadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex
        items-center

        rounded-full

        border
        border-[#146ab1]/20

        bg-[#146ab1]/5

        px-4
        py-2

        text-xs
        font-semibold
        uppercase

        tracking-[0.25em]

        text-[#146ab1]
        `,
        className
      )}
    >
      {children}
    </span>
  );
}
