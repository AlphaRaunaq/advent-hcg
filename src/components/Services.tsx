import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Strategic Advisory Services",
    desc: "Served as core of our business for past decades and services offered are along with different verticals.",
    href: "/services",
  },
  {
    num: "02",
    title: "Operational Services",
    desc: "The insight gained through monitoring national and global trends has helped define opportunities for providing operational services in some niche areas.",
    href: "/services",
  },
  {
    num: "03",
    title: "Hyperbaric Oxygen Therapy Services",
    desc: "The first hyperbaric treatment center in a private hospital was established in India by the founder of Advent and has been a core focus for further growth.",
    href: "/services",
  },
  {
    num: "04",
    title: "Medical Education Resources",
    desc: "The growth in healthcare has created a need for educational and training facilities to meet the growing need of trained manpower to support India's healthcare growth.",
    href: "/services",
  },
  {
    num: "05",
    title: "LearnNHeal",
    desc: "learnNheal springs from Advent HealthCare Pvt ltd founded by Dr Tarun Sahni. Our e-learning solutions are modular, accessible in your own time, at a much lower cost than traditional courses.",
    href: "/services",
  },
  {
    num: "06",
    title: "MeVaT",
    desc: "In emerging global trends and changing healthcare delivery models Advent has defined an opportunity in \"Medical Value Travel\" and on the process to leverage its existing understanding and relationships to participate in this area of healthcare delivery.",
    href: "/advent-mevat",
  },
];

export default function Services() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-24">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[11px] font-medium text-sage tracking-[0.12em] uppercase block mb-3">
              Our Services
            </span>
            <h2 className="font-serif text-4xl lg:text-[42px] font-bold text-ink tracking-tighter leading-[1.1]">
              How we help our clients
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm font-medium text-forest border-b border-forest pb-0.5 hover:text-forest-mid transition-colors self-start lg:self-auto shrink-0"
          >
            View all services →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 divide-rule border border-rule">
          {services.map((s) => (
            <Link
              key={s.num}
              href={s.href}
              className="group p-8 border-rule md:border-r last:border-r-0 [&:nth-child(3n)]:border-r-0 border-b hover:bg-pale transition-colors flex flex-col gap-4"
            >
              <span className="font-serif text-sm text-mint font-bold">{s.num}</span>
              <h3 className="font-serif text-lg font-bold text-ink leading-snug group-hover:text-forest transition-colors">
                {s.title}
              </h3>
              <p className="text-[13px] text-ink-muted leading-relaxed flex-1">{s.desc}</p>
              <span className="text-sm text-forest font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 inline-block">
                Read More →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
