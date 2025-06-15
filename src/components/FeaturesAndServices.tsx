"use client";
import React from "react";

const features = [
  { emoji: "🕒", label: "24x7 Support" },
  { emoji: "🚗", label: "Wide Range of Cars" },
  { emoji: "🧑‍✈️", label: "Experienced Drivers" },
  { emoji: "💳", label: "Easy Online Booking" },
  { emoji: "🛡️", label: "Safe & Secure Rides" },
  { emoji: "💰", label: "Transparent Pricing" },
];

const services = [
  { emoji: "✈️", label: "Airport Transfers" },
  { emoji: "🏙️", label: "Local City Travel" },
  { emoji: "🌄", label: "Outstation Rides" },
  { emoji: "🏢", label: "Corporate Cabs" },
  { emoji: "🧳", label: "Tour Packages" },
  { emoji: "👨‍👩‍👧‍👦", label: "Family Trips" },
];

export default function FeaturesAndServices() {
  return (
    <section className="max-w-5xl mx-auto my-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {features.map((f) => (
          <div
            key={f.label}
            className="flex flex-col items-center bg-white rounded-xl shadow p-5"
          >
            <span className="text-4xl mb-2">{f.emoji}</span>
            <span className="font-semibold text-gray-700 text-center">
              {f.label}
            </span>
          </div>
        ))}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-blue-700 mb-4 text-center">
        Our Services
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center bg-white rounded-xl shadow p-5"
          >
            <span className="text-4xl mb-2">{s.emoji}</span>
            <span className="font-semibold text-gray-700 text-center">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
