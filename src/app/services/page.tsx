import { services } from '@/lib/data';
import fees from '@/lib/fees.json';

const ServicesPage = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

      {/* General Services */}
      <section id="general" className="mb-16">
        <h2 className="text-3xl font-bold mb-8">General Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.general.map((service) => (
            <div key={service.name} className="card text-center">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold">{service.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Repeat Prescriptions */}
      <section id="repeat-prescriptions" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">{services.repeatPrescriptions.title}</h2>
        <p className="mb-4">{services.repeatPrescriptions.description}</p>
        <a href={services.repeatPrescriptions.link} className="btn-primary">Request Now</a>
      </section>

      {/* Video Consultations */}
      <section id="video" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">{services.videoConsultations.title}</h2>
        <p className="mb-4">{services.videoConsultations.description}</p>
        {/* Amelia booking widget/iframe */}
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://example.com/amelia-booking" // Replace with actual Amelia booking URL
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Specialized Clinics */}
      <section id="specialized" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">{services.specializedClinics.title}</h2>
        <p>{services.specializedClinics.description}</p>
      </section>

      {/* Fees */}
      <section id="fees">
        <h2 className="text-3xl font-bold mb-8 text-center">Fees</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                  <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {fees.map((fee) => (
                  <tr key={fee.service}>
                    <td className="py-4 px-6 whitespace-nowrap">{fee.service}</td>
                    <td className="py-4 px-6 whitespace-nowrap">{fee.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
            <p>We accept Cash, Card, and Checks.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
