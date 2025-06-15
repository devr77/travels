import React from "react";

export default function Services() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Our Services</h1>
      <p className="mb-4 text-lg text-gray-700">
        We offer a wide range of cab services to meet your travel needs across
        India’s top cities. Our commitment is to provide safe, reliable, and
        comfortable rides for every occasion.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        What We Offer
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>
          <span className="font-semibold">City Rides:</span> Quick and convenient
          cab services within city limits for daily commutes, shopping, or
          errands.
        </li>
        <li>
          <span className="font-semibold">Outstation Trips:</span> Comfortable
          and affordable rides to nearby cities and tourist destinations.
        </li>
        <li>
          <span className="font-semibold">Airport Transfers:</span> Timely
          pick-up and drop-off services to and from all major airports.
        </li>
        <li>
          <span className="font-semibold">Corporate Travel:</span> Reliable
          transportation solutions for business meetings, conferences, and events.
        </li>
        <li>
          <span className="font-semibold">Round Trips:</span> Book cabs for
          both-way journeys with flexible return options.
        </li>
        <li>
          <span className="font-semibold">Hourly Rentals:</span> Hire a cab on
          an hourly basis for city tours or personal use.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        Why Book With Us?
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Easy online booking and instant confirmation</li>
        <li>Transparent and competitive pricing</li>
        <li>Professional, background-verified drivers</li>
        <li>Clean, sanitized, and well-maintained vehicles</li>
        <li>24/7 customer support for all your queries</li>
      </ul>
      <p className="text-gray-700 mt-8">
        Ready to book your ride? Use our online booking form or contact us at{" "}
        <a
          href="tel:+918377962159"
          className="text-blue-500 underline"
        >
          +91 8377962159
        </a>{" "}
        for assistance.
      </p>
    </div>
  );
}
