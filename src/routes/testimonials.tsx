import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — NextGenMantrika" },
      { name: "description", content: "What our clients say about working with NextGenMantrika." },
    ],
  }),
  component: Testimonials,
});

const reviews = [
  { name: "Rahul Khanna", company: "Lumen Retail", rating: 5, inti:"LR",
    text: "Our new website launched in a week and conversions jumped 60% in the first month. Beyond impressed with the speed and quality." },
  { name: "Sneha Iyer", company: "Bloom Studio", rating: 4.5, inti:"SI",
    text: "The AI chatbot handles 80% of our customer queries. It's like adding three teammates without the overhead." },
  { name: "Vikram Rao", company: "Apex Builders", rating: 3.5, inti:"VR",
    text: "From offline campaigns to Google Ads, NextGenMantrika ran it all. Our pipeline has never been healthier." },
  { name: "Anita Desai", company: "Crestwave Foods", rating: 5, inti:"AD",
    text: "Reliable, creative, and genuinely invested in our growth. Easily our best agency partnership." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % reviews.length);
  const prev = () => setI((p) => (p - 1 + reviews.length) % reviews.length);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, []);

  const r = reviews[i];

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pt-6">
        <SectionHeading
          eyebrow="Client love"
          title={<>Trusted by ambitious <span className="gradient-text">brands</span></>}
          description="Real words from real clients we've helped grow."
        />
      </section>

      <section className="mx-auto max-w-4xl px-4 mt-12">
        <div className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden">
          <FaQuoteLeft className="absolute top-6 right-6 text-6xl text-brand/10" />
          <AnimatePresence mode="wait">
            <motion.div key={r.name}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}>
              <div className="flex gap-1 text-yellow-400 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => <FaStar key={j} />)}
              </div>
              <p className="text-xl md:text-2xl leading-relaxed font-medium">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-4 hidden">
                <img src={r.inti} alt={r.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.company}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-1.5">
              {reviews.map((_, j) => (
                <button key={j} onClick={() => setI(j)} aria-label={`Slide ${j + 1}`}
                  className={`h-2 rounded-full transition-all ${j === i ? "w-8 gradient-bg" : "w-2 bg-border"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} aria-label="Previous" className="h-10 w-10 grid place-items-center rounded-xl border border-border hover:bg-secondary"><FaChevronLeft /></button>
              <button onClick={next} aria-label="Next" className="h-10 w-10 grid place-items-center rounded-xl gradient-bg text-white"><FaChevronRight /></button>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Want to be our next success story?" subtitle="Let's talk about your goals." />
    </>
  );
}
