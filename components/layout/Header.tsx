"use client";
import { NavItem } from "@/components/layout/NavItem";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Navigation } from "@/components/layout/Navigation";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  
useEffect(() => {
  const handleScroll = () => {
    const progress = Math.min(window.scrollY / 120, 1);
    setScrollProgress(progress);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  
  return (
    <header
  className="
    fixed
    inset-x-0
    z-50
  "
  style={{
    top: `${24 - scrollProgress * 8}px`,
  }}
>
      <Container>
       <div
  className={cn(
    `
      grid
      grid-cols-[auto_1fr_auto]
      items-center

      rounded-2xl
      ring-1
      ring-[#146ab1]/35

      px-10
      border

      transition-[background-color,box-shadow]
      duration-200
      ease-[cubic-bezier(.22,1,.36,1)]
    `,
    scrollProgress > 0.6
      ? `
          h-[72px]
          border-slate-200/80
          bg-white/90
          backdrop-blur-md
          shadow-[0_0_0_1px_rgba(20,106,177,0.15)]
        `
      : `
          h-[72px]
          border-white/30
          bg-white/65
          backdrop-blur-sm
          shadow-[0_8px_24px_rgba(15,23,42,0.05)]
        `
  )}
  style={{
  columnGap: `${40 - scrollProgress * 20}px`,
  maxWidth: `${1180 - scrollProgress * 650}px`,
  marginInline: "auto",
}}
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
  style={{
    transform: `scale(${1 - scrollProgress * 0.08})`,
  }}
>
            <Image
  src="/images/branding/easy-soft-logo.png"
  alt="easy-soft GmbH"
  width={220}
  height={52}
  priority
  className="
    h-12
    w-auto
    transition-transform
    duration-200
  "
/>
          </Link>

         <div
    className="justify-self-center overflow-hidden"
    style={{
    maxWidth: `${760 - scrollProgress * 760}px`,
    opacity: 1 - scrollProgress,
    transform: `translateY(${-10 * scrollProgress}px) scale(${1 - scrollProgress * 0.05})`,
    pointerEvents: scrollProgress > 0.95 ? "none" : "auto",
  }}
>
  <Navigation compact={scrollProgress > 0.6} />
</div>

         <div
  className="justify-self-end"         
  style={{
    transform: `scale(${1 - scrollProgress * 0.04})`,
  }}
>
  <NavItem
    href="/kontakt"
    variant="cta"
  >
    Kontakt
  </NavItem>
</div>
        </div>
      </Container>
    </header>
  );
}
