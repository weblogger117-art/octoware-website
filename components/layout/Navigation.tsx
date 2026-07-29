import { NavItem } from "@/components/layout/NavItem";
type NavigationProps = {
  compact?: boolean;
};

export function Navigation({
  compact = false,
}: NavigationProps) {
  return (
    <nav
  className={`
    hidden
    items-center
    transition-all
    duration-500
    ease-[cubic-bezier(.22,1,.36,1)]
    lg:flex
    ${
  compact
    ? "gap-5 -translate-x-8"
    : "gap-10 translate-x-0"
}
  `}
>
      <NavItem href="/plattform">Plattform</NavItem>

      <NavItem href="/fachverfahren">Fachverfahren</NavItem>

      <NavItem href="/referenzen">Referenzen</NavItem>

      <NavItem href="/aktuelles">Aktuelles</NavItem>

      <NavItem href="/unternehmen">Unternehmen</NavItem>

      <NavItem href="/easy-academy">easy-Academy</NavItem>
    </nav>
  );
}
