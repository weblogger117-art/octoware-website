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

          <div>

          </div>

        </div>

      </div>
    </section>
  );
}
