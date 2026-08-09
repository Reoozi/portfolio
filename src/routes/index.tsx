import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Stats } from "@/components/portfolio/Stats";
import { Work } from "@/components/portfolio/Work";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { Process } from "@/components/portfolio/Process";
import { ClosingCta } from "@/components/portfolio/ClosingCta";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yassine Romdhani" },
      {
        name: "description",
        content:
          "Dark, editorial portfolio of Yassine Romdhani: cinematic editing, motion design and polished post-production.",
      },
      { property: "og:title", content: "Yassine Romdhani" },
      {
        property: "og:description",
        content:
          "Dark, editorial portfolio of Yassine Romdhani: cinematic editing, motion design and polished post-production.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Work />
        <Capabilities />
        <Process />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
