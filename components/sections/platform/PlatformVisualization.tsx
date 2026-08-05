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
  },
  {
    title: "OctoReport®TN 2.0",
    subtitle: "Reporting",
    icon: ChartColumn,
    angle: 216,
  },
  {
    title: "OctoWare®TN",
    subtitle: "Desktop",
    icon: Building2,
    angle: 288,
  },
];

export default function PlatformVisualization() {

const radiusX = 220;
const radiusY = 165;

const centerX = 56;
const centerY = 50;

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

  {modules.map((module) => {

  const angle = ((module.angle + rotation) * Math.PI) / 180;

  const x = Math.cos(angle) * radiusX;
  const y = Math.sin(angle) * radiusY;
  const left = `calc(${center.x}% + ${x}px)`;
  const top = `calc(${center.y}% + ${y}px)`;
  
  const Icon = module.icon;
  
  return (

    <div
      key={module.title}
      className="
        absolute

        w-44

        -translate-x-1/2
        -translate-y-1/2

        rounded-2xl

        border
        border-slate-200/80

        bg-white/95

        p-5

        shadow-[0_18px_45px_rgba(15,23,42,0.10)]
        backdrop-blur

        transition-all
        duration-300

        hover:-translate-y-[55%]
        hover:shadow-2xl
        hover:scale-[1.03]
        border-[#146ab1]/50
      "
      style={{
  left,
  top,
}}
    >

<div
  className="
    mb-4

    flex
    h-12
    w-12

    items-center
    justify-center

    rounded-xl

    bg-gradient-to-br
    from-[#146ab1]/12
    to-[#adce00]/10

    text-[#146ab1]
  "
>
  <Icon className="h-6 w-6" />
</div>
      
      <p className="text-xs uppercase tracking-[0.25em] text-[#146ab1]">
        {module.subtitle}
      </p>

      <h4 className="mt-2 text-base font-semibold text-slate-900">
        {module.title}
      </h4>

    </div>

  );

})}

  <div
    className="
      rounded-2xl

      bg-gradient-to-r
      from-[#146ab1]
      to-[#1d80cb]

      px-7
      py-4

      text-center

      text-white

      shadow-[0_20px_60px_rgba(20,106,177,.35)]
    "
  >

    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
      Plattform
    </p>

    <h3 className="mt-2 text-xl font-bold">
      OctoWare®Gesundheit
    </h3>

  </div>

</div>

    </div>
  );
}
