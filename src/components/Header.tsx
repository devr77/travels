"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-50 via-white to-orange-100 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link href="/">
              {" "}
              <Image
                src="/assets/logo.jpg"
                alt="Delhi Travels Service"
                width={48}
                height={48}
                className="rounded-full shadow-md border-2 border-blue-200"
              />
            </Link>

            <span className="font-extrabold text-2xl text-blue-800 tracking-tight drop-shadow">
              Naina Tours & <span className="text-blue-500">Travels</span>
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10 text-gray-700 font-semibold">
            <Link
              href="/"
              className="hover:text-blue-700 transition-colors duration-200 relative group"
            >
              Home
              <span className="block h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
            <Link
              href="/services"
              className="hover:text-blue-700 transition-colors duration-200 relative group"
            >
              Services
              <span className="block h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
            <Link
              href="/about-us"
              className="hover:text-blue-700 transition-colors duration-200 relative group"
            >
              About
              <span className="block h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
            <Link
              href="/contact-us"
              className="hover:text-blue-700 transition-colors duration-200 relative group"
            >
              Contact
              <span className="block h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:bg-blue-100 focus:outline-none transition"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 animate-fade-in-down">
          <div className="flex flex-col gap-2 text-gray-700 font-semibold bg-white rounded-xl shadow-lg border border-blue-100 mt-2 py-3">
            <Link
              href="#home"
              className="py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded transition"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded transition"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="py-2 px-3 hover:bg-blue-50 hover:text-blue-700 rounded transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease;
        }
      `}</style>
    </nav>
  );
}
