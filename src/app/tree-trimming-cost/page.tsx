import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Tree Trimming Cost 2026 | Price Guide by Size & Type",
  description:
    "How much does tree trimming cost in 2026? Average $460, range $270-$1,800. Detailed pricing by tree size, service type, and factors that affect cost.",
};

const faq = [
  {
    q: "How much does tree trimming cost on average?",
    a: "The national average for tree trimming is $460. Most homeowners pay between $270 and $1,800 depending on tree height, number of trees, accessibility, and the type of trimming needed.",
  },
  {
    q: "What is the difference between tree trimming and pruning?",
    a: "Trimming focuses on shaping and controlling growth for aesthetics and clearance. Pruning is more targeted — removing dead, diseased, or structurally weak branches to improve tree health. Both are essential for maintaining safe, healthy trees.",
  },
  {
    q: "When is the best time to trim trees?",
    a: "Late winter or early spring while trees are dormant is ideal for most species. Dead or hazardous branches should be removed immediately regardless of season. Avoid heavy trimming during active summer growth.",
  },
  {
    q: "How often should trees be trimmed?",
    a: "Most trees benefit from trimming every 3-5 years. Fruit trees may need annual pruning. Fast-growing species or trees near structures may need more frequent attention to maintain safety and clearance.",
  },
  {
    q: "Does tree trimming cost more for tall trees?",
    a: "Yes. Tree height is the biggest cost factor. Trees under 25 feet cost $150-$400 to trim, while trees over 75 feet can cost $1,200-$1,800+ due to the equipment, time, and expertise required.",
  },
  {
    q: "Can improper trimming damage a tree?",
    a: "Yes. Topping, lion-tailing, and removing more than 25% of the canopy at once can severely stress or kill a tree. Always hire a certified arborist who follows ANSI A300 pruning standards.",
  },
  {
    q: "Is tree trimming covered by insurance?",
    a: "Routine maintenance trimming is not covered by homeowners insurance. However, if branches are threatening your home or a storm damaged a tree, insurance may cover the trimming or removal cost.",
  },
  {
    q: "Should I trim a tree myself?",
    a: "Small branches under 10 feet that you can reach from the ground are safe DIY projects. Anything requiring a ladder, near power lines, or involving large branches should be handled by a professional for safety.",
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

export default function TreeTrimmingCostPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="text-sm uppercase tracking-widest text-forest-green">Cost Guide</p>
      <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-dark">
        How Much Does Tree Trimming Cost in 2026?
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        The average tree trimming cost is <strong>$460</strong>. Most homeowners pay between <strong>$270 and $1,800</strong> depending on tree size, species, number of trees, and scope of work. This guide covers everything that affects pricing.
      </p>

      <div className="mt-8 rounded-2xl bg-forest-green text-white p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-3 text-center">
          <div>
            <p className="text-sm text-white/70">Low End</p>
            <p className="text-3xl font-bold">$270</p>
          </div>
          <div>
            <p className="text-sm text-champ-gold">National Average</p>
            <p className="text-3xl font-bold text-champ-gold">$460</p>
          </div>
          <div>
            <p className="text-sm text-white/70">High End</p>
            <p className="text-3xl font-bold">$1,800+</p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Tree Trimming Cost by Tree Size</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Size</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Height</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Cost Range</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Average</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-3 font-medium">Small</td><td>Under 25 ft</td><td>$150 - $400</td><td className="font-semibold text-forest-green">$275</td></tr>
              <tr><td className="py-3 font-medium">Medium</td><td>25 - 50 ft</td><td>$400 - $800</td><td className="font-semibold text-forest-green">$550</td></tr>
              <tr><td className="py-3 font-medium">Large</td><td>50 - 75 ft</td><td>$800 - $1,200</td><td className="font-semibold text-forest-green">$950</td></tr>
              <tr><td className="py-3 font-medium">Very Large</td><td>75+ ft</td><td>$1,200 - $1,800+</td><td className="font-semibold text-forest-green">$1,400</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Cost by Trimming Type</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Service</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Cost Range</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">What It Is</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-3 font-medium">Crown Thinning</td><td className="font-semibold text-forest-green">$300 - $800</td><td className="text-slate-600">Removing interior branches to reduce density and wind resistance</td></tr>
              <tr><td className="py-3 font-medium">Crown Raising</td><td className="font-semibold text-forest-green">$200 - $600</td><td className="text-slate-600">Removing lower branches for clearance over driveways, sidewalks, roofs</td></tr>
              <tr><td className="py-3 font-medium">Deadwood Removal</td><td className="font-semibold text-forest-green">$200 - $500</td><td className="text-slate-600">Removing dead and dying branches to prevent falls and disease spread</td></tr>
              <tr><td className="py-3 font-medium">Structural Pruning</td><td className="font-semibold text-forest-green">$400 - $1,000</td><td className="text-slate-600">Training young trees for strong branch architecture</td></tr>
              <tr><td className="py-3 font-medium">Vista Pruning</td><td className="font-semibold text-forest-green">$300 - $700</td><td className="text-slate-600">Strategic trimming to improve scenic views while preserving tree health</td></tr>
              <tr><td className="py-3 font-medium">Fruit Tree Pruning</td><td className="font-semibold text-forest-green">$100 - $400</td><td className="text-slate-600">Maximizing fruit production, sunlight exposure, and manageable size</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Factors That Affect Tree Trimming Cost</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { title: "Tree Height", desc: "The single biggest factor. Every additional 25 feet of height adds significant cost due to equipment, time, and risk." },
            { title: "Number of Trees", desc: "Multiple trees trimmed at once cost less per tree. Most companies offer 10-20% discounts for 3+ trees." },
            { title: "Accessibility", desc: "Trees near power lines, buildings, or fences require more careful work and may need specialized equipment." },
            { title: "Tree Health", desc: "Dead branches, disease, and pest damage can make trimming more complex and potentially more expensive." },
            { title: "Season", desc: "Winter trimming is often 10-20% cheaper. Spring and summer are peak season with higher demand and prices." },
            { title: "Cleanup", desc: "Basic cleanup is usually included. Hauling, chipping, and disposal of large volumes of brush may add $50-$200." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-forest-green">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
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
        <h2 className="text-2xl font-bold">Get an Exact Trimming Quote</h2>
        <p className="mt-3 text-white/90">Every tree is different. Call for a free estimate based on your specific situation.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-8 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-8 py-3 text-sm font-semibold">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
