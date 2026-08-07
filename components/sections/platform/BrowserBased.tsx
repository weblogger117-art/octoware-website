import { RefreshCw } from "lucide-react";

export default function BrowserBased() {
  return (
    <section className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div
  className="
    grid
    items-center
    gap-20

    lg:grid-cols-[0.9fr_1.1fr]
  "
>

          {/* Linke Seite */}

<div>

   {/* Status */}
  <div
    className="
      inline-flex
      items-center
      gap-3

      rounded-full

      border
      border-[#146ab1]/20

      bg-[#146ab1]/5

      px-5
      py-2
    "
  >
    <span className="text-slate-300">•</span>

    <span className="text-sm text-slate-600">
      Plattform
    </span>

    <span className="h-2 w-2 rounded-full bg-[#adce00]" />
    
    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#146ab1]">
      Browserbasiert
    </span>

    <span className="text-slate-300">•</span>

    <span className="text-sm text-slate-600">
      Modular
    </span>

  </div>

  {/* Überschrift */}
  
  <h2
  className="
    mt-8
    max-w-xl
    text-5xl
    font-bold
    leading-tight
    text-slate-900
  "
>
  KLICKEN.
  <br />
  ANMELDEN. LOSLEGEN.
</h2>

{/* Beschreibung */}
  
  <p
  className="
    mt-8
    max-w-xl
    text-lg
    leading-8
    text-slate-600
  "
>
  Mit OctoWare®NET arbeiten Gesundheitsämter vollständig
  browserbasiert – ohne lokale Installation. Updates,
  Wartung und neue Funktionen stehen zentral bereit und
  sind sofort für alle Benutzer verfügbar.
</p>

</div>
{/* Rechte Seite */}

<div
  className="
    relative
    flex
    justify-center

    lg:-translate-x-10
    lg:-translate-y-8
  "
>

  {/* Glow */}

  <div
    className="
      absolute

      left-1/2
      top-1/2

      h-[420px]
      w-[420px]

      -translate-x-1/2
      -translate-y-1/2

      rounded-full

      bg-[#146ab1]/12

      blur-[120px]
    "
  />

  {/* Browser */}

  <div
    className="
      relative

      z-10

      w-[900px]

      overflow-hidden

      rounded-[30px]

      border
      border-slate-200

      bg-white

      shadow-[0_55px_120px_rgba(15,23,42,.22)]

      ring-1
      ring-white/60
    "
  >

    {/* Browser-Leiste */}

    <div
      className="
        flex
        items-center
        gap-2

        border-b
        border-white/70

        bg-gradient-to-b
        from-white
        via-white
        to-slate-100

        px-5
        py-5
      "
    >

      <div className="h-3 w-3 rounded-full bg-red-400" />
      <div className="h-3 w-3 rounded-full bg-yellow-400" />
      <div className="h-3 w-3 rounded-full bg-green-400" />

      <div
        className="
  ml-6
  flex-1

  flex
  items-center
  gap-3

  rounded-full

  border
  border-slate-200/70

  bg-white/90

  px-4
  py-2

  text-sm
  text-slate-500

  shadow-[inset_0_1px_2px_rgba(255,255,255,.9)]

  backdrop-blur-sm
"
        ></div>
        https://octoware-net.de
      </div>

    </div>

    {/* Browser-Inhalt */}

    <div
  className="
    relative

    aspect-[16/9]

    overflow-hidden

    p-2
  "
>

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
    absolute
    inset-0

    h-full
    w-full

    object-cover

    rounded-b-[24px]
  "
>

        <source
          src="/videos/octoware-net-demo.mp4"
          type="video/mp4"
        />

      </video>

      {/* Lichtverlauf */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-white/8
          via-transparent
          to-transparent
        "
      />

      {/* Vignette */}

      <div
        className="
          absolute
          inset-0

          shadow-[inset_0_0_80px_rgba(15,23,42,.18)]
        "
      />

      {/* Live Demo */}

      <div
        className="
          absolute

          bottom-6
          left-6

          flex
          items-center
          gap-2

          rounded-full

          border
          border-white/15

          bg-black/40

          px-4
          py-2

          backdrop-blur-md
        "
      >

        <span
          className="
            relative

            flex
            h-3
            w-3
          "
        >

          <span
            className="
              absolute
              inline-flex

              h-full
              w-full

              animate-ping

              rounded-full

              bg-[#adce00]

              opacity-60
            "
          />

          <span
            className="
              relative
              inline-flex

              h-3
              w-3

              rounded-full

              bg-[#adce00]
            "
          />

        </span>

        <span
          className="
            text-xs
            font-semibold

            uppercase

            tracking-[0.18em]

            text-white
          "
        >
          Live Demo
        </span>

      </div>

      {/* Lichtanimation */}

      <div
        className="
          absolute
          inset-y-0
          -left-1/2

          w-1/3

          -skew-x-12

          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent

          animate-browser-light
        "
      />

    </div>

  </div>

</div>

          </div>
        </div>
    </section>
  );
}
