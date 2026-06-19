import { Link } from "@tanstack/react-router";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { PHONE, EMAIL, BUSINESS_HOURS, whatsappLink, telLink } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-bg text-white font-display font-bold">N</span>
            <span className="font-display font-bold text-lg">NextGen<span className="gradient-text">Mantrika</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Empowering businesses through innovative websites, AI automation, and high-impact marketing — online and offline.
          </p>
          <div className="flex gap-2 mt-5">
            {[FaLinkedin, FaInstagram, FaFacebook, FaXTwitter].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-lg border border-border hover:bg-background transition">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[["/", "Home"], ["/about", "About"], ["/team", "Team"], ["/testimonials", "Testimonials"], ["/faq", "FAQ"]].map(([to, label]) => (
              <li key={to}><Link to={to} className="hover:text-foreground transition">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Website Development</Link></li>
            <li><Link to="/services" className="hover:text-foreground">AI Automation</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Digital Marketing</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Offline Marketing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href={telLink} className="inline-flex items-center gap-2 hover:text-foreground"><FaPhone className="text-brand" /> {PHONE}</a></li>
            <li><a href={whatsappLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground"><FaWhatsapp className="text-whatsapp" /> Chat on WhatsApp</a></li>
            <li><a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-foreground"><FaEnvelope className="text-brand" /> {EMAIL}</a></li>
            <li className="text-xs">{BUSINESS_HOURS}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>© 2026 NextGenMantrika. All Rights Reserved.</span>
          <span>Crafted for growth-focused businesses.</span>
        </div>
      </div>
    </footer>
  );
}
