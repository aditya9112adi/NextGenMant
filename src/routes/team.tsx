import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { whatsappLink, telLink } from "@/lib/contact";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — NextGenMantrika" },
      { name: "description", content: "Meet the experts behind NextGenMantrika — strategists, developers, marketers and AI specialists." },
    ],
  }),
  component: Team,
});

const team = [
  { name: "Harini S", exp: "", role: "Digital Marketing Specialist", bio: "Creates high-performing marketing campaigns that generate leads and growth.", img: "/harini.jpeg" },
  { name: "Nagarjun BG", exp: "", role: "AI Automation & Web Solutions developer", bio: "Combining AI innovation with modern web development to create intelligent, efficient, and growth-focused digital solutions for businesses.", img: "/Nagarjun.jpeg" },
  { name: "Sachin vishwakarma LG", exp: "", role: "Marketing Executive", bio: "Supports and executes successful offline marketing initiatives.", img: "/sachin.jpg" },
  { name: "BS Gangadhar Achar", exp: "", role: "Head of Offline Marketing", bio: "Veteran in branding, networking, and offline promotional campaigns.", img: "/BS.jpeg" },
  { name: "Vinayaka Tilak PS", exp: "", role: "AI Automation Specialist", bio: "Transforms complex workflows into intelligent automated systems, helping businesses save time, increase productivity, and scale effectively.", img: "/Vinayaka.jpeg" },
  { name: "Mithil", exp: "", role: "Website Developer", bio: "Specializing in custom website development, combining clean design and robust functionality to create impactful digital experiences.", img: "/Mithil.jpeg" },
  { name: "Tarun K", exp: "", role: "Digital Marketing Strategist", bio: "Crafting data-driven marketing strategies that help brands increase visibility, engage audiences, and achieve sustainable growth.", img: "/Tharun.jpeg" },
];

function Team() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-6 pb-10">
        <SectionHeading
          eyebrow="The people"
          title={<>Meet our <span className="gradient-text">experts</span></>}
          description="A multidisciplinary team driving every project from strategy to execution."
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div key={m.name}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group glass rounded-2xl p-5 hover:-translate-y-1 transition-all">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
                <img src={m.img} alt={m.name} loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {m.exp && (
                  <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider rounded-full px-2 py-1 bg-white/90 text-foreground">
                    {m.exp}
                  </span>
                )}
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{m.name}</h3>
                <p className="text-sm text-brand font-medium">{m.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{m.bio}</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {[FaLinkedin, FaInstagram, FaXTwitter].map((Icon, j) => (
                    <a key={j} href="#" className="h-8 w-8 grid place-items-center rounded-lg border border-border hover:bg-secondary"><Icon className="text-sm" /></a>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a href={telLink} className="h-8 w-8 grid place-items-center rounded-lg gradient-bg text-white"><FaPhone className="text-xs" /></a>
                  <a href={whatsappLink(`Hi, I'd like to talk to ${m.name}.`)} target="_blank" rel="noreferrer"
                    className="h-8 w-8 grid place-items-center rounded-lg bg-whatsapp text-white"><FaWhatsapp /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTABanner title="Want to work with our team?" subtitle="Reach out and we'll match you with the right expert." />
    </>
  );
}
