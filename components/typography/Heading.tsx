import { cn } from "@/lib/utils";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

type HeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: HeadingLevel;
  align?: "left" | "center";
  className?: string;
};

export function Heading({
  eyebrow,
  title,
  description,
  as = "h2",
  align = "left",
  className,
}: HeadingProps) {
  const Tag = as;

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          {eyebrow}
        </p>
      )}

      <Tag className="text-4xl font-bold tracking-tight text-[var(--color-text)] md:text-5xl">
        {title}
      </Tag>

      {description && (
        <p className="mt-6 text-lg leading-8 text-[var(--color-text-light)]">
          {description}
        </p>
      )}
    </div>
  );
}
