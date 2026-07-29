"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LinkButton } from "@/components/ui";
import { Heading } from "@/components/typography";

export function HeroContent() {
  const [visible, setVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setVisible(true);
  }, 150);

  return () => clearTimeout(timer);
}, []);
  return (
    <div className="flex max-w-xl flex-col items-start">

      {/* Produktlogo */}
      <div
  className={cn(
    `
      -ml-12
      -mt-2
      mb-8
      xl:-ml-18

      transition-all
      duration-700
      ease-out
    `,
    visible
      ? "translate-x-0 opacity-100"
      : "-translate-x-12 opacity-0"
  )}
>
        <Image
          src="/images/branding/octoware-logo.webp"
          alt="OctoWare®"
          width={620}
          height={148}
          priority
          draggable={false}
          className="
            h-32
            xl:h-36
            w-auto
            select-none
          "
        />
      </div>

      <div
  className={cn(
    `
      transition-all
      duration-700
      ease-out
    `,
    visible
      ? "translate-y-0 opacity-100"
      : "translate-y-8 opacity-0"
  )}
  style={{
    transitionDelay: "180ms",
  }}
>
  <Heading
    className="mt-0"
    as="h1"
    title="Die Softwareplattform für den öffentlichen Gesundheitsdienst."
    description="OctoWare®NET vereint moderne Fachverfahren, digitale Bürgerdienste und effiziente Prozesse auf einer zentralen Plattform."
  />
</div>

      <div
  className={cn(
    `
      mt-10
      flex
      flex-wrap
      gap-4

      transition-all
      duration-900
      ease-out
    `,
    visible
      ? "translate-y-0 opacity-100"
      : "translate-y-16 opacity-0"
  )}
  style={{
    transitionDelay: "500ms",
  }}
>
  <LinkButton href="/plattform">
    Plattform entdecken
  </LinkButton>

  <LinkButton
    href="/octoware-net"
    variant="secondary"
  >
    OctoWare®NET kennenlernen
  </LinkButton>
</div>
    </div>
  );
}
