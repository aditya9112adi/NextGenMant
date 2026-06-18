import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaHandshake, FaLightbulb, FaUsers, FaRocket } from "react-icons/fa6";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — NextGenMantrika" },
      { name: "description", content: "NextGenMantrika is a modern growth partner — helping businesses succeed through technology and marketing." },
    ],
  }),
  component: About,
});

const values = [
  { Icon: FaLightbulb, title: "Innovative Solutions", desc: "We pair modern tech with sharp creative thinking." },
  { Icon: FaUsers, title: "Customer-Focused", desc: "Every decision starts with your business outcome." },
  { Icon: FaHandshake, title: "Long-Term Partners", desc: "We invest in relationships, not transactions." },
  { Icon: FaRocket, title: "Built to Scale", desc: "Foundations that grow with your ambitions." },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand mb-3">About us</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Your modern <span className="gradient-text">business growth partner</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              NextGenMantrika helps organizations succeed by combining technology, automation, and marketing
              into one focused growth engine. We work with founders and marketing teams to ship websites that convert,
              automate work that slows them down, and run campaigns that compound month after month.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl p-5 bg-card border border-border">
                <FaBullseye className="text-brand text-xl" />
                <h3 className="font-semibold mt-3">Our Mission</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Make premium technology and marketing accessible to every growing business.
                </p>
              </div>
              <div className="rounded-2xl p-5 bg-card border border-border">
                <FaEye className="text-accent2 text-xl" />
                <h3 className="font-semibold mt-3">Our Vision</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Become the trusted growth partner for the next generation of brands.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            className="relative">
            <div className="absolute -inset-6 gradient-bg opacity-20 blur-3xl rounded-3xl" />
            <div className="relative glass rounded-3xl p-2">
              <img
                alt="Team collaboration"
                className="rounded-2xl w-full aspect-[4/5] object-cover"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 section-pad">
        <SectionHeading eyebrow="What we stand for" title={<>Principles that shape <span className="gradient-text">every project</span></>} />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map(({ Icon, title, desc }) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="rounded-2xl p-6 bg-card border border-border hover:-translate-y-1 transition">
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-bg text-white">
                <Icon />
              </div>
              <h3 className="font-semibold mt-4">{title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner title="Let's build your growth roadmap" subtitle="Tell us where you are and where you want to go." />
    </>
  );
}
