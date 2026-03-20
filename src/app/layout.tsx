import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { COMPANY } from "@/data/company";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Tree Service Champs | Safe. Fast. Done Right.",
    template: "%s | Tree Service Champs",
  },
  description:
    "Tree Service Champs provides safe, fast, and professional tree removal, trimming, and stump grinding. Call (833) 225-2467 for a free quote.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          geistSans.variable,
          geistMono.variable,
          "antialiased bg-white text-slate-dark",
        ].join(" ")}
      >
        <header className="border-b border-slate-200">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="text-xl font-bold text-forest-green">
              {COMPANY.name}
            </Link>
            <nav className="hidden gap-6 text-sm font-medium md:flex">
              <Link href="/">Home</Link>
              <Link href="/tree-removal">Tree Removal</Link>
              <Link href="/contact">Contact</Link>
            </nav>
            <a
              href={COMPANY.phoneHref}
              className="rounded-full bg-forest-green px-4 py-2 text-sm font-semibold text-white shadow hover:bg-forest-green/90"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mt-16 border-t border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
            <div>
              <p className="text-lg font-semibold text-forest-green">{COMPANY.name}</p>
              <p className="mt-2 text-sm text-slate-700">{COMPANY.tagline}</p>
              <p className="mt-2 text-sm text-slate-700">{COMPANY.email}</p>
            </div>
            <div className="text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Quick Links</p>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link href="/tree-removal">Tree Removal</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/thank-you">Thank You</Link>
                </li>
              </ul>
            </div>
            <div className="text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Call Anytime</p>
              <p className="mt-2">{COMPANY.phone}</p>
              <p className="mt-1">Licensed ? Insured ? Local Pros</p>
            </div>
          </div>
          <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
            ? {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
