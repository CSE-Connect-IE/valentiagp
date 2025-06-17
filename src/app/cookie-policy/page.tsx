import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Valentia GP",
  description:
    "Cookie policy for Valentia GP website, explaining how we use cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Cookie Policy
          </h1>

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-gray-600 text-lg">
              <strong>Effective Date:</strong> January 1, 2025
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-gray-700">
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used to
                make websites work more efficiently and to provide information
                to website owners about how users interact with their sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. How We Use Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                Valentia GP uses cookies to enhance your browsing experience and
                improve our website's functionality. We use cookies for the
                following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To remember your preferences and settings</li>
                <li>To analyze website traffic and usage patterns</li>
                <li>To improve website performance and user experience</li>
                <li>To ensure website security and prevent fraud</li>
                <li>To provide relevant content and services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Types of Cookies We Use
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-700">
                    These cookies are necessary for the website to function
                    properly. They enable basic functions like page navigation,
                    access to secure areas, and form submissions. The website
                    cannot function properly without these cookies.
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Performance Cookies
                  </h3>
                  <p className="text-gray-700">
                    These cookies collect information about how visitors use our
                    website, such as which pages are visited most often and if
                    users receive error messages. This information helps us
                    improve how our website works.
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Functionality Cookies
                  </h3>
                  <p className="text-gray-700">
                    These cookies allow the website to remember choices you make
                    (such as your preferred language or region) and provide
                    enhanced, more personal features.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Third-Party Cookies
              </h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that place cookies on your
                device. These may include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> To analyze website traffic
                  and user behavior
                </li>
                <li>
                  <strong>Google Maps:</strong> To provide location services and
                  directions
                </li>
                <li>
                  <strong>Social Media Platforms:</strong> If you share content
                  from our website
                </li>
              </ul>
              <p className="text-gray-700 mt-4">
                These third parties have their own privacy policies and cookie
                policies, which we encourage you to review.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Managing Your Cookie Preferences
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    Browser Settings
                  </h3>
                  <p className="text-gray-700">
                    Most web browsers allow you to control cookies through their
                    settings. You can:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>View what cookies are stored on your device</li>
                    <li>Delete cookies individually or all at once</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies from being set</li>
                    <li>Delete all cookies when you close your browser</li>
                  </ul>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-lg">
                  <p className="text-orange-800 font-medium mb-2">
                    Important Note:
                  </p>
                  <p className="text-orange-700">
                    Blocking or deleting cookies may affect your ability to use
                    certain features of our website and may impact your user
                    experience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. How to Control Cookies in Popular Browsers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Google Chrome
                  </h4>
                  <p className="text-sm text-gray-600">
                    Settings → Privacy and Security → Cookies and other site
                    data
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Mozilla Firefox
                  </h4>
                  <p className="text-sm text-gray-600">
                    Options → Privacy & Security → Cookies and Site Data
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Safari</h4>
                  <p className="text-sm text-gray-600">
                    Preferences → Privacy → Manage Website Data
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Microsoft Edge
                  </h4>
                  <p className="text-sm text-gray-600">
                    Settings → Cookies and site permissions → Cookies and site
                    data
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Cookie Retention
              </h2>
              <p className="text-gray-700">
                Different cookies have different lifespans:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
                <li>
                  <strong>Session Cookies:</strong> Deleted when you close your
                  browser
                </li>
                <li>
                  <strong>Persistent Cookies:</strong> Remain on your device for
                  a set period or until manually deleted
                </li>
                <li>
                  <strong>Third-party Cookies:</strong> Managed according to the
                  third party's retention policies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Updates to This Policy
              </h2>
              <p className="text-gray-700">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the updated policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Contact Us
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies or this
                  Cookie Policy, please contact us:
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
