import Image from "next/image";
import { Button } from "@/components/ui/Button";
export default function PlatformHero() {
  return (
    <section className="relative overflow-hidden py-32">

      <div className="mx-auto max-w-7xl px-6">

        <Image
  src="/images/background/lines-mesh-es.webp"
  alt=""
  width={1200}
  height={1200}
  draggable={false}
  className="
    pointer-events-none
    absolute

    right-[-260px]
    top-[-140px]

    w-[1200px]
    max-w-none

    opacity-25

    z-0

    select-none
  "
/>

        <div className="relative z-10 grid items-center gap-20 lg:grid-cols-2">

          {/* Linke Spalte */}

          <div>

          </div>

          {/* Rechte Spalte */}

          <div>

          </div>

        </div>

      </div>

    </section>
  );
}
