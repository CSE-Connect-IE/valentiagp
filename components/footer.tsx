import Link from "next/link"
import { Phone, MapPin, Clock, Star } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-600">Main Street, Cahersiveen, Co. Kerry, Ireland</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary flex-shrink-0" />
                <a href="tel:0669473555" className="hover:text-primary transition-colors text-gray-600">
                  066 947 3555
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Opening Hours</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                <span>Mon-Wed, Fri: 9AM-1PM, 3PM-5PM</span>
              </li>
              <li className="ml-6">Thu: 9AM-1PM (Morning only)</li>
              <li className="ml-6">Lab Results: 2PM-3PM</li>
              <li className="ml-6">Sat & Sun: Closed</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Fees", href: "/fees" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-primary transition-colors text-gray-600">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews & Emergency */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Reviews & Emergency</h3>
            <div className="space-y-4">
              <div>
                <a
                  href="https://g.page/r/Cdr-0zZMY8-2EBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:underline"
                >
                  <Star className="h-4 w-4 mr-2" />
                  Leave a Review
                </a>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-2">Emergency:</p>
                <p className="text-sm text-gray-600">SouthDoc: +353 818 355 999</p>
                <p className="text-sm text-gray-600">Life-threatening: 999 or 112</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Valentia GP Clinic. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-sm text-gray-600 hover:text-primary">
              Terms of Use
            </Link>
            <Link href="/cookie-policy" className="text-sm text-gray-600 hover:text-primary">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
