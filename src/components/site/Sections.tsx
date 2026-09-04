import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Instagram, Plus } from "lucide-react";
import aboutImg from "@/assets/lawyer-about.jpg";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import {
  DIFFERENTIALS,
  FAQS,
  PRACTICE_AREAS,
  PROBLEMS,
  PROCESS,
  WHATSAPP_LINK,
} from "./data";

export function Positioning() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow">Uma advocacia mais próxima</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-8 font-display text-[2.1rem] leading-[1.15] sm:text-5xl lg:text-[3.4rem]">
            Cada situação exige <span className="italic">uma estratégia própria.</span>
          </h2>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-10 max-w-2xl text-[0.95rem] leading-loose text-muted-foreground">
            Nenhum caso trabalhista é igual ao outro. Cada história tem seus documentos, seus
            prazos e seus detalhes — e é a partir dessa leitura individual que a orientação
            jurídica é construída. O atendimento parte da compreensão da sua situação, segue com
            uma análise técnica cuidadosa e termina com uma explicação clara sobre os caminhos
            possíveis.
          </p>
        </Reveal>
        <Reveal delay={340}>
          <div className="mx-auto mt-14 h-px w-24 bg-champagne" />
        </Reveal>
      </div>
    </section>
  );
}

export function PracticeAreas() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="atuacao" className="px-6 pb-28 md:px-10 md:pb-40">
      <div className="mx-auto max-w-[92rem]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div className="text-center lg:sticky lg:top-32 lg:self-start lg:text-left">
            <Reveal>
              <p className="eyebrow">Área de atuação</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-6 font-display text-[2.1rem] leading-tight sm:text-5xl">
                Direito do Trabalho
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mx-auto mt-7 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground lg:mx-0">
                Atuação concentrada em Direito do Trabalho, com foco em orientação, análise
                documental e acompanhamento de trabalhadores e empresas.
              </p>
            </Reveal>
          </div>

          <div>
            {PRACTICE_AREAS.map((area, i) => {
              const isOpen = active === area.number;
              return (
                <Reveal key={area.number} delay={i * 90}>
                  <button
                    type="button"
                    onClick={() => setActive(isOpen ? null : area.number)}
                    onMouseEnter={() => setActive(area.number)}
                    className="group block w-full border-t border-border py-8 text-left last:border-b"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-6">
                      <span
                        className={cn(
                          "font-display text-sm transition-all duration-500",
                          isOpen ? "translate-y-[-4px] text-champagne" : "text-muted-foreground",
                        )}
                      >
                        {area.number}
                      </span>
                      <span
                        className={cn(
                          "font-display transition-all duration-500",
                          isOpen ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
                        )}
                      >
                        {area.title}
                      </span>
                      <Plus
                        className={cn(
                          "ml-auto size-4 shrink-0 text-champagne transition-all duration-500",
                          isOpen ? "rotate-45 opacity-100" : "opacity-0",
                        )}
                        strokeWidth={1}
                      />
                    </div>
                    <div
                      className={cn(
                        "grid transition-all duration-700 ease-out",
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-lg pt-5 pl-12 text-sm leading-relaxed text-muted-foreground">
                          {area.description}
                        </p>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "mt-6 block h-px bg-champagne transition-all duration-700",
                        isOpen ? "w-full" : "w-8",
                      )}
                    />
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClientProblems() {
  return (
    <section className="bg-secondary px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="eyebrow">Como posso ajudar</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-7 max-w-3xl font-display text-[2rem] leading-[1.15] sm:text-5xl">
            Antes de tomar uma decisão, <span className="italic">entenda seus direitos.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p} delay={i * 90}>
              <div className="h-full bg-secondary px-8 py-12 text-left">
                <span className="font-display text-sm text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-display text-xl leading-snug sm:text-2xl">“{p}”</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-14 inline-block border-b border-foreground pb-1 text-[0.72rem] tracking-[0.18em] uppercase transition-colors hover:border-champagne hover:text-champagne"
          >
            Apresentar meu caso →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutLawyer() {
  return (
    <section id="sobre" className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[92rem] items-center gap-14 lg:grid-cols-2 lg:gap-24">
        <Reveal variant="image" className="mx-auto w-full max-w-md lg:max-w-none">
          <img
            src={aboutImg}
            width={1024}
            height={1280}
            loading="lazy"
            alt="Fernando Melo analisando documentos trabalhistas em seu escritório"
            className="aspect-[4/5] w-full object-cover grayscale"
          />
        </Reveal>

        <div className="text-center lg:text-left">
          <Reveal>
            <p className="eyebrow">Sobre</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-6 font-display text-[2.2rem] leading-tight sm:text-5xl">
              Fernando Melo
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-3 text-[0.8rem] tracking-[0.2em] text-champagne uppercase">
              Advogado Trabalhista
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mx-auto mt-8 h-px w-16 bg-border lg:mx-0" />
          </Reveal>
          <Reveal delay={280}>
            <p className="mx-auto mt-8 max-w-lg text-[0.95rem] leading-loose text-muted-foreground lg:mx-0">
              Advogado atuante em Direito do Trabalho, em Presidente Prudente – SP. O trabalho é
              conduzido com escuta atenta, análise técnica e comunicação transparente, para que
              cada cliente compreenda sua situação antes de decidir qualquer passo.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p className="mx-auto mt-6 max-w-lg text-[0.95rem] leading-loose text-muted-foreground lg:mx-0">
              Informações complementares — OAB, formação, especializações e associações
              profissionais — serão publicadas após confirmação.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Differentials() {
  return (
    <section id="diferenciais" className="px-6 pb-28 md:px-10 md:pb-40">
      <div className="mx-auto max-w-[92rem]">
        <Reveal className="text-center">
          <h2 className="mx-auto max-w-2xl font-display text-[2rem] leading-[1.15] sm:text-5xl">
            Uma relação baseada em <span className="italic">confiança.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIALS.map((d, i) => (
            <Reveal key={d.number} delay={i * 110} className="text-center lg:text-left">
              <span className="font-display text-sm text-champagne">{d.number}</span>
              <div className="mx-auto mt-5 h-px w-full max-w-[8rem] bg-border lg:mx-0 lg:max-w-none" />
              <h3 className="mt-6 font-display text-2xl">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EditorialSection() {
  return (
    <section className="bg-foreground px-6 py-32 text-background md:px-10 md:py-44">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-[2.4rem] leading-[1.1] sm:text-6xl lg:text-[4.5rem]">
            Direito não precisa <span className="italic">ser complicado.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-10 max-w-xl text-[0.95rem] leading-loose text-background/70">
            Informação clara é parte fundamental de uma boa orientação jurídica.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block border-b border-champagne pb-1 text-[0.72rem] tracking-[0.18em] text-champagne uppercase"
          >
            Falar sobre meu caso →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[92rem]">
        <Reveal className="text-center">
          <p className="eyebrow">Processo de atendimento</p>
        </Reveal>
        <Reveal delay={100} className="text-center">
          <h2 className="mt-7 font-display text-[2rem] leading-tight sm:text-5xl">
            Do primeiro contato à <span className="italic">estratégia.</span>
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute top-3 left-1/2 hidden h-px w-[76%] -translate-x-1/2 bg-border lg:block" />
          <div className="grid gap-14 lg:grid-cols-4">
            {PROCESS.map((s, i) => (
              <Reveal key={s.number} delay={i * 130} className="text-center">
                <span className="relative z-10 mx-auto block size-1.5 rounded-full bg-champagne" />
                <span className="mt-8 block font-display text-sm text-muted-foreground">
                  {s.number}
                </span>
                <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-secondary px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="eyebrow">FAQ</p>
        </Reveal>
        <Reveal delay={100} className="text-center">
          <h2 className="mt-7 font-display text-[2rem] leading-tight sm:text-5xl">
            Perguntas frequentes
          </h2>
        </Reveal>

        <div className="mt-16">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 70}>
                <div className="border-t border-border last:border-b">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-display text-lg sm:text-xl">{f.q}</span>
                    <Plus
                      className={cn(
                        "size-4 shrink-0 text-champagne transition-transform duration-500",
                        isOpen && "rotate-45",
                      )}
                      strokeWidth={1}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-700 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-foreground px-6 py-28 text-background md:px-10 md:py-40">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <p className="text-[0.68rem] tracking-[0.28em] text-champagne uppercase">
            Precisa de orientação?
          </p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-8 font-display text-[2.2rem] leading-[1.12] sm:text-6xl">
            Seu próximo passo começa <span className="italic">com informação.</span>
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <p className="mx-auto mt-8 max-w-xl text-[0.95rem] leading-loose text-background/70">
            Entre em contato para apresentar sua situação e entender como podemos orientar você.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block bg-background px-10 py-4 text-[0.72rem] tracking-[0.18em] text-foreground uppercase transition-opacity duration-500 hover:opacity-85"
          >
            Falar com Fernando Melo →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  const items = [
    { icon: Phone, label: "Telefone", value: "A confirmar" },
    { icon: Mail, label: "E-mail", value: "A confirmar" },
    { icon: MapPin, label: "Endereço", value: "Presidente Prudente – SP" },
    { icon: Clock, label: "Horário", value: "Segunda a sexta, mediante agendamento" },
    { icon: Instagram, label: "Instagram", value: "A confirmar" },
  ];

  return (
    <section id="contato" className="px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[92rem]">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="eyebrow">Contato</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-7 font-display text-[2rem] leading-tight sm:text-5xl">
                Fernando Melo
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-3 text-[0.8rem] tracking-[0.2em] text-muted-foreground uppercase">
                Advogado Trabalhista — Presidente Prudente – SP
              </p>
            </Reveal>
            <Reveal delay={240}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-block border border-foreground px-9 py-4 text-[0.72rem] tracking-[0.18em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-primary-foreground"
              >
                Agendar atendimento →
              </a>
            </Reveal>
          </div>

          <div>
            {items.map((it, i) => (
              <Reveal key={it.label} delay={i * 80}>
                <div className="flex items-center gap-5 border-t border-border py-6 last:border-b">
                  <it.icon className="size-4 text-champagne" strokeWidth={1.2} aria-hidden />
                  <span className="eyebrow w-28 shrink-0 text-[0.6rem]">{it.label}</span>
                  <span className="text-sm text-muted-foreground">{it.value}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
