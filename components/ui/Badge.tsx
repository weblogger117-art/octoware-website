import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "outline";

type BadgeProps = {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
};

export function Badge({
  children,
  variant = "outline",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em]",
        variant === "primary" &&
          "bg-[var(--color-primary)] text-white",
        variant === "outline" &&
          "border border-[var(--color-primary-light)] bg-white text-[var(--color-primary)]",
        className
      )}
    >
      {children}
    </span>
  );
}
