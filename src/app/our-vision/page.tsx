export default function OurVision() {
  const bullets = [
    {
      title: "Redefine Healthcare Delivery",
      desc: "In the existing healthcare delivery environment there is a great amount of mistrust between the doctor and patient, patient doctor and institutions and the dilemma of whether to get treated in the public sector or in the private sector. It is our vision to help redefine the process of healthcare delivery in an environment of trust and transparency along well-defined delivery processes.",
    },
    {
      title: "Patient Centric Strategy",
      desc: "The patient is the most important component of the entire healthcare process. They are the reason of existence of healthcare institutions and are responsible for providing the funds for the entire process.",
    },
    {
      title: "Sustainability",
      desc: "We believe that it is easy to create and the greater challenge is to be able to sustain over the years. Both in the way we function and the way we approach projects, we always have the issue of sustainability as an important consideration.",
    },
    {
      title: "Innovation",
      desc: "We believe innovation will drive the change and it is important to break out from past practices and adopt newer processes, technology to redefine healthcare delivery to move forward.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="bg-surface py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto">
          <span className="text-[14px] font-medium text-accent tracking-[0.12em] uppercase">
            Our Vision
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-forest mt-4 leading-[1.08] tracking-tighter max-w-3xl">
            A healthier India, delivered with compassion
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16">
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
              Vision
            </span>
          </div>
          <div className="space-y-5 text-[18px] text-ink-2 leading-relaxed font-light">
            <p>
              Advent aims to redefine healthcare delivery through patient
              centric strategies and innovation to create sustainability. Our
              Vision is illustrated in the triangle placed alongside. This
              incorporates the philosophy, which drives our work.
            </p>
          </div>
        </div>
      </section>

      {/* Vision pillars */}
      <section className="bg-pale py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
            {bullets.map((item, i) => (
              <div key={i} className="bg-white p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <h3 className="font-serif text-lg font-bold text-ink">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[16px] text-ink-muted leading-relaxed pl-5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
