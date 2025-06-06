import Image from "next/image"
import { Check } from "lucide-react"
import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Card } from "@/components/ui/card"
import { CallToAction } from "@/components/call-to-action"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Dr. Miguel Casali and our medical practice in Cahersiveen, Co. Kerry.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="About Valentia GP"
        subtitle="Your trusted medical practice in Cahersiveen, Co. Kerry, committed to delivering compassionate, patient-centered care grounded in evidence-based medicine."
        backgroundImage="/images/clinic-exterior.png"
      />

      {/* Dr. Miguel Casali Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image src="/images/dr-casali-headshot-new.png" alt="Dr. Miguel Casali" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Dr. Miguel Casali</h2>
              <p className="text-gray-700 font-medium mb-6">General Practitioner</p>
              <p className="text-gray-600 mb-6">
                With over <strong>30 years of experience</strong> in general practice, Dr. Miguel Casali has been a
                cornerstone of healthcare in Cahersiveen and South Kerry. His dedication to comprehensive,
                patient-centered care has made him a trusted healthcare provider for families across the region.
              </p>
              <p className="text-gray-600 mb-6">
                Dr. Casali's approach combines traditional medical expertise with modern healthcare innovations. He
                believes in taking the time to listen to his patients, understanding their concerns, and developing
                personalized treatment plans that address not just symptoms, but the whole person.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-primary mb-6">
                <h3 className="font-semibold mb-2">Medical Philosophy</h3>
                <p className="italic text-gray-600">
                  "Healthcare is a team effort. We work collaboratively to provide holistic care that supports the
                  physical, emotional, and social well-being of every patient. My goal is to ensure each individual
                  feels heard, supported, and respected."
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-accent-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Experience:</strong> 30+ years in general practice
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-accent-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Specialization:</strong> Family medicine & chronic disease management
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-accent-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Approach:</strong> Comprehensive & thorough care
                  </span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-accent-green mr-2 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Focus:</strong> Community-centered healthcare
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Dedicated Team</h2>
              <p className="text-gray-600 mb-6">
                Our close-knit team works collaboratively to provide holistic care that supports the well-being of every
                patient who walks through our doors.
              </p>
              <h3 className="text-xl font-semibold mb-4">A Team You Can Trust</h3>
              <p className="text-gray-600 mb-6">
                At Valentia GP, we believe that exceptional healthcare is delivered by exceptional people. Our team
                combines years of experience with genuine care and compassion for our patients.
              </p>
              <p className="text-gray-600 mb-6">
                From our reception staff who greet you with a warm welcome, to our nursing team who provide expert
                clinical support, every member of our team is committed to making your healthcare experience as
                comfortable and effective as possible.
              </p>
              <p className="text-gray-600">
                We value open communication and continuity of care, ensuring that each patient develops lasting
                relationships with our team members who understand their unique health needs and concerns.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/images/team-photo.jpeg" alt="Valentia GP Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-12">Our Team Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Compassionate Care">
              <p className="text-gray-600">
                We treat every patient with empathy, respect, and understanding, recognizing that healthcare is deeply
                personal.
              </p>
            </Card>
            <Card title="Clinical Excellence">
              <p className="text-gray-600">
                Our commitment to evidence-based medicine and continuous learning ensures you receive the highest
                standard of care.
              </p>
            </Card>
            <Card title="Community Focus">
              <p className="text-gray-600">
                As part of the Cahersiveen community, we understand local needs and are invested in the health of our
                neighbors.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6">Modern Facilities, Traditional Values</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our clinic combines modern medical equipment and technology with the warm, personal touch that defines
            traditional family medicine. Located in the heart of Cahersiveen, we're easily accessible to patients
            throughout South Kerry.
          </p>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            We've invested in modern diagnostic equipment and digital systems to enhance the quality and efficiency of
            our care, while maintaining the personal relationships that are at the heart of good medicine.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Modern Equipment",
                description: "State-of-the-art diagnostic tools",
              },
              {
                title: "Digital Systems",
                description: "Electronic health records & online services",
              },
              {
                title: "Accessible Location",
                description: "Central Cahersiveen location",
              },
              {
                title: "Comfortable Environment",
                description: "Welcoming, family-friendly space",
              },
            ].map((facility, index) => (
              <Card key={index} title={facility.title}>
                <p className="text-gray-600">{facility.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card title="Our Mission" padding="lg">
              <p className="text-gray-600">
                To improve the health and quality of life of our patients through a sustainable, community-focused
                approach. We work alongside public health services and invest in ongoing education for both our team and
                patients to ensure informed, empowered healthcare decisions.
              </p>
            </Card>
            <Card title="What We Believe" padding="lg">
              <ul className="space-y-4">
                {[
                  {
                    value: "Patient-Centered Care",
                    description:
                      "Every decision we make is guided by what's best for our patients' health and well-being.",
                  },
                  {
                    value: "Continuous Learning",
                    description:
                      "We stay current with medical advances to provide the most effective treatments available.",
                  },
                  {
                    value: "Open Communication",
                    description:
                      "We believe in honest, clear communication that empowers patients to make informed decisions.",
                  },
                  {
                    value: "Community Partnership",
                    description:
                      "We work collaboratively with other healthcare providers to ensure comprehensive care.",
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <strong className="text-primary">{item.value}:</strong> {item.description}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience personalized healthcare. Join the many families who have trusted Dr. Casali and our team with
            their healthcare needs. We're here to provide the comprehensive, compassionate care you deserve.
          </p>
          <div className="inline-block bg-white rounded-lg shadow-md px-8 py-6">
            <p className="text-xl font-medium">
              <strong>Phone:</strong>{" "}
              <a href="tel:0669473555" className="text-primary hover:underline">
                066 947 3555
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </>
  )
}
