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
  "
>
  <span>{children}</span>

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
    "
  />
</Link>
  );
}
