"use client";

import { useState } from "react";

const MapMarkerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B0F1A" width="24" height="24">
    <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.076 3.208-4.405 3.208-7.51C19.5 5.97 16.14 2.5 12 2.5S4.5 5.97 4.5 10.327c0 3.104 1.264 5.433 3.208 7.51a19.58 19.58 0 002.683 2.282 16.975 16.975 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B0F1A" width="24" height="24">
    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
  </svg>
);

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6B0F1A" width="24" height="24">
    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
  </svg>
);

const contactInfo = [
  {
    icon: MapMarkerIcon,
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
    icon: PhoneIcon,
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
    icon: EnvelopeIcon,
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

    const subject = encodeURIComponent(
      formData.subject || "Contact Form Inquiry"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:support@adventhcg.com?subject=${subject}&body=${body}`;
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
                  {(() => { const Icon = info.icon; return <Icon />; })()}
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
