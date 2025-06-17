import Card from "@/components/Card";

export default function FeesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Fees & Pricing
            </h1>
            <p className="text-xl text-blue-100">
              Transparent pricing for all our medical services. GMS patients
              receive free or reduced-cost care.
            </p>
          </div>
        </div>
      </section>

      {/* Fees Table Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-primary text-white p-6">
                <h2 className="text-2xl font-bold">Medical Services Pricing</h2>
                <p className="text-blue-100 mt-2">
                  All fees are subject to change. Please contact us for current
                  pricing.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                        Service
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        Private Fee
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                        GMS Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Consultation
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €50
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Telephone Consultation
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €40
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Nurse Consultation
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €30
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        ECG (in addition to consultation fee)
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €30
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Bloods (in addition to consultation fee)
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €20
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Nebuliser (in addition to consultation fee)
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €30
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        24hr Blood Pressure Monitor
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €90
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Extended Consultation
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €85
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Extra Family Member
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €30
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Review Consultation (10 days - same condition)
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €30
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        House Call
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €90
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Appointment No Show
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €30
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €30
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Repeat Prescription
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €20
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Sick Certificates
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €30
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €20
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Forms/Letters/Paperwork
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        From €20
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        From €20
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        STD Screening
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €100
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €100
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Sutures
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €80
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Dressings
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €30
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Driving Licence Medical (irrespective of age)
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €60
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €50
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Capacity Assessment
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €120
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €120
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Drug Screening
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €100
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €100
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Ear Syringing
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €60
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        First B12 Consultation
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €50
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Follow-up Consultations
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €30
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Medicals for Work/Sport
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €80
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €60
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Injections
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        Ask reception
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        Ask reception
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Pre-employment Medicals
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €70
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €50
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        Removal of Sutures
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €50
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-green-600 font-medium">
                        Free
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        INR Test
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €50
                      </td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">
                        €30
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="GMS Patients"
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
                If you have a GMS (General Medical Services) card, most
                consultations and treatments are provided free of charge.
              </p>
              <p className="text-sm text-gray-500">
                Please bring your GMS card to all appointments.
              </p>
            </Card>

            <Card
              title="Payment Methods"
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
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              }
            >
              <p className="text-gray-600 mb-4">
                We accept cash, card payments, and bank transfers. Payment is
                due at the time of service.
              </p>
              <p className="text-sm text-gray-500">
                Please contact reception for payment arrangements if needed.
              </p>
            </Card>

            <Card
              title="Insurance Claims"
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
                We can provide receipts and medical reports for private health
                insurance claims.
              </p>
              <p className="text-sm text-gray-500">
                Please check with your insurance provider about coverage and
                claim procedures.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
