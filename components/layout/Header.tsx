"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Navigation } from "@/components/layout/Navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 40);
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
      duration-300
      ease-out
    `,
    scrolled ? "top-4" : "top-6"
  )}
>
      <Container>
       <div
  className={cn(
    `
      flex
items-center
gap-10
    `,
    scrolled
      ? `
      h-[68px] scale-[0.985]
          border-slate-200/80
          bg-white/90
          backdrop-blur-md
          shadow-[0_16px_50px_rgba(15,23,42,0.10)]
        `
      : `
      h-[72px]
    scale-100
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

          <div className="flex flex-1 justify-center">
  <Navigation />
</div>
        </div>
      </Container>
    </header>
  );
}
