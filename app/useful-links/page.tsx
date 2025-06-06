import type { Metadata } from "next"
import { ExternalLink, Phone, AlertTriangle } from "lucide-react"
import { Hero } from "@/components/hero"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Useful Links",
  description: "Important healthcare resources and services for patients in Kerry and Ireland.",
}

export default function UsefulLinksPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Useful Links"
        subtitle="Important healthcare resources and services for patients in Kerry and Ireland"
        backgroundImage="/images/clinic-exterior.png"
      />

      {/* Emergency Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Emergency Services</h2>
          <p className="text-center text-gray-600 mb-12">Important numbers for urgent medical care</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card
              title="Emergency Services"
              icon={<AlertTriangle className="h-10 w-10 text-red-600" />}
              padding="lg"
              className="border-red-200 bg-red-50"
            >
              <p className="text-gray-600 mb-4">For life-threatening emergencies</p>
              <Button href="tel:999" variant="accent" className="bg-red-600 hover:bg-red-700 w-full">
                Call 999 or 112
              </Button>
            </Card>

            <Card title="SouthDoc" icon={<Phone className="h-10 w-10 text-primary" />} padding="lg">
              <p className="text-gray-600 mb-4">Out-of-hours GP service for non-emergency medical care</p>
              <Button href="tel:+353818355999" variant="secondary" className="w-full">
                +353 818 355 999
              </Button>
            </Card>

            <Card title="University Hospital Kerry" icon={<Phone className="h-10 w-10 text-primary" />} padding="lg">
              <p className="text-gray-600 mb-4">Main hospital serving Kerry region</p>
              <Button href="tel:+35366719000" variant="outline" className="w-full">
                +353 66 719 000
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Healthcare Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Healthcare Services</h2>
          <p className="text-center text-gray-600 mb-12">Important healthcare organizations and services</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="HSE - Health Service Executive" padding="lg">
              <p className="text-gray-600 mb-4">
                Ireland's health service provider with information on services, health advice, and appointments.
              </p>
              <Button href="https://www.hse.ie" external variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit HSE.ie
              </Button>
            </Card>

            <Card title="Citizens Information" padding="lg">
              <p className="text-gray-600 mb-4">
                Information on health services, medical cards, and healthcare entitlements.
              </p>
              <Button
                href="https://www.citizensinformation.ie/en/health/"
                external
                variant="outline"
                className="w-full"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Health Information
              </Button>
            </Card>

            <Card title="MyGov.ie" padding="lg">
              <p className="text-gray-600 mb-4">
                Apply for medical cards, drug payment schemes, and other health services online.
              </p>
              <Button href="https://www.mygov.ie" external variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit MyGov.ie
              </Button>
            </Card>

            <Card title="Mental Health Ireland" padding="lg">
              <p className="text-gray-600 mb-4">
                Mental health support, resources, and information for patients and families.
              </p>
              <Button href="https://www.mentalhealthireland.ie" external variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Mental Health Resources
              </Button>
            </Card>

            <Card title="Samaritans Ireland" padding="lg">
              <p className="text-gray-600 mb-4">24/7 emotional support for anyone in distress or struggling to cope.</p>
              <div className="space-y-2">
                <Button href="tel:116123" variant="secondary" className="w-full">
                  116 123 (Free)
                </Button>
                <Button href="https://www.samaritans.org" external variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Visit Website
                </Button>
              </div>
            </Card>

            <Card title="Drugs.ie" padding="lg">
              <p className="text-gray-600 mb-4">
                Information about medications, drug interactions, and pharmaceutical services.
              </p>
              <Button href="https://www.drugs.ie" external variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Drugs.ie
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Kerry Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Local Kerry Services</h2>
          <p className="text-center text-gray-600 mb-12">Healthcare and support services in the Kerry region</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="Kerry Mental Health Services" padding="lg">
              <p className="text-gray-600 mb-4">Local mental health support and counseling services in Kerry.</p>
              <Button href="tel:+35366719000" variant="outline" className="w-full">
                +353 66 719 000
              </Button>
            </Card>

            <Card title="Kerry County Council" padding="lg">
              <p className="text-gray-600 mb-4">Local government services, housing support, and community resources.</p>
              <Button href="https://www.kerrycoco.ie" external variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                Kerry County Council
              </Button>
            </Card>

            <Card title="Kerry Community Transport" padding="lg">
              <p className="text-gray-600 mb-4">Transport services for medical appointments and healthcare access.</p>
              <Button href="tel:+35366719000" variant="outline" className="w-full">
                +353 66 719 000
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Health Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Online Health Services</h2>
          <p className="text-center text-gray-600 mb-12">Digital health tools and online services</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card title="HSE Online Services" padding="lg">
              <p className="text-gray-600 mb-4">
                Book appointments, access health records, and manage your healthcare online.
              </p>
              <Button
                href="https://www2.hse.ie/services/online-services/"
                external
                variant="outline"
                className="w-full"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                HSE Online
              </Button>
            </Card>

            <Card title="HealthLink" padding="lg">
              <p className="text-gray-600 mb-4">Secure messaging between patients and healthcare providers.</p>
              <Button href="https://www.healthlink.ie" external variant="outline" className="w-full">
                <ExternalLink className="mr-2 h-4 w-4" />
                HealthLink Portal
              </Button>
            </Card>

            <Card title="Prescription Request" padding="lg">
              <p className="text-gray-600 mb-4">Request repeat prescriptions online through our secure portal.</p>
              <Button
                href="https://blnk.ws/service/valentia-road-medical-centre/prescription-requests"
                external
                variant="accent"
                className="w-full"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Request Prescription
              </Button>
            </Card>

            <Card title="Book Appointment" padding="lg">
              <p className="text-gray-600 mb-4">Contact us to schedule your appointment with Dr. Casali.</p>
              <Button href="/appointments" className="w-full">
                Book Appointment
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
