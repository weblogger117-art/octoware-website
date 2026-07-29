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
        inline-flex
        items-center
        rounded-full
        bg-[#adce00]
        px-5
        py-2.5
        text-[15px]
        font-semibold
        text-slate-900
        shadow-[0_10px_25px_rgba(173,206,0,.28)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-[#9fc200]
        hover:shadow-[0_14px_32px_rgba(173,206,0,.38)]
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
  <span>{children}</span>
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
