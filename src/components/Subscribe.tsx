"use client";

import { useState } from "react";

export default function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="w-10 h-0.5 bg-accent mb-5" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-white leading-[1.2] tracking-tight mb-4">
              Subscribe Now!
            </h2>
            <p className="text-white/60 text-[15px] leading-relaxed font-light">
              Please subscribe to our newsletters to stay updated on the latest in healthcare
              strategy, operations, and innovation.
            </p>
          </div>

          {/* Right — Form */}
          <div>
            {submitted ? (
              <div className="bg-white/10 border border-white/20 rounded-sm px-8 py-10 text-center">
                <p className="font-serif text-xl text-white font-bold mb-2">Thank you!</p>
                <p className="text-white/60 text-sm">You&apos;ve been subscribed to our newsletter.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-widest uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. Tarun Sahni"
                    className="bg-white/10 border border-white/20 text-white placeholder:text-white/30 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium text-white/50 tracking-widest uppercase">
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="bg-white/10 border border-white/20 text-white placeholder:text-white/30 text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 bg-white text-forest font-medium text-sm px-8 py-3.5 rounded-sm hover:bg-pale transition-colors self-start"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
