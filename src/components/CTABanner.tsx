import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { whatsappLink, telLink } from "@/lib/contact";
import { motion } from "framer-motion";

export function CTABanner({
  title = "Ready to grow your business?",
  subtitle = "Let's build something exceptional together. Talk to our team today.",
}: { title?: string; subtitle?: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 my-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl gradient-bg p-8 md:p-14 text-white"
      >
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-black/10 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">{title}</h3>
            <p className="mt-3 text-white/85 max-w-xl">{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold bg-white text-black hover:scale-[1.02] transition-transform">
              <FaWhatsapp className="text-whatsapp text-lg" /> Message on WhatsApp
            </a>
            <a href={telLink}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold border border-white/40 hover:bg-white/10 transition">
              <FaPhone /> Schedule a Call
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
