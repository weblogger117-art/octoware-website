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

    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#146ab1]">
      Plattform
    </span>

    <span className="h-2 w-2 rounded-full bg-[#adce00]" />
    
    <span className="text-sm text-slate-600">
      Browserbasiert
    </span>

    <span className="text-slate-300">•</span>

    <span className="text-sm text-slate-600">
      Modular
    </span>

  </div>

</div>
          {/* Rechte Seite */}

          <div>

          </div>

        </div>

      </div>
    </section>
  );
}
