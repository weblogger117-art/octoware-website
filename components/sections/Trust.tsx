import Image from "next/image";
export default function Trust() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      <div
  className="
    absolute
    inset-0
    overflow-hidden
    pointer-events-none
    -z-0
  "
>
  {/* Blauer Glow */}
  <div
    className="
      absolute
      left-1/2
      top-24
      h-[650px]
      w-[650px]
      -translate-x-1/2
      rounded-full
      bg-[#146ab1]/5
      blur-[140px]
    "
  />

  {/* Grüner Glow */}
  <div
    className="
      absolute
      right-0
      bottom-0
      h-[420px]
      w-[420px]
      rounded-full
      bg-[#adce00]/5
      blur-[120px]
    "
  />

  {/* Netzwerkgrafik */}
    <Image
  src="/images/graphics/network-background.svg"
  alt=""
  aria-hidden="true"
  width={3000}
  height={1800}
  draggable={false}
  className="
    absolute

    left-[1%]
    top-[50%]

    w-[2300px]
    max-w-none

    -translate-x-1/2
    -translate-y-1/2

    opacity-60

    z-0

    pointer-events-none
    select-none
  "
/>
</div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Überschrift */}
        <div className="mx-auto max-w-3xl text-center">

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
            Vertrauen
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight text-slate-900">
            Warum Gesundheitsämter
            <br />
            auf easy-soft vertrauen.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Seit vielen Jahren entwickeln wir Software
            für den Öffentlichen Gesundheitsdienst –
            praxisnah, zuverlässig und gemeinsam mit unseren Kunden.
          </p>

        </div>

          <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1fr_480px]">
            
            <div className="relative z-10 grid gap-8 md:grid-cols-2">

  <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#146ab1]/30 hover:bg-white hover:shadow-xl hover:shadow-[#146ab1]/15">
    <div className="text-6xl font-bold text-[#146ab1]">
      35+
    </div>

    <p className="mt-6 text-base font-semibold text-slate-900">
      Jahre Erfahrung
    </p>

    <p className="mt-2 text-sm leading-6 text-slate-600">
      Spezialisierte Softwareentwicklung für den Öffentlichen Gesundheitsdienst.
    </p>
  </div>
  <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#146ab1]/30 hover:bg-white hover:shadow-xl hover:shadow-[#146ab1]/15">
    <div className="text-6xl font-bold text-[#146ab1]">
      130+
    </div>

    <p className="mt-6 text-base font-semibold text-slate-900">
      Gesundheitsämter
    </p>

    <p className="mt-2 text-sm leading-6 text-slate-600">
      Vertrauen täglich auf Lösungen von easy-soft.
    </p>
  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#146ab1]/30 hover:bg-white hover:shadow-xl hover:shadow-[#146ab1]/15">
  <div className="text-6xl font-bold text-[#146ab1]">
  WEB
</div>

<p className="mt-6 text-base font-semibold text-slate-900">
  Browserbasiert
</p>

<p className="mt-2 text-sm leading-6 text-slate-600">
  Mit OctoWare®NET – flexibel, plattformunabhängig und ohne lokale Installation.
</p>
  </div>

  <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#146ab1]/30 hover:bg-white hover:shadow-xl hover:shadow-[#146ab1]/15">
    <div className="text-6xl font-bold text-[#146ab1]">
      ∞
    </div>

    <p className="mt-6 text-base font-semibold text-slate-900">
      Kontinuierliche Weiterentwicklung
    </p>

    <p className="mt-2 text-sm leading-6 text-slate-600">
      Gesetzliche Änderungen, neue Funktionen und moderne Schnittstellen werden kontinuierlich umgesetzt.
    </p>
  </div>
              </div>
            
              <div className="hidden lg:flex items-center justify-center">

  <Image
              src="/images/mascot/trust.png"
              alt="easy-soft Maskottchen"
              width={560}
              height={560}
              className="
    realtive
    z-10
                object-contain
                translate-x-10
                transition-transform
                duration-500
                hover:scale-105
              "
            />

          </div>

        </div>

      </div>
    </section>
  );
}
