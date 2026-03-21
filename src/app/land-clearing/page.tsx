import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Land & Lot Clearing Services | Tree Service Champs (2026)",
  description:
    "Professional land clearing from $1,500-$6,000 per acre. Brush removal, lot clearing, and build-ready preparation. Licensed crews with heavy equipment.",
};

const faq = [
  {
    q: "How much does land clearing cost per acre?",
    a: "Land clearing typically costs $1,500-$6,000 per acre depending on tree density, terrain, debris type, and whether stumps need grinding. Lightly wooded lots cost less, while heavily forested land with large hardwoods costs more.",
  },
  {
    q: "What is included in land clearing?",
    a: "Full land clearing includes removing all trees, stumps, brush, and vegetation from the property. The land is graded and left build-ready. Debris is hauled to licensed disposal facilities. Selective clearing (keeping certain trees) is also available.",
  },
  {
    q: "Do I need a permit for land clearing?",
    a: "Most municipalities require permits for clearing more than a certain number of trees or disturbing a certain acreage. Environmental regulations, wetland protections, and tree ordinances vary by location. We help navigate local requirements before work begins.",
  },
  {
    q: "How long does land clearing take?",
    a: "A standard residential lot (0.25-0.5 acres) takes 1-3 days. Larger parcels of 1-5 acres take 3-10 days depending on density and terrain. Commercial projects may take several weeks.",
  },
  {
    q: "Can you do selective clearing?",
    a: "Yes. Selective clearing removes only specific trees and brush while preserving desirable trees, natural features, or buffer zones. This is common for homesite preparation where you want to keep shade trees or maintain privacy screening.",
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

export default function LandClearingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="rounded-2xl bg-forest-green text-white p-8 md:p-12">
        <p className="text-sm uppercase tracking-widest text-champ-gold">Land Clearing</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">
          Land &amp; Lot Clearing Services
        </h1>
        <p className="mt-4 text-lg text-white/90">
          From residential lot prep to multi-acre commercial clearing, our crews handle complete vegetation removal, stump grinding, and site preparation. Licensed operators with heavy equipment deliver build-ready land on schedule and on budget.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-6 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-6 py-3 text-sm font-semibold">
            Get a Free Estimate
          </Link>
        </div>
      </div>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Land Clearing Pricing</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Project Size</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Density</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Cost Range</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Timeline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-3 font-medium">Residential lot (0.25 acre)</td><td>Light brush</td><td className="font-semibold text-forest-green">$500 - $1,500</td><td>1 day</td></tr>
              <tr><td className="py-3 font-medium">Residential lot (0.5 acre)</td><td>Moderate trees</td><td className="font-semibold text-forest-green">$1,500 - $3,000</td><td>1-2 days</td></tr>
              <tr><td className="py-3 font-medium">1 acre</td><td>Moderate to dense</td><td className="font-semibold text-forest-green">$2,000 - $6,000</td><td>2-4 days</td></tr>
              <tr><td className="py-3 font-medium">2-5 acres</td><td>Variable</td><td className="font-semibold text-forest-green">$4,000 - $15,000</td><td>5-10 days</td></tr>
              <tr><td className="py-3 font-medium">5+ acres</td><td>Commercial</td><td className="font-semibold text-forest-green">Custom quote</td><td>2+ weeks</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Our Land Clearing Services</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { title: "Full Lot Clearing", desc: "Complete removal of all trees, stumps, brush, and vegetation. Grading and debris hauling included. Land left build-ready for construction." },
            { title: "Selective Clearing", desc: "Strategic removal of specific trees and brush while preserving desirable trees, natural features, and buffer zones. Common for homesite prep." },
            { title: "Brush & Undergrowth Removal", desc: "Remove dense undergrowth, vines, invasive species, and small trees without taking down large canopy trees. Improves access and reduces fire risk." },
            { title: "Stump Grinding (Site-Wide)", desc: "Grind all stumps below grade across the cleared area. Essential for building sites, driveways, and landscaping preparation." },
          ].map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-forest-green">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
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
        <h2 className="text-2xl font-bold">Need Land Cleared?</h2>
        <p className="mt-3 text-white/90">Free on-site estimates. Licensed operators. Build-ready results.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-8 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-8 py-3 text-sm font-semibold">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
