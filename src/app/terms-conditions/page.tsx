import React from "react";

function page() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">
        Terms and Conditions
      </h1>
      <p className="mb-4 text-gray-700">
        Please read these Terms and Conditions ("Terms") carefully before using
        our cab booking services. By accessing or using our services, you agree
        to be bound by these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        1. Booking and Payment
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>All bookings are subject to availability and confirmation.</li>
        <li>
          Fares are calculated based on distance, time, and selected vehicle
          type.
        </li>
        <li>
          Full payment must be made at the time of booking or as per the agreed
          terms.
        </li>
        <li>
          We accept various payment methods including cash, UPI, and online
          payments.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        2. Cancellations and Refunds
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>
          Cancellations must be made at least 2 hours before the scheduled
          pick-up time.
        </li>
        <li>
          Refunds, if applicable, will be processed as per our cancellation
          policy.
        </li>
        <li>
          No-shows or last-minute cancellations may be subject to a cancellation
          fee.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        3. Responsibilities
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>
          Passengers are responsible for their personal belongings during the
          ride.
        </li>
        <li>
          We are not liable for any loss or damage to personal items left in the
          cab.
        </li>
        <li>
          Passengers must maintain decorum and follow safety instructions
          provided by the driver.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        4. Service Limitations
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Service availability may vary based on location and time.</li>
        <li>
          We reserve the right to refuse service to anyone for safety or legal
          reasons.
        </li>
        <li>
          Delays may occur due to traffic, weather, or unforeseen circumstances.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        5. Privacy
      </h2>
      <p className="mb-4 text-gray-700">
        We respect your privacy and handle your personal information in
        accordance with our Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        6. Changes to Terms
      </h2>
      <p className="mb-4 text-gray-700">
        We may update these Terms from time to time. Continued use of our
        services constitutes acceptance of the revised Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-blue-600">
        7. Contact
      </h2>
      <p className="text-gray-700">
        For any questions regarding these Terms and Conditions, please contact
        us at{" "}
        <a
          href="mailto:info@cabbooking.com"
          className="text-blue-500 underline"
        >
          info@cabbooking.com
        </a>{" "}
        or call{" "}
        <a href="tel:+918377962159" className="text-blue-500 underline">
          +91 8377962159
        </a>
        .
      </p>
    </div>
  );
}

export default page;
