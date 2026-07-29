"use client";

import Image from "next/image";
import { LinkButton } from "@/components/ui";
import { useEffect, useRef, useState } from "react";

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
     if (entry.isIntersecting) {
  setIsVisible(true);
  observer.disconnect();
}
    },
    {
      threshold: 0.25,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);
  return (
    <section
  ref={sectionRef}
  className="relative overflow-hidden py-32"
>

      {/* Hintergrund */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <Image
          src="/images/graphics/network-background.svg"
          alt=""
          aria-hidden
          width={2200}
          height={1400}
          className="
            absolute
            left-1/2
            top-1/2
            max-w-none
            -translate-x-1/2
            -translate-y-1/2
            opacity-15
            select-none
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[700px]
            w-[700px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#146ab1]/8
            blur-[170px]
          "
        />

        <div
          className="
            absolute
            right-10
            bottom-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#adce00]/10
            blur-[120px]
          "
        />

      </div>

      <div className="mx-auto max-w-6xl px-6">

        <div className="flex flex-col items-center text-center">

          {/* Maskottchen */}
<div
  className={`
    relative
    hidden
    lg:block
    ${
      isVisible
        ? "opacity-0 animate-[fadeUp_.7s_ease-out_forwards]"
        : "opacity-0"
    }
  `}
>

            <div
              className="
                absolute
                inset-0
                rounded-full
                bg-[#146ab1]/20
                blur-[90px]
              "
            />

            <div
              className="
                absolute
                bottom-10
                right-12
                h-40
                w-40
                rounded-full
                bg-[#adce00]/20
                blur-[70px]
              "
            />

            <Image
              src="/images/mascot/cta.webp"
              alt="OctoWare® Maskottchen"
              width={470}
              height={470}
              priority
              draggable={false}
              className="
                relative
                z-10
                object-contain
                drop-shadow-2xl
                select-none
              "
            />

          </div>

          {/* Badge */}

          <span
            className="
              -mt-2
              inline-flex
              items-center
              rounded-full
              border
              border-[#146ab1]/20
              bg-[#146ab1]/5
              px-4
              py-2
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-[#146ab1]
            "
          >
            Jetzt starten
          </span>

          {/* Überschrift */}

          <h2
            className="
              mt-6
              max-w-5xl
              text-5xl
              font-bold
              tracking-tight
              text-slate-900
            "
          >
            Bereit für die nächste Generation
            <br />
            des Öffentlichen Gesundheitsdienstes?
          </h2>

          {/* Text */}

          <p
            className="
              mx-auto
              mt-8
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
            "
          >
            Lernen Sie OctoWare®Gesundheit kennen und entdecken,
            wie moderne Fachverfahren Gesundheitsämter effizienter,
            digitaler und zukunftssicher machen.
          </p>

          {/* Buttons */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              justify-center
              gap-4
            "
          >
            <LinkButton href="/plattform">
              Plattform entdecken
            </LinkButton>

            <LinkButton
              href="/kontakt"
              variant="secondary"
            >
              Persönliche Beratung
            </LinkButton>
          </div>

        </div>

      </div>

    </section>
  );
}
