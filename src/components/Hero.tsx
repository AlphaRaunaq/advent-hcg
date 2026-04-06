import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-forest">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-end min-h-[460px]">
          {/* Left — headline + copy */}
          <div className="py-20 flex flex-col gap-7">
            <span className="text-[14px] font-medium text-accent tracking-[0.12em] uppercase">
              Healthcare Consulting · Est. 2003
            </span>

            <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tighter">
              Redefining
              <br />
              <em className="not-italic text-accent font-normal italic">
                healthcare
              </em>
              <br />
              delivery.
            </h1>

            <p className="text-[21px] text-white leading-relaxed font-light max-w-md">
              Advent was established in 2003 by a small and thoughtful team who
              were intrigued by the projected challenges and opportunities in
              healthcare in India in the coming years.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/services"
                className="bg-white text-forest text-sm font-medium px-7 py-3.5 rounded-sm hover:bg-pale transition-colors"
              >
                Explore our services
              </Link>
              <Link
                href="/project-showcase"
                className="bg-transparent text-white/80 border border-white/25 text-sm px-6 py-3.5 rounded-sm hover:border-white/50 transition-colors"
              >
                Our projects →
              </Link>
            </div>
          </div>

          {/* Right — context card anchored to bottom */}
          <div className="self-end">
            <div className="border-t border-white/15 grid grid-cols-2 divide-x divide-white/10">
              <div className="py-6 pr-8">
                <p className="font-serif text-3xl font-bold text-white">2003</p>
                <p className="text-[14px] text-white/50 mt-1 leading-snug">
                  Founded in Delhi, India
                </p>
              </div>
              <div className="py-6 pl-8">
                <p className="font-serif text-3xl font-bold text-white">Both</p>
                <p className="text-[14px] text-white/50 mt-1 leading-snug">
                  Public &amp; private sector clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
