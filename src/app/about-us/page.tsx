import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">About Us</h1>
      <p className="mb-4 text-lg text-gray-700">
        Welcome to our Cab Booking Service! We are dedicated to providing safe,
        reliable, and comfortable cab services across India’s top cities. Whether
        you need a ride for business, leisure, or airport transfers, our
        experienced drivers and well-maintained fleet ensure a smooth journey
        every time.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        Our Mission
      </h2>
      <p className="mb-4 text-gray-700">
        Our mission is to make travel easy and accessible for everyone. We strive
        to offer transparent pricing, timely pickups, and excellent customer
        support to make your experience hassle-free.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        Why Choose Us?
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>24/7 customer support</li>
        <li>Professional and courteous drivers</li>
        <li>Wide coverage across major Indian cities</li>
        <li>Easy online booking and secure payments</li>
        <li>Clean and comfortable vehicles</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        Contact Us
      </h2>
      <p className="text-gray-700">
        Have questions or need help with your booking? Reach out to us at{" "}
        <a
          href="tel:+918377962159"
          className="text-blue-500 underline"
        >
          +91 8377962159
        </a>{" "}
        or email us at{" "}
        <a
          href="mailto:info@cabbooking.com"
          className="text-blue-500 underline"
        >
          info@cabbooking.com
        </a>
        .
      </p>
    </div>
  );
}
