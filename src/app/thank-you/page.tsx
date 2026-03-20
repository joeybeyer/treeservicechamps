import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/data/company";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thanks for contacting Tree Service Champs. A team member will reach out shortly with pricing and scheduling.",
};

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-2xl bg-slate-50 p-10 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h1 className="text-3xl font-bold text-slate-dark">Thank you!</h1>
        <p className="mt-4 text-sm text-slate-600">
          We received your request. A Tree Service Champs specialist will reach
          out shortly with pricing and scheduling options.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={COMPANY.phoneHref}
            className="rounded-full bg-forest-green px-6 py-3 text-sm font-semibold text-white"
          >
            Call {COMPANY.phone}
          </a>
          <Link
            href="/"
            className="rounded-full border border-forest-green px-6 py-3 text-sm font-semibold text-forest-green"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
