import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Stump Grinding & Removal Services",
  description:
    "Professional stump grinding from $150-$300. Same-day service available. Remove unsightly stumps and reclaim your yard. Call Tree Service Champs.",
};

const faq = [
  {
    q: "What is the difference between stump grinding and stump removal?",
    a: "Stump grinding uses a machine to chip the stump down 6-12 inches below ground level, leaving the roots to decompose naturally. Full stump removal extracts the entire root ball, which is more invasive and expensive but leaves a completely clear area.",
  },
  {
    q: "How much does stump grinding cost?",
    a: "Stump grinding typically costs $150-$300 per stump, with the national average around $250. Pricing depends on stump diameter, root spread, accessibility, and whether you need multiple stumps done.",
  },
  {
    q: "Will a tree grow back after stump grinding?",
    a: "Most trees will not grow back after proper stump grinding. The grinding destroys the growth point. However, some species (like willows, elms, and some maples) may send up suckers from remaining roots. These are easy to manage and eventually stop.",
  },
  {
    q: "Can I plant a new tree where a stump was ground?",
    a: "Yes, but wait 1-2 seasons. Remove the wood chips and backfill with topsoil first. The decomposing wood chips temporarily deplete nitrogen in the soil, so adding compost or fertilizer helps new plantings establish.",
  },
  {
    q: "How deep does stump grinding go?",
    a: "Standard stump grinding goes 6-12 inches below ground level. This is deep enough for lawn, garden beds, or new plantings. If you need deeper grinding for construction footings, let us know — we can go deeper for an additional cost.",
  },
  {
    q: "Is stump grinding messy?",
    a: "Stump grinding produces a pile of wood chips roughly 4-8 times the volume of the stump. We can haul them away, spread them as mulch in your garden, or leave them for you. The area is left clean and ready for landscaping.",
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

export default function StumpGrindingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="rounded-2xl bg-forest-green text-white p-8 md:p-12">
        <p className="text-sm uppercase tracking-widest text-champ-gold">Stump Grinding &amp; Removal</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">
          Remove stumps fast. Reclaim your yard.
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Unsightly stumps are tripping hazards, lawn mower killers, and termite magnets. Our crews grind stumps below grade and leave your yard ready for whatever comes next. Starting at <strong>$150</strong>.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-6 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-6 py-3 text-sm font-semibold">
            Get a Free Quote
          </Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Why Remove That Stump?</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "⚠️", title: "Safety Hazard", desc: "Stumps cause trips and falls, especially for kids and elderly. They are hidden dangers in tall grass." },
            { icon: "🐛", title: "Pest Magnet", desc: "Decaying stumps attract termites, carpenter ants, and beetles that can spread to your home." },
            { icon: "🏡", title: "Curb Appeal", desc: "Stumps make yards look neglected. Removing them instantly improves property appearance and value." },
            { icon: "🚜", title: "Lawn Care", desc: "Stumps and surface roots make mowing difficult and can damage mower blades." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-5 text-center">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="mt-2 font-semibold text-forest-green">{item.title}</h3>
              <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Stump Grinding vs. Full Removal</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Feature</th>
                <th className="pb-3 text-left font-semibold text-forest-green">Stump Grinding</th>
                <th className="pb-3 text-left font-semibold text-forest-green">Full Removal</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-3 font-medium">Cost</td><td>$150-$300</td><td>$500-$1,600</td></tr>
              <tr><td className="py-3 font-medium">Time</td><td>30-60 minutes</td><td>2-4 hours</td></tr>
              <tr><td className="py-3 font-medium">Depth</td><td>6-12&quot; below grade</td><td>Complete root extraction</td></tr>
              <tr><td className="py-3 font-medium">Yard Impact</td><td>Minimal</td><td>Large hole to fill</td></tr>
              <tr><td className="py-3 font-medium">Best For</td><td>Lawn, garden, most uses</td><td>Construction, foundation work</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Pricing</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Stump Diameter</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Grinding Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-3">Under 12&quot;</td><td className="font-semibold text-forest-green">$100-$150</td></tr>
              <tr><td className="py-3">12-24&quot;</td><td className="font-semibold text-forest-green">$150-$250</td></tr>
              <tr><td className="py-3">24-36&quot;</td><td className="font-semibold text-forest-green">$250-$400</td></tr>
              <tr><td className="py-3">36&quot;+</td><td className="font-semibold text-forest-green">$400-$600+</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">Multi-stump discounts available. Ask about same-day add-on pricing with tree removal.</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <div key={item.q} className="rounded-xl bg-slate-50 p-5">
              <p className="font-semibold text-forest-green">{item.q}</p>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-forest-green px-6 py-10 text-white md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Ready to get rid of that stump?</h2>
          <p className="mt-2 text-sm text-white/90">Same-day grinding available. Call for a free quote.</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 md:mt-0">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-6 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-6 py-3 text-sm font-semibold">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
