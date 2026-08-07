export default function BrowserBased() {
  return (
    <section className="py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

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
  Arbeiten.
  <br />
  Nicht installieren.
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
    transition-transform
    duration-700
    hover:-translate-y-2
  "
>

  {/* Glow */}
  
<div
  className="
    absolute
    -left-12
    top-1/2

    h-72
    w-72

    -translate-y-1/2

    rounded-full

    bg-[#146ab1]/10

    blur-3xl
  "
/>

{/* Floating Card Online */}
  
<div
    className="
      absolute

      -right-8
      top-10

      z-20

      rounded-2xl

      border
      border-white/60

      bg-white/90

      px-5
      py-3

      shadow-[0_20px_45px_rgba(15,23,42,0.12)]

      backdrop-blur

      animate-pulse
    "
  >

    <div className="flex items-center gap-3">

      <div
        className="
          h-3
          w-3
          rounded-full
          bg-[#adce00]
        "
      />

      <span
        className="
          text-sm
          font-semibold
          text-slate-700
        "
      >
        Online
      </span>

    </div>

  </div>

{/* Browser */}
  
  <div
    className="
      relative
      z-10
      overflow-hidden
      rounded-3xl
      border
      border-slate-200
      bg-white
      shadow-[0_35px_90px_rgba(15,23,42,0.18)]

      ring-1
      ring-white/40
    "
  >

    {/* Browser-Leiste */}

    <div
      className="
        flex
        items-center
        gap-2
        border-b
        border-slate-200
        bg-slate-50
        px-5
        py-4
      "
    >

      <div className="h-3 w-3 rounded-full bg-red-400" />

      <div className="h-3 w-3 rounded-full bg-yellow-400" />

      <div className="h-3 w-3 rounded-full bg-green-400" />

      <div
        className="
          ml-6
          flex-1
          rounded-full
          bg-white
          px-4
          py-2
          text-sm
          text-slate-400
          shadow-inner
        "
      >
        https://octoware-net.de
      </div>

    </div>

   {/* Browser-Inhalt */}

<div
  className="
    relative
    aspect-[16/10]
    overflow-hidden
    bg-slate-950
  "
>

  <video
    autoPlay
    muted
    loop
    playsInline
    className="
      h-full
      w-full
      object-cover
    "
  >
    <source
      src="/videos/octoware-net-demo.mp4"
      type="video/mp4"
    />
  </video>

<div
  className="
    pointer-events-none
    absolute
    inset-0

    bg-gradient-to-b
    from-white/8
    via-transparent
    to-transparent
  "
/>

  <div
  className="
    pointer-events-none
    absolute
    inset-0

    shadow-[inset_0_0_80px_rgba(15,23,42,.18)]
  "
/>
  
  <div
  className="
    absolute
    right-5
    top-5

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

</div>

  </div>

</div>

        </div>

      </div>
    </section>
  );
}
