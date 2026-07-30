"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionGlow } from "@/components/ui";

export function Footer() {
  return (
    <footer
      className="
        relative
        mt-24

        rounded-t-[56px]

        border-t
        border-white/40

        bg-white/70
        backdrop-blur-xl

        overflow-hidden
      "
    >

      <SectionGlow variant="cta-primary" />
      <SectionGlow variant="cta-accent" />

      <Image
  src="/images/background/footer-network.webp"
  alt=""
  aria-hidden
  width={900}
  height={900}
  draggable={false}
  className="
    absolute

    left-0
    bottom-0

    w-[650px]

    opacity-15

    pointer-events-none
    select-none
  "
/>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-24">

      </div>

    </footer>
  );
}
