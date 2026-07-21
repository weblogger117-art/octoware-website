import { ReactNode } from "react";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export function Section({
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
