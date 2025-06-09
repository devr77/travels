"use client";
import Image from "next/image";
import { useState } from "react";

const today = new Date().toISOString().split("T")[0];

export default function Hero() {
  const [tripType, setTripType] = useState<"oneway" | "bothway" | "local">(
    "oneway"
  );

  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-blue-50 pb-12">
      {/* Top Banner with City Silhouette and Car */}
      <div className="w-full h-56 md:h-64 relative flex flex-col items-center justify-center">
        <Image
          src="/assets/4.jpg"
          alt="City Silhouette"
          fill
          className="object-cover object-top pointer-events-none"
          style={{ zIndex: 1 }}
          priority
        />
        <div className="relative z-10 flex flex-col items-center pt-6">
          <span className="text-blue-800 font-extrabold text-xl md:text-2xl drop-shadow-lg">
            +91 8377962159
          </span>
        </div>
      </div>

      {/* Booking Form */}
      <div className="relative z-30 max-w-4xl mx-auto -mt-24">
        <div className="bg-white/90 rounded-2xl shadow-2xl px-6 py-8 md:px-12 md:py-10 flex flex-col gap-6 border border-blue-100">
          {/* Trip Type Buttons */}
          <div className="flex gap-4 justify-center mb-2">
            <button
              className={`px-6 py-2 rounded-full font-bold text-white shadow transition ${
                tripType === "oneway"
                  ? "bg-green-600 scale-105"
                  : "bg-green-400 hover:bg-green-500"
              }`}
              onClick={() => setTripType("oneway")}
            >
              One-way
            </button>
            <button
              className={`px-6 py-2 rounded-full font-bold text-white shadow transition ${
                tripType === "bothway"
                  ? "bg-blue-500 scale-105"
                  : "bg-blue-400 hover:bg-blue-500"
              }`}
              onClick={() => setTripType("bothway")}
            >
              Both-way
            </button>
            <button
              className={`px-6 py-2 rounded-full font-bold text-white shadow transition ${
                tripType === "local"
                  ? "bg-green-600 scale-105"
                  : "bg-green-400 hover:bg-green-500"
              }`}
              onClick={() => setTripType("local")}
            >
              Local
            </button>
          </div>
          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-gray-700">
                Pick Up City
              </label>
              <input
                type="text"
                placeholder="Pick Up City"
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 font-semibold text-gray-700"
                required
              />
              <label className="font-semibold text-gray-700 mt-2">
                Pick Up Date :
              </label>
              <input
                type="date"
                defaultValue={today}
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 font-semibold text-gray-700"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-gray-700">Drop City</label>
              <input
                type="text"
                placeholder="Drop City"
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 font-semibold text-gray-700"
                required
              />
              <label className="font-semibold text-gray-700 mt-2">
                Pick Up Time :
              </label>
              <input
                type="time"
                className="rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 font-semibold text-gray-700"
                required
              />
            </div>
            <div className="md:col-span-2 flex justify-center mt-2">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-10 py-3 rounded-full shadow-lg text-lg transition"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* WhatsApp and Notification Button (optional, for demo) */}
      <a
        href="https://wa.me/918377962159"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <Image src="/whatsapp.png" alt="WhatsApp" width={56} height={56} />
      </a>
    </section>
  );
}
