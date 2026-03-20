import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Stump Grinding Cost Guide 2026 | Prices by Diameter & Method",
  description:
    "Stump grinding cost guide for 2026. Average $250, typical $150-$300, full range $30-$1,600. See prices by stump diameter and compare grinding vs full removal.",
};

const faq = [
  {
    q: "How much does stump grinding cost on average?",
    a: "The national average for stump grinding is about $250. Most homeowners pay between $150 and $300 for a standard stump, with very small stumps as low as $30 and very large or complex stumps reaching $1,600 or more.",
  },
  {
    q: "Is stump grinding cheaper than full stump removal?",
    a: "Yes. Stump grinding is usually 40-70% cheaper than full removal because it does not require excavating the entire root ball. Grinding removes the visible stump and upper roots, while full removal involves heavy digging and backfill.",
  },
  {
    q: "How do companies price stump grinding?",
    a: "Most companies price by stump diameter measured at ground level, often in 6-inch or 12-inch increments. Some use a flat rate for small stumps and a per-inch rate for larger stumps. Accessibility, root flare, and debris cleanup can also affect the price.",
  },
  {
    q: "What is included in a stump grinding quote?",
    a: "Typical quotes include grinding the stump 4-8 inches below grade and basic cleanup. Hauling away grindings, backfilling with soil, or re-seeding the area may be extra. Always confirm depth and cleanup scope in the estimate.",
  },
  {
    q: "Can I grind a stump myself?",
    a: "DIY stump grinding is possible by renting a grinder, but it is labor-intensive and carries safety risks. Professional crews have commercial grinders, safety gear, and insurance, making them faster and safer for most homeowners.",
  },
  {
    q: "How long does stump grinding take?",
    a: "Most single stumps take 30-90 minutes to grind depending on size and wood hardness. Large hardwood stumps, tight access, or multiple stumps can take several hours.",
  },
  {
    q: "Does stump grinding kill the roots?",
    a: "Grinding removes the visible stump and upper roots, but deeper roots remain in the soil and naturally decay over time. This is usually fine for lawns and landscaping, but it is not the same as full root removal.",
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

export default function StumpGrindingCostPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p className="text-sm uppercase tracking-widest text-forest-green">Cost Guide</p>
      <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-dark">
        Stump Grinding Cost Guide 2026
      </h1>
      <p className="mt-4 text-lg text-slate-600">
        The average stump grinding cost in 2026 is <strong>$250</strong>. Most
        homeowners pay between <strong>$150 and $300</strong> for a typical stump
        grinding job, while the full national range runs from <strong>$30 to $1,600</strong>
        depending on stump size, wood hardness, access, and how deep the grind is
        required. If you recently removed a tree and want a clean, level yard
        without a decaying stump, this guide breaks down the real pricing numbers
        and what drives them.
      </p>

      <div className="mt-8 rounded-2xl bg-forest-green text-white p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-3 text-center">
          <div>
            <p className="text-sm text-white/70">Low End</p>
            <p className="text-3xl font-bold">$30</p>
          </div>
          <div>
            <p className="text-sm text-champ-gold">National Average</p>
            <p className="text-3xl font-bold text-champ-gold">$250</p>
          </div>
          <div>
            <p className="text-sm text-white/70">High End</p>
            <p className="text-3xl font-bold">$1,600</p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Stump Grinding Cost by Diameter</h2>
        <p className="mt-3 text-slate-600">
          Most stump grinding quotes are based on stump diameter at ground level.
          A stump with a wide root flare might measure larger than you expect, so
          crews will measure the widest point at the base. Use the table below as
          a realistic price range for common sizes.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Stump Diameter</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Typical Cost</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-3 font-medium">Up to 12 in</td><td className="font-semibold text-forest-green">$30 - $120</td><td className="text-xs text-slate-500">Small shrubs, saplings, or thin trunks</td></tr>
              <tr><td className="py-3 font-medium">13 - 24 in</td><td className="font-semibold text-forest-green">$120 - $250</td><td className="text-xs text-slate-500">Most backyard trees fall here</td></tr>
              <tr><td className="py-3 font-medium">25 - 36 in</td><td className="font-semibold text-forest-green">$250 - $450</td><td className="text-xs text-slate-500">Large shade trees and mature hardwoods</td></tr>
              <tr><td className="py-3 font-medium">37 - 48 in</td><td className="font-semibold text-forest-green">$450 - $700</td><td className="text-xs text-slate-500">Requires larger grinder and more passes</td></tr>
              <tr><td className="py-3 font-medium">49 - 60 in</td><td className="font-semibold text-forest-green">$700 - $1,100</td><td className="text-xs text-slate-500">Very large stumps or heavy root flare</td></tr>
              <tr><td className="py-3 font-medium">60+ in</td><td className="font-semibold text-forest-green">$1,100 - $1,600</td><td className="text-xs text-slate-500">Massive stumps, multiple root crowns</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Grinding vs. Full Stump Removal</h2>
        <p className="mt-3 text-slate-600">
          Homeowners often ask whether grinding or full stump removal is the right
          choice. Grinding is the most common because it is faster, less invasive,
          and significantly cheaper. Full removal is used when you need to replace
          the stump area with hardscape, install a foundation, or replant a tree
          in the same exact location. The comparison below shows the real-world
          differences.
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Method</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Typical Cost Range</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Pros</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Cons</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr>
                <td className="py-3 font-medium">Stump Grinding</td>
                <td className="font-semibold text-forest-green">$150 - $300 typical</td>
                <td className="text-xs text-slate-500">Fast, minimal disturbance, lower cost</td>
                <td className="text-xs text-slate-500">Roots remain and decay over time</td>
              </tr>
              <tr>
                <td className="py-3 font-medium">Full Stump Removal</td>
                <td className="font-semibold text-forest-green">$400 - $1,200+</td>
                <td className="text-xs text-slate-500">Complete root removal, replant-ready</td>
                <td className="text-xs text-slate-500">More labor, heavy excavation, higher cost</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">What Affects Stump Grinding Cost?</h2>
        <p className="mt-3 text-slate-600">
          Stump grinding looks straightforward, but there are multiple variables
          that can shift pricing. Understanding these variables helps you compare
          quotes and avoid surprises.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Stump Diameter and Root Flare",
              desc: "The wider the stump, the more passes the grinder must make. Root flare can add several inches to the measurement and increase costs even when the trunk looks smaller at waist height.",
            },
            {
              title: "Wood Hardness",
              desc: "Dense hardwoods like oak, hickory, and maple grind slower and wear down carbide teeth faster. Expect higher pricing for tough species.",
            },
            {
              title: "Access and Terrain",
              desc: "If the grinder has to pass through a narrow gate, climb steps, or work on a steep slope, the crew needs smaller equipment and more time. This can add $50-$200.",
            },
            {
              title: "Number of Stumps",
              desc: "Multiple stumps typically reduce the per-stump cost because setup time is shared. Many companies offer a discount for 3+ stumps on the same property.",
            },
            {
              title: "Grinding Depth",
              desc: "Standard grinding is 4-8 inches below grade. Deeper grinding (12-18 inches) for replanting or hardscape adds cost due to extra time and wear.",
            },
            {
              title: "Cleanup and Hauling",
              desc: "Stump grindings can fill a large area. If you want them hauled away instead of left as mulch, expect $75-$250 in additional fees.",
            },
            {
              title: "Stump Age and Condition",
              desc: "Old, rotted stumps can be easier to grind but may have irregular shapes that slow the process. Recently cut stumps are often denser and harder.",
            },
            {
              title: "Utility Marking",
              desc: "If there are buried utilities nearby, crews must call in locates and work carefully, sometimes grinding shallower than normal. This safety step can influence scheduling and cost.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-forest-green">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Stump Grinding Price Examples</h2>
        <p className="mt-3 text-slate-600">
          Real-world examples help set expectations. The following scenarios are
          based on typical stump grinding jobs in residential neighborhoods:
        </p>
        <ul className="mt-4 space-y-3 text-slate-600 list-disc list-inside">
          <li>
            <strong>Small ornamental tree (10-inch diameter):</strong> $75 to $120
            for a straightforward grind near the front yard with easy access.
          </li>
          <li>
            <strong>Medium maple (22-inch diameter):</strong> $180 to $260 when the
            grinder can drive directly to the stump without navigating gates.
          </li>
          <li>
            <strong>Large oak (36-inch diameter):</strong> $350 to $550 because the
            grinder needs multiple passes and the hardwood is dense.
          </li>
          <li>
            <strong>Multiple stumps (3 stumps, 18-inch each):</strong> $350 to $450
            total after multi-stump discounts, averaging $120-$150 per stump.
          </li>
          <li>
            <strong>Massive hardwood (60-inch diameter):</strong> $900 to $1,300
            when the stump is close to a fence and requires careful positioning.
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Should You Grind the Stump or Leave It?</h2>
        <p className="mt-3 text-slate-600">
          Leaving a stump might seem like an easy way to save money, but stumps
          create a long list of issues. They are tripping hazards, attract insects,
          and make mowing difficult. Stumps can also sprout new growth if the tree
          species is aggressive. Grinding the stump eliminates these problems,
          improves your yard&apos;s appearance, and makes the space usable again.
        </p>
        <p className="mt-4 text-slate-600">
          In most cases, grinding is the best balance of cost and results. You get
          a level surface that can be covered with mulch or topsoil without major
          disruption to the surrounding yard. Full removal is typically only
          needed if you are installing a patio, pouring concrete, or replanting a
          new tree in the exact location where the old stump sits.
        </p>
      </section>

      <section className="mt-12 rounded-2xl bg-forest-green text-white p-8">
        <h2 className="text-2xl font-bold">Save with Bundle Pricing</h2>
        <p className="mt-3 text-white/90">
          If you are already scheduling tree removal, ask about stump grinding
          bundle pricing. Many tree companies offer a reduced rate when grinding
          is added to the same visit because the crew and equipment are already
          onsite. Bundling can reduce stump grinding costs by 10-25% and save you
          a second trip fee.
        </p>
        <div className="mt-6">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-champ-gold px-6 py-3 text-sm font-semibold text-slate-dark shadow"
          >
            Call {COMPANY.phone}
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">How to Get an Accurate Stump Grinding Quote</h2>
        <p className="mt-3 text-slate-600">
          The most accurate stump grinding quote comes from an on-site visit.
          Photos can help, but stump diameter, root flare, slope, and access are
          hard to judge remotely. A reputable provider will measure the stump at
          ground level, confirm the required depth, and clarify cleanup options.
        </p>
        <p className="mt-4 text-slate-600">
          When comparing estimates, verify what is included in the price. Ask if
          the quote covers grinding depth, debris removal, and any additional
          stumps on the property. Also ask about utility locates and whether they
          will call 811 before grinding. A professional contractor should be
          transparent and happy to explain their process.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">DIY Stump Grinding: Cost vs. Risk</h2>
        <p className="mt-3 text-slate-600">
          Renting a stump grinder typically costs $150 to $250 per day, plus fuel
          and transport fees. While DIY seems comparable to hiring a pro, there are
          hidden costs. You still need safety gear, and you risk damaging the
          grinder&apos;s teeth on rocks or metal. Most rentals are heavy and difficult
          to maneuver, especially in backyards with gates or slopes.
        </p>
        <p className="mt-4 text-slate-600">
          Professional crews complete the job faster and more safely. They also
          carry insurance in case of property damage or injury. For most
          homeowners, hiring a professional is the best value even when the
          sticker price looks slightly higher than a rental.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Frequently Asked Questions</h2>
        <div className="mt-4 space-y-4">
          {faq.map((item) => (
            <div key={item.q} className="rounded-xl border border-slate-200 p-5">
              <h3 className="font-semibold text-forest-green">{item.q}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Get a Stump Grinding Quote</h2>
        <p className="mt-3 text-slate-600">
          Tree Service Champs connects you with vetted local pros who grind stumps
          safely, protect your landscaping, and clean up when the job is done.
          Call us today and we will match you with a qualified team in your area.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={COMPANY.phoneHref}
            className="inline-flex items-center justify-center rounded-full bg-forest-green px-6 py-3 text-sm font-semibold text-white shadow"
          >
            Call {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-forest-green px-6 py-3 text-sm font-semibold text-forest-green"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
