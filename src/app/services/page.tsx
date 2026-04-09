import Link from "next/link";

const advisoryServices = [
  {
    title: "Advent HAM (Hospital Admin & Management)",
    desc: "Project Feasibility, Business Model Definition, Strategy, Architecture, Project Management and delivery, Process Certification, Technology evaluation and Implementation.",
  },
  {
    title: "Advent IHS (Intl. Healthcare Services)",
    desc: "Entry strategies, Alliances and Partnerships, Staffing, Outsourcing.",
  },
  {
    title: "Advent PHI (Public Healthcare Initiatives)",
    desc: "Designing health systems, defining state government healthcare agenda, International funding agency projects, Public-private partnerships.",
  },
  {
    title: "Advent HBO (Hyperbaric Oxygen Therapy)",
    desc: "Advisory services for setting up hyperbaric oxygen therapy centers, Operating hyperbaric oxygen therapy centers.",
  },
  {
    title: "Advent CHS (Corporate Healthcare Services)",
    desc: "Customized healthcare plans and advice, Group medical solutions.",
  },
  {
    title: "Advent MER (Medical Education Resources)",
    desc: "Advisory & Management Services for setting up and operating healthcare educational institutes: medical & nursing college, dental & allied health education and training services.",
  },
];

const educationServices = [
  {
    title: "For commercial divers",
    desc: `Advent has built a relationship with KB Associated Singapore to provide Diver Medical Technician,Air Diving Supervisor and Bell Diving Supervisor courses required for professional enhancement in the diving industry. Advent also provides the "Oxygen Provider courses" for these individuals as a prerequisite to going for diving courses in Australia.`,
  },
  {
    title: "For Compressed air (tunnel) workers",
    desc: "We conduct basic first aid , life support and medical evacuation training courses for those working in hazardous environments such as tunnel workers.",
  },
  {
    title: "For Community at large",
    desc: "We conduct basic first aid , life support and medical evacuation training courses for the community at large.",
  },
];

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-forest py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[14px] font-medium text-accent tracking-[0.12em] uppercase">
            Services
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mt-4 leading-[1.08] tracking-tighter max-w-3xl">
            How we help our clients
          </h1>
          <p className="text-white text-[21px] leading-relaxed font-light mt-6 max-w-2xl">
            We are a single window service provider and deliver by blending our
            internal strengths with the capabilities of our partners and
            outsourcing resources to deliver customized, innovative, unique and
            sustainable solutions to our clients.
          </p>
        </div>
      </section>

      {/* Strategic Advisory */}
      <section className="bg-white py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[200px_1fr] gap-16">
            <div className="pt-1">
              <div className="w-10 h-0.5 bg-accent mb-4" />
              <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
                Strategic Advisory
              </span>
            </div>
            <div>
              <p className="text-[18px] text-ink-2 leading-relaxed font-light mb-12">
                This has been the core focus of our business for the past decade
                and services offered are along the following verticals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
                {advisoryServices.map((s) => (
                  <div
                    key={s.title}
                    className="bg-white p-8 flex flex-col gap-3 hover:bg-pale transition-colors"
                  >
                    <h3 className="font-serif text-lg font-bold text-ink leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-[16px] text-ink-muted leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Services */}
      <section className="bg-pale py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16">
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
              Operational Services
            </span>
          </div>
          <div className="space-y-6">
            <p className="text-[18px] text-ink-2 leading-relaxed font-light">
              The insight gained through monitoring national and global trends
              has helped define opportunities for providing operational services
              in some niche areas some of which are listed below. Advent is
              continuously exploring additional opportunities for the same and
              welcomes queries from clients desirous of such services.
            </p>
            <div className="bg-white border border-rule p-8 flex flex-col gap-3">
              <h3 className="font-serif text-lg font-bold text-ink">
                Advent Hyperbaric & Occupational Health Services (AHOHS) for
                Compressed Air and Tunneling Operations
              </h3>
              <p className="text-[16px] text-ink-muted leading-relaxed">
                Advent is a pioneer in this field and the only agency to provide
                these services. We are working at multiple compressed air and
                tunneling sites to provide services for man lock, medical lock,
                supervisors and medical kits and training.
              </p>
              <p className="text-[16px] text-ink-muted leading-relaxed">
                Exclusively Advent team at India's leading hospital provides a
                specialized medical examination of commercial divers and tunnel
                workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HBO */}
      <section className="bg-white py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16">
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
              HBO Services
            </span>
          </div>
          <div className="space-y-4 text-[18px] text-ink-2 leading-relaxed font-light">
            <p>
              The first hyperbaric treatment center in a private hospital was
              established in India by the founder of Advent and has been a core
              focus for further growth. Advent plans to roll out a series of
              hyperbaric centers across India to offer cost effective services
              in India.
            </p>
            <p>
              The equipment is specifically developed for the Indian market
              using the highest level of international quality control. The
              Hyperbaric Society of India and the website
              www.hyperbaricindia.com have been developed by Advent for the
              promotion of hyperbaric in India.
            </p>
            <Link
              href="/hyperbaricindia"
              className="inline-block text-sm font-medium text-forest border-b border-forest pb-0.5 mt-2"
            >
              Learn more about Hyperbaric India →
            </Link>
          </div>
        </div>
      </section>

      {/* Medical Education */}
      <section className="bg-pale py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16">
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
              Medical Education
            </span>
          </div>
          <div>
            <p className="text-[18px] text-ink-2 leading-relaxed font-light mb-10">
              The growth in healthcare has created a need for educational and
              training facilities to meet the growing need of trained manpower
              to support India's healthcare growth. Advent has over the years
              been providing regular training facilities for our clients through
              partners and internal resources and are listed below:
            </p>
            <div className="flex flex-col gap-px bg-rule border border-rule">
              {educationServices.map((s) => (
                <div key={s.title} className="bg-white p-8 flex flex-col gap-3">
                  <h3 className="font-serif text-lg font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="text-[16px] text-ink-muted leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing note */}
      <section className="bg-forest py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white text-[18px] leading-relaxed font-light max-w-2xl mx-auto">
            We are continuously adding training resources to our operational services and can provide customized solutions to our clients based on their needs.
          </p>
        </div>
      </section>

      {/* Sub-page links */}
      <section className="bg-white py-16 px-6 lg:px-12 border-t border-rule">
        <div className="max-w-7xl mx-auto">
          <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase block mb-10">
            Explore more
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
            {[
              {
                title: "Delivery Model",
                desc: "How we draw in best-of-breed talent using our networked approach.",
                href: "/delivery-model",
              },
              {
                title: "Learn N Heal",
                desc: "Our modular e-learning solutions for healthcare professionals.",
                href: "/learn-heal",
              },
              {
                title: "Hyperbaric India",
                desc: "India's first hyperbaric treatment center in a private hospital.",
                href: "/hyperbaricindia",
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
