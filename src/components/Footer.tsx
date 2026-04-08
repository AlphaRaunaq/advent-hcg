import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-16 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/advent_logo.png"
              alt="Advent HealthCare"
              width={120}
              height={38}
            />
            <p className="text-[16px] text-white/40 leading-relaxed max-w-xs font-light">
              Redefining Healthcare Delivery. Based in Delhi with presence
              across India and partners worldwide.
            </p>
          </div>

          {/* About */}
          <div>
            <h4 className="text-[14px] font-medium text-white/40 tracking-[0.12em] uppercase mb-4">
              About Us
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Our Vision", href: "/our-vision" },
                { label: "Advent Team", href: "/team" },
                { label: "Value Proposition", href: "/value-proposition" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[14px] font-medium text-white/40 tracking-[0.12em] uppercase mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Delivery Model", href: "/delivery-model" },
                { label: "Learn N Heal", href: "/learn-heal" },
                { label: "Hyperbaric India", href: "/hyperbaricindia" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[14px] font-medium text-white/40 tracking-[0.12em] uppercase mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: "Project Showcase", href: "/project-showcase" },
                { label: "Gallery", href: "/album" },
                { label: "Contact Us", href: "/contact-us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-white/30">
            © {new Date().getFullYear()} Advent HealthCare Pvt. Ltd. All rights
            reserved.
          </p>
          <p className="text-[12px] text-white/30">Delhi, India</p>
        </div>
      </div>
    </footer>
  );
}
