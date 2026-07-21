export function HeroVisual() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">

        {/* Browserleiste */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-5 py-4">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* Dashboard */}
        <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-slate-100 p-8">

          <div className="space-y-6">

            <div className="h-8 w-48 rounded-lg bg-slate-200" />

            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 rounded-xl bg-white shadow-sm" />
              <div className="h-24 rounded-xl bg-white shadow-sm" />
              <div className="h-24 rounded-xl bg-white shadow-sm" />
            </div>

            <div className="h-56 rounded-2xl bg-white shadow-sm" />

          </div>

        </div>

      </div>
    </div>
  );
}
