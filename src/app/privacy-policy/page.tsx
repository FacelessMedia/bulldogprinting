import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "At BulldogPrinting.com, your privacy and personal information is very important to us.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray prose-lg">
          <p>
            At <strong>BulldogPrinting.com</strong>, your privacy and personal
            information is very important to us. We never share any of our
            customers&apos; personal information with anyone, ever.
          </p>
          <p>
            Bulldog Printing does not sell or supply names in any way to mail
            lists or consumer databases.
          </p>
          <p>
            BulldogPrinting.com uses SSL encryption to process online
            transactions. This is the most secure and well-known method of
            encrypting data online.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you
            request a quote, place an order, contact us, or otherwise communicate
            with us. This information may include your name, email address, phone
            number, mailing address, and any other information you choose to
            provide.
          </p>

          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your orders and requests</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Send you technical notices and support messages</li>
          </ul>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a href="mailto:orders@bulldogprinting.com">
              orders@bulldogprinting.com
            </a>{" "}
            or call us at{" "}
            <a href="tel:+17738661579">773-866-1579</a>.
          </p>
        </div>
      </section>
    </>
  );
}
