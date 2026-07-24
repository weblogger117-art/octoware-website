import Image from "next/image";
import { LinkButton } from "@/components/ui";
import { Heading } from "@/components/typography";

export function HeroContent() {
  return (
    <div className="flex max-w-lg flex-col items-start">
      <div
  className="
    inline-flex
    items-center

    rounded-2x1

    border
    border-[#c5d7ed]

    bg-white/75

    px-5
    py-2

    backdrop-blur-md

    shadow-sm
  "
>
  <Image
    src="/images/branding/octoware-logo.png"
    alt="OctoWare®"
    width={260}
    height={62}
    priority
    draggable={false}
    className="
      h-9
      w-auto
      select-none
    "
  />
</div>

      <Heading
        className="mt-4"
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
