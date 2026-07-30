import { cn } from "@/lib/utils";

type SectionGlowProps = {
  className?: string;
  color?: "blue" | "green" | "lightBlue" | "lightGreen";
  size?: "sm" | "md" | "lg";
};

export function SectionGlow({
  className,
  color = "blue",
  size = "lg",
}: SectionGlowProps) {
  const colors = {
    blue: "bg-[#146ab1]/8",
    green: "bg-[#adce00]/10",
    lightBlue: "bg-[#c5d7ed]/28",
    lightGreen: "bg-[#deeb99]/22",
  };

  const sizes = {
    sm: "h-[420px] w-[420px]",
    md: "h-[650px] w-[650px]",
    lg: "h-[900px] w-[900px]",
  };

  return (
    <div
      aria-hidden
      className={cn(
        `
        pointer-events-none
        absolute
        rounded-full
        blur-[190px]
        -z-10
        `,
        colors[color],
        sizes[size],
        className
      )}
    />
  );
}
