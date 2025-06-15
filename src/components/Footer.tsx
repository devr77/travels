"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-50 via-white to-blue-100 border-t border-blue-100 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & About */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image
              src="/assets/logo.jpg"
              alt="Delhi Travels Service"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-xl text-blue-800">
              Naina Tours & <span className="text-blue-500">Travels</span>
            </span>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Reliable taxi & cab service in Delhi NCR and beyond. Safe,
            affordable, and always on time.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="https://wa.me/918377962159"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <Image
                src="/whatsapp.png"
                alt="WhatsApp"
                width={28}
                height={28}
              />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={28}
                height={28}
              />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={28}
                height={28}
              />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-blue-700 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <Link href="#home" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-blue-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <h3 className="font-semibold text-blue-700 mb-3">Our Services</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>Airport Transfers</li>
            <li>Outstation Rides</li>
            <li>Local City Travel</li>
            <li>Corporate Cabs</li>
            <li>Tour Packages</li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="font-semibold text-blue-700 mb-3">Contact Us</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+918377962159" className="hover:text-blue-600">
                +91 83779 62159
              </a>
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:info@delhitravelsservice.com"
                className="hover:text-blue-600"
              >
                info@delhitravelsservice.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Address:</span>
              <br />
              123, Connaught Place, New Delhi, India
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs py-4 border-t border-blue-100">
        &copy; {new Date().getFullYear()} Delhi Travels Service. All rights
        reserved.
      </div>
    </footer>
  );
}
