import { PageBackground } from "@/components/ui/PageBackground";
import { Hero, Highlights, WhyOctoWare, Modules, Workflow, Trust, CTA, Footer } from "@/components/sections";

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
      <Footer />
    </PageBackground>
  );
}
