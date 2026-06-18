import { FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/contact";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-pulse-ring" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-xl shadow-black/20 hover:scale-105 transition-transform">
        <FaWhatsapp className="text-2xl" />
      </span>
      <span className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-foreground text-background text-xs font-medium px-3 py-1.5 opacity-0 group-hover:opacity-100 transition">
        Usually replies within 5 minutes
      </span>
    </a>
  );
}
