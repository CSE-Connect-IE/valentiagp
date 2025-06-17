import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Valentia GP",
  description:
    "Terms of use for Valentia GP website and services in Cahersiveen, outlining the conditions for using our website and services.",
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Terms of Use
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-gray-600 text-lg">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700">
                By accessing and using the Valentia GP website and services, you
                accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Medical Disclaimer
              </h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
                <p className="text-gray-700 font-medium mb-2">
                  Important Medical Notice:
                </p>
                <p className="text-gray-700">
                  The information provided on this website is for general
                  informational purposes only and is not intended as medical
                  advice. Always consult with Dr. Casali or another qualified
                  healthcare provider for medical advice, diagnosis, or
                  treatment.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Use of Website
              </h2>
              <p className="text-gray-700 mb-4">
                You may use our website for lawful purposes only. You agree not
                to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Use the site in any way that violates applicable laws or
                  regulations
                </li>
                <li>Transmit any harmful or malicious code</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>
                  Use automated systems to access the site without permission
                </li>
                <li>Impersonate any person or entity</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Online Services
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Prescription Requests
                  </h3>
                  <p className="text-gray-700">
                    Online prescription requests are processed during normal
                    business hours. Allow 48 hours for processing. Emergency
                    prescriptions should be requested by calling the clinic
                    directly.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Appointment Booking
                  </h3>
                  <p className="text-gray-700">
                    All appointments must be booked by telephone. Online
                    appointment requests are not currently available. For urgent
                    medical needs, please call the clinic immediately.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Privacy and Confidentiality
              </h2>
              <p className="text-gray-700">
                We are committed to protecting your privacy and maintaining the
                confidentiality of your medical information in accordance with
                applicable laws and professional standards. Please refer to our
                Privacy Policy for detailed information about how we collect,
                use, and protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Intellectual Property
              </h2>
              <p className="text-gray-700">
                The content on this website, including text, graphics, logos,
                images, and software, is the property of Valentia GP and is
                protected by copyright and other intellectual property laws. You
                may not reproduce, distribute, or create derivative works
                without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Third-Party Links
              </h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. These
                links are provided for your convenience only. We do not endorse
                or assume responsibility for the content, privacy policies, or
                practices of third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Limitation of Liability
              </h2>
              <p className="text-gray-700">
                To the fullest extent permitted by law, Valentia GP shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, or any loss of profits or revenues, whether
                incurred directly or indirectly, or any loss of data, use,
                goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Emergency Situations
              </h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
                <p className="text-red-800 font-medium mb-2">
                  Medical Emergencies:
                </p>
                <p className="text-red-700">
                  This website and online services are not intended for
                  emergency medical situations. In case of a medical emergency,
                  call 999 or 112 immediately, or go to your nearest emergency
                  department.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Modifications to Terms
              </h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Changes
                will be effective immediately upon posting on the website. Your
                continued use of the website after any changes constitutes
                acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. Governing Law
              </h2>
              <p className="text-gray-700">
                These terms shall be governed by and construed in accordance
                with the laws of Ireland. Any disputes arising under these terms
                shall be subject to the exclusive jurisdiction of the Irish
                courts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. Contact Information
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about these Terms of Use, please
                  contact us:
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
