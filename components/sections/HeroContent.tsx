import Image from "next/image";
import { LinkButton } from "@/components/ui";
import { Heading } from "@/components/typography";

export function HeroContent() {
  return (
    <div className="flex max-w-lg flex-col items-start">

      {/* Produktlogo */}
      <div
        className="
          -ml-12
          -mt-4
          mb-8
          xl:-ml-14
        "
      >
        <Image
          src="/images/branding/octoware-logo.png"
          alt="OctoWare®"
          width={620}
          height={148}
          priority
          draggable={false}
          className="
            h-32
            xl:h-36
            w-auto
            select-none
          "
        />
      </div>

      <Heading
        className="mt-0"
        as="h1"
        title="Die Softwareplattform für den öffentlichen Gesundheitsdienst."
        description="OctoWare®NET vereint moderne Fachverfahren, digitale Bürgerdienste und effiziente Prozesse auf einer zentralen Plattform."
      />

      <div className="mt-10 flex flex-wrap gap-4">
        <LinkButton href="/plattform">
          Plattform entdecken
        </LinkButton>

        <LinkButton
          href="/octoware-net"
          variant="secondary"
        >
          OctoWare®NET kennenlernen
        </LinkButton>
      </div>
    </div>
  );
}
