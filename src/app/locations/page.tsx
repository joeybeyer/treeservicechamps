import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Service Areas | Tree Service Champs — 75+ Cities Nationwide",
  description:
    "Tree Service Champs serves 75+ cities across the US. Find certified tree removal, trimming, and stump grinding professionals in your area.",
};

const cities: Record<string, { name: string; slug: string }[]> = {
  "Florida": [
    { name: "Tampa", slug: "tree-service-tampa-fl" },
    { name: "Jacksonville", slug: "tree-service-jacksonville-fl" },
    { name: "Orlando", slug: "tree-service-orlando-fl" },
    { name: "Miami", slug: "tree-service-miami-fl" },
    { name: "Fort Lauderdale", slug: "tree-service-fort-lauderdale-fl" },
  ],
  "Georgia": [
    { name: "Atlanta", slug: "tree-service-atlanta-ga" },
    { name: "Savannah", slug: "tree-service-savannah-ga" },
    { name: "Augusta", slug: "tree-service-augusta-ga" },
  ],
  "North Carolina": [
    { name: "Charlotte", slug: "tree-service-charlotte-nc" },
    { name: "Raleigh", slug: "tree-service-raleigh-nc" },
    { name: "Durham", slug: "tree-service-durham-nc" },
    { name: "Greensboro", slug: "tree-service-greensboro-nc" },
  ],
  "Tennessee": [
    { name: "Nashville", slug: "tree-service-nashville-tn" },
    { name: "Memphis", slug: "tree-service-memphis-tn" },
    { name: "Knoxville", slug: "tree-service-knoxville-tn" },
  ],
  "Texas": [
    { name: "Houston", slug: "tree-service-houston-tx" },
    { name: "Dallas", slug: "tree-service-dallas-tx" },
    { name: "San Antonio", slug: "tree-service-san-antonio-tx" },
    { name: "Austin", slug: "tree-service-austin-tx" },
    { name: "Fort Worth", slug: "tree-service-fort-worth-tx" },
  ],
  "Ohio": [
    { name: "Columbus", slug: "tree-service-columbus-oh" },
    { name: "Cleveland", slug: "tree-service-cleveland-oh" },
    { name: "Cincinnati", slug: "tree-service-cincinnati-oh" },
  ],
  "Indiana": [
    { name: "Indianapolis", slug: "tree-service-indianapolis-in" },
    { name: "Fort Wayne", slug: "tree-service-fort-wayne-in" },
  ],
  "Colorado": [
    { name: "Denver", slug: "tree-service-denver-co" },
    { name: "Colorado Springs", slug: "tree-service-colorado-springs-co" },
  ],
  "Washington": [
    { name: "Seattle", slug: "tree-service-seattle-wa" },
    { name: "Tacoma", slug: "tree-service-tacoma-wa" },
  ],
  "Oregon": [
    { name: "Portland", slug: "tree-service-portland-or" },
  ],
  "Pennsylvania": [
    { name: "Philadelphia", slug: "tree-service-philadelphia-pa" },
    { name: "Pittsburgh", slug: "tree-service-pittsburgh-pa" },
  ],
  "Virginia": [
    { name: "Virginia Beach", slug: "tree-service-virginia-beach-va" },
    { name: "Richmond", slug: "tree-service-richmond-va" },
  ],
  "Missouri": [
    { name: "Kansas City", slug: "tree-service-kansas-city-mo" },
    { name: "St. Louis", slug: "tree-service-st-louis-mo" },
  ],
  "Minnesota": [
    { name: "Minneapolis", slug: "tree-service-minneapolis-mn" },
    { name: "St. Paul", slug: "tree-service-st-paul-mn" },
  ],
  "Wisconsin": [
    { name: "Milwaukee", slug: "tree-service-milwaukee-wi" },
    { name: "Madison", slug: "tree-service-madison-wi" },
  ],
  "Michigan": [
    { name: "Detroit", slug: "tree-service-detroit-mi" },
    { name: "Grand Rapids", slug: "tree-service-grand-rapids-mi" },
  ],
  "Illinois": [
    { name: "Chicago", slug: "tree-service-chicago-il" },
  ],
  "Kentucky": [
    { name: "Louisville", slug: "tree-service-louisville-ky" },
    { name: "Lexington", slug: "tree-service-lexington-ky" },
  ],
  "Oklahoma": [
    { name: "Oklahoma City", slug: "tree-service-oklahoma-city-ok" },
    { name: "Tulsa", slug: "tree-service-tulsa-ok" },
  ],
  "Louisiana": [
    { name: "New Orleans", slug: "tree-service-new-orleans-la" },
  ],
  "Maryland": [
    { name: "Baltimore", slug: "tree-service-baltimore-md" },
  ],
  "Massachusetts": [
    { name: "Boston", slug: "tree-service-boston-ma" },
  ],
  "Arizona": [
    { name: "Phoenix", slug: "tree-service-phoenix-az" },
    { name: "Tucson", slug: "tree-service-tucson-az" },
  ],
  "Nevada": [
    { name: "Las Vegas", slug: "tree-service-las-vegas-nv" },
  ],
  "California": [
    { name: "Los Angeles", slug: "tree-service-los-angeles-ca" },
    { name: "San Diego", slug: "tree-service-san-diego-ca" },
    { name: "Sacramento", slug: "tree-service-sacramento-ca" },
    { name: "San Jose", slug: "tree-service-san-jose-ca" },
  ],
};

const activeSlugs = new Set([
  "tree-service-houston-tx",
  "tree-service-atlanta-ga",
  "tree-service-charlotte-nc",
  "tree-service-nashville-tn",
  "tree-service-tampa-fl",
]);

export default function LocationsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-widest text-forest-green">Service Areas</p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-dark">
          Tree Service in 75+ Cities Nationwide
        </h1>
        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
          Tree Service Champs connects you with certified, insured tree professionals in your area. Select your city below or call <a href={COMPANY.phoneHref} className="text-forest-green font-semibold">{COMPANY.phone}</a> for immediate help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(cities).map(([state, stateCities]) => (
          <div key={state}>
            <h2 className="text-lg font-bold text-slate-dark border-b border-slate-200 pb-2 mb-3">{state}</h2>
            <ul className="space-y-1">
              {stateCities.map((city) => {
                const isActive = activeSlugs.has(city.slug);
                return (
                  <li key={city.slug}>
                    {isActive ? (
                      <Link href={`/${city.slug}`} className="text-sm text-forest-green hover:underline font-medium">
                        {city.name} →
                      </Link>
                    ) : (
                      <span className="text-sm text-slate-400">{city.name} (coming soon)</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <section className="mt-16 rounded-2xl bg-forest-green px-6 py-10 text-white text-center">
        <h2 className="text-2xl font-bold">Don&apos;t See Your City?</h2>
        <p className="mt-3 text-white/90">We&apos;re expanding fast. Call us — we likely have a crew near you.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href={COMPANY.phoneHref} className="rounded-full bg-champ-gold px-8 py-3 text-sm font-semibold text-slate-dark">
            Call {COMPANY.phone}
          </a>
          <Link href="/contact" className="rounded-full border border-white px-8 py-3 text-sm font-semibold">
            Request Service
          </Link>
        </div>
      </section>
    </div>
  );
}
