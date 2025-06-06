import type { Metadata } from "next"
import Image from "next/image"
import { Phone, MapPin, Mail, Clock, ExternalLink, Star } from "lucide-react"
import { Hero } from "@/components/hero"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact Valentia GP Clinic | Dr. Miguel Casali | Cahersiveen Kerry",
  description:
    "Contact Valentia GP Clinic in Cahersiveen, Kerry. Phone: 066 947 3555. Located on Main Street. Book appointments, get directions, opening hours.",
  keywords: [
    "Contact GP Cahersiveen",
    "Valentia GP phone number",
    "Dr Miguel Casali contact",
    "GP Cahersiveen address",
    "Medical centre Kerry contact",
    "Book appointment Cahersiveen",
    "066 947 3555",
  ],
  openGraph: {
    title: "Contact Valentia GP Clinic | Dr. Miguel Casali | Cahersiveen Kerry",
    description: "Contact Valentia GP Clinic in Cahersiveen, Kerry. Phone: 066 947 3555. Located on Main Street.",
    url: "https://www.valentinagp.ie/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        subtitle="We welcome your inquiries. Please find our contact details below. For medical emergencies, please call the appropriate emergency services."
        backgroundImage="/images/clinic-exterior.png"
      />

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <Card padding="lg">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Clinic Address</h3>
                      <address className="text-gray-600 not-italic">
                        Valentia GP Clinic
                        <br />
                        Main Street
                        <br />
                        Cahersiveen, Co. Kerry
                        <br />
                        Ireland
                      </address>
                      <div className="mt-4 space-y-2">
                        <Button
                          href="https://g.co/kgs/347UQG7"
                          external
                          variant="outline"
                          className="text-primary border-primary hover:bg-primary hover:text-white w-full"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View on Google Maps
                        </Button>
                        <Button
                          href="https://g.page/r/Cdr-0zZMY8-2EBM/review"
                          external
                          variant="secondary"
                          className="w-full"
                        >
                          <Star className="w-4 h-4 mr-2" />
                          Leave a Google Review
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card padding="lg">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-gray-600">
                        <a href="tel:0669473555" className="text-primary hover:underline text-lg font-medium">
                          066 947 3555
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Appointments by phone only</p>
                    </div>
                  </div>
                </Card>

                <Card padding="lg">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-gray-600 mb-2">
                        For general inquiries, you can email us. Please do not send urgent medical queries via email.
                      </p>
                      <p>
                        <a href="mailto:admin@valentiaroadgp.ie" className="text-primary hover:underline">
                          admin@valentiaroadgp.ie
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card padding="lg">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Opening Hours</h3>
                      <div className="text-gray-600 space-y-2">
                        <div>
                          <p className="font-medium text-gray-700">Morning Session:</p>
                          <p>Monday - Wednesday, Friday: 9:00 AM - 1:00 PM</p>
                          <p>Thursday: 9:00 AM - 1:00 PM</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700">Afternoon Session:</p>
                          <p>Monday - Wednesday, Friday: 3:00 PM - 5:00 PM</p>
                          <p className="text-red-600">Thursday: Closed (Morning only)</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700">Lab Results Collection:</p>
                          <p>Monday - Friday: 2:00 PM - 3:00 PM</p>
                        </div>
                        <div className="pt-2 border-t border-gray-200">
                          <p>
                            <strong>Saturday & Sunday:</strong> Closed
                          </p>
                          <p>
                            <strong>Bank Holidays:</strong> Closed
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Google Maps and Images */}
            <div className="space-y-8">
              {/* Google Maps Embed */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 bg-gray-50 border-b">
                  <h3 className="font-semibold text-gray-800">Find Us on the Map</h3>
                </div>
                <div className="relative h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.234567890123!2d-10.2242!3d51.9479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDU2JzUyLjQiTiAxMMKwMTMnMjcuMSJX!5e0!3m2!1sen!2sie!4v1234567890123"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Valentia GP Clinic Location"
                  ></iframe>
                </div>
                <div className="p-4 space-y-2">
                  <Button href="https://g.co/kgs/347UQG7" external variant="primary" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button href="https://g.page/r/Cdr-0zZMY8-2EBM/review" external variant="accent" className="w-full">
                    <Star className="w-4 h-4 mr-2" />
                    Write a Review
                  </Button>
                </div>
              </div>

              {/* Patient Reviews Section */}
              <Card padding="lg" className="bg-blue-50 border-blue-200">
                <div className="text-center">
                  <h3 className="font-semibold text-blue-800 mb-2">Patient Reviews</h3>
                  <div className="flex justify-center items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-blue-700 font-medium">Excellent Care</span>
                  </div>
                  <p className="text-blue-700 mb-4">
                    See what our patients say about their experience with Dr. Casali and our team.
                  </p>
                  <Button
                    href="https://g.page/r/Cdr-0zZMY8-2EBM/review"
                    external
                    variant="secondary"
                    className="border-blue-300 text-blue-700"
                  >
                    Read Reviews & Leave Yours
                  </Button>
                </div>
              </Card>

              {/* Clinic Images */}
              <div className="relative h-[250px] rounded-lg overflow-hidden">
                <Image
                  src="/images/clinic-exterior.png"
                  alt="Valentia GP Clinic Exterior - Main Street Cahersiveen"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[200px] rounded-lg overflow-hidden">
                <Image
                  src="/images/team-photo.jpeg"
                  alt="Valentia GP Clinic Team - Dr. Miguel Casali and Staff"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Emergency Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card padding="lg" className="bg-red-50 border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">Life-Threatening Emergencies</h3>
                <p className="text-red-700 mb-4">For immediate life-threatening emergencies:</p>
                <Button href="tel:999" variant="accent" className="bg-red-600 hover:bg-red-700">
                  Call 999 or 112
                </Button>
              </Card>

              <Card padding="lg" className="bg-blue-50 border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">After-Hours Care</h3>
                <p className="text-blue-700 mb-4">For non-emergency medical care outside clinic hours:</p>
                <Button href="tel:+353818355999" variant="secondary" className="border-blue-300 text-blue-700">
                  SouthDoc: +353 818 355 999
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Appointment?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your consultation. We're here to provide the healthcare you and your family
            deserve.
          </p>
          <Button href="tel:0669473555" size="lg">
            <Phone className="mr-2 h-5 w-5" />
            Call Now: 066 947 3555
          </Button>
        </div>
      </section>
    </>
  )
}
