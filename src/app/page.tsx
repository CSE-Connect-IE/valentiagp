import Link from 'next/link';
import { openingHours, contactInfo, address, services } from '@/lib/data';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('/Images/DSC_0111-1-scaled.jpg')", opacity: 0.8 }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Trusted Healthcare in Cahersiveen</h1>
          <p className="mt-4 text-xl max-w-2xl">
            Dr. Miguel Casali, with over 30 years’ experience, and our dedicated team provide comprehensive, patient-centered care in South Kerry.
          </p>
          <div className="mt-8 space-x-4">
            <Link href="/appointments" className="btn-primary">
              Book Appointment
            </Link>
            <Link href={services.repeatPrescriptions.link} className="btn-secondary">
              Request Prescription
            </Link>
          </div>
        </div>
      </section>

      {/* Important Information Section */}
      <section className="bg-yellow-100 border-t-4 border-yellow-500">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-bold">Out-of-Hours Services: South Doc – 0818 355 999</p>
          <p className="font-bold">Emergency: 999</p>
        </div>
      </section>

      {/* Our Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <h3 className="text-xl font-semibold">General Services</h3>
              <Link href="/services#general" className="text-accent hover:underline mt-4 inline-block">
                Learn More
              </Link>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-semibold">{services.repeatPrescriptions.title}</h3>
              <p className="mt-2">{services.repeatPrescriptions.description}</p>
              <Link href={services.repeatPrescriptions.link} className="text-accent hover:underline mt-4 inline-block">
                Request Now
              </Link>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-semibold">{services.videoConsultations.title}</h3>
              <Link href="/services#video" className="text-accent hover:underline mt-4 inline-block">
                Learn More
              </Link>
            </div>
            <div className="card text-center">
              <h3 className="text-xl font-semibold">{services.specializedClinics.title}</h3>
              <Link href="/services#specialized" className="text-accent hover:underline mt-4 inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Miguel Casali */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Meet Dr. Miguel Casali</h2>
          <p className="max-w-3xl mx-auto text-lg">
            With a passion for patient care and a friendly, approachable manner, Dr. Casali has been a cornerstone of the Cahersiveen community for decades. He believes in building lasting relationships with his patients, ensuring everyone feels heard, understood, and cared for.
          </p>
        </div>
      </section>

      {/* Visit Our Clinic */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">We are in Cahersiveen, South Kerry</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
              <ul className="space-y-2">
                <li>{openingHours.days} {openingHours.hours}</li>
                <li>{openingHours.thursdays}</li>
                <li>{openingHours.labResults}</li>
                <li>{openingHours.saturdaySunday}</li>
                <li>{openingHours.bankHolidays}</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2459.732389232383!2d-10.2268!3d51.9497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484f9b5e8c2b5a6b%3A0x1ad1a7b1c2d1a4b9!2sValentia%20Rd%2C%20Cahersiveen%2C%20Co.%20Kerry%2C%20Ireland!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li>Phone: {contactInfo.phone}</li>
                <li>Email: {contactInfo.email}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
