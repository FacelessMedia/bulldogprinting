import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site-config";

export default function Footer() {
  const biz = siteConfig.business;

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/branding/logo-icon.png"
                alt="Bulldog Printing"
                width={40}
                height={40}
                className="w-10 h-10 object-contain brightness-200"
              />
              <span className="text-white font-bold text-lg">
                Bulldog Printing
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {biz.description}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <Image
                src="/images/branding/dr-logo.png"
                alt="D&R Press"
                width={32}
                height={32}
                className="w-8 h-8 object-contain brightness-200"
              />
              <span className="text-xs text-gray-500">
                Part of the{" "}
                <a
                  href={biz.parentCompany.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  D&R Press
                </a>{" "}
                Print Group
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {siteConfig.nav.footer.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/the-local-project"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  The Local Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {siteConfig.nav.categories.slice(0, 8).map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/shop"
                  className="text-sm text-red-400 hover:text-red-300 transition-colors font-medium"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-red-500 mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <a
                  href={biz.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {biz.address.full}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={biz.phoneTel}
                  className="text-gray-400 hover:text-white transition-colors font-medium"
                >
                  {biz.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-500 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${biz.email}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {biz.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} {biz.name}. All rights reserved.
          </p>
          <p>
            Part of{" "}
            <a
              href={biz.parentCompany.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {biz.parentCompany.name}
            </a>{" "}
            — Serving since {biz.parentCompany.foundedYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
