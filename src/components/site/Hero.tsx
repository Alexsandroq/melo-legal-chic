import heroImg from "@/assets/lawyer-hero.jpg";
import { WHATSAPP_LINK } from "./data";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 md:pt-32">
      <div className="mx-auto grid max-w-[92rem] items-center gap-14 px-6 pb-20 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-28">
        <div className="reveal mx-auto max-w-xl text-center lg:mx-0 lg:text-left" data-visible="true">
          <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-1000">
            Advocacia Trabalhista
          </p>
          <h1 className="mt-7 font-display text-[2.6rem] leading-[1.05] text-foreground animate-in fade-in slide-in-from-bottom-3 duration-1000 sm:text-6xl lg:text-[4.2rem]">
            Estratégia jurídica
            <br />
            para proteger
            <br />
            <span className="italic">o que é seu.</span>
          </h1>
          <div className="mx-auto mt-8 h-px w-16 bg-champagne lg:mx-0" />
          <p className="mx-auto mt-8 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground lg:mx-0">
            Atuação dedicada ao Direito do Trabalho, com atendimento personalizado, análise
            cuidadosa e orientação jurídica responsável.
          </p>
          <div className="mt-11 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-foreground px-9 py-4 text-center text-[0.72rem] tracking-[0.18em] text-primary-foreground uppercase transition-opacity duration-500 hover:opacity-85 sm:w-auto"
            >
              Falar com Fernando Melo →
            </a>
            <a
              href="#atuacao"
              className="w-full border border-border px-9 py-4 text-center text-[0.72rem] tracking-[0.18em] uppercase transition-colors duration-500 hover:border-foreground sm:w-auto"
            >
              Conhecer atuação
            </a>
          </div>
        </div>

        <div className="reveal-img relative mx-auto w-full max-w-md lg:max-w-none" data-visible="true">
          <img
            src={heroImg}
            width={1024}
            height={1408}
            alt="Fernando Melo, advogado trabalhista, em seu escritório em Presidente Prudente"
            className="aspect-[3/4] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 border border-champagne/30" />
        </div>
      </div>

      <div className="hidden flex-col items-center gap-3 pb-12 lg:flex">
        <span className="eyebrow text-[0.6rem]">Scroll to explore</span>
        <span className="scroll-line block h-12 w-px bg-champagne" />
      </div>
    </section>
  );
}
