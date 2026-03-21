import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Tree Service in Tampa, FL | Tree Service Champs (2026)",
  description:
    "Professional tree removal, trimming, and stump grinding in Tampa, FL. Hurricane prep, palm tree service, and 24/7 storm response serving Hillsborough County.",
};

const faq = [
  {
    q: "What trees are common in Tampa?",
    a: "Tampa landscapes feature live oaks, Sabal palms (Florida state tree), bald cypress, Southern magnolias, royal palms, and laurel oaks. Many properties also have fruit trees like mango, avocado, and citrus. The warm subtropical climate supports year-round growth.",
  },
  {
    q: "Do I need a permit to remove a tree in Tampa?",
    a: "The City of Tampa requires a tree removal permit for any protected tree with a diameter of 4 inches or more. Grand trees (24+ inches diameter) have additional protections and may require mitigation planting. Apply through the City of Tampa Planning Commission.",
  },
  {
    q: "How much does tree removal cost in Tampa?",
    a: "Tree removal in Tampa typically costs $300-$2,500 depending on tree size, species, and accessibility. Palm tree removal is generally $200-$900. Large live oak removal near structures can cost $1,500-$3,000+ due to complexity.",
  },
  {
    q: "When is hurricane season in Tampa?",
    a: "Hurricane season runs June 1 through November 30, with peak activity in August-October. Tampa Bay is considered one of the most hurricane-vulnerable metro areas in the US. Pre-season tree trimming in April-May removes dead limbs and reduces wind sail.",
  },
  {
    q: "Do you remove palm trees?",
    a: "Yes. We remove all palm species including Sabal palms, royal palms, queen palms, and coconut palms. Palm removal ranges from $200-$900 depending on height. We also provide palm trimming, including removing dead fronds, seed pods, and boots.",
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

export default function TampaPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="rounded-2xl bg-forest-green text-white p-8 md:p-12">
        <p className="text-sm uppercase tracking-widest text-champ-gold">Tampa, FL</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">
          Tree Service in Tampa, FL
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Tampa&apos;s subtropical climate means trees grow fast and storms hit hard. From hurricane-proofing your live oaks to removing storm-damaged palms, our certified arborists handle Tampa Bay&apos;s unique tree care challenges with speed, safety, and transparent pricing.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-6 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-6 py-3 text-sm font-semibold">
            Get a Free Quote in Tampa
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Tree Service for Tampa Bay</h2>
        <p className="mt-3 text-slate-600">
          Tampa sits in Hillsborough County on Florida&apos;s Gulf Coast — one of the most hurricane-vulnerable metro areas in the country. The warm, wet climate (55+ inches of rain annually) drives explosive tree growth, while tropical storms and hurricanes threaten property every season. Professional tree maintenance isn&apos;t optional in Tampa — it&apos;s property protection.
        </p>
        <p className="mt-3 text-slate-600">
          Tampa&apos;s tree stock includes massive <strong>live oaks</strong> with sprawling canopies, towering <strong>Sabal palms</strong>, <strong>bald cypress</strong> in low-lying areas, and <strong>laurel oaks</strong> throughout residential neighborhoods in <strong>South Tampa</strong>, <strong>Hyde Park</strong>, <strong>Seminole Heights</strong>, and <strong>Palma Ceia</strong>. Each species has different storm vulnerability, pruning needs, and disease risks that our arborists understand from years of Gulf Coast experience.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          { title: "Tree Removal", desc: "Safe removal of live oaks, palms, and storm-damaged trees across Hillsborough County. Tampa permit assistance included for protected and grand trees.", price: "$300 - $2,500" },
          { title: "Palm Tree Service", desc: "Full palm care: trimming dead fronds, seed pod removal, boot cleaning, and complete palm removal. All species including Sabal, royal, queen, and coconut palms.", price: "$150 - $900" },
          { title: "Hurricane Prep Trimming", desc: "Pre-season crown thinning and deadwood removal to reduce wind sail. Reduces storm damage risk by up to 40%. Schedule in April-May before hurricane season.", price: "$300 - $1,500" },
          { title: "Emergency Storm Response", desc: "24/7 emergency response for hurricane and tropical storm damage. Fallen tree removal, debris clearing, and property securing across Tampa Bay.", price: "Call for estimate" },
        ].map((s) => (
          <div key={s.title} className="rounded-xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-forest-green">{s.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            <p className="mt-3 text-sm font-semibold text-champ-gold">{s.price}</p>
          </div>
        ))}
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Areas We Serve in Tampa</h2>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2 text-sm text-slate-600">
          {["South Tampa", "Hyde Park", "Seminole Heights", "Palma Ceia", "Davis Islands", "Bayshore", "Westchase", "Carrollwood", "Temple Terrace", "Brandon", "Riverview", "Valrico", "St. Petersburg", "Clearwater", "Largo", "Palm Harbor"].map((area) => (
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
        <h2 className="text-2xl font-bold">Get a Free Tree Service Quote in Tampa</h2>
        <p className="mt-3 text-white/90">Fast response. Clear pricing. Hurricane prep specialists.</p>
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
