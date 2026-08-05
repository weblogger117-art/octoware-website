import {
  Globe,
  TabletSmartphone,
  Building2,
  ChartColumn,
  Waypoints,
} from "lucide-react";

type Module = {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  x: number;
  y: number;
  port: "top" | "bottom" | "left" | "right";
};

const modules: Module[] = [
  {
    title: "OctoWare®NET",
    subtitle: "Web",
    icon: Globe,
    x: 18,
    y: 14,
    port: "bottom",
  },
  {
    title: "OctoWare®mobile",
    subtitle: "Mobil",
    icon: TabletSmartphone,
    x: 82,
    y: 14,
    port: "bottom",
  },
  {
    title: "Schnittstellen",
    subtitle: "Vernetzung",
    icon: Waypoints,
    x: 90,
    y: 46,
    port: "left",
  },
  {
    title: "OctoReport®TN 2.0",
    subtitle: "Reporting",
    icon: ChartColumn,
    x: 82,
    y: 78,
    port: "top",
  },
  {
    title: "OctoWare®TN",
    subtitle: "Desktop",
    icon: Building2,
     x: 18,
    y: 78,
    port: "top",
  },
];

function getModulePort(module: Module) {
  switch (module.port) {
    case "top":
      return {
        x: module.x,
        y: module.y - 6,
      };

    case "bottom":
      return {
        x: module.x,
        y: module.y + 6,
      };

    case "left":
      return {
        x: module.x - 14,
        y: module.y,
      };

    case "right":
      return {
        x: module.x + 14,
        y: module.y,
      };
    default:
      return {
        x: module.x,
        y: module.y,
      };
  }
}

export default function PlatformVisualization() {

  const platform = {
  x: 30,
  y: 46,
};
  const platformPorts = {
  top: {
    x: platform.x,
    y: platform.y - 8,
  },

  right: {
    x: platform.x + 14,
    y: platform.y,
  },

  bottom: {
    x: platform.x,
    y: platform.y + 8,
  },
};

  return (
    <div className="relative h-[560px] w-full">

<svg
  className="absolute inset-0 h-full w-full pointer-events-none"
  viewBox="0 0 100 100"
  preserveAspectRatio="none"
>

  {modules.map((module) => {

  const modulePort = getModulePort(module);

  return (
    <path
      key={module.title}
      d={`
        M ${platformPorts.right.x} ${platformPorts.right.y}
        C
          ${platformPorts.right.x + 10} ${platformPorts.right.y},
          ${modulePort.x - 10} ${modulePort.y},
          ${modulePort.x} ${modulePort.y}
      `}
      fill="none"
      stroke="#146ab1"
      strokeWidth="0.35"
      opacity="0.22"
    />
  );

})}

  <circle
  cx={platform.x + 6}
  cy={platform.y}
  r="0.7"
  fill="#146ab1"
/>

<circle
  cx={modules[0].x + 10}
  cy={modules[0].y}
  r="0.7"
  fill="#146ab1"
/>

</svg>
      
      {/* Plattform */}

      <div
  className="
    absolute
    -translate-x-1/2
    -translate-y-1/2
  "
  style={{
    left: `${platform.x}%`,
    top: `${platform.y}%`,
  }}
>
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

      {/* Module */}

      {modules.map((module) => {

        const Icon = module.icon;
        const modulePort = getModulePort(module);

        return (
          <div
  key={module.title}
  className="
    absolute
    -translate-x-1/2
    -translate-y-1/2
  "
  style={{
  left: `${module.x}%`,
  top: `${module.y}%`,
}}
>
            <div
  className="
    group

    w-72

    rounded-3xl

    border
    border-[#146ab1]/20

    bg-white/95

    px-5
    py-4

    backdrop-blur

    shadow-[0_18px_45px_rgba(15,23,42,0.10)]

    transition-all
    duration-300

   
    hover:border-[#146ab1]/35
    hover:shadow-[0_24px_55px_rgba(20,106,177,0.12)]
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

    transition-all
    duration-300

    group-hover:scale-105
    group-hover:from-[#146ab1]/18
    group-hover:to-[#adce00]/18
    group-hover:shadow-[0_0_22px_rgba(173,206,0,.18)]
  "
>
                <Icon
  className="
    h-8
    w-8

    transition-all
    duration-300

    group-hover:scale-110
  "
/>
              </div>

              <div>
  <h4
    className="
      text-base
      font-semibold
      text-slate-900

      transition-colors
      duration-300

      group-hover:text-[#146ab1]
    "
  >
    {module.title}
  </h4>

  <p className="mt-1 text-sm text-slate-500">
    {module.subtitle}
  </p>
</div>
            </div>
          </div>
            </div>
        );
      })}
    </div>
  );
}
