"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Navigation } from "@/components/layout/Navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const current = window.scrollY;

    setScrolled(current > 40);
    setCompact(current > 120);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <header
  className={cn(
    `
      fixed
      inset-x-0
      z-50
      transition-all
      duration-500
      ease-[cubic-bezier(.22,1,.36,1)]
    `,
    scrolled ? "top-4" : "top-6"
  )}
>
      <Container>
       <div
  className={cn(
    `
    mx-auto
    w-fit
      flex
      gap-10
      transition-all
duration-300
ease-out
      items-center
      justify-between

      rounded-2xl

      px-10

      border

      transition-all
      duration-300
      ease-out
    `,

    compact
  ? "max-w-[360px]"
  : "max-w-[1200px]",
    
    scrolled
  ? `
      h-[72px]
      border-slate-200/80
      bg-white/90
      backdrop-blur-md
      shadow-[0_16px_50px_rgba(15,23,42,0.10)]
    `
  : `
      h-[72px]
      border-white/30
      bg-white/65
      backdrop-blur-sm
      shadow-[0_8px_24px_rgba(15,23,42,0.05)]
    `
  )}
>
          <Link
  href="/"
  className="
    flex
    shrink-0
    items-center
    transition-opacity
    duration-200
    hover:opacity-90
  "
>
            <Image
              src="/images/branding/easy-soft-logo.png"
              alt="easy-soft GmbH"
              width={220}
              height={52}
              priority
              className="h-12 w-auto"
            />
          </Link>

         <div
  className={cn(
    `
      flex
      justify-end
      overflow-hidden

      transition-all
      duration-700
      ease-[cubic-bezier(.22,1,.36,1)]
    `,
    compact
  ? "max-w-20 -translate-x-10"
  : "max-w-[900px] translate-x-0"
  )}
>
  <Navigation />
</div>
        </div>
      </Container>
    </header>
  );
}
