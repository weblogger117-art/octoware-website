const modules = [
  {
    title: "OctoWare®NET",
    subtitle: "Web",
    angle: 0,
  },
  {
    title: "OctoWare®mobile",
    subtitle: "Mobil",
    angle: 72,
  },
  {
    title: "Schnittstellen",
    subtitle: "Vernetzung",
    angle: 144,
  },
  {
    title: "OctoReport®TN 2.0",
    subtitle: "Reporting",
    angle: 216,
  },
  {
    title: "OctoWare®TN",
    subtitle: "Desktop",
    angle: 288,
  },
];

export default function PlatformVisualization() {

const radiusX = 220;
const radiusY = 165;

const centerX = 56;
const centerY = 50;

const rotation = 0;
  
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

        bg-white/90

        p-5

        shadow-lg
        backdrop-blur

        transition-all
        duration-300

        hover:-translate-y-[55%]
        hover:shadow-2xl
      "
      style={{
        left: `calc(${centerX}% + ${x}px)`,
        top: `calc(${centerY}% + ${y}px)`,
      }}
    >

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
