"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { COMPANY } from "@/data/company";

const PHONE = COMPANY.phone;
const PHONE_HREF = COMPANY.phoneHref;

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const } },
});

const scaleIn = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const } },
});

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={fadeUp(delay)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const services = [
  { title: "Tree Removal", desc: "Complete removal for hazardous, dead, or unwanted trees. Prices $200–$2,000 (avg $750).", image: "/images/tree-removal.webp", href: "/tree-removal" },
  { title: "Tree Trimming", desc: "Trim for clearance, health, and curb appeal. Typical pricing $270–$1,800.", image: "/images/tree-trimming.webp", href: "/tree-trimming" },
  { title: "Stump Grinding", desc: "Stumps ground below grade so you can replant or landscape. $150–$300.", image: "/images/stump-grinding.webp", href: "/stump-grinding" },
  { title: "Emergency Storm Cleanup", desc: "Fast response for fallen trees and blocked access after storms.", image: "/images/emergency.webp", href: "/emergency-tree-service" },
  { title: "Lot & Brush Clearing", desc: "Clear lots for build-ready land with haul-away included.", image: "/images/lot-clearing.webp", href: "/land-clearing" },
];

const testimonials = [
  { name: "Kimberly R.", quote: "They removed two massive oaks in a day and left the yard spotless. Pricing was exactly what they quoted.", rating: 5 },
  { name: "Marcus B.", quote: "Fast response after a storm. Crew was professional and careful around the house and fence.", rating: 5 },
  { name: "Derrick L.", quote: "Trimmed our maples and ground the stump. Great communication and fair pricing.", rating: 5 },
];

const trustBadges = [
  { label: "Licensed & Insured", icon: "🛡️" },
  { label: "5-Star Rated Crews", icon: "⭐" },
  { label: "Upfront Pricing", icon: "💰" },
  { label: "24/7 Storm Response", icon: "⚡" },
];

const steps = [
  { num: "01", title: "Call or Request a Quote", desc: "Share a few details and photos. We respond fast with clear pricing." },
  { num: "02", title: "Schedule Your Service", desc: "Pick a convenient time. We handle permits and safety planning." },
  { num: "03", title: "Safe Removal + Cleanup", desc: "Our crews finish the job and leave your property clean." },
];

const faqs = [
  { q: "How much does tree removal cost?", a: "Tree removal typically ranges from $200 to $2,000, with the average job around $750. Pricing depends on tree size, access, and risk level." },
  { q: "Do you offer same-day service?", a: "Yes. We prioritize hazardous and storm-damaged trees and can often dispatch same-day or next-day crews." },
  { q: "Are you licensed and insured?", a: "Absolutely. Our crews are fully insured for property protection and safety compliance." },
  { q: "What happens to the debris?", a: "We include haul-away and cleanup. Wood can be hauled off or stacked if you prefer to keep it." },
  { q: "Can you grind the stump too?", a: "Yes. Stump grinding is available as an add-on and is usually completed the same day." },
];

export default function HomeContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-forest-green text-white" ref={heroRef}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-champ-gold blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-green-400 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-20 md:py-28 md:grid-cols-2 items-center">
          <motion.div variants={fadeUp(0)} initial="hidden" animate={heroInView ? "visible" : "hidden"}>
            <p className="text-sm uppercase tracking-widest text-champ-gold font-semibold">{COMPANY.tagline}</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Tree removal and trimming done right the first time.</h1>
            <p className="mt-5 text-lg text-white/90 max-w-lg">Get fast, safe service from insured pros. We handle hazardous trees, storm damage, and routine trimming with clean, careful crews.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="rounded-full bg-champ-gold px-8 py-4 text-sm font-bold text-slate-dark shadow-lg hover:shadow-xl transition-shadow hover:scale-105 active:scale-100">Get a Free Quote</Link>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-semibold hover:text-champ-gold transition-colors">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">📞</span>
                Call {PHONE}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Certified, insured crews", "Clear pricing before we start", "Same-day cleanup included", "Emergency response available"].map((t) => (
                <span key={t} className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/80">✅ {t}</span>
              ))}
            </div>
          </motion.div>
          <motion.div variants={scaleIn(0.3)} initial="hidden" animate={heroInView ? "visible" : "hidden"} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image src="/images/tree-removal.webp" alt="Tree Service Champs crew removing a hazardous tree" width={600} height={450} className="w-full h-auto object-cover" priority />
              <div className="absolute bottom-4 left-4 bg-forest-green/90 backdrop-blur-sm rounded-xl px-4 py-2 text-sm font-semibold text-white border border-white/10">🌲 Serving all 50 states</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map((badge, i) => (
            <AnimatedSection key={badge.label} delay={i * 0.1}>
              <div className="group rounded-2xl border border-slate-200 p-5 text-center hover:border-forest-green/30 hover:shadow-md transition-all duration-300">
                <div className="text-2xl mb-2">{badge.icon}</div>
                <p className="text-sm font-semibold text-slate-dark">{badge.label}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-slate-dark">Core Services</h2>
          <p className="mt-2 text-sm text-slate-600">Full-service tree care designed for safety and speed.</p>
        </AnimatedSection>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <Link href={service.href} className="group block rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-green/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-forest-green group-hover:text-safety-orange transition-colors">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{service.desc}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-safety-orange opacity-0 group-hover:opacity-100 transition-opacity">Learn more →</span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-slate-dark">How it works</h2>
            <p className="mt-2 text-sm text-slate-600">Three steps from call to clean yard.</p>
          </AnimatedSection>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.15}>
                <div className="relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="absolute -top-4 -left-2 text-5xl font-black text-forest-green/10">{step.num}</div>
                  <h3 className="text-lg font-bold text-forest-green relative z-10">{step.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <AnimatedSection>
          <h2 className="text-2xl font-bold text-slate-dark">What customers say</h2>
        </AnimatedSection>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((review, i) => (
            <AnimatedSection key={review.name} delay={i * 0.15}>
              <div className="rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="flex gap-1 text-champ-gold text-sm">
                  {Array.from({ length: review.rating }).map((_, j) => <span key={j}>★</span>)}
                </div>
                <p className="mt-4 flex-1 text-sm text-slate-600 leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-sm font-semibold text-forest-green">{review.name}</p>
                  <p className="text-xs text-slate-400">Verified Customer</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <AnimatedSection>
            <h2 className="text-2xl font-bold text-slate-dark">Frequently Asked Questions</h2>
          </AnimatedSection>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqs.map((item, i) => (
              <AnimatedSection key={item.q} delay={i * 0.08}>
                <div className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-semibold text-forest-green">{item.q}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <AnimatedSection>
          <div className="relative overflow-hidden rounded-3xl bg-forest-green px-8 py-14 text-white md:flex md:items-center md:justify-between">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-champ-gold/20 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-green-400/10 blur-2xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold md:text-3xl">Ready for a safe, clean removal?</h2>
              <p className="mt-3 text-sm text-white/90 max-w-md">Call now or request a quote and we will schedule your service. Most quotes returned within 1 hour.</p>
            </div>
            <div className="relative z-10 mt-6 flex flex-wrap gap-4 md:mt-0">
              <a href={PHONE_HREF} className="rounded-full bg-champ-gold px-8 py-4 text-sm font-bold text-slate-dark shadow-lg hover:shadow-xl hover:scale-105 active:scale-100 transition-all">Call {PHONE}</a>
              <Link href="/contact" className="rounded-full border-2 border-white px-8 py-4 text-sm font-semibold hover:bg-white hover:text-forest-green transition-all">Get a Quote</Link>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* MOBILE STICKY CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-forest-green border-t border-white/10 shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3">
          <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-semibold text-white">📞 Call {PHONE}</a>
          <Link href="/contact" className="rounded-full bg-champ-gold px-5 py-2.5 text-sm font-bold text-slate-dark">Free Quote</Link>
        </div>
      </div>
    </div>
  );
}
