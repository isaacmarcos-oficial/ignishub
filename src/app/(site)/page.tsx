import Hero from "./_components/hero";
import Services from "./_components/services";
import ItsZap from "./_components/itszap";
import Projects from "./_components/projects";
import FAQ from "./_components/faq";

export default function Home() {
  return (
    <main className="bg-background">
      <Hero />
      <Services />
      <ItsZap />
      <Projects />
      <FAQ />
    </main>
  );
}
