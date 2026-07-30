import { PageBackground } from "@/components/ui/PageBackground";
import { Hero, Highlights, WhyOctoWare, Modules, Workflow, Trust, CTA } from "@/components/sections";

export default function HomePage() {
  return (
    <PageBackground>
      <Hero />
      <Highlights />
      <WhyOctoWare />
      <Modules />
      <Workflow />
      <Trust />
      <CTA />
    </PageBackground>
  );
}
