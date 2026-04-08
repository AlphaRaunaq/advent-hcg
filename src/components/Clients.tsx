"use client";

import Image from "next/image";
import { useRef } from "react";

const logos = [
  { src: "/carousel/logo.jpg",                        alt: "Client Logo" },
  { src: "/carousel/sankara_eye_foundation-1.jpg",    alt: "Sankara Eye Foundation" },
  { src: "/carousel/dmrc_logo-1.jpg",                 alt: "DMRC" },
  { src: "/carousel/logo-2.jpg",                      alt: "Client Logo 2" },
  { src: "/carousel/220594839811Picture2.png",         alt: "Client" },
  { src: "/carousel/223440451088AHREF.png",            alt: "AHREF" },
  { src: "/carousel/231662199165Picture7.png",         alt: "Client" },
  { src: "/carousel/324514483306Picture5.png",         alt: "Client" },
  { src: "/carousel/327903236220Unique-Systems.png",   alt: "Unique Systems" },
  { src: "/carousel/350680103714Picture6.png",         alt: "Client" },
  { src: "/carousel/413671175799Hyperbaric.jpg",       alt: "Hyperbaric" },
  { src: "/carousel/644394726514Picture41.jpg",        alt: "Client" },
];

// Duplicate so the loop feels seamless
const track = [...logos, ...logos];

export default function Clients() {
  const trackRef = useRef<HTMLDivElement>(null);

  const pause = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "paused";
    }
  };

  const resume = () => {
    if (trackRef.current) {
      trackRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="bg-pale border-y border-rule py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-8">
        <div className="w-10 h-0.5 bg-accent mb-4" />
        <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
          Our Prestigious Clients
        </span>
      </div>

      {/* Marquee track */}
      <div
        className="relative w-full overflow-hidden cursor-pointer"
        onMouseEnter={pause}
        onMouseLeave={resume}
      >
        <div
          ref={trackRef}
          className="flex gap-12 w-max"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 h-28 bg-white rounded-lg border border-rule flex items-center justify-center px-4"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={90}
                className="object-contain max-h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
