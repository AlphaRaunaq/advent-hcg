"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "fa-map-marker",
    title: "Visit Us",
    content: (
      <>
        102, Tribhovan Complex, Ishwar Nagar
        <br />
        Delhi-Mathura Road
        <br />
        New Delhi-110065 (India)
      </>
    ),
  },
  {
    icon: "fa-phone",
    title: "Call Us",
    content: (
      <>
        Landline: 011-4640-6815
        <br />
        Mob.: 9810-909-341
        <br />
        Fax: 011-4640-6815
      </>
    ),
  },
  {
    icon: "fa-envelope-o",
    title: "Email Us",
    content: (
      <>
        General Inquiry:{" "}
        <a href="mailto:info@adventhcg.com" className="text-forest hover:underline">
          info@adventhcg.com
        </a>
        <br />
        Support:{" "}
        <a href="mailto:support@adventhcg.com" className="text-forest hover:underline">
          support@adventhcg.com
        </a>
      </>
    ),
  },
];

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-forest py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[14px] font-medium text-accent tracking-[0.12em] uppercase">
            Contact Us
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mt-4 leading-[1.08] tracking-tighter max-w-3xl">
            Get in touch with our team
          </h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="bg-pale p-8 rounded-lg text-center hover:bg-sage/10 transition-colors"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-forest/10 rounded-full flex items-center justify-center">
                  <i className={`fa ${info.icon} text-forest text-xl`} />
                </div>
                <h3 className="font-serif text-lg font-bold text-ink mb-4">
                  {info.title}
                </h3>
                <p className="text-[16px] text-ink-2 leading-relaxed">
                  {info.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-pale py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-10 h-0.5 bg-accent mx-auto mb-4" />
            <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
              Send us a message
            </span>
            <h2 className="font-serif text-3xl font-bold text-ink mt-4">
              We'd love to hear from you
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-rule rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-ink mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-rule rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-ink mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-rule rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-ink mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-rule rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-forest/50 focus:border-forest transition-colors resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-forest text-white font-medium rounded-lg hover:bg-forest-mid transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
