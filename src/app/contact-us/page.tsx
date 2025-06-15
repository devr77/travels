"use client";
import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    // Here you can handle sending the form data to your backend or email service
    // For demo, we'll just reset the form after submission
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        Have questions or need help? Fill out the form below and we’ll get back
        to you soon.
      </p>
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        <div>
          <label className="block font-semibold text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 font-semibold text-gray-700 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
        </div>
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className={`w-full rounded-lg border px-4 py-3 font-semibold text-gray-700 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>
        <div>
          <label className="block font-semibold text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={`w-full rounded-lg border px-4 py-3 font-semibold text-gray-700 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            required
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full shadow-lg text-lg transition"
        >
          Send Message
        </button>
        {submitted && (
          <div className="text-green-600 font-semibold mt-4">
            Thank you for contacting us! We will get back to you soon.
          </div>
        )}
      </form>
      <div className="mt-10 text-gray-700">
        <div>
          <span className="font-semibold">Phone:</span>{" "}
          <a href="tel:+918377962159" className="text-blue-500 underline">
            +91 8377962159
          </a>
        </div>
        <div>
          <span className="font-semibold">Email:</span>{" "}
          <a
            href="mailto:info@cabbooking.com"
            className="text-blue-500 underline"
          >
            info@cabbooking.com
          </a>
        </div>
      </div>
    </div>
  );
}
