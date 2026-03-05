import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for Bulldog Printing services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Terms and Conditions
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray prose-lg">
          <p>
            Welcome to <strong>BulldogPrinting.com</strong>. By using our
            website and services, you agree to the following terms and
            conditions.
          </p>

          <h2>Orders and Pricing</h2>
          <p>
            All prices are subject to change without notice. Pricing is provided
            on a per-project basis. Contact us at{" "}
            <a href="tel:+17738661579">773-866-1579</a> or{" "}
            <a href="mailto:orders@bulldogprinting.com">
              orders@bulldogprinting.com
            </a>{" "}
            for current pricing and availability.
          </p>

          <h2>Artwork and Design</h2>
          <p>
            Customers are responsible for providing print-ready artwork unless
            design services are arranged. We are not responsible for errors in
            customer-supplied artwork that has been approved for production.
          </p>

          <h2>Turnaround Time</h2>
          <p>
            Production times vary by product and quantity. Rush orders may be
            available at an additional charge. Contact us for specific turnaround
            estimates.
          </p>

          <h2>Returns and Refunds</h2>
          <p>
            Due to the custom nature of our products, all sales are final unless
            there is a defect in the product or an error on our part. Please
            inspect all orders upon receipt and contact us within 48 hours with
            any issues.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            Bulldog Printing&apos;s liability shall not exceed the purchase price
            of the product(s) in question. We are not liable for any indirect,
            incidental, or consequential damages.
          </p>

          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:orders@bulldogprinting.com">
              orders@bulldogprinting.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
