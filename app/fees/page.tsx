import type { Metadata } from "next"
import { CreditCard, CheckCircle, HelpCircle } from "lucide-react"
import { Hero } from "@/components/hero"
import { Card } from "@/components/ui/card"
import { CallToAction } from "@/components/call-to-action"

export const metadata: Metadata = {
  title: "Fees",
  description: "Information about consultation fees and charges at Valentia GP Clinic.",
}

export default function FeesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Fees & Pricing"
        subtitle="Transparent pricing for all our medical services. GMS patients receive free or reduced-cost care."
        backgroundImage="/images/clinic-exterior.png"
      />

      {/* Fees Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Medical Services Pricing</h2>
            <p className="text-gray-600">All fees are subject to change. Please contact us for current pricing.</p>
          </div>

          {/* Fees Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Service
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Private Fee
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    GMS Fee
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  { service: "Consultation", privateFee: "€50", gmsFee: "Free" },
                  { service: "Telephone Consultation", privateFee: "€40", gmsFee: "Free" },
                  { service: "Nurse Consultation", privateFee: "€30", gmsFee: "Free" },
                  { service: "ECG (in addition to consultation fee)", privateFee: "€30", gmsFee: "Free" },
                  { service: "Bloods (in addition to consultation fee)", privateFee: "€20", gmsFee: "Free" },
                  { service: "Nebuliser (in addition to consultation fee)", privateFee: "€30", gmsFee: "Free" },
                  { service: "24hr Blood Pressure Monitor", privateFee: "€90", gmsFee: "Free" },
                  { service: "Extended Consultation", privateFee: "€85", gmsFee: "Free" },
                  { service: "Extra Family Member", privateFee: "€30", gmsFee: "Free" },
                  { service: "Review Consultation (10 days - same condition)", privateFee: "€30", gmsFee: "Free" },
                  { service: "House Call", privateFee: "€90", gmsFee: "Free" },
                  { service: "Appointment No Show", privateFee: "€30", gmsFee: "€30" },
                  { service: "Repeat Prescription", privateFee: "€20", gmsFee: "Free" },
                  { service: "Sick Certificates", privateFee: "€30", gmsFee: "€20" },
                  { service: "Forms/Letters/Paperwork", privateFee: "From €20", gmsFee: "From €20" },
                  { service: "STD Screening", privateFee: "€100", gmsFee: "€100" },
                  { service: "Sutures", privateFee: "€80", gmsFee: "Free" },
                  { service: "Dressings", privateFee: "€30", gmsFee: "Free" },
                  {
                    service: "Driving Licence Medical (irrespective of age)",
                    privateFee: "€60",
                    gmsFee: "€50",
                  },
                  { service: "Capacity Assessment", privateFee: "€120", gmsFee: "€120" },
                  { service: "Drug Screening", privateFee: "€100", gmsFee: "€100" },
                  { service: "Ear Syringing", privateFee: "€60", gmsFee: "Free" },
                  { service: "First B12 Consultation", privateFee: "€50", gmsFee: "Free" },
                  { service: "Follow-up Consultations", privateFee: "€30", gmsFee: "Free" },
                  { service: "Medicals for Work/Sport", privateFee: "€80", gmsFee: "€60" },
                  { service: "Injections", privateFee: "Ask reception", gmsFee: "Ask reception" },
                  { service: "Pre-employment Medicals", privateFee: "€70", gmsFee: "€50" },
                  { service: "Removal of Sutures", privateFee: "€50", gmsFee: "Free" },
                  { service: "INR Test", privateFee: "€50", gmsFee: "€30" },
                ].map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.privateFee}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.gmsFee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Additional Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="GMS Patients" icon={<CheckCircle className="h-10 w-10 text-accent-green" />}>
              <p className="text-gray-600 mb-4">
                If you have a GMS (General Medical Services) card, most consultations and treatments are provided free
                of charge.
              </p>
              <p className="text-gray-600">Please bring your GMS card to all appointments.</p>
            </Card>

            <Card title="Payment Methods" icon={<CreditCard className="h-10 w-10 text-primary" />}>
              <p className="text-gray-600 mb-4">
                We accept cash, card payments, and bank transfers. Payment is due at the time of service.
              </p>
              <p className="text-gray-600">Please contact reception for payment arrangements if needed.</p>
            </Card>

            <Card title="Insurance Claims" icon={<HelpCircle className="h-10 w-10 text-primary" />}>
              <p className="text-gray-600 mb-4">
                We can provide receipts and medical reports for private health insurance claims.
              </p>
              <p className="text-gray-600">
                Please check with your insurance provider about coverage and claim procedures.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </>
  )
}
