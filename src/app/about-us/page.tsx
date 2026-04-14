import Link from "next/link";

export default function AboutUs() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-surface py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto">
          <span className="text-[14px] font-medium text-accent tracking-[0.12em] uppercase">
            About Us
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-forest mt-4 leading-[1.08] tracking-tighter max-w-3xl">
            Contributing to the changes in healthcare in India
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16">
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
              Who we are
            </span>
          </div>
          <div className="space-y-5 text-[18px] text-ink-2 leading-relaxed font-light">
            <p>
              Advent is a team of committed professionals linked together with a
              strong desire to contribute to the emerging change in healthcare
              by providing services to meet these challenges both on strategic
              and operational lines.
            </p>
            <p>
              The healthcare sector in India, over the next decade is projected
              for rapid growth with huge investment and paradigm shift in the
              way health is delivered both in the public and private sector.
              This necessitates a strategic response, which includes
              organizational redesign, innovation, forging public-private
              partnerships and constructing alliance with the international
              health care community.
            </p>
            <p>
              We believe that future medical and health services must be
              prepared to deal with evolving integrated healthcare delivery
              systems, technology, changing & complex regulatory environment,
              insurance sector and an increasing focus on preventive care.
            </p>
            <p>
              Advent Team has a deep understanding of international best
              practices in Healthcare systems through experiences and
              partnerships with global healthcare institutions.
            </p>
            <p>
              We are committed to redefining healthcare delivery by working with
              healthcare providers and designers to develop patient-centric
              strategies; driving innovation in to business processes; and
              creating sustainable models.
            </p>
            <p className="text-ink-muted">
              Our clients appreciate Advents deep understanding of healthcare to
              create customized, unique and sustainable models, relevant for
              both the public and private sector.
            </p>
          </div>
        </div>
      </section>

      {/* Sub-page links */}
      <section className="bg-pale py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase block mb-10">
            Explore more
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
            {[
              {
                title: "Our Vision",
                desc: "Where we're headed and what drives every decision we make.",
                href: "/our-vision",
              },
              {
                title: "Advent Team",
                desc: "The people behind Advent — experienced, committed, and passionate.",
                href: "/team",
              },
              {
                title: "Value Proposition",
                desc: "What makes Advent different and why our clients keep coming back.",
                href: "/value-proposition",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white p-8 flex flex-col gap-4 hover:bg-pale transition-colors"
              >
                <h3 className="font-serif text-xl font-bold text-ink group-hover:text-forest transition-colors">
                  {item.title}
                </h3>
                <p className="text-[16px] text-ink-muted leading-relaxed flex-1">
                  {item.desc}
                </p>
                <span className="text-sm font-medium text-forest">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
