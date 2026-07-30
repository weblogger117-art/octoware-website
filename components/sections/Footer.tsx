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

    opacity-20

    pointer-events-none
    select-none
  "
/>

      <div className="relative z-10 mx-auto max-w-7xl px-8 py-24">

  <div
    className="
      rounded-[42px]
      border
      border-white/60
      bg-white/70
      backdrop-blur-xl
      shadow-[0_30px_80px_rgba(20,106,177,0.08)]
      p-14
    "
  >

    <div
      className="
        grid
        gap-12
        lg:grid-cols-[1.5fr_1fr_1fr_1fr]
      "
    >

      {/* Inhalte kommen gleich */}

    </div>

  </div>

</div>

    </footer>
  );
}
