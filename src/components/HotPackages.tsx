"use client";
import React from "react";

const packages = [
  {
    code: "VHH05",
    title: "Remarkable Himachal Tour",
    days: 10,
    nights: 9,
    image: "/himachal.jpg", // Place your image in public/
    icons: ["🚗", "📷", "✈️", "🏨"],
    locations: ["Shimla", "Manali", "Amritsar"],
    more: 2,
    price: "₹34,999",
    lowestDate: "15th July, 2023",
    detailsLink: "#",
    enquireLink: "#",
  },
  {
    code: "VHGT1",
    title: "Golden Tringle",
    days: 4,
    nights: 3,
    image: "/golden-triangle.jpg",
    icons: ["🚗", "📷", "✈️", "🏨"],
    locations: ["Delhi", "Agra", "Jaipur"],
    more: 0,
    price: "₹14,999",
    lowestDate: "20th Aug, 2023",
    detailsLink: "#",
    enquireLink: "#",
  },
  {
    code: "VHK03",
    title: "Trending Kashmir",
    days: 6,
    nights: 5,
    image: "/kashmir.jpg",
    icons: ["🚗", "📷", "✈️", "🏨"],
    locations: ["Srinagar", "Gulmarg"],
    more: 2,
    price: "₹25,999",
    lowestDate: "1st Sept, 2023",
    detailsLink: "#",
    enquireLink: "#",
  },
];

export default function HotPackages() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-2">
          Hot selling Packages 2022 -2023
        </h2>
        <div className="w-24 h-1 bg-pink-400 mx-auto mb-6 rounded"></div>
        <p className="text-center text-lg text-gray-700 mb-10 font-medium">
          Our best customised holiday Packages division can cater to your every
          travel need like Hotel, Air Tickets, Visa, Sightseeings, Transfer or
          the entire package, all designed keeping in mind your interests! Our
          hot cake areas are{" "}
          <b>
            - Best Kerala Package, Char Dham Yatra, Goa, Andaman, Nainital,
            Udaipur-Jaisalmer, Gangtok-Darjeeling
          </b>{" "}
          many more.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.code}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col"
              style={{ border: "1px solid #eee" }}
            >
              <div className="relative mb-4">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="rounded-xl w-full h-48 object-cover"
                />
                <span className="absolute top-3 right-3 bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Code {pkg.code}
                </span>
              </div>
              <div className="mb-2">
                <div className="text-xl font-semibold">{pkg.title}</div>
                <div className="text-lg mt-1">
                  <b>{pkg.days} Days</b> {pkg.nights} Nights
                </div>
              </div>
              <div className="flex gap-3 text-2xl mb-2">
                {pkg.icons.map((icon, i) => (
                  <span key={i}>{icon}</span>
                ))}
              </div>
              <div className="text-gray-600 text-sm mb-2 flex flex-wrap items-center gap-1">
                {pkg.locations.map((loc, i) => (
                  <span key={i} className="flex items-center">
                    <span className="text-lg">📍</span> {loc}
                    {i < pkg.locations.length - 1 && (
                      <span className="mx-1">---</span>
                    )}
                  </span>
                ))}
                {pkg.more > 0 && (
                  <span className="font-semibold ml-1">+{pkg.more} More</span>
                )}
              </div>
              <div className="flex justify-between items-center mt-3 mb-2">
                <div>
                  <div className="font-bold text-lg">SUPER DEAL PRICE</div>
                  <div className="text-2xl font-semibold">{pkg.price}</div>
                  <div className="text-gray-600 text-xs">
                    perperson on twin sharing
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-700 font-semibold">
                    Lowest Price
                  </div>
                  <div className="bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full mt-1">
                    {pkg.lowestDate}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={pkg.detailsLink}
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-2 rounded transition"
                >
                  View Details
                </a>
                <a
                  href={pkg.enquireLink}
                  className="border border-purple-700 text-purple-700 hover:bg-purple-50 font-semibold px-6 py-2 rounded transition"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
