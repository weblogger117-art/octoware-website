export function HeroVisual() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="w-full max-w-3xl rounded-3xl border border-black/5 bg-white shadow-2xl shadow-slate-300/30">
        {/* Browserleiste */}
        <div className="flex items-center gap-2 border-b border-black/5 px-6 py-4">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* Screenshot-Platzhalter */}
        <div className="aspect-[16/10] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
          <span className="text-sm font-medium text-slate-500">
            OctoWare®NET Screenshot
          </span>
        </div>
      </div>
    </div>
  );
}
