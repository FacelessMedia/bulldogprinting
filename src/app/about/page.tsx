import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "We offer the finest in offset printing, digital printing, letterpress printing as well as related services.",
};

export default function AboutPage() {
  const biz = siteConfig.business;

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            With over 15 years of garment printing experience, we specialize in
            heat applied technologies.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How does it work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Choose your product",
                desc: "Choose the style and color of the product you want to customize.",
              },
              {
                step: "02",
                title: "Create your design",
                desc: "Upload your artwork or work with our team to create the perfect design.",
              },
              {
                step: "03",
                title: "Receive your product",
                desc: "Receive your customized products at home or pick up from our facility.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="text-center p-8 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-gray-600 mb-6">
                We are now part of the D&R Press Print Group, thereby offering a
                huge variety of Printed Products and related Services.
              </p>
              <ul className="space-y-3">
                {[
                  "Custom T-Shirt, Hoodie & Other Garment Printing",
                  "Custom Mugs",
                  "Raised ink printing (Thermography)",
                  "Business Cards and Marketing Material",
                  "Signs & Banner, Large Format printing",
                  "Promotional Products, Swag",
                  "Complete Commercial Printing",
                ].map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-red-600 mt-0.5 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <p className="text-gray-600 leading-relaxed">
                With over 15 years of garment printing experience, we specialize
                in heat applied technologies, using innovative, state-of-the-art
                equipment. We can print unique items in both small and large
                quantities via ink-jet dye sublimation, digital dye sublimation,
                digital with white over print, screen-printed transfers and vinyl
                lettering to decorate all types of garments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apparel Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            Commercial Apparel Decorating Service
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                product: "Gildan 8000 White",
                price: "$6 each",
                note: "Full Color Printed, 24 pcs Minimum",
              },
              {
                product: "Tulex 241 Soft Style",
                price: "$8 each",
                note: "Full Color Printing, Single T-shirt starts $20",
              },
              {
                product: "Gildan 18500 Hoodie",
                price: "$16 each",
                note: "Pull Over 24 pcs, Zip Up $19, Single Pcs $40",
              },
            ].map((item) => (
              <div
                key={item.product}
                className="bg-red-50 rounded-xl p-6 border border-red-100"
              >
                <h3 className="font-semibold text-lg">{item.product}</h3>
                <p className="text-3xl font-bold text-red-600 mt-2">
                  {item.price}
                </p>
                <p className="text-sm text-gray-600 mt-2">{item.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-gray-500 text-sm">
            * Prices subject to change. Call for current pricing and bulk
            discounts.
          </p>
        </div>
      </section>

      {/* Commercial Printing */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Complete Commercial Printing
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            {biz.description} We offer the finest in offset printing, digital
            printing, letterpress printing as well as related services. We will
            take your concept and help you enhance it or provide you with fresh
            ideas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={biz.parentCompany.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              Visit D&R Press
            </a>
            <Link
              href="/shop"
              className="px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
