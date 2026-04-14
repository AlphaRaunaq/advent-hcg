const sections = [
  {
    title: "Team",
    bullets: [
      "Core team & associates who are vastly experienced in working with organizations to address their challenges, both on strategic and operational lines, across public and private sectors.",
      "Integration of deep domain and business experience and skills to understand the real challenges of healthcare service providers and develop patient-centric approaches.",
    ],
  },
  {
    title: "Experience",
    bullets: [
      "Track record of not only advising healthcare providers, but also implementing the strategies.",
      'Ability to "simplify" complex situations.',
      "Working with customers to create sustainable, customized commercial and remuneration models linked with execution.",
    ],
  },
  {
    title: "Innovation",
    bullets: [
      'Advent team can take credit for popularizing terms such as "hub and spoke model", "health ecosystems" and "partnerships between private and public (PPP)".',
      "Occupational health in compressed air works , hyperbaric treatment centers and elearning are emerging areas of innovation.",
    ],
  },
];

export default function ValueProposition() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-surface py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto">
          <span className="text-[14px] font-medium text-accent tracking-[0.12em] uppercase">
            Value Proposition
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-forest mt-4 leading-[1.08] tracking-tighter max-w-3xl">
            What makes Advent different
          </h1>
        </div>
      </section>

      {/* Sections */}
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-0">
          {sections.map((section, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-[200px_1fr] gap-16 py-14 border-b border-rule last:border-b-0"
            >
              <div className="pt-1">
                <div className="w-10 h-0.5 bg-accent mb-4" />
                <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
                  {section.title}
                </span>
              </div>
              <ul className="space-y-4">
                {section.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-[18px] text-ink-2 leading-relaxed font-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
