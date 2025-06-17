import Card from "@/components/Card";
import Button from "@/components/Button";

export default function UsefulLinksPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Useful Links
            </h1>
            <p className="text-xl text-blue-100">
              Important healthcare resources and services for patients in Kerry
              and Ireland
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Emergency Services
            </h2>
            <p className="text-lg text-gray-600">
              Important numbers for urgent medical care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card
              title="Emergency Services"
              icon={
                <svg
                  className="w-8 h-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              }
              className="border-red-200 bg-red-50"
            >
              <p className="text-gray-700 mb-4 font-semibold">
                For life-threatening emergencies
              </p>
              <Button
                tel="999"
                variant="accent"
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700"
              >
                📞 Call 999 or 112
              </Button>
            </Card>

            <Card
              title="SouthDoc"
              icon={
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
              className="border-blue-200 bg-blue-50"
            >
              <p className="text-gray-700 mb-4">
                Out-of-hours GP service for non-emergency medical care
              </p>
              <Button
                tel="+353818355999"
                variant="primary"
                size="md"
                className="w-full"
              >
                📞 +353 818 355 999
              </Button>
            </Card>

            <Card
              title="University Hospital Kerry"
              icon={
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
              className="border-green-200 bg-green-50"
            >
              <p className="text-gray-700 mb-4">
                Main hospital serving Kerry region
              </p>
              <Button
                tel="+35366719000"
                variant="secondary"
                size="md"
                className="w-full"
              >
                📞 +353 66 719 000
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Healthcare Services
            </h2>
            <p className="text-lg text-gray-600">
              Important healthcare organizations and services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="HSE - Health Service Executive"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                Ireland's health service provider with information on services,
                health advice, and appointments.
              </p>
              <Button
                href="https://www.hse.ie"
                as="link"
                external
                variant="primary"
                size="sm"
                className="w-full"
              >
                🌐 Visit HSE.ie
              </Button>
            </Card>

            <Card
              title="Citizens Information"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                Information on health services, medical cards, and healthcare
                entitlements.
              </p>
              <Button
                href="https://www.citizensinformation.ie/en/health/"
                as="link"
                external
                variant="primary"
                size="sm"
                className="w-full"
              >
                🌐 Health Information
              </Button>
            </Card>

            <Card
              title="MyGov.ie"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                Apply for medical cards, drug payment schemes, and other health
                services online.
              </p>
              <Button
                href="https://www.mygov.ie"
                as="link"
                external
                variant="primary"
                size="sm"
                className="w-full"
              >
                🌐 MyGov.ie
              </Button>
            </Card>

            <Card
              title="Mental Health Ireland"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                Mental health support, resources, and information for patients
                and families.
              </p>
              <Button
                href="https://www.mentalhealthireland.ie"
                as="link"
                external
                variant="primary"
                size="sm"
                className="w-full"
              >
                🌐 Mental Health Support
              </Button>
            </Card>

            <Card
              title="Samaritans Ireland"
              icon={
                <svg
                  className="w-8 h-8"
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
              }
            >
              <p className="text-gray-600 mb-4">
                24/7 emotional support for anyone in distress or struggling to
                cope.
              </p>
              <div className="space-y-2">
                <Button
                  tel="116123"
                  variant="accent"
                  size="sm"
                  className="w-full"
                >
                  📞 Call 116 123 (Free)
                </Button>
                <Button
                  href="https://www.samaritans.org"
                  as="link"
                  external
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  🌐 Visit Website
                </Button>
              </div>
            </Card>

            <Card
              title="Drugs.ie"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                Information about medications, drug interactions, and
                pharmaceutical services.
              </p>
              <Button
                href="https://www.drugs.ie"
                as="link"
                external
                variant="primary"
                size="sm"
                className="w-full"
              >
                🌐 Drug Information
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Local Kerry Services
            </h2>
            <p className="text-lg text-gray-600">
              Healthcare and support services in the Kerry region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Kerry Mental Health Services"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                Local mental health support and counseling services in Kerry.
              </p>
              <Button
                tel="+35366719000"
                variant="primary"
                size="sm"
                className="w-full"
              >
                📞 +353 66 719 000
              </Button>
            </Card>

            <Card
              title="Kerry County Council"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                Local government services, housing support, and community
                resources.
              </p>
              <Button
                href="https://www.kerrycoco.ie"
                as="link"
                external
                variant="primary"
                size="sm"
                className="w-full"
              >
                🌐 Kerry County Council
              </Button>
            </Card>

            <Card
              title="Kerry Community Transport"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                Transport services for medical appointments and healthcare
                access.
              </p>
              <Button
                tel="+35366719000"
                variant="primary"
                size="sm"
                className="w-full"
              >
                📞 Contact for Transport
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Online Health Services
            </h2>
            <p className="text-lg text-gray-600">
              Digital health tools and online services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="HSE Online Services"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                Book appointments, access health records, and manage your
                healthcare online.
              </p>
              <Button
                href="https://www2.hse.ie/services/online-services/"
                as="link"
                external
                variant="primary"
                size="sm"
                className="w-full"
              >
                🌐 HSE Online Services
              </Button>
            </Card>

            <Card
              title="HealthLink"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                Secure messaging between patients and healthcare providers.
              </p>
              <Button
                href="https://www.healthlink.ie"
                as="link"
                external
                variant="primary"
                size="sm"
                className="w-full"
              >
                🌐 HealthLink Portal
              </Button>
            </Card>

            <Card
              title="Prescription Request"
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                Request repeat prescriptions online through our secure portal.
              </p>
              <Button
                href="https://blnk.ws/service/valentia-road-medical-centre/prescription-requests"
                as="link"
                external
                variant="accent"
                size="sm"
                className="w-full"
              >
                💊 Request Prescription
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
