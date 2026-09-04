import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "./data";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-foreground text-primary-foreground shadow-lg transition-all duration-500 hover:opacity-90 md:size-auto md:rounded-full md:px-6 md:py-4"
    >
      <MessageCircle className="size-5 md:mr-3" strokeWidth={1.2} />
      <span className="hidden text-[0.7rem] tracking-[0.16em] uppercase md:inline">
        Falar pelo WhatsApp
      </span>
    </a>
  );
}
