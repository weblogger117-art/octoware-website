import Image from "next/image";
import { LinkButton } from "@/components/ui";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Hintergrund */}
      <div
        className="
          absolute
          inset-0
          -z-10
          overflow-hidden
        "
      >
        {/* Netzwerk */}
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
            right-20
            bottom-0
            h-[350px]
            w-[350px]
            rounded-full
            bg-[#adce00]/10
            blur-[120px]
          "
        />
      </div>

      <div className="mx-auto max-w-7xl px-6">

        <div
          className="
            relative
            overflow-hidden
            rounded-[40px]
            border
            border-slate-200
            bg-white/80
            backdrop-blur-sm
            shadow-[0_40px_80px_rgba(15,23,42,0.08)]
          "
        >

          <div
            className="
              grid
              items-center
              gap-14
              px-16
              py-20
              lg:grid-cols-[1fr_320px]
            "
          >

            {/* Textbereich */}

            <div>

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

              <h2
                className="
                  mt-8
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

              <p
                className="
                  mt-8
                  max-w-2xl
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                Lernen Sie OctoWare®Gesundheit kennen und entdecken
                Sie, wie moderne Fachverfahren Gesundheitsämter
                effizienter, digitaler und zukunftssicher machen.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

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

           <div
  className="
    relative
    hidden
    lg:flex
    items-end
    justify-center
  "
>

  {/* Sprechblase */}
  <div
    className="
      absolute
      -top-6
      left-6
      z-20
    "
  >
    <div
      className="
        relative
        rounded-2xl
        bg-white
        px-5
        py-3
        text-sm
        font-semibold
        text-slate-700
        shadow-xl
        border
        border-slate-200
      "
    >
      Lernen wir uns kennen!

      {/* Pfeil */}
      <div
        className="
          absolute
          -bottom-2
          left-10
          h-4
          w-4
          rotate-45
          border-b
          border-r
          border-slate-200
          bg-white
        "
      />
    </div>
  </div>

  {/* Glow */}
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

  <Image
    src="/images/mascot/cta.webp"
    alt="OctoWare® Maskottchen"
    width={340}
    height={340}
    priority
    className="
      relative
      z-10
      object-contain
      drop-shadow-2xl
    "
  />

</div>

          </div>

        </div>

      </div>

    </section>
  );
}
