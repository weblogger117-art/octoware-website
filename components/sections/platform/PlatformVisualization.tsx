const modules = [
  {
    title: "OctoWare®NET",
    subtitle: "Browserbasiert",
    angle: 0,
  },
  {
    title: "OctoWare®mobile",
    subtitle: "Mobile Apps",
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

const radius = 180;
const centerX = 56;
const centerY = 50;
  
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
