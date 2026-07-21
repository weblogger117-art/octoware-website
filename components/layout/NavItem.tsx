import Link from "next/link";
import type { ReactNode } from "react";

type NavItemProps = {
  href: string;
  children: ReactNode;
};

export function NavItem({ href, children }: NavItemProps) {
  return (
    <Link
      href={href}
      className="
        relative
        text-[15px]
        font-medium
        text-slate-700
        transition-colors
        duration-200
        hover:text-[#146ab1]
      "
    >
      {children}
    </Link>
  );
}
