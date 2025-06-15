"use client";
import React from "react";

const itinerary = [
  {
    day: "Day 01",
    title: "Chandigarh to Shimla",
    desc: "On arrival at Chandigarh airport/railway station you will be met, assisted and driven to Shimla. On the way, visit Pinjore Garden. Check in at hotel. Afternoon free. Overnight stay at hotel.",
  },
  {
    day: "Day 02",
    title: "Shimla Sightseeing",
    desc: "Visit Kufri & Shimla local sightseeing. Night stay in Shimla.",
  },
  {
    day: "Day 03",
    title: "Shimla to Manali",
    desc: "Drive to Manali via Kullu. Night stay in Manali.",
  },
  {
    day: "Day 04",
    title: "Manali Sightseeing",
    desc: "Local sightseeing in Manali. Night stay in Manali.",
  },
  {
    day: "Day 05",
    title: "Manali to Dharamshala",
    desc: "Drive to Dharamshala. Night stay in Dharamshala.",
  },
  {
    day: "Day 06",
    title: "Dharamshala Sightseeing",
    desc: "Local sightseeing in Dharamshala. Night stay in Dharamshala.",
  },
  {
    day: "Day 07",
    title: "Dharamshala to Dalhousie",
    desc: "Drive to Dalhousie. Night stay in Dalhousie.",
  },
  {
    day: "Day 08",
    title: "Dalhousie Sightseeing",
    desc: "Local sightseeing in Dalhousie. Night stay in Dalhousie.",
  },
  {
    day: "Day 09",
    title: "Dalhousie to Amritsar",
    desc: "Drive to Amritsar. Night stay in Amritsar.",
  },
  {
    day: "Day 10",
    title: "Amritsar - Departure",
    desc: "Check out and transfer to Amritsar airport/railway station for your onward journey.",
  },
];

const inclusions = [
  "Hotel accommodation.",
  "Breakfast & Dinner.",
  "Sightseeing as per itinerary.",
  "All transfers & sightseeing by private vehicle.",
  "Driver allowance, toll, parking, and taxes.",
];

const exclusions = [
  "Personal expenses.",
  "Train/flight tickets.",
  "Service tax.",
  "Guide.",
  "Entry charges.",
  "Anything not mentioned in inclusions.",
];

const priceTable = [
  {
    season: "Season Rate (15th April to 15th July, 2023)",
    deluxe: "₹39,999",
    standard: "₹36,999",
    budget: "₹33,999",
  },
  {
    season: "Off Season Rate (16th July to 15th April)",
    deluxe: "₹36,999",
    standard: "₹33,999",
    budget: "₹30,999",
  },
];

export default function IndividualPackagePage() {
  return (
    <main className="bg-gradient-to-br from-pink-300 via-pink-200 to-pink-400 min-h-screen pb-20">
      <div className="max-w-3xl mx-auto  bg-white/80 rounded-xl shadow-lg p-0 overflow-hidden">
        {/* Title & Image */}
        <div className="p-6 pb-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold mb-1">
                Remarkable Himachal Tour
              </h1>
              <div className="text-sm text-gray-600 mb-2">
                <span>
                  Destination Covered: Shimla, Manali, Dharamshala, Dalhousie,
                  Amritsar
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-pink-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                Tour Code: VHH05
              </span>
            </div>
          </div>
          <div className="mt-4">
            <img
              src="/himachal.jpg"
              alt="Remarkable Himachal Tour"
              className="rounded-lg w-full h-56 object-cover"
            />
          </div>
        </div>
        {/* Price & Actions */}
        <div className="flex flex-col md:flex-row items-center gap-6 p-6">
          <div className="flex-1">
            <div className="text-2xl font-bold text-pink-700 mb-1">₹39,999</div>
            <div className="text-xs text-gray-600 mb-2">
              per person on twin sharing basis
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-700 mb-2">
              <span>🗓️ 10 Days & 9 Nights</span>
            </div>
            <div className="flex gap-3">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-2 rounded transition">
                Book This Tour
              </button>
              <button className="border border-pink-700 text-pink-700 hover:bg-pink-50 font-semibold px-5 py-2 rounded transition">
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Package Includes & Excludes */}
      <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-3 gap-8 px-4">
        <div className="md:col-span-2 bg-white/90 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">Package Includes</h2>
          <div className="flex gap-6 mb-6">
            <div className="flex flex-col items-center">
              <span className="text-2xl">🏨</span>
              <span className="text-xs mt-1">Hotel</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">🍳</span>
              <span className="text-xs mt-1">Breakfast</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">🍽️</span>
              <span className="text-xs mt-1">Dinner</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">🚗</span>
              <span className="text-xs mt-1">Transport</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl">🗺️</span>
              <span className="text-xs mt-1">Sightseeing</span>
            </div>
          </div>
          <ul className="list-disc pl-5 text-gray-700 text-sm">
            {inclusions.map((inc, i) => (
              <li key={i}>{inc}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white/90 rounded-xl p-6">
          <h2 className="text-lg font-bold mb-4">Exclusions</h2>
          <ul className="list-disc pl-5 text-gray-700 text-sm">
            {exclusions.map((exc, i) => (
              <li key={i}>{exc}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Day Wise Itinerary */}
      <div className="max-w-5xl mx-auto mt-10 bg-white/90 rounded-xl p-6 px-4">
        <h2 className="text-lg font-bold mb-4">Day Wise Itinerary</h2>
        <ol className="relative border-l-2 border-pink-400 pl-6">
          {itinerary.map((item, i) => (
            <li key={i} className="mb-8">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-pink-400 rounded-full text-white font-bold">
                {i + 1}
              </span>
              <div className="ml-2">
                <div className="font-semibold">
                  {item.day}: {item.title}
                </div>
                <div className="text-gray-700 text-sm">{item.desc}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Price & Rates */}
      <div className="max-w-5xl mx-auto mt-10 bg-white/90 rounded-xl p-6 px-4">
        <h2 className="text-lg font-bold mb-4">Price & Rates</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 font-semibold">Season</th>
                <th className="py-2 px-4 font-semibold">Deluxe</th>
                <th className="py-2 px-4 font-semibold">Standard</th>
                <th className="py-2 px-4 font-semibold">Budget</th>
              </tr>
            </thead>
            <tbody>
              {priceTable.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-pink-50" : ""}>
                  <td className="py-2 px-4">{row.season}</td>
                  <td className="py-2 px-4">{row.deluxe}</td>
                  <td className="py-2 px-4">{row.standard}</td>
                  <td className="py-2 px-4">{row.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-xs text-gray-600 mt-2">
          * GST extra as applicable. <br />* Rates are per person on twin
          sharing basis.
        </div>
      </div>
    </main>
  );
}
