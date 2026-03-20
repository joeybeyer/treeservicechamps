import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Tree Service in Houston, TX | Tree Service Champs (2026)",
  description:
    "Professional tree removal, trimming, and stump grinding in Houston, TX. Hurricane prep, storm cleanup, and certified arborists. Call for a free quote.",
};

const faq = [
  {
    q: "What trees are common in Houston?",
    a: "Houston landscapes feature live oaks, water oaks, pine trees, pecan trees, crepe myrtles, and Chinese tallow. Live oaks are the most popular shade tree but require regular trimming due to their wide canopy spread.",
  },
  {
    q: "Do I need a permit to remove a tree in Houston?",
    a: "The City of Houston requires permits for removing trees with a diameter of 12 inches or more on commercial properties. Residential properties generally do not require permits, but HOA rules may apply. Always check with your local jurisdiction before removal.",
  },
  {
    q: "How much does tree removal cost in Houston?",
    a: "Tree removal in Houston typically costs $300-$2,000 depending on tree size, species, and accessibility. Average cost is around $800. Emergency storm removal after hurricanes can cost significantly more due to demand.",
  },
  {
    q: "When is hurricane season in Houston?",
    a: "Hurricane season runs from June 1 to November 30. Pre-season tree trimming and hazard assessment in April-May can prevent costly storm damage. Dead branches and weak limbs should be removed before storm season begins.",
  },
  {
    q: "Do you offer emergency tree service in Houston?",
    a: "Yes. We provide 24/7 emergency tree removal for storm damage, fallen trees, and hazardous situations throughout the Greater Houston area including Harris, Fort Bend, and Montgomery counties.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function HoustonPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="rounded-2xl bg-forest-green text-white p-8 md:p-12">
        <p className="text-sm uppercase tracking-widest text-champ-gold">Houston, TX</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">
          Tree Service in Houston, TX
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Houston&apos;s subtropical climate means year-round tree growth — and year-round tree service needs. From hurricane prep to routine trimming, our certified crews handle it all with clear pricing and professional results.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-6 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-6 py-3 text-sm font-semibold">
            Get a Free Quote in Houston
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Tree Service for Houston&apos;s Climate</h2>
        <p className="mt-3 text-slate-600">
          Houston sits in Harris County with a humid subtropical climate that drives aggressive tree growth. Average annual rainfall of 50+ inches and mild winters mean trees grow fast — but also that storm damage is a constant risk. The Houston area regularly deals with hurricanes, tropical storms, and severe thunderstorms that can topple even healthy trees.
        </p>
        <p className="mt-3 text-slate-600">
          Common Houston tree species include <strong>live oaks</strong> (the signature shade tree), <strong>water oaks</strong>, <strong>loblolly pines</strong>, <strong>pecan trees</strong>, and <strong>crepe myrtles</strong>. Each species has different pruning needs, growth rates, and storm vulnerability. Our arborists know Houston&apos;s tree stock and tailor their approach accordingly.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          { title: "Tree Removal", desc: "Safe removal for dead, diseased, or storm-damaged trees. We handle oaks, pines, and palms of all sizes throughout Greater Houston.", price: "$300 - $2,000" },
          { title: "Tree Trimming", desc: "Crown thinning, deadwood removal, and structural pruning. Essential for Houston trees before hurricane season.", price: "$270 - $1,800" },
          { title: "Stump Grinding", desc: "Remove unsightly stumps that attract Houston pests like termites and carpenter ants. Same-day service available.", price: "$150 - $300" },
          { title: "Storm Cleanup", desc: "24/7 emergency response for fallen trees after hurricanes, tropical storms, and severe thunderstorms in the Houston metro.", price: "Call for estimate" },
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-forest-green">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            <p className="mt-3 text-sm font-semibold text-champ-gold">{s.price}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Areas We Serve in Houston</h2>
        <p className="mt-3 text-slate-600">
          We provide tree service throughout the Greater Houston metropolitan area including:
        </p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-600">
          {["Downtown Houston", "The Heights", "River Oaks", "Memorial", "Katy", "Sugar Land", "The Woodlands", "Pearland", "Cypress", "Spring", "Humble", "Pasadena", "League City", "Missouri City", "Kingwood", "Clear Lake"].map((area) => (
            <p key={area}>• {area}</p>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-4">
          {faq.map((item) => (
            <div key={item.q} className="rounded-xl bg-slate-50 p-5">
              <p className="font-semibold text-forest-green">{item.q}</p>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-forest-green px-6 py-10 text-white text-center">
        <h2 className="text-2xl font-bold">Get a Free Tree Service Quote in Houston</h2>
        <p className="mt-3 text-white/90">Fast response. Clear pricing. Certified crews.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-8 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-8 py-3 text-sm font-semibold">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
