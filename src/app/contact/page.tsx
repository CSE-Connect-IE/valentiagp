import { openingHours, contactInfo, address } from '@/lib/data';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>{address.line3}</p>
              <p>{address.line4}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <p>Phone: {contactInfo.phone}</p>
              <p>Email: {contactInfo.email}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Opening Hours</h3>
              <ul className="mt-4 space-y-2">
                <li>{openingHours.days} {openingHours.hours}</li>
                <li>{openingHours.thursdays}</li>
                <li>{openingHours.labResults}</li>
                <li>{openingHours.saturdaySunday}</li>
                <li>{openingHours.bankHolidays}</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
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
      </div>
    </div>
  );
};

export default ContactPage;
