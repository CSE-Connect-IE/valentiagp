import type { Metadata } from "next"
import { Phone, Calendar, Clock, AlertCircle } from "lucide-react"
import { Hero } from "@/components/hero"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: "Information on how to schedule an appointment with Valentia GP Clinic.",
}

export default function AppointmentsPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Book an Appointment"
        subtitle="We are here to help you with your healthcare needs. Please find below the information on how to schedule an appointment with us."
        backgroundImage="/images/clinic-exterior.png"
      />

      {/* Booking Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Card padding="lg" className="mb-12">
              <div className="flex flex-col items-center text-center mb-8">
                <Phone className="h-16 w-16 text-primary mb-4" />
                <h2 className="text-2xl font-bold mb-4">Booking by Phone</h2>
                <p className="text-gray-600 mb-6">
                  The easiest way to book an appointment is by calling our reception desk during opening hours. Our
                  staff will be happy to assist you in finding a suitable time.
                </p>
                <Button href="tel:0669473555" size="lg">
                  Call to Book: 066 947 3555
                </Button>
              </div>
            </Card>

            <h2 className="text-2xl font-bold mb-6">Appointment Policies</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card title="Cancellations" icon={<Calendar className="h-8 w-8 text-primary" />}>
                <p className="text-gray-600">
                  If you need to cancel or reschedule your appointment, please contact us at least 24 hours in advance
                  so we can offer the slot to another patient.
                </p>
              </Card>

              <Card title="What to Bring" icon={<Clock className="h-8 w-8 text-primary" />}>
                <p className="text-gray-600">
                  Please bring your medical card (if applicable) and a list of any current medications you are taking.
                  For new patients, please arrive a few minutes early to complete registration forms if you haven't done
                  so already.
                </p>
              </Card>
            </div>

            <Card title="Urgent Appointments" icon={<AlertCircle className="h-8 w-8 text-accent" />} padding="lg">
              <p className="text-gray-600 mb-4">
                If you have an urgent medical issue, please call us as early as possible in the day. We keep a limited
                number of slots for same-day urgent appointments. For emergencies outside of clinic hours, please
                contact SouthDoc or visit your nearest Emergency Department.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Emergency contacts:</p>
                <p className="mt-2">
                  <strong>SouthDoc</strong>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
