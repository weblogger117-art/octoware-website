import {
  Globe,
  TabletSmartphone,
  Building2,
  ChartColumn,
  Waypoints,
} from "lucide-react";

const modules = [
  {
    title: "OctoWare®NET",
    subtitle: "Web",
    icon: Globe,
    angle: 0,
  },
  {
    title: "OctoWare®mobile",
    subtitle: "Mobil",
    icon: TabletSmartphone,
    angle: 72,
  },
  {
    title: "Schnittstellen",
    subtitle: "Vernetzung",
    icon: Waypoints,
    angle: 144,
    offsetX: 0,
    offsetY: 70,
  },
  {
    title: "OctoReport®TN 2.0",
    subtitle: "Reporting",
    icon: ChartColumn,
    angle: 216,

    offsetX: -20,
    offsetY: -60,
  },
  {
    title: "OctoWare®TN",
    subtitle: "Desktop",
    icon: Building2,
    angle: 288,
  },
];

export default function PlatformVisualization() {

const radiusX = 270;
const radiusY = 215;

const centerX = 56;
const centerY = 46;

const rotation = 0;
const center = {
  x: centerX,
  y: centerY,
};
  
  return (
    <div className="relative h-[560px] w-full">

      <div
  className="
    absolute

    left-[56%]
    top-1/2

    -translate-x-1/2
    -translate-y-1/2
  "
    >

<div className="flex items-center gap-4">

  <div
    className="
      flex
      h-16
      w-16
      shrink-0
      items-center
      justify-center

      rounded-2xl

      bg-gradient-to-br
      from-[#146ab1]/12
      to-[#adce00]/10

      text-[#146ab1]
    "
  >
    <Icon className="h-8 w-8" />
  </div>

  {modules.map((module) => {

  const angle = ((module.angle + rotation) * Math.PI) / 180;

  const x = Math.cos(angle) * radiusX;
  const y = Math.sin(angle) * radiusY;
  const offsetX = module.offsetX ?? 0;
  const offsetY = module.offsetY ?? 0;
  
  const Icon = module.icon;
  
  return (

    <div
      key={module.title}
      className="
        absolute

        w-64

        -translate-x-1/2
        -translate-y-1/2

        rounded-3xl

        border
        border-[#146ab1]/20

        bg-white/95

        px-5
        py-4

        shadow-[0_18px_45px_rgba(15,23,42,0.10)]
        backdrop-blur

        transition-all
        duration-300

        hover:-translate-y-[55%]
        hover:shadow-2xl
        hover:scale-[1.03]
        hover:border-[#146ab1]/50
      "
      style={{
      left: `calc(${centerX}% + ${x + offsetX}px)`,
      top: `calc(${centerY}% + ${y + offsetY}px)`,
}}

  <div>

    <h4
      className="
        text-base
        font-semibold
        text-slate-900
      "
    >
      {module.title}
    </h4>

    <p
      className="
        mt-1
        text-sm
        text-slate-500
      "
    >
      {module.subtitle}
    </p>

  </div>

</div>

    </div>

  );

})}

  <div
    className="
      rounded-2xl

      bg-gradient-to-r
      from-[#146ab1]
      to-[#1d80cb]

      px-10
      py-6

      text-center

      text-white

      shadow-[0_20px_60px_rgba(20,106,177,.35)]
    "
  >

    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
      Plattform
    </p>

    <h3 className="mt-2 text-2xl font-bold">
      OctoWare®Gesundheit
    </h3>

  </div>

</div>

    </div>
  );
}
