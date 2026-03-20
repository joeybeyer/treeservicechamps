import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Tree Removal Cost 2026 | Price Guide by Size & Type",
  description:
    "How much does tree removal cost in 2026? Average $750, range $200-$2,000+. Detailed pricing by tree size, species, and factors that affect cost.",
};

const faq = [
  {
    q: "How much does tree removal cost on average?",
    a: "The national average for tree removal is $750. Most homeowners pay between $200 and $2,000 depending on tree size, species, location, and accessibility. Very large or hazardous trees can cost $3,000-$5,000+.",
  },
  {
    q: "How much does it cost to remove a large tree?",
    a: "Large trees (60-80 feet) typically cost $800-$1,500 to remove. Very large trees over 80 feet can run $1,000-$2,000 or more, especially if crane equipment is needed or the tree is near structures.",
  },
  {
    q: "Is tree removal cheaper in winter?",
    a: "Yes, winter is typically the cheapest season for tree removal. Tree service companies are less busy during dormant months, and many offer 10-20% discounts. The best time to schedule non-emergency removal is December through February.",
  },
  {
    q: "Does insurance cover tree removal?",
    a: "Homeowners insurance typically covers tree removal when a tree falls on a covered structure (house, garage, fence). If a tree falls in the yard without hitting anything, coverage varies by policy. Storm damage removal from structures is almost always covered.",
  },
  {
    q: "What factors affect tree removal cost?",
    a: "The main cost factors are tree height, trunk diameter, accessibility (proximity to structures, power lines, fences), tree health/condition, species (hardwoods cost more), location on property, and whether stump grinding is included.",
  },
  {
    q: "Can I remove a tree myself?",
    a: "Small trees under 10 feet can be DIY projects with proper tools. However, any tree near structures, power lines, or over 20 feet tall should be handled by a professional. The risk of property damage and personal injury makes professional removal worth the cost for most situations.",
  },
  {
    q: "Does tree removal include stump grinding?",
    a: "Most tree removal quotes do NOT include stump grinding unless specifically stated. Stump grinding is typically an add-on service costing $150-$300 per stump. Always ask if stump removal is included in your estimate.",
  },
  {
    q: "How long does tree removal take?",
    a: "Small trees (under 30 feet) take 1-3 hours. Medium trees (30-60 feet) take 3-6 hours. Large or complex removals can take a full day or more. Emergency removals may be faster due to urgency but cost more.",
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

export default function TreeRemovalCostPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="text-sm uppercase tracking-widest text-forest-green">Cost Guide</p>
      <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-dark">
        How Much Does Tree Removal Cost in 2026?
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        The average tree removal cost is <strong>$750</strong>. Most homeowners pay between <strong>$200 and $2,000</strong> depending on tree size, species, location, and accessibility. This guide breaks down exactly what you can expect to pay.
      </p>

      <div className="mt-8 rounded-2xl bg-forest-green text-white p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-3 text-center">
          <div>
            <p className="text-sm text-white/70">Low End</p>
            <p className="text-3xl font-bold">$200</p>
          </div>
          <div>
            <p className="text-sm text-champ-gold">National Average</p>
            <p className="text-3xl font-bold text-champ-gold">$750</p>
          </div>
          <div>
            <p className="text-sm text-white/70">High End</p>
            <p className="text-3xl font-bold">$2,000+</p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Tree Removal Cost by Size</h2>
        <p className="mt-3 text-slate-600">
          Tree height is the single biggest factor in removal cost. Taller trees require more equipment, time, and expertise to remove safely.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Size Category</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Height</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Cost Range</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Average</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-3 font-medium">Small</td><td>Under 30 ft</td><td>$150 - $450</td><td className="font-semibold text-forest-green">$300</td></tr>
              <tr><td className="py-3 font-medium">Medium</td><td>30 - 60 ft</td><td>$450 - $1,200</td><td className="font-semibold text-forest-green">$750</td></tr>
              <tr><td className="py-3 font-medium">Large</td><td>60 - 80 ft</td><td>$800 - $1,500</td><td className="font-semibold text-forest-green">$1,100</td></tr>
              <tr><td className="py-3 font-medium">Very Large</td><td>80+ ft</td><td>$1,000 - $2,000+</td><td className="font-semibold text-forest-green">$1,500</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Tree Removal Cost by Species</h2>
        <p className="mt-3 text-slate-600">
          Different tree species have different wood densities, growth patterns, and root systems that affect removal difficulty and cost.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Species</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Typical Size</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Cost Range</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-3 font-medium">Oak</td><td>60-80 ft</td><td className="font-semibold text-forest-green">$800 - $1,500</td><td className="text-xs text-slate-500">Dense hardwood, heavy branches</td></tr>
              <tr><td className="py-3 font-medium">Pine</td><td>40-80 ft</td><td className="font-semibold text-forest-green">$400 - $1,200</td><td className="text-xs text-slate-500">Softer wood, faster removal</td></tr>
              <tr><td className="py-3 font-medium">Maple</td><td>40-70 ft</td><td className="font-semibold text-forest-green">$500 - $1,100</td><td className="text-xs text-slate-500">Wide canopy, moderate density</td></tr>
              <tr><td className="py-3 font-medium">Palm</td><td>20-60 ft</td><td className="font-semibold text-forest-green">$200 - $900</td><td className="text-xs text-slate-500">Single trunk, no branching</td></tr>
              <tr><td className="py-3 font-medium">Willow</td><td>30-50 ft</td><td className="font-semibold text-forest-green">$400 - $1,000</td><td className="text-xs text-slate-500">Extensive root system</td></tr>
              <tr><td className="py-3 font-medium">Birch</td><td>30-50 ft</td><td className="font-semibold text-forest-green">$300 - $700</td><td className="text-xs text-slate-500">Lighter wood, easier removal</td></tr>
              <tr><td className="py-3 font-medium">Elm</td><td>50-70 ft</td><td className="font-semibold text-forest-green">$600 - $1,200</td><td className="text-xs text-slate-500">Disease-prone, may need special handling</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Factors That Affect Tree Removal Cost</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { title: "Tree Height & Diameter", desc: "The most significant cost factor. Taller, thicker trees require more labor, equipment, and time. A 20-foot tree might take one hour; an 80-foot tree could take all day." },
            { title: "Proximity to Structures", desc: "Trees near houses, garages, fences, or power lines require careful rigging and sectional removal instead of felling. This adds 25-50% to the base cost." },
            { title: "Accessibility", desc: "If the tree is in a backyard with no equipment access, crews may need to carry everything by hand. Limited access adds $200-$500 to the job." },
            { title: "Tree Condition", desc: "Dead, diseased, or storm-damaged trees can be unpredictable and more dangerous to remove. Expect a 10-20% premium for hazardous tree conditions." },
            { title: "Emergency vs. Scheduled", desc: "Emergency removal (fallen tree, storm damage) costs 20-50% more than scheduled removal due to urgency and after-hours labor. Plan ahead when possible." },
            { title: "Stump Grinding Add-on", desc: "Most quotes do NOT include stump grinding. Budget an additional $150-$300 per stump if you want it ground down after removal." },
            { title: "Permit Requirements", desc: "Some cities require permits for tree removal, especially for large trees or trees in historic districts. Permit costs range from $50-$500 depending on municipality." },
            { title: "Cleanup & Hauling", desc: "Basic cleanup is usually included. If you want wood split and stacked, brush chipped, or hauling to a specific location, expect an additional $50-$200." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-forest-green">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Additional Costs to Consider</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Service</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-3">Stump grinding</td><td className="font-semibold text-forest-green">$150 - $300 per stump</td></tr>
              <tr><td className="py-3">Stump full removal</td><td className="font-semibold text-forest-green">$500 - $1,600</td></tr>
              <tr><td className="py-3">Limb chipping</td><td className="font-semibold text-forest-green">$50 - $100</td></tr>
              <tr><td className="py-3">Log splitting &amp; stacking</td><td className="font-semibold text-forest-green">$75 - $150</td></tr>
              <tr><td className="py-3">Permit fees</td><td className="font-semibold text-forest-green">$50 - $500</td></tr>
              <tr><td className="py-3">Emergency surcharge</td><td className="font-semibold text-safety-orange">+20-50% of base cost</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">How to Save on Tree Removal</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            { tip: "Schedule in winter", desc: "Tree services are less busy November-February and may offer 10-20% discounts." },
            { tip: "Bundle multiple trees", desc: "Removing 2-3 trees at once is cheaper per tree than scheduling separately." },
            { tip: "Keep the wood", desc: "If you want firewood, ask the company to leave the logs. You may save on hauling fees." },
            { tip: "Get 3+ quotes", desc: "Prices vary widely between companies. Always get at least three written estimates." },
            { tip: "Check insurance first", desc: "If the tree is damaged or threatening a structure, your homeowners insurance may cover part or all of the cost." },
            { tip: "Skip the stump", desc: "If the stump is not in the way, leave it for now. You can grind it later at your convenience." },
          ].map((item) => (
            <div key={item.tip} className="flex gap-3 rounded-lg border border-slate-200 p-4">
              <span className="text-xl">💡</span>
              <div>
                <p className="font-semibold text-forest-green text-sm">{item.tip}</p>
                <p className="mt-1 text-xs text-slate-600">{item.desc}</p>
              </div>
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
        <h2 className="text-2xl font-bold">Get an Exact Quote for Your Tree</h2>
        <p className="mt-3 text-white/90">
          Every tree is different. Call us for a free, no-obligation estimate based on your specific situation.
        </p>
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
