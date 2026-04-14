"use client";

import Link from "next/link";

export default function Subscribe() {
  return (
    <section className="bg-surface border-y border-rule">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="w-10 h-0.5 bg-accent mb-5" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-forest leading-[1.2] tracking-tight mb-4">
              Get In Touch
            </h2>
            <p className="text-forest/90 text-[21px] leading-relaxed font-light">
              Have a question or want to work with us? We&apos;d love to hear
              from you. Reach out and let&apos;s start a conversation.
            </p>
          </div>

          {/* Right — CTA */}
          <div className="flex items-center">
            <Link
              href="/contact-us"
              className="inline-block bg-forest text-white font-medium text-sm px-10 py-4 rounded-sm hover:bg-forest-mid transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
