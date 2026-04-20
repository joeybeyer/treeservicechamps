import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "Tree Service Champs | Safe. Fast. Done Right.",
  description:
    "Safe, fast, and professional tree service with transparent pricing. Call Tree Service Champs for tree removal, trimming, and stump grinding. (833) 225-2467",
};

const faq = [
  { q: "How much does tree removal cost?", a: "Tree removal typically ranges from $200 to $2,000, with the average job around $750. Pricing depends on tree size, access, and risk level." },
  { q: "Do you offer same-day service?", a: "Yes. We prioritize hazardous and storm-damaged trees and can often dispatch same-day or next-day crews." },
  { q: "Are you licensed and insured?", a: "Absolutely. Our crews are fully insured for property protection and safety compliance." },
  { q: "What happens to the debris?", a: "We include haul-away and cleanup. Wood can be hauled off or stacked if you prefer to keep it." },
  { q: "Can you grind the stump too?", a: "Yes. Stump grinding is available as an add-on and is usually completed the same day." },
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
  description: "Tree Service Champs provides safe tree removal, trimming, and stump grinding with upfront pricing.",
  makesOffer: [
    { "@type": "Offer", name: "Tree Removal", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", minPrice: 200, maxPrice: 2000 } },
    { "@type": "Offer", name: "Stump Grinding", priceSpecification: { "@type": "PriceSpecification", priceCurrency: "USD", minPrice: 150, maxPrice: 300 } },
  ],
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HomeContent />
    </>
  );
}
