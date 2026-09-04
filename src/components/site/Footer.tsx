import { NAV_LINKS } from "./data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-16 md:px-10">
      <div className="mx-auto grid max-w-[92rem] gap-12 text-center md:grid-cols-3 md:text-left">
        <div>
          <span className="block font-display text-lg tracking-[0.18em]">FERNANDO MELO</span>
          <span className="eyebrow mt-2 block text-[0.6rem]">Advocacia Trabalhista</span>
          <p className="mt-5 text-sm text-muted-foreground">Presidente Prudente – SP</p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Navegação do rodapé">
          {NAV_LINKS.filter((l) => l.label !== "Diferenciais").map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm text-muted-foreground">
          <span>OAB/SP — a confirmar</span>
          <a href="#contato" className="transition-colors hover:text-foreground">
            Política de Privacidade
          </a>
          <a href="#contato" className="transition-colors hover:text-foreground">
            Aviso Legal
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[92rem] border-t border-border pt-8 text-center text-xs text-muted-foreground">
        © 2026 Fernando Melo — Todos os direitos reservados.
      </div>
    </footer>
  );
}
