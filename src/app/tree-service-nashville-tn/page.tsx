import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Tree Service in Nashville, TN | Tree Service Champs (2026)",
  description:
    "Professional tree removal, trimming, and stump grinding in Nashville, TN. Tornado prep, storm cleanup, and certified arborists serving Davidson County.",
};

const faq = [
  {
    q: "What trees are common in Nashville?",
    a: "Nashville landscapes feature tulip poplars (the Tennessee state tree), red oaks, sugar maples, hickories, Eastern red cedars, and dogwoods. The Nashville area sits in a transition zone between the Highland Rim and Central Basin, creating diverse growing conditions.",
  },
  {
    q: "Do I need a permit to remove a tree in Nashville?",
    a: "Nashville-Davidson County requires tree removal permits through Metro Codes for trees over 12 inches in diameter on properties in the Urban Zoning Overlay. Some neighborhoods have additional historic overlay protections. Check with Metro Planning before removing large trees.",
  },
  {
    q: "How much does tree removal cost in Nashville?",
    a: "Tree removal in Nashville typically costs $350-$2,200 depending on tree size, species, and location. The average job costs about $850. Tornado-damaged trees with structural instability cost more due to hazardous conditions.",
  },
  {
    q: "Is Nashville at risk for tornadoes?",
    a: "Yes. Nashville sits in a tornado-prone corridor. The March 2020 tornado caused catastrophic tree damage across East Nashville, Germantown, and Donelson. Severe storms from March through June bring tornado and straight-line wind risks. Annual tree assessment and trimming is critical.",
  },
  {
    q: "Do you serve areas outside Nashville?",
    a: "Yes. We serve the entire Middle Tennessee region including Franklin, Brentwood, Hendersonville, Murfreesboro, Mt. Juliet, Lebanon, Gallatin, Spring Hill, and Smyrna across Davidson, Williamson, Rutherford, and Sumner counties.",
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

export default function NashvillePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="rounded-2xl bg-forest-green text-white p-8 md:p-12">
        <p className="text-sm uppercase tracking-widest text-champ-gold">Nashville, TN</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">
          Tree Service in Nashville, TN
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Nashville&apos;s rapid growth and tornado vulnerability make professional tree service essential. From the historic oaks of Belle Meade to storm-damaged trees across East Nashville, our certified crews deliver safe, efficient tree care with clear pricing and fast response times.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-6 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-6 py-3 text-sm font-semibold">
            Get a Free Quote in Nashville
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Tree Service for Music City</h2>
        <p className="mt-3 text-slate-600">
          Nashville sits in Davidson County in Middle Tennessee&apos;s Central Basin — a region known for rich limestone soil that supports massive hardwood growth. <strong>Tulip poplars</strong> (Tennessee&apos;s state tree), <strong>red oaks</strong>, <strong>sugar maples</strong>, and <strong>hickories</strong> dominate the landscape, with many specimen trees reaching 80-100 feet in established neighborhoods like <strong>Belle Meade</strong>, <strong>Green Hills</strong>, and <strong>Forest Hills</strong>.
        </p>
        <p className="mt-3 text-slate-600">
          Nashville&apos;s tornado risk is real and well-documented. The devastating March 2020 tornado cut a path through <strong>East Nashville</strong>, <strong>Germantown</strong>, <strong>Five Points</strong>, and <strong>Donelson</strong>, destroying thousands of trees and causing millions in property damage. Annual tree assessment and pre-season hazard trimming are the best preventive measures for Nashville homeowners.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          { title: "Tree Removal", desc: "Safe removal of dead, diseased, and tornado-damaged trees across Davidson County. We handle Metro Codes permits for protected trees.", price: "$350 - $2,200" },
          { title: "Tree Trimming", desc: "Crown thinning and structural pruning for Nashville hardwoods. Critical pre-tornado season maintenance for March-June storm preparedness.", price: "$300 - $1,800" },
          { title: "Stump Grinding", desc: "Below-grade stump grinding for Nashville yards. Removes tripping hazards and termite attractants in Tennessee humid climate.", price: "$150 - $300" },
          { title: "Storm Cleanup", desc: "24/7 emergency response for tornado damage, fallen trees, and severe storm debris across Middle Tennessee.", price: "Call for estimate" },
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-forest-green">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            <p className="mt-3 text-sm font-semibold text-champ-gold">{s.price}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Areas We Serve in Nashville</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-600">
          {["East Nashville", "Germantown", "Belle Meade", "Green Hills", "Forest Hills", "12 South", "The Gulch", "Sylvan Park", "Donelson", "Hermitage", "Franklin", "Brentwood", "Hendersonville", "Mt. Juliet", "Murfreesboro", "Spring Hill"].map((area) => (
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
        <h2 className="text-2xl font-bold">Get a Free Tree Service Quote in Nashville</h2>
        <p className="mt-3 text-white/90">Fast response. Clear pricing. Davidson County permit assistance.</p>
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
