import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Tree Service in Charlotte, NC | Tree Service Champs (2026)",
  description:
    "Professional tree removal, trimming, and stump grinding in Charlotte, NC. Hurricane prep, storm cleanup, and certified arborists serving Mecklenburg County.",
};

const faq = [
  {
    q: "What trees are common in Charlotte?",
    a: "Charlotte landscapes feature willow oaks, red maples, loblolly pines, dogwoods, and Southern magnolias. The city has an ambitious urban tree canopy goal of 50% coverage. Crepe myrtles line many residential streets throughout Mecklenburg County.",
  },
  {
    q: "Do I need a permit to remove a tree in Charlotte?",
    a: "Charlotte-Mecklenburg has a tree ordinance that protects certain trees on commercial and residential properties. Trees over 8 inches in diameter may require a permit before removal. Contact Charlotte Land Development to confirm requirements for your property.",
  },
  {
    q: "How much does tree removal cost in Charlotte?",
    a: "Tree removal in Charlotte typically costs $350-$2,000 depending on tree size, species, and proximity to structures. Average cost is around $800. Pine trees are generally cheaper to remove than hardwoods like oaks and maples.",
  },
  {
    q: "When do hurricanes affect Charlotte?",
    a: "While Charlotte is inland, tropical storms and hurricane remnants bring damaging winds and heavy rain from June through November. Hurricane Florence in 2018 caused widespread tree damage across the region. Pre-season trimming in May is strongly recommended.",
  },
  {
    q: "Do you serve areas outside Charlotte?",
    a: "Yes. We serve the entire Charlotte metro including Huntersville, Cornelius, Matthews, Mint Hill, Indian Trail, Waxhaw, Fort Mill, Rock Hill, Concord, and Gastonia. Our crews cover Mecklenburg, Union, Cabarrus, and Gaston counties.",
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

export default function CharlottePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="rounded-2xl bg-forest-green text-white p-8 md:p-12">
        <p className="text-sm uppercase tracking-widest text-champ-gold">Charlotte, NC</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">
          Tree Service in Charlotte, NC
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Charlotte&apos;s rapid growth and dense tree canopy create constant demand for professional tree care. From hurricane prep to routine maintenance of the willow oaks that line Myers Park and Dilworth, our certified arborists keep Charlotte&apos;s trees healthy and properties safe.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-6 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-6 py-3 text-sm font-semibold">
            Get a Free Quote in Charlotte
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Tree Care in the Queen City</h2>
        <p className="mt-3 text-slate-600">
          Charlotte sits in Mecklenburg County with a humid subtropical climate perfect for tree growth. The city&apos;s goal of 50% tree canopy coverage means trees are valued — but they also need professional care. <strong>Willow oaks</strong> dominate the historic neighborhoods of <strong>Myers Park</strong>, <strong>Dilworth</strong>, and <strong>Eastover</strong>, while <strong>loblolly pines</strong> fill newer subdivisions in <strong>Ballantyne</strong> and <strong>Steele Creek</strong>.
        </p>
        <p className="mt-3 text-slate-600">
          Tropical storm remnants bring damaging winds through the Piedmont region every few years, making storm preparation and emergency response essential services. Charlotte&apos;s clay-heavy soil also causes root instability in some areas, increasing the risk of tree falls during saturated conditions.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          { title: "Tree Removal", desc: "Safe removal in Charlotte neighborhoods with tight lot lines. We navigate Mecklenburg County tree ordinance requirements and handle permits.", price: "$350 - $2,000" },
          { title: "Tree Trimming", desc: "Crown thinning and deadwood removal for Charlotte oaks, maples, and pines. Critical before hurricane season starts in June.", price: "$300 - $1,800" },
          { title: "Stump Grinding", desc: "Remove stumps in Charlotte yards where termites thrive in the warm, humid climate. Below-grade grinding for lawn restoration.", price: "$150 - $300" },
          { title: "Storm Cleanup", desc: "24/7 emergency response for fallen trees after tropical storms and severe thunderstorms across Mecklenburg County.", price: "Call for estimate" },
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-forest-green">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            <p className="mt-3 text-sm font-semibold text-champ-gold">{s.price}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Areas We Serve in Charlotte</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-600">
          {["Myers Park", "Dilworth", "South End", "NoDa", "Plaza Midwood", "Ballantyne", "Steele Creek", "University City", "Huntersville", "Cornelius", "Matthews", "Mint Hill", "Indian Trail", "Waxhaw", "Concord", "Gastonia"].map((area) => (
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
        <h2 className="text-2xl font-bold">Get a Free Tree Service Quote in Charlotte</h2>
        <p className="mt-3 text-white/90">Fast response. Clear pricing. Mecklenburg County permit assistance.</p>
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
