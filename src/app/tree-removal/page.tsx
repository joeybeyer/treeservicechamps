import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Tree Removal",
  description:
    "Professional tree removal with clear pricing and safe, insured crews. Average tree removal cost is $750 (range $200-$2,000).",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Tree Removal",
  provider: {
    "@type": "LocalBusiness",
    name: "Tree Service Champs",
    telephone: "(833) 225-2467",
  },
  areaServed: "United States",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    minPrice: 200,
    maxPrice: 2000,
    price: 750,
  },
  description:
    "Safe tree removal for hazardous or unwanted trees with cleanup included.",
};

export default function TreeRemovalPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="rounded-2xl bg-slate-50 p-8">
        <p className="text-sm uppercase tracking-widest text-forest-green">
          Tree Removal Service
        </p>
        <h1 className="mt-3 text-3xl font-bold text-slate-dark">
          Safe, insured tree removal with clear pricing.
        </h1>
        <p className="mt-4 text-sm text-slate-600">
          Tree removal pricing ranges from <strong>$200 to $2,000</strong> with
          an average job cost around <strong>$750</strong>. Final pricing depends
          on tree height, trunk diameter, access, and nearby structures. We
          provide upfront quotes before any work begins.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={COMPANY.phoneHref}
            className="rounded-full bg-forest-green px-6 py-3 text-sm font-semibold text-white"
          >
            Call {COMPANY.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-forest-green px-6 py-3 text-sm font-semibold text-forest-green"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-forest-green">What&apos;s included</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Hazard assessment and safe removal plan</li>
            <li>• Climbing, rigging, or crane work when needed</li>
            <li>• Sectional takedown to protect structures</li>
            <li>• Full debris haul-away and cleanup</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-forest-green">Common reasons</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>• Dead or diseased trees</li>
            <li>• Storm-damaged or leaning trees</li>
            <li>• Roots threatening foundations or sidewalks</li>
            <li>• Clearing space for new construction</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 rounded-2xl bg-forest-green px-6 py-8 text-white">
        <h2 className="text-xl font-semibold">Need stump grinding too?</h2>
        <p className="mt-2 text-sm text-white/90">
          Add stump grinding for $150-$300 depending on size. We can grind the
          stump the same day as removal to leave the area ready for landscaping.
        </p>
      </section>
    </div>
  );
}
