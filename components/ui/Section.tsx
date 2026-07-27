import { forwardRef, ReactNode } from "react";

import { Container } from "@/components/ui";
import { cn } from "@/lib/utils";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      className,
      containerClassName,
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 lg:py-24", className)}
      >
        <Container className={containerClassName}>
          {children}
        </Container>
      </section>
    );
  }
);

Section.displayName = "Section";
