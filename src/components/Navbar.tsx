import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaPhone, FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { whatsappLink, telLink } from "@/lib/contact";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/team", label: "Team" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = saved ? saved === "dark" : prefers;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <nav className={`glass rounded-2xl flex items-center justify-between px-4 py-2.5 shadow-lg shadow-black/5`}>
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-xl gradient-bg text-white font-display font-bold">
              N
            </span>
            <span className="font-display font-bold text-lg tracking-tight">
              NextGen<span className="gradient-text">Mantrika</span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  activeProps={{ className: "px-3 py-2 rounded-lg text-sm font-semibold text-foreground bg-secondary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="h-9 w-9 grid place-items-center rounded-lg hover:bg-secondary transition-colors"
            >
              {dark ? <FaSun /> : <FaMoon />}
            </button>
            <a
              href={telLink}
              aria-label="Call Now"
              className="hidden sm:grid h-9 w-9 place-items-center rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              <FaPhone className="text-sm" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white bg-whatsapp hover:opacity-90 transition-opacity"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <button
              className="lg:hidden h-9 w-9 grid place-items-center rounded-lg hover:bg-secondary"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass rounded-2xl p-3"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-secondary"
                      activeProps={{ className: "block px-3 py-2.5 rounded-lg text-sm font-semibold text-foreground bg-secondary" }}
                      activeOptions={{ exact: l.to === "/" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="grid grid-cols-2 gap-2 pt-2">
                  <a href={telLink} className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold border border-border">
                    <FaPhone /> Call
                  </a>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-white bg-whatsapp">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
