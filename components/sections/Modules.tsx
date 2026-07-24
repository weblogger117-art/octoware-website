import {
  Baby,
  ShieldPlus,
  Smile,
  Stethoscope,
  HeartPulse,
  Building2,
  FlaskConical,
  Users,
} from "lucide-react";

const modules = [
  {
    icon: ShieldPlus,
    title: "Infektionsschutz",
    features: [
      "DEMIS",
      "Kontaktpersonen",
      "Labormeldungen",
      "Auswertungen",
    ],
  },
  {
    icon: Baby,
    title: "Kinder- & Jugendgesundheit",
    features: [
      "Schuluntersuchungen",
      "Vorsorgen",
      "Dokumentation",
      "Statistiken",
    ],
  },
  {
    icon: Smile,
    title: "Zahnärztlicher Dienst",
    features: [
      "Befunde",
      "Reihenuntersuchungen",
      "LAGZ",
      "Berichte",
    ],
  },
  {
    icon: Stethoscope,
    title: "Medizinalaufsicht",
    features: [
      "Einrichtungen",
      "Kontrollen",
      "Bescheide",
      "Auswertungen",
    ],
  },
  {
    icon: FlaskConical,
    title: "Kommunalhygiene",
    features: [
      "Trinkwasser",
      "Badewasser",
      "Proben",
      "Labor",
    ],
  },
  {
    icon: HeartPulse,
    title: "Schutzimpfungen",
    features: [
      "Impfkampagnen",
      "Dokumentation",
      "Serien",
      "Statistik",
    ],
  },
  {
    icon: Users,
    title: "Beratung & Betreuung",
    features: [
      "Psychiatrie",
      "Sucht",
      "Tumorberatung",
      "Schwangerenberatung",
    ],
  },
  {
    icon: Building2,
    title: "Weitere Fachverfahren",
    features: [
      "Modular",
      "Erweiterbar",
      "Schnittstellen",
      "Cloudfähig",
    ],
  },
];
export default function Modules() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-[#146ab1]/15 bg-[#146ab1]/5 px-4 py-1 text-sm font-medium text-[#146ab1]">
            Fachverfahren
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
            Alle Fachverfahren.
            <br />
            Eine Plattform.
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            OctoWare®Gesundheit unterstützt sämtliche Aufgaben des Öffentlichen
            Gesundheitsdienstes – modular, integriert und zukunftssicher.
          </p>

        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <div
                key={module.title}
                className="
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#146ab1]/40
                  hover:shadow-xl
                "
              >
                <div className="mb-6 inline-flex rounded-2xl bg-[#146ab1]/10 p-3 text-[#146ab1]">
                  <Icon size={30} />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {module.title}
                </h3>

                <div className="mt-6 space-y-3">

  {module.features.map((feature) => (

    <div
      key={feature}
      className="
        flex
        items-center
        gap-2
        text-sm
        text-slate-600
      "
    >
      <div className="h-2 w-2 rounded-full bg-[#adce00]" />

      {feature}

    </div>

  ))}

</div>

<div
  className="
    mt-8
    flex
    items-center
    text-sm
    font-medium
    text-[#146ab1]
    opacity-0
    transition-all
    duration-300
    group-hover:opacity-100
"
>

  Mehr erfahren →

</div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
