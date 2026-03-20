"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ContactForm() {
  const router = useRouter();
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");

    const form = e.currentTarget;
    const params = new URLSearchParams(window.location.search);

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      city: (form.elements.namedItem("city") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      // Lead attribution (SOP Step 10)
      source: window.location.href,
      referrer: document.referrer || "",
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      // Honeypot
      _honeypot: (form.elements.namedItem("_honeypot") as HTMLInputElement).value,
    };

    // Honeypot check
    if (data._honeypot) {
      router.push("/thank-you");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        router.push("/thank-you");
      } else {
        setErrorMsg("Something went wrong. Please call us directly.");
        setState("error");
      }
    } catch {
      setErrorMsg("Network error. Please call us at (833) 225-2467.");
      setState("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 p-6">
      {/* Honeypot */}
      <input
        type="text"
        name="_honeypot"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="name">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-green"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="phone">
              Phone *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-green"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-green"
            placeholder="you@email.com"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="service">
              Service Needed
            </label>
            <select
              id="service"
              name="service"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-green bg-white"
            >
              <option value="">Select a service...</option>
              <option value="tree-removal">Tree Removal</option>
              <option value="tree-trimming">Tree Trimming &amp; Pruning</option>
              <option value="stump-grinding">Stump Grinding</option>
              <option value="emergency">Emergency Service</option>
              <option value="land-clearing">Land &amp; Lot Clearing</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700" htmlFor="city">
              City / Zip
            </label>
            <input
              id="city"
              name="city"
              type="text"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-green"
              placeholder="Your city or zip code"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700" htmlFor="message">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-forest-green resize-y"
            placeholder="Tell us about the tree, access, size, and any urgent needs..."
          />
        </div>

        {state === "error" && (
          <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded p-3">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={state === "loading"}
          className="w-full rounded-full bg-forest-green px-6 py-3 text-sm font-semibold text-white hover:bg-forest-green/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
        >
          {state === "loading" ? "Sending..." : "Request Free Quote"}
        </button>
        <p className="text-xs text-slate-500 text-center">
          We respond within 24 hours. No spam, ever.
        </p>
      </div>
    </form>
  );
}
