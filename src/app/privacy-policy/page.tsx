import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Valentia GP",
  description:
    "Privacy policy for Valentia GP in Cahersiveen, outlining how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-gray-600 text-lg">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700">
                Valentia GP ("we," "our," or "us") is committed to protecting
                your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you visit our
                website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Personal Information
                  </h3>
                  <p className="text-gray-700">
                    We may collect personal information that you voluntarily
                    provide to us, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Name and contact information</li>
                    <li>Date of birth and medical record number</li>
                    <li>Medical history and health information</li>
                    <li>Insurance information</li>
                    <li>Emergency contact details</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Website Usage Information
                  </h3>
                  <p className="text-gray-700">
                    When you visit our website, we may automatically collect
                    certain information, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>IP address and browser type</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                    <li>Device information and operating system</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use your information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Providing medical care and treatment</li>
                <li>Scheduling appointments and sending reminders</li>
                <li>Processing prescription requests</li>
                <li>Communicating about your healthcare</li>
                <li>Billing and insurance purposes</li>
                <li>Improving our services and website functionality</li>
                <li>Complying with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-700 mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>With healthcare providers involved in your care</li>
                <li>For insurance and billing purposes</li>
                <li>When required by law or legal process</li>
                <li>In emergency situations to protect health and safety</li>
                <li>With your explicit consent</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties for marketing purposes without your
                consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                These measures include encryption, secure servers, and
                restricted access to personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>
                  Request deletion of your information (subject to legal
                  requirements)
                </li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Cookies and Tracking Technologies
              </h2>
              <p className="text-gray-700">
                Our website may use cookies and similar tracking technologies to
                enhance your browsing experience. You can control cookie
                settings through your browser preferences. For more information,
                please see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Changes to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Privacy Policy from time to time. We will
                notify you of any material changes by posting the new policy on
                our website and updating the effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Contact Information
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about this Privacy Policy or our
                  privacy practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Valentia GP</strong>
                  </p>
                  <p>Main Street, Cahersiveen</p>
                  <p>Co. Kerry, Ireland</p>
                  <p>
                    <strong>Phone:</strong> 066 947 3555
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
