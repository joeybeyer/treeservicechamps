import type { Metadata } from "next";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a free tree service quote. Call Tree Service Champs at (833) 225-2467 or send a message online.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Tree Service Champs",
  url: "https://treeservicechamps.com/contact",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Tree Service Champs",
    telephone: "(833) 225-2467",
    email: "info@treeservicechamps.com",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-forest-green">
            Contact Us
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-dark">
            Get a free tree service quote
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            Call us anytime or send the form and we will respond quickly with
            pricing and availability.
          </p>
          <div className="mt-6 rounded-xl bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-dark">Phone</p>
            <a href={COMPANY.phoneHref} className="text-lg text-forest-green">
              {COMPANY.phone}
            </a>
            <p className="mt-4 text-sm font-semibold text-slate-dark">Email</p>
            <p className="text-sm text-slate-600">{COMPANY.email}</p>
          </div>
        </div>

        <form className="rounded-2xl border border-slate-200 p-6">
          <div className="grid gap-4">
            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="phone">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Best number to reach you"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="service">
                Service Needed
              </label>
              <select
                id="service"
                name="service"
                className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
              >
                <option>Tree removal</option>
                <option>Tree trimming</option>
                <option>Stump grinding</option>
                <option>Storm cleanup</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700" htmlFor="message">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-2 w-full rounded-md border border-slate-200 px-3 py-2 text-sm"
                placeholder="Tell us about the tree, access, and any urgent needs"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-forest-green px-6 py-3 text-sm font-semibold text-white"
            >
              Request Quote
            </button>
            <p className="text-xs text-slate-500">
              By submitting, you agree to be contacted by Tree Service Champs.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
