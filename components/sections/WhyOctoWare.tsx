import { Section } from "@/components/ui";

export function WhyOctoWare() {
  return (
    <Section className="pt-2 lg:pt-8">
      <div className="mx-auto max-w-3xl text-center">
        <span
          className="
            inline-flex
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
            text-[#146ab1]
          "
        >
          Warum OctoWare®Gesundheit?
        </span>

        <h2
          className="
            mt-6
            text-4xl
            font-bold
            tracking-tight
            text-slate-900
            lg:text-5xl
          "
        >
          Eine Plattform für den modernen
          <br />
          Öffentlichen Gesundheitsdienst.
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-2xl
            text-lg
            leading-8
            text-slate-600
          "
        >
          Von der Sachbearbeitung bis zur digitalen Zusammenarbeit –
          OctoWare®NET unterstützt Gesundheitsämter mit modernen
          Fachverfahren, intelligenten Schnittstellen und einer
          zukunftssicheren Webplattform.
        </p>
      </div>
    </Section>
  );
}
