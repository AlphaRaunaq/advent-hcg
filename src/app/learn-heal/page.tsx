export default function LearnHeal() {
  return (
    <main>
      <section className="bg-surface py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto">
          <span className="text-[14px] font-medium text-accent tracking-[0.12em] uppercase">
            Learn N Heal
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-forest mt-4 leading-[1.08] tracking-tighter max-w-3xl">
            Learning without boundaries
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16">
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
              Who we are
            </span>
          </div>
          <div className="space-y-4 text-[18px] text-ink-2 leading-relaxed font-light">
            <p>
              learnNheal springs from Advent HealthCare Pvt ltd founded by Dr
              Tarun Sahni. We are a team of dedicated professionals who intent
              to design and enable solutions bringing you « learning without
              boundaries ».
            </p>
            <p>
              We address medical professionals willing to take an active role in
              the development of HyperBaric Oxygen Treatment, which needs to be
              deployed in India for the benefit of numerous patients suffering
              from a wide range of illnesses or pains.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-pale py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16">
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
              What we offer
            </span>
          </div>
          <div className="space-y-4 text-[18px] text-ink-2 leading-relaxed font-light">
            <p>
              Hyperbaric treatment is currently a niche area. Our offer
              represents a unique opportunity to upgrade your skills and grow
              your career, by becoming a certified Hyperbaric treatment
              practitioner.
            </p>
            <p>
              Our e-learning solutions are modular, accessible in your own time,
              at a much lower cost than traditional courses, avoiding location,
              time and cost issues linked to in-class training.
            </p>
            <p>
              Our medical team is expert from a long experience on hyperbaric
              oxygen treatment.
            </p>

            <a
              href="http://learn.hyperbaric.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-forest text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-forest-mid transition-colors"
            >
              Visit Our Site →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
