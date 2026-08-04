import Link from "next/link";
import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = BaseProps & {
  href: string;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href">;

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const buttonBase =
  "group relative overflow-hidden inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl active:translate-y-0 active:scale-[0.98]";

const primaryClasses =
  "bg-gradient-to-r from-[#146ab1] to-[#1b7cc8] text-white hover:from-[#1873bd] hover:to-[#2490df]";

const secondaryClasses =
  "border border-[var(--color-primary)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]";

function ButtonEffects() {
  return (
    <>
      {/* Glanz */}
      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          inset-0
          rounded-full
          bg-gradient-to-b
          from-white/18
          via-white/6
          to-transparent
          opacity-70
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Lichtreflex */}
      <span
        aria-hidden
        className="
          pointer-events-none
          absolute
          -left-1/2
          top-0
          z-10
          h-full
          w-1/4
          -skew-x-12
          bg-white/60
          blur-md
          transition-transform
          duration-700
          ease-out
          group-hover:translate-x-[420%]
        "
      />
    </>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
  buttonBase,
  variant === "primary" && primaryClasses,
  variant === "secondary" && secondaryClasses,
  className
)}
      {...props}
    >
      <ButtonEffects />

<span className="relative z-20">
  {children}
</span>
      {children}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
}: LinkButtonProps) {
  return (
    <Link
  href={href}
  className={cn(
  buttonBase,
  variant === "primary" && primaryClasses,
  variant === "secondary" && secondaryClasses,
  className
)}
>

  <ButtonEffects />

<span className="relative z-20">
  {children}
</span>

  <span className="relative z-20">
    {children}
  </span>

      <span
  aria-hidden
  className="
    pointer-events-none
    absolute

    -left-1/2
    top-0

    z-10

    h-full
    w-1/4

    -skew-x-12

    bg-white/60

    blur-md

    transition-transform
    duration-700
    ease-out

    group-hover:translate-x-[420%]
  "
/>

</Link>
  );
}
