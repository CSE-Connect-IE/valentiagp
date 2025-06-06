import Image from "next/image"
import { FileText, Video, Stethoscope, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CallToAction } from "@/components/call-to-action"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center py-24 md:py-36 lg:py-44"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(18, 184, 134, 0.8), rgba(32, 201, 151, 0.8)), url('/images/clinic-exterior.png')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Trusted Healthcare in Valentia Island
            </h1>
            <p className="text-xl text-white mb-8">
              Dr. Miguel Casali and our dedicated team provide comprehensive, patient-centered care with over 30 years
              of experience serving South Kerry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/appointments" variant="accent" size="lg">
                Book an Appointment
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Our Services
              </Button>
              <Button
                href="https://blnk.ws/service/valentia-road-medical-centre/prescription-requests"
                external
                variant="outline"
                size="lg"
              >
                Repeat Prescriptions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Key Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive healthcare services designed for your convenience and well-being
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "General Consultations",
                icon: <Stethoscope className="h-10 w-10 text-primary" />,
                description: "Comprehensive care for all ages, addressing both acute and chronic health conditions.",
              },
              {
                title: "Video Consultations",
                icon: <Video className="h-10 w-10 text-primary" />,
                description: "After-hours care through secure video consultations when you need medical advice.",
              },
              {
                title: "Repeat Prescriptions",
                icon: <FileText className="h-10 w-10 text-primary" />,
                description: "Quick and convenient online prescription requests for your regular medications.",
              },
              {
                title: "Diabetes Clinic",
                icon: <Clock className="h-10 w-10 text-primary" />,
                description: "Specialized diabetes management and monitoring with personalized care plans.",
              },
            ].map((service, index) => (
              <Card key={index} title={service.title} icon={service.icon}>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button href="/services" variant="outline" className="text-primary hover:text-primary-dark">
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dr. Casali Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/dr-casali-headshot-new.png" alt="Dr. Miguel Casali" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Meet Dr. Miguel Casali</h2>
              <p className="text-gray-600 mb-6">
                With over <strong>30 years of experience</strong> in general practice, Dr. Miguel Casali brings a wealth
                of knowledge and a compassionate approach to healthcare in Cahersiveen and South Kerry.
              </p>
              <p className="text-gray-600 mb-6">
                Dr. Casali combines traditional medical expertise with modern healthcare innovations, ensuring
                comprehensive and thorough care for every patient. His community-focused approach has made him a trusted
                healthcare provider for families across the region.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary mb-6">
                <h3 className="font-semibold mb-2">Our Commitment</h3>
                <p className="italic text-gray-600">
                  "Healthcare is a team effort. We work collaboratively to provide holistic care that supports the
                  physical, emotional, and social well-being of every patient."
                </p>
              </div>
              <Button href="/about">Learn More About Dr. Casali</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Visit Our Clinic</h2>
          <p className="text-center text-gray-600 mb-12">Conveniently located in the heart of Cahersiveen</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card title="Opening Hours" padding="lg" className="h-full">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Morning Session:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Monday - Wednesday, Friday: 9:00 AM - 1:00 PM</li>
                    <li>Thursday: 9:00 AM - 1:00 PM</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Afternoon Session:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>Monday - Wednesday, Friday: 3:00 PM - 5:00 PM</li>
                    <li className="text-red-600">Thursday: Closed (Morning only)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Lab Results:</h4>
                  <p className="text-gray-600">Monday - Friday: 2:00 PM - 3:00 PM</p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600">Saturday & Sunday: Closed</p>
                  <p className="text-gray-600">Bank Holidays: Closed</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg mt-6">
                <p className="font-medium">After hours emergency care:</p>
                <p>
                  SouthDoc:{" "}
                  <a href="tel:+353818355999" className="text-primary hover:underline">
                    +353 818 355 999
                  </a>
                </p>
              </div>
            </Card>

            <Card title="Contact Information" padding="lg" className="h-full">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Location</h3>
                  <p>Main Street, Cahersiveen</p>
                  <p>Co. Kerry, Ireland</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Contact Information</h3>
                  <p>
                    <strong>Phone:</strong>{" "}
                    <a href="tel:0669473555" className="text-primary hover:underline">
                      066 947 3555
                    </a>
                  </p>
                  <p>Appointments by phone only</p>
                </div>
                <div className="pt-4">
                  <Button href="/contact" className="w-full mb-3">
                    Contact Us
                  </Button>
                  <Button
                    href="https://g.page/r/Cdr-0zZMY8-2EBM/review"
                    external
                    variant="secondary"
                    className="w-full"
                  >
                    Leave a Review
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </>
  )
}
