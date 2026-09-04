import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, WHATSAPP_LINK } from "./data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[92rem] items-center justify-between px-6 transition-all duration-700 md:px-10",
          scrolled ? "h-16" : "h-24",
        )}
      >
        <a href="#inicio" className="leading-none" aria-label="Fernando Melo — início">
          <span className="block font-display text-lg tracking-[0.18em] text-foreground md:text-xl">
            FERNANDO MELO
          </span>
          <span className="eyebrow mt-1 block text-[0.6rem]">Advocacia Trabalhista</span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[0.8rem] tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-foreground px-6 py-3 text-[0.72rem] tracking-[0.18em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-primary-foreground"
          >
            Falar com o advogado
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="p-2 lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-8 bg-background transition-all duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        {NAV_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-3xl text-foreground"
          >
            {l.label}
          </a>
        ))}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="mt-4 border border-foreground px-8 py-4 text-[0.72rem] tracking-[0.18em] uppercase"
        >
          Falar com o advogado
        </a>
      </div>
    </header>
  );
}
