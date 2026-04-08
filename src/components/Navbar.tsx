"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    label: "About Us",
    href: "/about-us",
    children: [
      { label: "Our Vision", href: "/our-vision" },
      { label: "Advent Team", href: "/team" },
      { label: "Value Proposition", href: "/value-proposition" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Delivery Model", href: "/delivery-model" },
      { label: "Learn N Heal", href: "/learn-heal" },
      { label: "Hyperbaric India", href: "/hyperbaricindia" },
    ],
  },
  { label: "Project Showcase", href: "/project-showcase" },
  { label: "Gallery", href: "/gallery" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // small delay — enough to move cursor into dropdown
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-rule">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/advent_logo.png"
            alt="Advent HealthCare"
            width={140}
            height={45}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={() => item.children && handleMouseLeave()}
            >
              <Link
                href={item.href}
                className="text-sm text-ink-2 hover:text-forest transition-colors flex items-center gap-1"
              >
                {item.label}
                {item.children && (
                  <svg
                    className="w-3 h-3 opacity-40"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 4l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>

              {/* Dropdown */}
              {item.children && openDropdown === item.label && (
                <div
                  className="absolute top-full left-0 pt-2 mt-1 w-52 bg-white border border-rule shadow-sm rounded-sm py-1"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-ink-2 hover:bg-pale hover:text-forest transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact-us"
            className="hidden lg:inline-block bg-forest text-white text-sm font-medium px-5 py-2.5 rounded-sm hover:bg-forest-mid transition-colors"
          >
            Contact Us
          </Link>
          <button
            className="lg:hidden p-1.5 text-ink-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 4l12 12M16 4L4 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 5h14M3 10h14M3 15h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-rule bg-white">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                className="block px-6 py-3 text-sm font-medium text-ink-2 border-b border-rule/50 hover:bg-pale"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="bg-pale/50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-10 py-2.5 text-sm text-ink-muted border-b border-rule/30 hover:text-forest"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact-us"
            className="block mx-6 my-4 bg-forest text-white text-sm font-medium px-5 py-3 rounded-sm text-center"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}
