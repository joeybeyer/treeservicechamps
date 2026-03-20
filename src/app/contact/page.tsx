import type { Metadata } from "next";
import { COMPANY } from "@/data/company";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Get a Free Tree Service Quote",
  description:
    "Request a free tree removal, trimming, or stump grinding quote. Call Tree Service Champs at (833) 225-2467 or submit online.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-forest-green">
            Contact Us
          </p>
          <h1 className="mt-3 text-3xl font-bold text-slate-dark">
            Get a free tree service quote
          </h1>
          <p className="mt-4 text-sm text-slate-600">
            Call us anytime or fill out the form. We respond quickly with
            clear pricing and availability.
          </p>
          <div className="mt-6 rounded-xl bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-dark">Phone</p>
            <a href={COMPANY.phoneHref} className="text-lg font-bold text-forest-green">
              {COMPANY.phone}
            </a>
            <p className="mt-4 text-sm font-semibold text-slate-dark">Email</p>
            <p className="text-sm text-slate-600">{COMPANY.email}</p>
            <p className="mt-4 text-sm font-semibold text-slate-dark">Hours</p>
            <p className="text-sm text-slate-600">Mon-Sat 7AM-7PM | Emergency 24/7</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-forest-green/5 p-3 text-center">
              <p className="text-xs font-semibold text-forest-green">Licensed &amp; Insured</p>
            </div>
            <div className="rounded-lg bg-forest-green/5 p-3 text-center">
              <p className="text-xs font-semibold text-forest-green">Free Estimates</p>
            </div>
            <div className="rounded-lg bg-forest-green/5 p-3 text-center">
              <p className="text-xs font-semibold text-forest-green">Same-Day Available</p>
            </div>
            <div className="rounded-lg bg-forest-green/5 p-3 text-center">
              <p className="text-xs font-semibold text-forest-green">Upfront Pricing</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
