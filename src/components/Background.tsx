export default function Background() {
  return (
    <section className="bg-pale border-b border-rule">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start">

          {/* Label col */}
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[11px] font-medium text-sage tracking-[0.12em] uppercase">
              Background
            </span>
          </div>

          {/* Content col */}
          <div className="space-y-5 text-[15px] text-ink-2 leading-relaxed font-light">
            <p>
              Advent was established in 2003 by a small and thoughtful team who were intrigued by the
              projected challenges and opportunities in healthcare in India in the coming years. This
              had received great visibility as a result of a World Bank and CII report the previous year.
            </p>
            <p>
              The challenge was integrating the &ldquo;public health&rdquo; demand of equitable distribution
              of basic healthcare recommended by the World Bank with the &ldquo;highly attractive profitable
              private healthcare sector&rdquo; highlighted by the CII report.
            </p>
            <p>
              In our assessment the &ldquo;patient&rdquo; is exposed to both the public and private and is the
              most important element in the healthcare chain. He needs to be guided and looked after with
              compassion &mdash; hence <strong className="font-medium text-forest">&ldquo;patient centric&rdquo;</strong> became our mantra!
            </p>
            <p>
              Advent continuously monitors the changing global and national healthcare trends and understands
              the need for a standardized, quality controlled and accountable healthcare system.
            </p>
            <p>
              Over the last decade we have provided a range of services from strategy consulting to managing
              and operating health services and have worked with clients within India and across the world
              both in the public and private sector.
            </p>
            <p className="text-ink-muted">
              Advent is based in Delhi and has presence in other parts of India and with partners in other
              parts of the world.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
