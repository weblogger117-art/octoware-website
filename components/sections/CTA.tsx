import Image from "next/image";
import { LinkButton } from "@/components/ui";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

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

        {/* Blauer Glow */}
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

        {/* Grüner Glow */}
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

        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >

          {/* Maskottchen */}
          <div
            className="
              relative
              hidden
              lg:flex
              justify-center
              -mb-12
            "
          >

            {/* Blauer Glow */}
            <div
              className="
                absolute
                bottom-8
                h-72
                w-72
                rounded-full
                bg-[#146ab1]/20
                blur-[90px]
              "
            />

            {/* Grüner Glow */}
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

            {/* Sprechblase */}
            <div
              className="
                absolute
                -top-10
                left-1/2
                -translate-x-1/2
                z-20
              "
            >
              <div
                className="
                  relative
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  px-7
                  py-5
                  text-base
                  font-semibold
                  text-slate-700
                  shadow-xl
                "
              >
                Lernen wir uns kennen!

                <div
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    h-4
                    w-4
                    -translate-x-1/2
                    rotate-45
                    border-b
                    border-r
                    border-slate-200
                    bg-white
                  "
                />
              </div>
            </div>

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
  -mb-24
  object-contain
  drop-shadow-2xl
  select-none
"
            />

          </div>

          {/* Badge */}
          <span
            className="
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
              mt-8
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
              mt-8
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
