"use client";
import Image from "next/image";
import { useState } from "react";
import React from "react";

const today = new Date().toISOString().split("T")[0];

const topCities = [
  "Mumbai",
  "Delhi",
  "Bengaluru",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
];

export default function Hero() {
  const [tripType, setTripType] = useState<"oneway" | "bothway">("oneway");
  const [form, setForm] = useState({
    passengers: "",
    pickupCity: "",
    pickupDate: today,
    state: "",
    dropCity: "",
    pickupTime: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (
      !form.passengers ||
      Number(form.passengers) < 1 ||
      Number(form.passengers) > 10
    ) {
      newErrors.passengers = "Enter 1-10 passengers";
    }
    if (!form.pickupCity.trim()) newErrors.pickupCity = "Pick up city required";
    if (!form.pickupDate) newErrors.pickupDate = "Pick up date required";
    if (!form.state) newErrors.state = "Select a state";
    if (!form.dropCity.trim()) newErrors.dropCity = "Drop city required";
    if (!form.pickupTime) newErrors.pickupTime = "Pick up time required";
    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }
    setSubmitted(true);
    // Handle form data here (e.g., send to API)
    // alert("Form submitted!");
  }

  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-blue-50 pb-12">
      {/* Top Banner with City Silhouette and Car */}
      <div className="w-full h-56 md:h-64 relative flex flex-col items-center justify-center">
        <Image
          src="/assets/banner.png"
          alt="City Silhouette"
          fill
          className="object-cover object-top pointer-events-none"
          style={{ zIndex: 1 }}
          priority
        />
        <div className="relative z-10 flex flex-col items-center pt-6">
          <span className="text-red-800 font-extrabold text-xl md:text-2xl drop-shadow-lg">
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
          </div>
          {/* Form */}
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="flex flex-col gap-3">
              <label className="font-semibold text-gray-700 mt-2">
                No. of Passengers :
              </label>
              <input
                type="number"
                min={1}
                max={10}
                name="passengers"
                value={form.passengers}
                onChange={handleChange}
                placeholder="No. of Passengers"
                className={`rounded-lg border px-4 py-3 font-semibold text-gray-700 ${
                  errors.passengers ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.passengers && (
                <span className="text-red-500 text-sm">
                  {errors.passengers}
                </span>
              )}
              <label className="font-semibold text-gray-700">
                Pick Up City
              </label>
              <select
                name="pickupCity"
                value={form.pickupCity}
                onChange={handleChange}
                className={`rounded-lg border px-4 py-3 font-semibold text-gray-700 ${
                  errors.pickupCity ? "border-red-500" : "border-gray-300"
                }`}
                required
              >
                <option value="" disabled>
                  Select Pick Up City
                </option>
                {topCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.pickupCity && (
                <span className="text-red-500 text-sm">
                  {errors.pickupCity}
                </span>
              )}
              <label className="font-semibold text-gray-700 mt-2">
                Pick Up Date :
              </label>
              <input
                type="date"
                name="pickupDate"
                value={form.pickupDate}
                onChange={handleChange}
                className={`rounded-lg border px-4 py-3 font-semibold text-gray-700 ${
                  errors.pickupDate ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.pickupDate && (
                <span className="text-red-500 text-sm">
                  {errors.pickupDate}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-3">
              {/* State Select */}
              <label className="font-semibold text-gray-700 mt-2">
                State :
              </label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className={`rounded-lg border px-4 py-3 font-semibold text-gray-700 ${
                  errors.state ? "border-red-500" : "border-gray-300"
                }`}
                required
              >
                <option value="" disabled>
                  Select State
                </option>
                <option value="Delhi">Delhi</option>
                <option value="Haryana">Haryana</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Kerala">Kerala</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Telangana">Telangana</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Odisha">Odisha</option>
                <option value="Bihar">Bihar</option>
                <option value="Assam">Assam</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Other">Other</option>
              </select>
              {errors.state && (
                <span className="text-red-500 text-sm">{errors.state}</span>
              )}
              <label className="font-semibold text-gray-700">Drop City</label>
              <select
                name="dropCity"
                value={form.dropCity}
                onChange={handleChange}
                className={`rounded-lg border px-4 py-3 font-semibold text-gray-700 ${
                  errors.dropCity ? "border-red-500" : "border-gray-300"
                }`}
                required
              >
                <option value="" disabled>
                  Select Drop City
                </option>
                {topCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
              {errors.dropCity && (
                <span className="text-red-500 text-sm">{errors.dropCity}</span>
              )}
              <label className="font-semibold text-gray-700 mt-2">
                Pick Up Time :
              </label>
              <input
                type="time"
                name="pickupTime"
                value={form.pickupTime}
                onChange={handleChange}
                className={`rounded-lg border px-4 py-3 font-semibold text-gray-700 ${
                  errors.pickupTime ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
              {errors.pickupTime && (
                <span className="text-red-500 text-sm">
                  {errors.pickupTime}
                </span>
              )}
            </div>
            <div className="md:col-span-2 flex flex-col items-center mt-2">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-10 py-3 rounded-full shadow-lg text-lg transition"
              >
                SUBMIT
              </button>
              {submitted && (
                <span className="text-green-600 font-semibold mt-3">
                  Booking submitted successfully!
                </span>
              )}
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
