import Link from "next/link";
import { COMPANY } from "@/data/company";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tree Service Champs",
  description:
    "Safe, fast, and professional tree service with transparent pricing. Call Tree Service Champs for tree removal, trimming, and stump grinding.",
};

const faq = [
  {
    q: "How much does tree removal cost?",
    a: "Tree removal typically ranges from $200 to $2,000, with the average job around $750. Pricing depends on tree size, access, and risk level.",
  },
  {
    q: "Do you offer same-day service?",
    a: "Yes. We prioritize hazardous and storm-damaged trees and can often dispatch same-day or next-day crews.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Absolutely. Our crews are fully insured for property protection and safety compliance.",
  },
  {
    q: "What happens to the debris?",
    a: "We include haul-away and cleanup. Wood can be hauled off or stacked if you prefer to keep it.",
  },
  {
    q: "Can you grind the stump too?",
    a: "Yes. Stump grinding is available as an add-on and is usually completed the same day.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tree Service Champs",
  url: "https://treeservicechamps.com",
  telephone: "(833) 225-2467",
  email: "info@treeservicechamps.com",
  slogan: "Safe. Fast. Done Right.",
  areaServed: "United States",
  priceRange: "$$",
  description:
    "Tree Service Champs provides safe tree removal, trimming, and stump grinding with upfront pricing.",
  makesOffer: [
    {
      "@type": "Offer",
      name: "Tree Removal",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        minPrice: 200,
        maxPrice: 2000,
      },
    },
    {
      "@type": "Offer",
      name: "Stump Grinding",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        minPrice: 150,
        maxPrice: 300,
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="bg-forest-green text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-widest text-champ-gold">
              {COMPANY.tagline}
            </p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">
              Tree removal and trimming done right the first time.
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Get fast, safe service from insured pros. We handle hazardous trees,
              storm damage, and routine trimming with clean, careful crews.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-champ-gold px-6 py-3 text-sm font-semibold text-slate-dark"
              >
                Get a Free Quote
              </Link>
              <a
                href={COMPANY.phoneHref}
                className="text-sm font-semibold"
              >
                Call {COMPANY.phone}
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-white/10 p-6">
            <h2 className="text-xl font-semibold">Why homeowners choose us</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>✅ Certified, insured crews</li>
              <li>✅ Clear pricing before we start</li>
              <li>✅ Same-day cleanup included</li>
              <li>✅ Emergency response available</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-4">
        {[
          "Licensed & insured",
          "5-star rated crews",
          "Upfront pricing",
          "24/7 storm response",
        ].map((item) => (
          <div key={item} className="rounded-xl border border-slate-200 p-4 text-center">
            <p className="text-sm font-semibold text-slate-dark">{item}</p>
          </div>
        ))}
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-2xl font-bold text-slate-dark">Core Services</h2>
        <p className="mt-2 text-sm text-slate-600">
          Full-service tree care designed for safety and speed.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Tree Removal",
              desc: "Complete removal for hazardous, dead, or unwanted trees. Prices $200-$2,000 (avg $750).",
              image: "/images/tree-removal.webp",
            },
            {
              title: "Tree Trimming",
              desc: "Trim for clearance, health, and curb appeal. Typical pricing $270-$1,800.",
              image: "/images/tree-trimming.webp",
            },
            {
              title: "Stump Grinding",
              desc: "Stumps ground below grade so you can replant or landscape. $150-$300.",
              image: "/images/stump-grinding.webp",
            },
            {
              title: "Emergency Storm Cleanup",
              desc: "Fast response for fallen trees and blocked access after storms.",
              image: "/images/emergency.webp",
            },
            {
              title: "Lot & Brush Clearing",
              desc: "Clear lots for build-ready land with haul-away included.",
              image: "/images/lot-clearing.webp",
            },
          ].map((service) => (
            <div key={service.title} className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <img src={service.image} alt={service.title} className="w-full h-40 object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-forest-green">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-dark">How it works</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "1. Call or request a quote",
                desc: "Share a few details and photos. We respond fast with clear pricing.",
              },
              {
                title: "2. Schedule your service",
                desc: "Pick a convenient time. We handle permits and safety planning.",
              },
              {
                title: "3. Safe removal + cleanup",
                desc: "Our crews finish the job and leave your property clean.",
              },
            ].map((step) => (
              <div key={step.title} className="rounded-xl bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-forest-green">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-dark">What customers say</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Kimberly R.",
              quote:
                "They removed two massive oaks in a day and left the yard spotless. Pricing was exactly what they quoted.",
            },
            {
              name: "Marcus B.",
              quote:
                "Fast response after a storm. Crew was professional and careful around the house and fence.",
            },
            {
              name: "Derrick L.",
              quote:
                "Trimmed our maples and ground the stump. Great communication and fair pricing.",
            },
          ].map((review) => (
            <div key={review.name} className="rounded-2xl border border-slate-200 p-6">
              <p className="text-sm text-slate-600">&ldquo;{review.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-semibold text-forest-green">{review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-dark">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((item) => (
              <div key={item.q} className="rounded-xl bg-white p-5 shadow-sm">
                <p className="font-semibold text-forest-green">{item.q}</p>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl bg-forest-green px-6 py-10 text-white md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Ready for a safe, clean removal?</h2>
            <p className="mt-2 text-sm text-white/90">
              Call now or request a quote and we will schedule your service.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 md:mt-0">
            <a
              href={COMPANY.phoneHref}
              className="rounded-full bg-champ-gold px-6 py-3 text-sm font-semibold text-slate-dark"
            >
              Call {COMPANY.phone}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white px-6 py-3 text-sm font-semibold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
