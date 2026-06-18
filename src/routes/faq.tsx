import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown, FaWhatsapp } from "react-icons/fa";
import { whatsappLink } from "@/lib/contact";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — NextGenMantrika" },
      { name: "description", content: "Frequently asked questions about NextGenMantrika's services." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  { q: "What services do you offer?", a: "We offer website development, AI automation, digital marketing, and offline marketing — built to work together." },
  { q: "How quickly can we start?", a: "Most projects begin within 48 hours of our first call. Websites typically launch within 7–14 days." },
  { q: "Do you provide ongoing support?", a: "Yes. Every project includes post-launch support, and you can choose a monthly retainer for continuous improvements." },
  { q: "Can AI automation help my business?", a: "If you spend time on repetitive tasks, qualifying leads, or answering common questions — yes. We start with a free audit." },
  { q: "How do I contact your team?", a: "WhatsApp is fastest — we usually reply in under 5 minutes. You can also call us or use the contact form." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-6">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, <span className="gradient-text">answered</span></>}
          description="Still curious? Reach out on WhatsApp anytime."
        />
      </section>

      <section className="mx-auto max-w-3xl px-4 mt-10 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div key={f.q}
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold">{f.q}</span>
                <FaChevronDown className={`shrink-0 transition-transform ${isOpen ? "rotate-180 text-brand" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-muted-foreground">
                      <p>{f.a}</p>
                      <a href={whatsappLink(`Hi, I have a question: ${f.q}`)} target="_blank" rel="noreferrer"
                        className="mt-4 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold bg-whatsapp text-white">
                        <FaWhatsapp /> Chat on WhatsApp
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </section>

      <CTABanner title="Couldn't find what you needed?" subtitle="Send us a message — real humans, fast replies." />
    </>
  );
}
