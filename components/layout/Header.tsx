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
    <header className="fixed inset-x-0 top-6 z-50">
      <Container>
       <div
  className={cn(
    `
      flex
      h-[72px]
      items-center
      justify-between

      rounded-2xl

      px-10

      border

      transition-all
      duration-300
      ease-out
    `,
    scrolled
      ? `
          border-slate-200/80
          bg-white/90
          backdrop-blur-md
          shadow-[0_16px_50px_rgba(15,23,42,0.10)]
        `
      : `
          border-white/30
          bg-white/65
          backdrop-blur-sm
          shadow-[0_8px_24px_rgba(15,23,42,0.05)]
        `
  )}
>
          <Link
            href="/"
            className="flex items-center transition-opacity duration-200 hover:opacity-90"
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

          <Navigation />
        </div>
      </Container>
    </header>
  );
}
