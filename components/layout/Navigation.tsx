import { NavItem } from "@/components/layout/NavItem";
export function Navigation() {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      <NavItem href="/plattform">Plattform</NavItem>

      <NavItem href="/fachverfahren">Fachverfahren</NavItem>

      <NavItem href="/referenzen">Referenzen</NavItem>

      <NavItem href="/aktuelles">Aktuelles</NavItem>

      <NavItem href="/unternehmen">Unternehmen</NavItem>

      <NavItem href="/easy-academy">easy-Academy</NavItem>
    </nav>
  );
}
