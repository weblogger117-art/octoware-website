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

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl active:translate-y-0 active:scale-[0.98]",
        variant === "primary" &&
"bg-gradient-to-r from-[#146ab1] to-[#1b7cc8] text-white hover:from-[#1873bd] hover:to-[#2490df]",
        variant === "secondary" &&
          "border border-[var(--color-primary)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]",
        className
      )}
      {...props}
    >
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
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200",
        variant === "primary" &&
          "bg-[var(--color-primary)] text-white hover:opacity-90",
        variant === "secondary" &&
          "border border-[var(--color-primary)] bg-white text-[var(--color-primary)] hover:bg-[var(--color-primary-light)]",
        className
      )}
    >
      {children}
    </Link>
  );
}
