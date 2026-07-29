"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type NavItemProps = {
  href: string;
  children: ReactNode;
  variant?: "default" | "cta";
};

export function NavItem({
  href,
  children,
  variant = "default",
}: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      data-active={isActive}
      className={`
        ${
          variant === "cta"
  ? `
  group
      relative
      inline-flex
      items-center
      justify-center

      overflow-hidden

      rounded-full

      border
      border-[#93b800]

      bg-[#adce00]

      px-7
      py-3

      text-[15px]
      font-semibold
      text-slate-900

      shadow-[0_8px_24px_rgba(173,206,0,0.22)]

      transition-all
      duration-300
      ease-out

      hover:-translate-y-0.5
      hover:bg-[#a5c900]
      hover:shadow-[0_14px_32px_rgba(173,206,0,0.32)]
    `
            `
            : `
              group
              relative
              inline-flex
              items-center
              text-[15px]
              font-medium
              text-slate-700
              transition-colors
              duration-300
              hover:text-[#146ab1]
              data-[active=true]:text-[#146ab1]
            `
        }
      `}
    >
      <span>{children}</span>

      {variant === "cta" && (
  <span
    className="
      pointer-events-none
      absolute
      inset-0
      -translate-x-full
      bg-gradient-to-r
      from-transparent
      via-white/35
      to-transparent
      transition-transform
      duration-700
      group-hover:translate-x-full
    "
  />
)}

      {variant === "default" && (
        <span
          className="
            absolute
            -bottom-1
            left-1/2
            h-0.5
            w-0
            -translate-x-1/2
            rounded-full
            bg-[#146ab1]
            transition-all
            duration-300
            group-hover:w-full
            group-data-[active=true]:w-full
          "
        />
      )}
    </Link>
  );
}
