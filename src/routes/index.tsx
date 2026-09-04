import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import {
  AboutLawyer,
  ClientProblems,
  Contact,
  Differentials,
  EditorialSection,
  Faq,
  FinalCTA,
  PracticeAreas,
  Positioning,
  Process,
} from "@/components/site/Sections";
import { FAQS } from "@/components/site/data";

const TITLE = "Fernando Melo | Advogado Trabalhista em Presidente Prudente";
const DESCRIPTION =
  "Fernando Melo, advogado trabalhista em Presidente Prudente – SP. Orientação jurídica e atendimento personalizado em Direito do Trabalho.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Fernando Melo — Advocacia Trabalhista",
          description: DESCRIPTION,
          areaServed: "Presidente Prudente, SP",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Presidente Prudente",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          knowsAbout: ["Direito do Trabalho", "Consultoria Trabalhista"],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Positioning />
        <PracticeAreas />
        <ClientProblems />
        <AboutLawyer />
        <Differentials />
        <EditorialSection />
        <Process />
        <Faq />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
