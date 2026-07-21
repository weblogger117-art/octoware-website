import { Laptop } from "@/components/ui";

export function HeroVisual() {
  return (
    <div className="flex justify-center lg:justify-end">
      <Laptop>

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

      </Laptop>
    </div>
  );
}
