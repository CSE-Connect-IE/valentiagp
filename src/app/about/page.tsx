import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "About Us | Valentia GP",
  description:
    "Meet Dr. Miguel Casali and our dedicated team at Valentia GP in Cahersiveen. Learn about our experience, approach to healthcare, and commitment to the community.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-16 lg:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Images/DSC_0111-1.jpg"
            alt="Valentia GP Team"
            fill
            className="object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-primary opacity-80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-6 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About Valentia GP
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your trusted medical practice in Cahersiveen, Co. Kerry, committed
            to delivering compassionate, patient-centered care grounded in
            evidence-based medicine.
          </p>
        </div>
      </section>

      {/* Dr. Miguel Casali Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Dr. Miguel Casali
                <span className="block text-xl font-normal text-primary mt-2">
                  General Practitioner
                </span>
              </h2>

              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  With over{" "}
                  <strong className="text-primary">
                    30 years of experience
                  </strong>{" "}
                  in general practice, Dr. Miguel Casali has been a cornerstone
                  of healthcare in Cahersiveen and South Kerry. His dedication
                  to comprehensive, patient-centered care has made him a trusted
                  healthcare provider for families across the region.
                </p>

                <p>
                  Dr. Casali's approach combines traditional medical expertise
                  with modern healthcare innovations. He believes in taking the
                  time to listen to his patients, understanding their concerns,
                  and developing personalized treatment plans that address not
                  just symptoms, but the whole person.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-primary">
                  <h3 className="font-semibold text-primary mb-3">
                    Medical Philosophy
                  </h3>
                  <p className="text-gray-700 italic">
                    "Healthcare is a team effort. We work collaboratively to
                    provide holistic care that supports the physical, emotional,
                    and social well-being of every patient. My goal is to ensure
                    each individual feels heard, supported, and respected."
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="bg-white p-4 rounded-lg shadow-md border">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Experience
                    </h4>
                    <p className="text-gray-600">
                      30+ years in general practice
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Specialization
                    </h4>
                    <p className="text-gray-600">
                      Family medicine & chronic disease management
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Approach
                    </h4>
                    <p className="text-gray-600">
                      Comprehensive & thorough care
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md border">
                    <h4 className="font-semibold text-gray-900 mb-2">Focus</h4>
                    <p className="text-gray-600">
                      Community-centered healthcare
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/Images/1-300x300.webp"
                  alt="Dr. Miguel Casali"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Dedicated Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our close-knit team works collaboratively to provide holistic care
              that supports the well-being of every patient who walks through
              our doors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Images/DSC_0111-1.jpg"
                  alt="Valentia GP Team"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                A Team You Can Trust
              </h3>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  At Valentia GP, we believe that exceptional healthcare is
                  delivered by exceptional people. Our team combines years of
                  experience with genuine care and compassion for our patients.
                </p>
                <p>
                  From our reception staff who greet you with a warm welcome, to
                  our nursing team who provide expert clinical support, every
                  member of our team is committed to making your healthcare
                  experience as comfortable and effective as possible.
                </p>
                <p>
                  We value open communication and continuity of care, ensuring
                  that each patient develops lasting relationships with our team
                  members who understand their unique health needs and concerns.
                </p>
              </div>
            </div>
          </div>

          {/* Team Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              title="Compassionate Care"
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
              className="text-center"
            >
              <p className="text-gray-600">
                We treat every patient with empathy, respect, and understanding,
                recognizing that healthcare is deeply personal.
              </p>
            </Card>

            <Card
              title="Clinical Excellence"
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
              className="text-center"
            >
              <p className="text-gray-600">
                Our commitment to evidence-based medicine and continuous
                learning ensures you receive the highest standard of care.
              </p>
            </Card>

            <Card
              title="Community Focus"
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
              className="text-center"
            >
              <p className="text-gray-600">
                As part of the Cahersiveen community, we understand local needs
                and are invested in the health of our neighbors.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Clinic Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Modern Facilities, Traditional Values
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Our clinic combines modern medical equipment and technology
                  with the warm, personal touch that defines traditional family
                  medicine. Located in the heart of Cahersiveen, we're easily
                  accessible to patients throughout South Kerry.
                </p>
                <p>
                  We've invested in modern diagnostic equipment and digital
                  systems to enhance the quality and efficiency of our care,
                  while maintaining the personal relationships that are at the
                  heart of good medicine.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-primary mb-2">
                    Modern Equipment
                  </h4>
                  <p className="text-sm text-gray-600">
                    State-of-the-art diagnostic tools
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-600 mb-2">
                    Digital Systems
                  </h4>
                  <p className="text-sm text-gray-600">
                    Electronic health records & online services
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-600 mb-2">
                    Accessible Location
                  </h4>
                  <p className="text-sm text-gray-600">
                    Central Cahersiveen location
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-600 mb-2">
                    Comfortable Environment
                  </h4>
                  <p className="text-sm text-gray-600">
                    Welcoming, family-friendly space
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Images/WhatsApp-Image-2024-10-21-at-09.19.03_3c4bf060-1024x680.jpg"
                  alt="Dr. Casali in consultation room"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Our Mission & Values
            </h2>

            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-700">
                    To improve the health and quality of life of our patients
                    through a sustainable, community-focused approach. We work
                    alongside public health services and invest in ongoing
                    education for both our team and patients to ensure informed,
                    empowered healthcare decisions.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-2xl font-semibold text-primary mb-6">
                    What We Believe
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Patient-Centered Care
                      </h4>
                      <p className="text-gray-600">
                        Every decision we make is guided by what's best for our
                        patients' health and well-being.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Continuous Learning
                      </h4>
                      <p className="text-gray-600">
                        We stay current with medical advances to provide the
                        most effective treatments available.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Open Communication
                      </h4>
                      <p className="text-gray-600">
                        We believe in honest, clear communication that empowers
                        patients to make informed decisions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Community Partnership
                      </h4>
                      <p className="text-gray-600">
                        We work collaboratively with other healthcare providers
                        to ensure comprehensive care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 hero-gradient text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Experience Personalized Healthcare
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the many families who have trusted Dr. Casali and our team with
            their healthcare needs. We're here to provide the comprehensive,
            compassionate care you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button tel="0669473555" variant="accent" size="lg">
              📞 Book Your Appointment
            </Button>
            <Button
              href="/services"
              as="link"
              variant="secondary"
              size="lg"
              className="bg-white text-primary border-white hover:bg-gray-100"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
