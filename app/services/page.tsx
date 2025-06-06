import { FileText, Video, Stethoscope, Clock, Clipboard, Phone, Home, Calendar } from "lucide-react"
import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { Card } from "@/components/ui/card"
import { CallToAction } from "@/components/call-to-action"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the comprehensive healthcare services offered at Valentia GP Clinic, including general consultations, specialized clinics, and preventative care.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Medical Services"
        subtitle="Comprehensive healthcare services designed to meet all your medical needs with compassionate, patient-centered care from Dr. Miguel Casali and our dedicated team."
        backgroundImage="/images/clinic-exterior.png"
      />

      {/* General Medical Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">General Medical Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Comprehensive care for all ages, addressing acute and chronic illnesses with personalized treatment plans.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card title="General Consultations" icon={<Stethoscope className="h-10 w-10 text-primary" />}>
              <p className="text-gray-600">
                Thorough assessments, diagnosis, and treatment plans tailored to your individual needs. We focus on
                preventative care as well as managing existing conditions.
              </p>
            </Card>
            <Card title="Chronic Disease Management" icon={<Clipboard className="h-10 w-10 text-primary" />}>
              <p className="text-gray-600">
                Ongoing care plans and monitoring for conditions like diabetes, asthma, COPD, heart disease, and
                hypertension with regular monitoring and lifestyle advice.
              </p>
            </Card>
            <Card title="Telephone Consultations" icon={<Phone className="h-10 w-10 text-primary" />}>
              <p className="text-gray-600">
                Convenient medical advice by phone, ideal for follow-ups, discussing results, medication queries, or
                minor medical issues where physical examination isn't required.
              </p>
            </Card>
            <Card title="Review Consultations" icon={<Calendar className="h-10 w-10 text-primary" />}>
              <p className="text-gray-600">
                Focused revisit within 10 days for the same condition to ensure your condition is progressing as
                expected or if adjustments to your treatment plan are needed.
              </p>
            </Card>
            <Card title="Extended Consultations" icon={<Clock className="h-10 w-10 text-primary" />}>
              <p className="text-gray-600">
                Extra time for complex medical issues or multiple concerns. Please request an extended consultation when
                booking to ensure adequate time.
              </p>
            </Card>
            <Card title="House Calls" icon={<Home className="h-10 w-10 text-primary" />}>
              <p className="text-gray-600">
                At-home visits for patients unable to attend the clinic, ensuring continuity of care for those with
                mobility issues or serious health conditions.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Clinics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Specialized Clinics</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Dedicated clinics for specific health needs with specialized care and monitoring.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Diabetes Clinic" icon={<Calendar className="h-10 w-10 text-primary" />} padding="lg">
              <p className="text-gray-600 mb-4">
                Comprehensive diabetes management including regular monitoring, HbA1c testing, foot care assessments,
                and personalized care plans.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                <li>Blood glucose monitoring</li>
                <li>Medication management</li>
                <li>Lifestyle and dietary advice</li>
                <li>Complication screening</li>
              </ul>
              <Button href="/appointments">Book an Appointment</Button>
            </Card>
            <Card title="Vaccination Clinics" icon={<Clipboard className="h-10 w-10 text-primary" />} padding="lg">
              <p className="text-gray-600 mb-4">
                Comprehensive vaccination services for all ages including routine immunizations, travel vaccines, and
                seasonal flu shots.
              </p>
              <ul className="list-disc pl-5 mb-4 space-y-2 text-gray-600">
                <li>Childhood immunizations</li>
                <li>Adult boosters</li>
                <li>Travel vaccinations</li>
                <li>Seasonal flu vaccines</li>
              </ul>
              <Button href="/appointments">Schedule a Vaccination</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Prescriptions & Online Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Prescriptions & Online Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Convenient online services to make accessing your healthcare easier and more efficient.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Repeat Prescriptions" icon={<FileText className="h-10 w-10 text-primary" />} padding="lg">
              <p className="text-gray-600 mb-4">
                Quick and convenient online prescription requests for your regular medications. Simply submit your
                request online and collect from your preferred pharmacy.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-medium mb-2">How it works:</p>
                <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                  <li>Submit request online</li>
                  <li>Allow 48 hours processing</li>
                  <li>Collect from your pharmacy</li>
                </ol>
              </div>
              <Button
                variant="accent"
                href="https://blnk.ws/service/valentia-road-medical-centre/prescription-requests"
                external
              >
                Request Repeat Prescription
              </Button>
            </Card>
            <Card title="Video Consultations" icon={<Video className="h-10 w-10 text-primary" />} padding="lg">
              <p className="text-gray-600 mb-4">
                Secure video consultations available for after-hours care and follow-up appointments. Perfect for when
                you need medical advice but can't visit the clinic.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-medium mb-2">Available for:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  <li>Follow-up consultations</li>
                  <li>Medication reviews</li>
                  <li>Minor health concerns</li>
                  <li>After-hours advice</li>
                </ul>
              </div>
              <Button variant="accent" href="/appointments">
                Book Video Consultation
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Preventative & Screening Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Preventative & Screening Services</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Proactive healthcare to detect and prevent health issues before they become serious problems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card title="Health Screening">
              <p className="text-gray-600 mb-4">
                Comprehensive health checks including blood pressure monitoring, cholesterol testing, and general
                wellness assessments.
              </p>
            </Card>
            <Card title="Women's Health">
              <p className="text-gray-600 mb-4">
                Cervical screening, contraceptive advice, menopause management, and general women's health
                consultations.
              </p>
            </Card>
            <Card title="Men's Health">
              <p className="text-gray-600 mb-4">
                Prostate health checks, cardiovascular screening, and men's health consultations addressing specific
                male health concerns.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to book your appointment? Contact us today to schedule your consultation or learn more about our
            services. We're here to provide the healthcare you and your family deserve.
          </p>
          <Button href="tel:0669473555" size="lg">
            <Phone className="mr-2 h-5 w-5" /> Phone: 066 947 3555
          </Button>
        </div>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </>
  )
}
