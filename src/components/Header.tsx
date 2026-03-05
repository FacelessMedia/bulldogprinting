"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/data/site-config";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-gray-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <span className="hidden sm:inline">
            {siteConfig.business.address.full}
          </span>
          <div className="flex items-center gap-4 mx-auto sm:mx-0">
            <a
              href={siteConfig.business.phoneTel}
              className="hover:text-red-400 transition-colors font-medium"
            >
              📞 {siteConfig.business.phone}
            </a>
            <a
              href={`mailto:${siteConfig.business.email}`}
              className="hover:text-red-400 transition-colors hidden sm:inline"
            >
              ✉ {siteConfig.business.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/branding/logo-icon.png"
            alt="Bulldog Printing"
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold text-gray-900 hidden sm:block">
            Bulldog Printing
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {siteConfig.nav.main.map((item) =>
            item.label === "Shop" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {item.label}
                  <svg
                    className="inline-block w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>
                {shopOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 mt-1">
                    <Link
                      href="/shop"
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 font-medium"
                    >
                      All Products
                    </Link>
                    <div className="border-t border-gray-100 my-1" />
                    {siteConfig.nav.categories.map((cat) => (
                      <Link
                        key={cat.href}
                        href={cat.href}
                        className="block px-4 py-2 text-gray-600 hover:bg-red-50 hover:text-red-600 text-sm"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-red-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <a
            href={siteConfig.business.phoneTel}
            className="ml-4 px-5 py-2.5 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors text-sm"
          >
            Call for Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {siteConfig.nav.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-2 mt-2">
              <p className="px-3 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Categories
              </p>
              {siteConfig.nav.categories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm"
                >
                  {cat.label}
                </Link>
              ))}
            </div>
            <a
              href={siteConfig.business.phoneTel}
              className="block text-center mt-3 px-5 py-2.5 bg-red-600 text-white font-semibold rounded-lg"
            >
              Call for Quote: {siteConfig.business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
