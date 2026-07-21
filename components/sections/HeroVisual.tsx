import { Laptop } from "@/components/ui";

export function HeroVisual() {
  return (
    <div className="flex justify-center lg:justify-end lg:rotate-[-2deg]">
      <Laptop>

        <div className="aspect-[16/10] bg-slate-100 p-6">

  <div className="grid h-full grid-cols-[220px_1fr] gap-6">

    {/* Sidebar */}

    <div className="rounded-2xl bg-white p-5 shadow-sm">

      <div className="mb-8 h-8 w-28 rounded bg-slate-200" />

      <div className="space-y-4">
        <div className="h-4 rounded bg-slate-200" />
        <div className="h-4 rounded bg-slate-200" />
        <div className="h-4 w-4/5 rounded bg-slate-200" />
        <div className="h-4 w-2/3 rounded bg-slate-200" />
      </div>

    </div>

    {/* Inhalt */}

    <div className="space-y-5">

      <div className="grid grid-cols-3 gap-4">

        <div className="h-24 rounded-2xl bg-white shadow-sm" />
        <div className="h-24 rounded-2xl bg-white shadow-sm" />
        <div className="h-24 rounded-2xl bg-white shadow-sm" />

      </div>

      <div className="h-52 rounded-2xl bg-white shadow-sm" />

      <div className="grid grid-cols-2 gap-4">

        <div className="h-28 rounded-2xl bg-white shadow-sm" />
        <div className="h-28 rounded-2xl bg-white shadow-sm" />

      </div>

    </div>

  </div>

</div>

      </Laptop>
    </div>
  );
}
