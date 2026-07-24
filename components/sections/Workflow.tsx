import {
  Inbox,
  Workflow as WorkflowIcon,
  FileText,
  Waypoints,
  ChartColumn,
} from "lucide-react";

const steps = [
  {
    icon: Inbox,
    title: "Erfassung",
    text: "Bürgeranliegen, Meldungen und Anträge digital aufnehmen.",
  },
  {
    icon: WorkflowIcon,
    title: "Bearbeitung",
    text: "Vorgänge strukturiert und regelbasiert verwalten.",
  },
  {
    icon: FileText,
    title: "Dokumentation",
    text: "Dokumente, Vorlagen und Bescheide automatisiert erstellen.",
  },
  {
    icon: Waypoints,
    title: "Schnittstellen",
    text: "DEMIS, Melderegister, Labore und weitere Fachsysteme anbinden.",
  },
  {
    icon: ChartColumn,
    title: "Auswertung",
    text: "Statistiken, Berichte und Kennzahlen auf Knopfdruck erzeugen.",
  },
];

export default function Workflow() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Überschrift */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex
            items-center
            rounded-full
            border
            border-[#146ab1]/20
            bg-[#146ab1]/5
            px-4
            py-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.25em]
            text-[#146ab1]">
            Digitaler Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            So arbeitet OctoWare®
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Vom Eingang einer Meldung bis zur statistischen Auswertung begleitet
            OctoWare® Ihre Mitarbeitenden durch den gesamten Arbeitsprozess –
            effizient, nachvollziehbar und medienbruchfrei.
          </p>

        </div>

        {/* Inhalt kommt im nächsten Schritt */}

      </div>
    </section>
  );
}
