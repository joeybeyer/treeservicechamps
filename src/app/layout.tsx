import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
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
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.webp"
                alt="Tree Service Champs"
                width={80}
                height={80}
                className="h-20 w-20"
                priority
              />
              <span className="text-2xl font-bold text-forest-green">{COMPANY.name}</span>
            </Link>
            <nav className="hidden gap-4 text-sm font-medium md:flex items-center">
              <Link href="/" className="hover:text-forest-green transition-colors">Home</Link>
              <div className="relative group">
                <button className="hover:text-forest-green transition-colors flex items-center gap-1">
                  Services
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 z-50 border border-slate-100">
                  <Link href="/tree-removal" className="block px-4 py-2 hover:bg-slate-50 text-sm">Tree Removal</Link>
                  <Link href="/tree-trimming" className="block px-4 py-2 hover:bg-slate-50 text-sm">Tree Trimming</Link>
                  <Link href="/stump-grinding" className="block px-4 py-2 hover:bg-slate-50 text-sm">Stump Grinding</Link>
                  <Link href="/emergency-tree-service" className="block px-4 py-2 hover:bg-slate-50 text-sm">Emergency Service</Link>
                  <Link href="/land-clearing" className="block px-4 py-2 hover:bg-slate-50 text-sm">Land Clearing</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="hover:text-forest-green transition-colors flex items-center gap-1">
                  Cost Guides
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-52 z-50 border border-slate-100">
                  <Link href="/tree-removal-cost" className="block px-4 py-2 hover:bg-slate-50 text-sm">Tree Removal Cost</Link>
                  <Link href="/tree-trimming-cost" className="block px-4 py-2 hover:bg-slate-50 text-sm">Tree Trimming Cost</Link>
                  <Link href="/stump-grinding-cost" className="block px-4 py-2 hover:bg-slate-50 text-sm">Stump Grinding Cost</Link>
                </div>
              </div>
              <Link href="/locations" className="hover:text-forest-green transition-colors">Locations</Link>
              <Link href="/about" className="hover:text-forest-green transition-colors">About</Link>
              <Link href="/contact" className="hover:text-forest-green transition-colors">Contact</Link>
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
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
            <div>
              <p className="text-lg font-semibold text-forest-green">{COMPANY.name}</p>
              <p className="mt-2 text-sm text-slate-700">{COMPANY.tagline}</p>
              <p className="mt-2 text-sm text-slate-700">{COMPANY.email}</p>
              <p className="mt-1 text-sm font-semibold text-forest-green">{COMPANY.phone}</p>
            </div>
            <div className="text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Services</p>
              <ul className="mt-2 space-y-1">
                <li><Link href="/tree-removal" className="hover:text-forest-green">Tree Removal</Link></li>
                <li><Link href="/tree-trimming" className="hover:text-forest-green">Tree Trimming</Link></li>
                <li><Link href="/stump-grinding" className="hover:text-forest-green">Stump Grinding</Link></li>
                <li><Link href="/emergency-tree-service" className="hover:text-forest-green">Emergency Service</Link></li>
                <li><Link href="/land-clearing" className="hover:text-forest-green">Land Clearing</Link></li>
              </ul>
            </div>
            <div className="text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Resources</p>
              <ul className="mt-2 space-y-1">
                <li><Link href="/tree-removal-cost" className="hover:text-forest-green">Tree Removal Cost</Link></li>
                <li><Link href="/tree-trimming-cost" className="hover:text-forest-green">Tree Trimming Cost</Link></li>
                <li><Link href="/stump-grinding-cost" className="hover:text-forest-green">Stump Grinding Cost</Link></li>
                <li><Link href="/locations" className="hover:text-forest-green">Service Areas</Link></li>
                <li><Link href="/about" className="hover:text-forest-green">About Us</Link></li>
              </ul>
            </div>
            <div className="text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Top Cities</p>
              <ul className="mt-2 space-y-1">
                <li><Link href="/tree-service-houston-tx" className="hover:text-forest-green">Houston, TX</Link></li>
                <li><Link href="/tree-service-atlanta-ga" className="hover:text-forest-green">Atlanta, GA</Link></li>
                <li><Link href="/tree-service-charlotte-nc" className="hover:text-forest-green">Charlotte, NC</Link></li>
                <li><Link href="/tree-service-nashville-tn" className="hover:text-forest-green">Nashville, TN</Link></li>
                <li><Link href="/tree-service-tampa-fl" className="hover:text-forest-green">Tampa, FL</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved. Licensed &amp; Insured.
          </div>
        </footer>
      </body>
    </html>
  );
}
