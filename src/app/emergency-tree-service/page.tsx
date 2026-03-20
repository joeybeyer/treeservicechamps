import type { Metadata } from "next";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Emergency Tree Service | 24/7 Storm Response",
  description:
    "24/7 emergency tree removal for storm damage, fallen trees, and hazardous situations. Fast response, insured crews. Call Tree Service Champs now.",
};

const faq = [
  {
    q: "What should I do if a tree falls on my house?",
    a: "First, ensure everyone is safe and evacuate if there is structural damage. Call 911 if there are injuries or gas leaks. Then call your insurance company and a professional tree service. Do not attempt to remove the tree yourself — structural damage can worsen during amateur removal.",
  },
  {
    q: "Does insurance cover emergency tree removal?",
    a: "Homeowners insurance typically covers tree removal when a tree falls on a structure (house, garage, fence, car). If a tree falls in your yard without hitting anything, coverage varies by policy. Storm damage removal from structures is almost always covered.",
  },
  {
    q: "How fast can you respond to an emergency?",
    a: "We prioritize emergency calls and can typically respond within 2-4 hours for hazardous situations. For trees on structures, blocking roads, or near power lines, we dispatch immediately. Call us 24/7 at (833) 225-2467.",
  },
  {
    q: "Is emergency tree removal more expensive?",
    a: "Yes, emergency removal typically costs 20-50% more than scheduled removal due to urgency, after-hours labor, and hazardous conditions. Costs can range from $500 to $5,000+ depending on the situation. However, the cost of NOT removing a hazardous tree is always higher.",
  },
  {
    q: "What if a tree falls on power lines?",
    a: "Stay at least 35 feet away from downed power lines. Call 911 and your utility company immediately. Do NOT attempt to remove the tree yourself. Professional tree services coordinate with utility companies for safe removal near energized lines.",
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

export default function EmergencyTreeServicePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="rounded-2xl bg-safety-orange text-white p-8 md:p-12">
        <p className="text-sm uppercase tracking-widest font-bold">⚠️ 24/7 Emergency Response</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold">
          Tree down? We are on the way.
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Fallen trees, storm damage, trees on houses, blocked roads — our emergency crews respond fast with the equipment and expertise to handle any situation safely.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-white px-8 py-4 text-lg font-bold text-safety-orange">
            📞 Call Now: {COMPANY.phone}
          </a>
        </div>
        <p className="mt-3 text-sm text-white/80">Available 24 hours a day, 7 days a week, 365 days a year.</p>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Emergency Situations We Handle</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { title: "Trees on Structures", desc: "Trees fallen on houses, garages, sheds, fences, or other buildings. We coordinate with insurance adjusters and document damage for claims." },
            { title: "Storm Damage Cleanup", desc: "After severe storms, tornadoes, or hurricanes, we clear fallen trees and debris to restore access and prevent further damage." },
            { title: "Blocked Roads & Driveways", desc: "Trees blocking roads, driveways, or emergency access. We clear the path quickly so you can get in and out safely." },
            { title: "Hazardous Leaning Trees", desc: "Trees that are cracked, split, or leaning dangerously after a storm. These need immediate assessment and removal before they fall." },
            { title: "Trees on Vehicles", desc: "Trees or large branches that have fallen on cars, trucks, or RVs. Careful removal to minimize additional vehicle damage." },
            { title: "Near Power Lines", desc: "Trees tangled in or threatening power lines. We coordinate with utility companies for safe de-energization and removal." },
          ].map((s) => (
            <div key={s.title} className="rounded-xl border-2 border-safety-orange/20 p-6">
              <h3 className="text-lg font-semibold text-safety-orange">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-slate-50 p-8">
        <h2 className="text-2xl font-bold text-slate-dark">What to Do in a Tree Emergency</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          {[
            { step: "1", title: "Stay Safe", desc: "Move away from the tree. If it hit your home, evacuate. Call 911 for injuries or gas leaks." },
            { step: "2", title: "Call Us", desc: "Reach our 24/7 line at (833) 225-2467. Describe the situation and send photos if safe to do so." },
            { step: "3", title: "Call Insurance", desc: "File a claim early. Take photos of all damage before removal begins. We can provide documentation." },
            { step: "4", title: "We Handle It", desc: "Our crew arrives with the equipment to safely remove the tree, clear debris, and make the area safe." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-safety-orange text-white text-xl font-bold">{item.step}</div>
              <h3 className="mt-3 font-semibold text-slate-dark">{item.title}</h3>
              <p className="mt-2 text-xs text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold text-slate-dark">Emergency Pricing</h2>
        <p className="mt-3 text-slate-600">
          Emergency tree removal pricing depends on the severity of the situation, tree size, accessibility, and time of day. Here are typical ranges:
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-300">
                <th className="pb-3 text-left font-semibold text-slate-dark">Situation</th>
                <th className="pb-3 text-left font-semibold text-slate-dark">Typical Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr><td className="py-3">Fallen branches / small tree</td><td className="font-semibold text-forest-green">$300-$800</td></tr>
              <tr><td className="py-3">Medium tree on yard</td><td className="font-semibold text-forest-green">$800-$1,500</td></tr>
              <tr><td className="py-3">Large tree on structure</td><td className="font-semibold text-forest-green">$1,500-$3,000</td></tr>
              <tr><td className="py-3">Complex removal (crane needed)</td><td className="font-semibold text-forest-green">$3,000-$5,000+</td></tr>
              <tr><td className="py-3">After-hours surcharge</td><td className="font-semibold text-safety-orange">+20-50%</td></tr>
            </tbody>
          </table>
        </div>
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

      <section className="mt-12 rounded-2xl bg-safety-orange px-6 py-10 text-white text-center">
        <h2 className="text-3xl font-bold">Do not wait. Call now.</h2>
        <p className="mt-3 text-lg text-white/90">Every minute a damaged tree stays up is a risk. Our crews are standing by.</p>
        <a href={COMPANY.phoneHref} className="mt-6 inline-block rounded-full bg-white px-10 py-4 text-xl font-bold text-safety-orange">
          📞 {COMPANY.phone}
        </a>
      </section>
    </div>
  );
}
