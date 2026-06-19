import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhone, FaEnvelope, FaClock, FaCheckCircle } from "react-icons/fa";
import { PHONE, EMAIL, BUSINESS_HOURS, whatsappLink, telLink } from "@/lib/contact";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — NextGenMantrika" },
      { name: "description", content: "Get in touch with NextGenMantrika via WhatsApp, phone, email or our contact form." },
    ],
  }),
  component: Contact,
});

const services = ["Website Development", "AI Automation", "Digital Marketing", "Offline Marketing", "Other"];

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: services[0], message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Valid email required";
    if (!/^[\d+\-\s()]{7,}$/.test(form.phone)) next.phone = "Valid phone required";
    if (form.message.trim().length < 10) next.message = "Tell us a bit more (10+ chars)";
    setErrors(next);
    if (Object.keys(next).length) return;

    const entry = { ...form, at: new Date().toISOString() };
    try {
      const prev = JSON.parse(localStorage.getItem("ngm_leads") || "[]");
      localStorage.setItem("ngm_leads", JSON.stringify([entry, ...prev].slice(0, 50)));
    } catch {}
    setSent(true);
    setForm({ name: "", email: "", phone: "", service: services[0], message: "" });
    setTimeout(() => setSent(false), 5000);
  };
  


  const field = "w-full rounded-xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition";

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-6">
        <SectionHeading
          eyebrow="Contact us"
          title={<>Let's start a <span className="gradient-text">conversation</span></>}
          description="We'd love to hear about your project. Pick the channel that suits you best."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-4">
          {[
            { Icon: FaPhone, label: "Call us", value: PHONE, href: telLink, color: "text-brand" },
            { Icon: FaWhatsapp, label: "WhatsApp", value: "Chat with our team", href: whatsappLink(), color: "text-whatsapp", external: true },
            { Icon: FaEnvelope, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, color: "text-accent2" },
            { Icon: FaClock, label: "Business Hours", value: BUSINESS_HOURS, color: "text-foreground" },
          ].map(({ Icon, label, value, href, color, external }) => {
            const content = (
              <div className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-0.5 transition-transform">
                <span className={`grid h-12 w-12 place-items-center rounded-xl bg-secondary ${color}`}><Icon className="text-xl" /></span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="font-semibold mt-0.5">{value}</div>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="block">{content}</a>
            ) : <div key={label}>{content}</div>;
          })}

          <div className="rounded-2xl gradient-bg text-white p-6">
            <h4 className="font-semibold text-lg">Prefer to talk now?</h4>
            <p className="text-sm text-white/85 mt-1">We usually reply on WhatsApp within 5 minutes.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={whatsappLink()} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2.5 text-sm font-semibold">
                <FaWhatsapp className="text-whatsapp" /> WhatsApp
              </a>
              <a href={telLink} className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-4 py-2.5 text-sm font-semibold">
                <FaPhone /> Call Now
              </a>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="glass rounded-3xl p-6 md:p-8 space-y-4"
        >
          <img src="/contactpage.jpeg" alt="Contact Us" className="w-full h-auto rounded-2xl object-cover" />
          <div className="flex flex-col items-center text-center mt-6 mb-4 space-y-3 px-4">
            <h3 className="text-2xl md:text-3xl font-bold tracking-wide">
              Let's Build the Future
            </h3>
            <p className="text-base text-muted-foreground max-w-md leading-relaxed italic">
              "Innovation starts with a conversation. We're ready when you are."
            </p>
          </div>

          <h3 className="text-2xl font-bold">Send us a message</h3>
          <p className="text-sm text-muted-foreground">Fill the form and we'll get back within one business day.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold mb-1.5 block">Name</label>
              <input className={field} value={form.name} onChange={set("name")} placeholder="Your name" />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1.5 block">Email</label>
              <input className={field} value={form.email} onChange={set("email")} placeholder="you@example.com" />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1.5 block">Phone</label>
              <input className={field} value={form.phone} onChange={set("phone")} placeholder="+91" />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-xs font-semibold mb-1.5 block">Service Interested In</label>
              <select className={field} value={form.service} onChange={set("service")}>
                {services.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs font-semibold mb-1.5 block">Message</label>
            <textarea rows={5} className={field} value={form.message} onChange={set("message")} placeholder="Tell us about your project..." />
            {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
          </div>

          <button type="submit" className="w-full rounded-xl gradient-bg text-white font-semibold py-3.5 hover:opacity-95 transition">
            Send Message
          </button>

          <AnimatePresence>
            {sent && (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                className="flex items-center gap-2 rounded-xl bg-whatsapp/10 text-whatsapp px-4 py-3 text-sm font-medium">
                <FaCheckCircle /> Thanks! Your message has been received.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </section>

      <div className="h-20" />
    </>
  );
}
