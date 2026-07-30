import { cn } from "@/lib/utils";

type SectionGlowProps = {
  variant?:
    | "why-primary"
    | "why-accent"
    | "modules-primary"
    | "modules-accent"
    | "workflow-primary"
    | "workflow-accent"
    | "trust-primary"
    | "trust-accent";
    | "cta-primary"
    | "cta-accent"

  className?: string;
};

const presets = {
  "why-primary": {
    color: "bg-[#146ab1]/7",
    size: "h-[720px] w-[720px]",
    position: "left-[-120px] top-[180px]",
  },

  "why-accent": {
    color: "bg-[#c5d7ed]/24",
    size: "h-[420px] w-[420px]",
    position: "right-[8%] top-[260px]",
  },

  "modules-primary": {
    color: "bg-[#adce00]/10",
    size: "h-[900px] w-[900px]",
    position: "left-[42%] top-[320px] -translate-x-1/2",
  },

  "modules-accent": {
    color: "bg-[#deeb99]/20",
    size: "h-[460px] w-[460px]",
    position: "left-[60%] top-[470px]",
  },

  "workflow-primary": {
    color: "bg-[#146ab1]/6",
    size: "h-[650px] w-[650px]",
    position: "right-[-180px] top-[220px]",
  },

  "workflow-accent": {
    color: "bg-[#c5d7ed]/20",
    size: "h-[380px] w-[380px]",
    position: "right-[18%] top-[330px]",
  },

  "trust-primary": {
    color: "bg-[#146ab1]/6",
    size: "h-[700px] w-[700px]",
    position: "left-[-120px] top-[220px]",
  },

  "trust-accent": {
    color: "bg-[#deeb99]/18",
    size: "h-[420px] w-[420px]",
    position: "left-[18%] top-[340px]",
  },
  "cta-primary": {
  color: "bg-[#146ab1]/8",
  size: "h-[850px] w-[850px]",
  position: "left-1/2 top-[180px] -translate-x-1/2",
},

"cta-accent": {
  color: "bg-[#adce00]/12",
  size: "h-[500px] w-[500px]",
  position: "left-1/2 top-[260px] -translate-x-1/2",
},
};

export function SectionGlow({
  variant = "why-primary",
  className,
}: SectionGlowProps){
  
  const preset = presets[variant];

  return (
    <div
      aria-hidden
      className={cn(
  `
    pointer-events-none
    absolute
    rounded-full
    blur-[190px]
    z-0
  `,
  preset.color,
  preset.size,
  preset.position,
  className
)}
    />
  );
}
