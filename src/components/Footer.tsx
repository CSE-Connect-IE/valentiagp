import Link from 'next/link';
import { openingHours, contactInfo, address } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-300">Contact Us</h3>
            <ul className="mt-4 space-y-2">
              <li>Phone: {contactInfo.phone}</li>
              <li>Email: {contactInfo.email}</li>
              <li>{contactInfo.outOfHours}</li>
              <li>Emergency: {contactInfo.emergency}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-300">Opening Hours</h3>
            <ul className="mt-4 space-y-2">
              <li>{openingHours.days} {openingHours.hours}</li>
              <li>{openingHours.thursdays}</li>
              <li>{openingHours.labResults}</li>
              <li>{openingHours.saturdaySunday}</li>
              <li>{openingHours.bankHolidays}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/privacy-policy" className="hover:text-accent">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use" className="hover:text-accent">Terms of Use</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-accent">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Valentia Road GP. All rights reserved.</p>
          <p className="mt-2">
            <a href={address.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              {address.line1}, {address.line2}, {address.line3}, {address.line4}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
