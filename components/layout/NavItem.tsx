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

const classes =
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
    border-[#146ab1]/35

    bg-gradient-to-b
    from-[#b8db2d]
    to-[#adce00]

    px-6
    py-3

    text-[15px]
    font-semibold
    text-slate-900

    shadow-[0_8px_22px_rgba(173,206,0,.20)]

    transition-all
    duration-300
    ease-out

    hover:-translate-y-0.5
    hover:brightness-105
    hover:shadow-[0_16px_36px_rgba(173,206,0,.30)]
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
      `;
  
  return (
    <Link
      href={href}
      data-active={isActive}
      className={classes}
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
      via-white/20
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
