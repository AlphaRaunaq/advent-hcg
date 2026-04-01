const achievements = [
  "More than 1000 number of patients treated.",
  "Numerous publications in national & International journals.",
  "Entry in the Limca Book of records as the first hyperbaric treatment centre.",
  "Provided medical support to compressed air workers who are working on the Delhi Metro projects (2002 & 2009)",
  "Became first Indian hyperbaric center to be a part of multicentric international trial with Monash University Australia.",
  "Established linkage with KBAT Institute in Singapore to conduct diving medical courses for professional divers in Delhi.",
];

export default function HyperbaricIndia() {
  return (
    <main>
      <section className="bg-forest py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-medium text-accent tracking-[0.12em] uppercase">
            Hyperbaric India
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mt-4 leading-[1.08] tracking-tighter max-w-3xl">
            Our experience in hyperbaric oxygen therapy
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16">
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[11px] font-medium text-sage tracking-[0.12em] uppercase">
              Our experience
            </span>
          </div>
          <div className="space-y-4 text-[15px] text-ink-2 leading-relaxed font-light">
            <p>Hyperbaric Oxygen Therapy is an internationally established treatment modality with well defined "evidence based" indications, which can significantly reduce patient's morbidity and mortality and reduce overall cost of medical treatment. It is rapidly growing worldwide because of the benefits to patients, doctors, institutions and financial outcomes.</p>
            <p>Apollo Hospital Delhi took the lead by establishing the first hyperbaric treatment center in the private sector in May 2000. This center is the first Hyperbaric Center in a private hospital and with the growing opportunity to expand this service; it has been set up in Apollo Hospital, Ahmadabad.</p>
            <p>We have a wide multi-specialty patient base and additional patients from outside the institution. It has provided an adjunctive treatment option for better outcomes in difficult cases for existing patients within the hospital.</p>
            <p>Our center gives the institution great recognition and prominence nationally and internationally joining the elite group of modern hospitals with this service. The number of patients has been progressively growing confirming its professional and financial acceptability and viability.</p>
            
              <a href="http://hyperbaricindia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-forest text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-forest-mid transition-colors"
            >
              Visit Our Site →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-pale py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16">
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[11px] font-medium text-sage tracking-[0.12em] uppercase">
              Key achievements
            </span>
          </div>
          <ul className="space-y-4">
            {achievements.map((a, i) => (
              <li key={i} className="flex gap-3 text-[15px] text-ink-2 leading-relaxed font-light">
                <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

