import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaCheck } from "react-icons/fa";
import { FaCode, FaRobot, FaBullhorn, FaStore } from "react-icons/fa6";
import { whatsappLink, telLink } from "@/lib/contact";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — NextGenMantrika" },
      { name: "description", content: "Websites, AI automation, digital and offline marketing — explore our full-service offering." },
    ],
  }),
  component: Services,
});

const services = [
  {
    Icon: FaCode,
    title: "Website Development",
    overview: "From landing pages to e-commerce — we ship fast, modern, SEO-ready websites.",
    features: ["Business & corporate sites", "Landing pages that convert", "Portfolios & personal brand", "E-commerce stores", "CMS & blog setup"],
    benefits: ["Built mobile-first", "Lightning-fast load times", "Optimized for conversions"],
    process: ["Discovery", "Design", "Build", "Launch & Support"],
  },
  {
    Icon: FaRobot,
    title: "AI Automation",
    overview: "Smart automation that saves hours every week — from AI chatbots to back-office workflows.",
    features: ["AI chatbots & assistants", "Lead automation", "Workflow optimization", "Document & data processing"],
    benefits: ["Always-on support", "Lower operational cost", "Scalable as you grow"],
    process: ["Audit", "Design Flows", "Build & Integrate", "Train & Iterate"],
  },
  {
    Icon: FaBullhorn,
    title: "Digital Marketing",
    overview: "Performance-driven campaigns across search, social and content — measurable from day one.",
    features: ["SEO & content strategy", "Google & Meta Ads", "Social media management", "Branding & creatives"],
    benefits: ["Higher quality leads", "Stronger brand presence", "Transparent reporting"],
    process: ["Strategy", "Setup", "Launch", "Optimize"],
  },
  {
    Icon: FaStore,
    title: "Offline Marketing",
    overview: "Build local trust and footfall with smart, on-the-ground marketing campaigns.",
    features: ["Local promotions", "Print advertising", "Branding campaigns", "Business networking"],
    benefits: ["Stronger local visibility", "Direct customer trust", "Synergy with online efforts"],
    process: ["Plan", "Produce", "Activate", "Measure"],
  },
];

function Services() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-10">
        <SectionHeading
          eyebrow="Our services"
          title={<>Everything you need to <span className="gradient-text">grow</span></>}
          description="One partner across tech, automation and marketing — online and offline."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 space-y-10 pb-10">
        {services.map(({ Icon, title, overview, features, benefits, process }, i) => (
          <motion.div key={title}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl overflow-hidden bg-card border border-border">
            <div className="grid lg:grid-cols-[1.1fr_1fr] gap-0">
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl gradient-bg text-white text-xl"><Icon /></span>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-brand font-semibold">Service {String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
                  </div>
                </div>
                <p className="mt-5 text-muted-foreground">{overview}</p>

                <div className="mt-6 grid sm:grid-cols-2 gap-5">
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Features</h4>
                    <ul className="space-y-2">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm">
                          <FaCheck className="text-brand mt-0.5 shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <FaCheck className="text-accent2 mt-0.5 shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold gradient-bg text-white">
                    Contact Us
                  </Link>
                  <a href={whatsappLink(`Hi! I'd like to know more about ${title}.`)} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold bg-whatsapp text-white">
                    <FaWhatsapp /> WhatsApp
                  </a>
                  <a href={telLink} className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold border border-border hover:bg-secondary">
                    <FaPhone /> Call Now
                  </a>
                </div>
              </div>

              <div className="bg-secondary/50 p-8 md:p-10 border-t lg:border-t-0 lg:border-l border-border">
                <h4 className="text-sm font-semibold mb-5">Our Process</h4>
                <ol className="space-y-4">
                  {process.map((p, idx) => (
                    <li key={p} className="flex items-start gap-4">
                      <span className="grid h-9 w-9 place-items-center rounded-xl gradient-bg text-white font-bold text-sm shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <div className="font-semibold">{p}</div>
                        <div className="text-xs text-muted-foreground">Step {idx + 1} of {process.length}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <CTABanner />
    </>
  );
}
