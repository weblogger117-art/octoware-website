"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionGlow } from "@/components/ui";

export function Footer() {
  return (
    <footer
  className="
    relative
    mt-10
    pb-20
  "
>

      <SectionGlow variant="cta-primary" />
      <SectionGlow variant="cta-accent" />

      

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-8">

        <div
  className="
    relative
    overflow-hidden

    rounded-full

    border
    border-white/60

    bg-white/75
    backdrop-blur-xl

    shadow-[0_20px_70px_rgba(20,106,177,0.12)]

    px-12
    py-8
  "
>

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

    opacity-20

    pointer-events-none
    select-none
  "
/>

  {/* Inhalt folgt */}

</div>

</div>

    </footer>
  );
}
