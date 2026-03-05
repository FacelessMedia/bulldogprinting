import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Local Project",
  description:
    "WE LOVE LOCAL - Real-life Solutions for Revitalizing Local Economy",
};

export default function TheLocalProjectPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            WE LOVE LOCAL
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-red-400 mb-6">
            RECOVER, RESTORE, REVITALIZE, REDEEM, REVIVE, REJUVENATE, RETURN!
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            America Can&apos;t Recover Unless Our Local Businesses Recover. Let
            Us Put Real-life Solutions for Revitalizing Local Economy Into Your
            Hands.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "GIVE YOUR BUSINESS MEMBERS THE TOOLS TO REBOUND",
                desc: "Hand them everything they need to Start Reconnecting with their Customers & Grow Sales!",
              },
              {
                title: "GIVE BACK TO YOUR COMMUNITY",
                desc: "Support local businesses and help strengthen the economic fabric of your neighborhood.",
              },
              {
                title: "GET THE TOOLS TO BETTER CONNECT YOUR COMMUNITY",
                desc: "Modern tools and strategies to build lasting connections between local businesses and customers.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t Let Another Minute Pass By!
          </h2>
          <p className="text-xl text-red-100 mb-8">
            We&apos;re Building the Best Local Platform on the Planet! Let&apos;s
            Discuss these Exciting New Ways to Revitalize Your Community.
          </p>
          <a
            href="mailto:support@thelocalproject.net?subject=Contact%20Us"
            className="inline-block px-10 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors text-lg"
          >
            YES, Let&apos;s Talk
          </a>
          <p className="mt-6 text-sm text-red-200">
            TheLocalProject is a Community Advocate and Supporter of Local
            Commerce
          </p>
        </div>
      </section>
    </>
  );
}
