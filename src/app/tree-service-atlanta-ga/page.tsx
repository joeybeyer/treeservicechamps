import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Tree Service in Atlanta, GA | Tree Service Champs (2026)",
  description:
    "Professional tree removal, trimming, and stump grinding in Atlanta, GA. Storm cleanup, certified arborists, and clear pricing. Call for a free quote.",
};

const faq = [
  {
    q: "What trees are common in Atlanta?",
    a: "Atlanta is known for its dense tree canopy featuring Southern live oaks, loblolly pines, dogwoods, magnolias, tulip poplars, and crepe myrtles. The city is nicknamed the City in a Forest with over 47% tree canopy coverage — one of the highest of any major US city.",
  },
  {
    q: "Do I need a permit to remove a tree in Atlanta?",
    a: "The City of Atlanta requires a tree removal permit for any tree with a diameter of 6 inches or more on private property within city limits. Permits are obtained through the Department of City Planning Arborist Division. Fines for removing trees without permits can be significant.",
  },
  {
    q: "How much does tree removal cost in Atlanta?",
    a: "Tree removal in Atlanta typically costs $400-$2,500 depending on tree size, species, and accessibility. The average job runs about $900. Pine trees are generally less expensive to remove than hardwoods like oaks due to softer wood and simpler root systems.",
  },
  {
    q: "When is storm season in Atlanta?",
    a: "Atlanta experiences severe thunderstorms primarily from March through September, with tornado season peaking in April and May. Ice storms in January and February can also cause significant tree damage. Pre-storm trimming in early spring is highly recommended.",
  },
  {
    q: "Does Atlanta have a tree ordinance?",
    a: "Yes. Atlanta has one of the strictest tree protection ordinances in the country. The Tree Protection Ordinance requires permits for removal and may require replanting replacement trees. Commercial properties have additional requirements including tree canopy coverage minimums.",
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

export default function AtlantaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="rounded-2xl bg-forest-green text-white p-8 md:p-12">
        <p className="text-sm uppercase tracking-widest text-champ-gold">Atlanta, GA</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">
          Tree Service in Atlanta, GA
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Atlanta&apos;s famous tree canopy — over 47% coverage, earning it the nickname &quot;City in a Forest&quot; — means tree service is essential, not optional. From thunderstorm damage cleanup to routine pruning of century-old oaks, our certified crews handle Atlanta&apos;s unique urban forest with expertise and care.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-6 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-6 py-3 text-sm font-semibold">
            Get a Free Quote in Atlanta
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Tree Service for Atlanta&apos;s Urban Forest</h2>
        <p className="mt-3 text-slate-600">
          Atlanta sits in Fulton County with a humid subtropical climate that drives aggressive tree growth year-round. Average annual rainfall of 50 inches combined with hot summers and mild winters means trees grow fast — but also that severe thunderstorms, tornadoes, and occasional ice storms pose constant risks to property. The city&apos;s dense canopy of <strong>Southern live oaks</strong>, <strong>loblolly pines</strong>, <strong>tulip poplars</strong>, and <strong>dogwoods</strong> requires regular maintenance to prevent storm damage and keep neighborhoods safe.
        </p>
        <p className="mt-3 text-slate-600">
          Atlanta&apos;s strict tree protection ordinance makes professional arborist services especially important. The city requires permits for removing trees over 6 inches in diameter, and unauthorized removal carries heavy fines. Our team navigates the permit process and ensures compliance with all City of Atlanta regulations.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          { title: "Tree Removal", desc: "Safe removal of dead, diseased, and storm-damaged trees. We handle Atlanta permit requirements and work with the city Arborist Division on protected tree removals.", price: "$400 - $2,500" },
          { title: "Tree Trimming", desc: "Crown thinning, deadwood removal, and structural pruning for Atlanta&apos;s large canopy trees. Essential before storm season starts in March.", price: "$300 - $1,800" },
          { title: "Stump Grinding", desc: "Remove stumps that attract termites — a major concern in Atlanta&apos;s warm, humid climate. Same-day grinding available.", price: "$150 - $350" },
          { title: "Storm Cleanup", desc: "24/7 emergency response for fallen trees after Atlanta&apos;s severe thunderstorms, tornadoes, and winter ice storms. Serving all of Fulton and DeKalb counties.", price: "Call for estimate" },
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-forest-green">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            <p className="mt-3 text-sm font-semibold text-champ-gold">{s.price}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Areas We Serve in Atlanta</h2>
        <p className="mt-3 text-slate-600">
          We provide tree service throughout the Greater Atlanta metropolitan area including:
        </p>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-600">
          {["Midtown", "Buckhead", "Virginia-Highland", "Decatur", "East Atlanta", "Grant Park", "Inman Park", "Old Fourth Ward", "Sandy Springs", "Roswell", "Marietta", "Alpharetta", "Dunwoody", "Brookhaven", "Tucker", "Stone Mountain"].map((area) => (
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
        <h2 className="text-2xl font-bold">Get a Free Tree Service Quote in Atlanta</h2>
        <p className="mt-3 text-white/90">Fast response. Clear pricing. Permit assistance included.</p>
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
