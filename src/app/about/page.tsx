import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "About Tree Service Champs | Safe. Fast. Done Right.",
  description:
    "Tree Service Champs connects homeowners with certified, insured tree service professionals. Safe removal, transparent pricing, same-day service in 75+ cities.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="rounded-2xl bg-forest-green text-white p-8 md:p-12">
        <p className="text-sm uppercase tracking-widest text-champ-gold">{COMPANY.tagline}</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">About Tree Service Champs</h1>
        <p className="mt-4 text-lg text-white/90">
          We connect homeowners and property managers with certified, insured tree service professionals who deliver safe work, transparent pricing, and reliable results. No hidden fees. No guesswork. Just tree care done right.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Why Tree Service Champs?</h2>
        <p className="mt-3 text-slate-600">
          Finding a trustworthy tree service should not be a gamble. Too many homeowners get burned by unlicensed operators, hidden fees, and no-show appointments. Tree Service Champs was built to fix that. Every professional in our network is vetted for licensing, insurance, and track record before they touch a single branch.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { icon: "🛡️", title: "Certified & Insured", desc: "Every crew carries full liability and workers comp insurance. We verify credentials before adding anyone to our network." },
            { icon: "💰", title: "Transparent Pricing", desc: "You see the full cost before work begins. No fuel surcharges, no environmental fees, no surprise overages." },
            { icon: "⚡", title: "Same-Day Available", desc: "Emergency or routine, we dispatch fast. Same-day service available in most metro areas for urgent situations." },
            { icon: "🌳", title: "Arborist Expertise", desc: "Our network includes ISA-certified arborists who assess tree health, recommend the right approach, and protect your property." },
            { icon: "📋", title: "Permit Assistance", desc: "Many cities require tree removal permits. We navigate local regulations and handle the paperwork so you do not have to." },
            { icon: "♻️", title: "Responsible Disposal", desc: "We prioritize recycling and responsible disposal. Wood, brush, and debris go to licensed facilities, not landfills." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-slate-200 p-6 text-center">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-forest-green">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">Our Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            { name: "Tree Removal", desc: "Complete removal for dead, diseased, or hazardous trees. $200-$2,000.", href: "/tree-removal" },
            { name: "Tree Trimming & Pruning", desc: "Crown thinning, deadwood removal, structural pruning. $270-$1,800.", href: "/tree-trimming" },
            { name: "Stump Grinding", desc: "Below-grade stump removal for clean yards. $150-$300.", href: "/stump-grinding" },
            { name: "Emergency Service", desc: "24/7 response for storm damage and fallen trees.", href: "/emergency-tree-service" },
          ].map((s) => (
            <Link key={s.name} href={s.href} className="rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition-shadow block">
              <h3 className="font-semibold text-forest-green">{s.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Nationwide Coverage</h2>
        <p className="mt-3 text-slate-600">
          Tree Service Champs operates in 75+ cities across the United States. Whether you are in Houston dealing with hurricane debris, Atlanta managing a dense urban canopy, or Nashville prepping for tornado season, our local crews know the trees, the regulations, and the weather patterns in your area.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/tree-service-houston-tx" className="text-sm text-forest-green hover:underline">Houston, TX</Link>
          <Link href="/tree-service-atlanta-ga" className="text-sm text-forest-green hover:underline">Atlanta, GA</Link>
          <Link href="/tree-service-charlotte-nc" className="text-sm text-forest-green hover:underline">Charlotte, NC</Link>
          <Link href="/tree-service-nashville-tn" className="text-sm text-forest-green hover:underline">Nashville, TN</Link>
          <Link href="/tree-service-tampa-fl" className="text-sm text-forest-green hover:underline">Tampa, FL</Link>
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-forest-green px-6 py-10 text-white text-center">
        <h2 className="text-2xl font-bold">Ready for a Free Quote?</h2>
        <p className="mt-3 text-white/90">Certified crews. Clear pricing. Same-day available.</p>
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
