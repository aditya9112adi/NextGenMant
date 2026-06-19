import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaWhatsapp, FaPhone, FaCheck, FaArrowRight,
} from "react-icons/fa";
import {
  FaCode, FaRobot, FaBullhorn, FaStore,
} from "react-icons/fa6";
import { whatsappLink, telLink } from "@/lib/contact";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NextGenMantrika — Premium Websites, AI & Marketing" },
      { name: "description", content: "Modern websites, AI automation, digital & offline marketing to scale your business. Talk to NextGenMantrika today." },
    ],
  }),
  component: Home,
});

const trust = ["Fast Response", "Expert Team", "Affordable Pricing", "Proven Results"];

const stats = [
  { value: 100, suffix: "+", label: "Projects Completed" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "h", label: "Avg. Turnaround" },
];

const services = [
  { Icon: FaCode, title: "Website Development", desc: "Responsive business sites, landing pages, portfolios & e-commerce stores built to convert." },
  { Icon: FaRobot, title: "AI Automation", desc: "Chatbots, lead automation and workflow optimization that scale operations." },
  { Icon: FaBullhorn, title: "Digital Marketing", desc: "SEO, Google Ads, social, branding and content marketing that drive growth." },
  { Icon: FaStore, title: "Offline Marketing", desc: "Local promotions, print, branding campaigns and business networking." },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span>{n}{suffix}</span>;
}

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute top-10 -left-20 h-80 w-80 rounded-full bg-brand/30 blur-3xl animate-float-slow" />
          <div className="absolute top-40 right-0 h-96 w-96 rounded-full bg-accent2/30 blur-3xl animate-float-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_color-mix(in_oklab,var(--foreground)_10%,transparent)_1px,_transparent_0)] [background-size:24px_24px] opacity-40" />
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-10 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-whatsapp animate-pulse" />
              Available now · Usually replies in 5 min
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              Connect with <span className="gradient-text">NextGenMantrika</span> Instantly
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Empowering businesses through innovative websites, AI automation, digital marketing,
              and offline marketing solutions.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white bg-whatsapp hover:opacity-90 transition">
                <FaWhatsapp className="text-lg" /> Chat on WhatsApp
              </a>
              <a href={telLink}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold gradient-bg text-white hover:opacity-90 transition">
                <FaPhone /> Call Now
              </a>
            </div>
            <ul className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {trust.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm">
                  <span className="grid h-5 w-5 place-items-center rounded-full gradient-bg text-white text-[10px]">
                    <FaCheck />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-6 shadow-2xl shadow-brand/20">
              <div className="flex items-center gap-2 mb-5">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
                <span className="ml-3 text-xs text-muted-foreground">nextgenmantrika.com</span>
              </div>
              <div className="grid gap-3">
                <div className="rounded-2xl gradient-bg p-5 text-white">
                  <div className="text-xs uppercase tracking-wider opacity-80">Conversion Rate</div>
                  <div className="text-3xl font-bold mt-1">+ 184%</div>
                  <div className="text-xs opacity-80 mt-1">Last 30 days · all clients</div>
                </div>
                <div className="grid grid-grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-secondary p-4">
                    <FaRobot className="text-brand text-xl" />
                    <div className="font-semibold mt-2 text-sm">AI Bot Live</div>
                    <div className="text-xs text-muted-foreground">Handling 1.2k chats/mo</div>
                  </div>
                  <div className="rounded-2xl bg-secondary p-4">
                    <FaBullhorn className="text-accent2 text-xl" />
                    <div className="font-semibold mt-2 text-sm">Ad Campaigns</div>
                    <div className="text-xs text-muted-foreground">ROAS 6.4x</div>
                  </div>
                  <div className="col-span-2 rounded-2xl bg-secondary p-4 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm">Website launched</div>
                      <div className="text-xs text-muted-foreground">In just 7 days</div>
                    </div>
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-whatsapp/15 text-whatsapp">Live</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-4">
        <div className="glass rounded-3xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <motion.div key={s.label}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} className="text-center">
              <div className="text-3xl md:text-5xl font-bold gradient-text">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 section-pad">
        <SectionHeading
          eyebrow="What we do"
          title={<>Services built for <span className="gradient-text">real growth</span></>}
          description="Four focused practice areas, designed to work together."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ Icon, title, desc }) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4 }}
              className="group relative rounded-2xl p-6 bg-card border border-border hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 transition-all">
              <div className="grid h-12 w-12 place-items-center rounded-xl gradient-bg text-white">
                <Icon className="text-xl" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href={whatsappLink(`Hi! I'm interested in ${title}.`)} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-lg px-3 py-1.5 bg-whatsapp text-white">
                  <FaWhatsapp /> WhatsApp
                </a>
                <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-semibold rounded-lg px-3 py-1.5 border border-border hover:bg-secondary">
                  Contact <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
