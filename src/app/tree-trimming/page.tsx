import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Tree Trimming & Pruning Services",
  description:
    "Professional tree trimming and pruning from $270-$1,800. Crown thinning, deadwood removal, structural pruning. Call Tree Service Champs for a free quote.",
};

const faq = [
  {
    q: "What is the difference between tree trimming and pruning?",
    a: "Tree trimming focuses on shaping and controlling growth for aesthetics and clearance. Pruning is more targeted — removing dead, diseased, or structurally weak branches to improve tree health and safety. Both are important for maintaining healthy trees.",
  },
  {
    q: "How much does tree trimming cost?",
    a: "Tree trimming typically costs $270-$1,800, with the national average around $460. Pricing depends on tree height, number of trees, accessibility, and the type of trimming needed.",
  },
  {
    q: "When is the best time to trim trees?",
    a: "Late winter or early spring (while dormant) is ideal for most species. However, dead or hazardous branches should be removed immediately regardless of season. Avoid heavy pruning during active growth in summer.",
  },
  {
    q: "How often should trees be trimmed?",
    a: "Most trees benefit from trimming every 3-5 years. Fruit trees may need annual pruning. Fast-growing species or trees near structures may need more frequent attention.",
  },
  {
    q: "Can improper trimming kill a tree?",
    a: "Yes. Topping, lion-tailing, and removing more than 25% of the canopy at once can severely stress or kill a tree. Always hire a certified arborist who follows ANSI A300 pruning standards.",
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

export default function TreeTrimmingPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="rounded-2xl bg-forest-green text-white p-8 md:p-12">
        <p className="text-sm uppercase tracking-widest text-champ-gold">Tree Trimming &amp; Pruning</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">
          Professional tree trimming that keeps your trees healthy and your property safe.
        </h1>
        <p className="mt-4 text-lg text-white/90">
          From crown thinning to deadwood removal, our certified arborists follow ANSI A300 standards to protect your trees and your investment. Pricing starts at <strong>$270</strong> with most jobs averaging <strong>$460</strong>.
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
        <h2 className="text-2xl font-bold text-slate-dark">Our Tree Trimming Services</h2>
        <p className="mt-3 text-slate-600">
          Every tree is different, and so is every trimming job. Our arborists assess each tree individually and recommend the right approach based on species, health, location, and your goals.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { title: "Crown Thinning", desc: "Selective removal of interior branches to reduce density, improve light penetration, and reduce wind resistance. Ideal for large canopy trees that have become too dense." },
            { title: "Crown Raising", desc: "Removing lower branches to increase clearance over sidewalks, driveways, roofs, and structures. Essential for maintaining safe vertical clearance." },
            { title: "Deadwood Removal", desc: "Removing dead, dying, or diseased branches before they fall. Prevents property damage and eliminates entry points for pests and disease." },
            { title: "Structural Pruning", desc: "Training young trees to develop strong branch architecture. Removes competing leaders and weak attachments to prevent future failures." },
            { title: "Vista Pruning", desc: "Strategic trimming to improve views while preserving tree health and aesthetics. Common for properties with scenic views blocked by overgrowth." },
            { title: "Fruit Tree Pruning", desc: "Specialized pruning to maximize fruit production, improve sunlight exposure, and maintain manageable tree size for easier harvesting." },
          ].map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-forest-green">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Tree Trimming Pricing</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Tree Size</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Height</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Price Range</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-3">Small</td><td>Under 25 ft</td><td className="font-semibold text-forest-green">$150-$400</td></tr>
              <tr><td className="py-3">Medium</td><td>25-50 ft</td><td className="font-semibold text-forest-green">$400-$800</td></tr>
              <tr><td className="py-3">Large</td><td>50-75 ft</td><td className="font-semibold text-forest-green">$800-$1,200</td></tr>
              <tr><td className="py-3">Very Large</td><td>75+ ft</td><td className="font-semibold text-forest-green">$1,200-$1,800+</td></tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">Prices are estimates. Final pricing depends on tree species, condition, access, and scope of work.</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Why Professional Trimming Matters</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            { title: "Prevents Property Damage", desc: "Overgrown branches can fall on roofs, cars, power lines, and fences during storms. Regular trimming removes hazards before they become emergencies." },
            { title: "Improves Tree Health", desc: "Removing dead and diseased wood prevents decay from spreading. Proper pruning cuts heal faster and reduce infection risk." },
            { title: "Increases Property Value", desc: "Well-maintained trees add 10-15% to property values. Neglected trees with dead limbs and overgrowth signal deferred maintenance to buyers." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-forest-green">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <div key={item.q} className="rounded-xl bg-white p-5 shadow-sm">
              <p className="font-semibold text-forest-green">{item.q}</p>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-forest-green px-6 py-10 text-white md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold">Ready to schedule tree trimming?</h2>
          <p className="mt-2 text-sm text-white/90">Get a free quote with upfront pricing. No surprises.</p>
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
