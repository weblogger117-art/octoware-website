import { Badge, LinkButton } from "@/components/ui";
import { Heading } from "@/components/typography";

export function HeroContent() {
  return (
    <div className="flex max-w-xl flex-col items-start">
      <Badge>NEXT GENERATION</Badge>

      <Heading
  as="h1"
  className="mt-8 max-w-2xl"
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
