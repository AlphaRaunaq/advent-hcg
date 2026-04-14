const projects = [
  {
    id: 1,
    title: "Maharaja Agrasen Medical College",
    images: ["Picture1.png", "Picture2.png"],
    bullets: [
      "Joint venture between MAMESRS and Govt. of Haryana",
      "Advent assessed and proposed steps to transform it into a centre of medical and research excellence",
      "Prepared a Budget for the Govt of Haryana for upgradation",
      'Three-step framework: "What" (Geographic Focus, Target customers, Disease Focus, Products/Services), "How" (competitive positioning, pricing, delivery), and Organisation/HR/investment/risk analysis',
    ],
  },
  {
    id: 2,
    title: "India Entry Strategy (Kare Partners)",
    images: ["Picture3.png"],
    bullets: [
      "10 years of US experience operating 75 Surgery Centers in 20+ states",
      "Plans for primary outpatient clinics targeting 20,000 people each, integrating into secondary & tertiary care networks",
      'Creating a "Health Ecosystem" aligning medical and commercial interests of all stakeholders',
      "Invested approx. USD 25 Million into India, focusing on Tier II Cities",
    ],
  },
  {
    id: 3,
    title: "Advent Hyperbaric Service",
    images: ["Picture9.png", "Picture10.png"],
    bullets: [
      "Pioneer in diving and hyperbaric medicine, only agency in India offering complete solutions",
      "Set up first hyperbaric unit in private sector",
      "Services include: Occupational Health & Safety, Emergency Medical Services, CPR Training, Man lock Supply & Operations",
      "Equipment made in India to international standards, 24/7 coverage",
    ],
  },
  {
    id: 4,
    title: "Diving Medical Courses",
    images: ["Picture11.png", "Picture12.png"],
    bullets: [
      "Conducted in association with KBA Training Centre Pte Ltd (KBAT), Singapore",
      "KBAT is the only IMCA-approved training provider",
      "Courses include: air diving supervisor, bell diving supervisor, diving medical technician",
      "Provides IMCA-approved certification recognized worldwide",
    ],
  },
  {
    id: 5,
    title: "Kazakhstan – Fact Finding & Market Assessment",
    images: ["Picture1.1.png"],
    bullets: [
      "Retained by a potential investor to assess investment opportunity in Kazakhstan",
      "Assessment covered: high quality healthcare for high-paying individuals, multi-specialty secondary care, oil & gas sector occupational health",
      "Did NOT recommend investment due to unstable political climate",
    ],
  },
  {
    id: 6,
    title: "Vision Document – Lala Ram Sarup Institute of Tuberculosis (LRSI), New Delhi",
    images: ["Picture4.png"],
    bullets: [
      "520-bed autonomous hospital under Ministry of Health GOI, on 25 acres in central Delhi",
      "Daily 500+ outpatients, 85%+ bed occupancy",
      "Advent selected through competitive bidding to create vision document",
      "Vision document accepted by Government, being implemented with total investment of over 800 Crore",
    ],
  },
  {
    id: 7,
    title: "Max Harvard Health Care",
    images: ["Picture1.2.png"],
    bullets: [
      "Evolved a new Healthcare Delivery System integrating American values (Harvard Medical International) with Indian practice",
      "Worked closely with Harvard team, awarded certificate in Ambulatory Design and Management",
      'Evolved the "Hub and Spoke Model" of healthcare delivery',
      "Now has over 2000 beds in various locations in Northern India",
    ],
  },
  {
    id: 8,
    title: "Organizational Capacity Analysis – Dept. of Health and Family Welfare, Tamil Nadu (World Bank)",
    images: ["Picture5.png"],
    bullets: [
      "World Bank supported Health Systems Project aligned with Millennium Development Goals",
      "Advent selected through competitive bidding as consultants for assessment of GOTN healthcare delivery system",
      "Objective: assess organizational capacity of DOHFW Tamil Nadu in a participatory manner",
    ],
  },
  {
    id: 9,
    title: "Tata Tea Limited (TTL) Hospital, Chubwa Assam",
    images: ["Picture6.png"],
    bullets: [
      'TTL wanted to identify partners to manage healthcare services on its behalf',
      'Advent created a unique hybrid "managed healthcare delivery model" through partnerships',
      "Project involved legal due diligence, market assessment, infrastructure, manpower, equipment planning, financial projections and tripartite agreement",
    ],
  },
  {
    id: 10,
    title: "Bhimrao Ambedkar Multi-Specialty Hospital, Noida",
    images: ["Picture1.3.jpg"],
    bullets: [
      "300-bed multi-specialty government hospital (225 general ward + 75 semi-private/suite)",
      "Total Land Area: 10 Acres",
      "Projected Budget Cost: 513 Cr (including equipment)",
    ],
  },
  {
    id: 11,
    title: "Super-Specialty Hospital, Greater Noida",
    images: ["Picture1.4.jpg"],
    bullets: [
      "500-bed multi-specialty government hospital",
      "GNIDA vision: state-of-the-art facility for treatment, research and training",
      "Total Land Area: 15 Acres",
      "Projected Budget Cost: 738 Cr (including equipment)",
    ],
  },
  {
    id: 12,
    title: "PIMS – Punjab (Strategic Advisors & Partnership on PPP)",
    images: ["Picture1.5.jpg"],
    bullets: [
      "500-bed proposed hospital with teaching facility for 100 students in Jalandhar",
      "Punjab government invited private sector participation via PPP model",
      "Advent conducted assessment on behalf of MAX Healthcare covering: Regulatory & Legal Framework, Infrastructure, Demand & Supply",
      "Created EOI with all supporting eligibility papers",
    ],
  },
  {
    id: 13,
    title: "MAX Healthcare (Strategic Advisors)",
    images: ["Resized-1EF2Z.jpg"],
    bullets: [
      "Objective: evolve a complete healthcare delivery system and plan a super specialty hospital",
      "Advent selected as principal consultants to develop complete business model",
      "Carried out extensive market assessment, identified need gaps in healthcare delivery",
      "MAX Healthcare is now India's leading healthcare provider with Advent as key strategic partner",
    ],
  },
  {
    id: 14,
    title: "LRSI – New Delhi (Vision Document)",
    images: ["Picture1.6.png", "Picture1.8.png"],
    bullets: [
      "520-bed autonomous institute under Ministry of Health for TB and respiratory diseases",
      "Advent selected after competitive bidding for creating the vision document",
      "Carried out SWOT analysis, understood future trends in respiratory medicine",
      "Vision document focused on teaching, training, research and reinforcing existing services",
      "LRSI is currently implementing the solutions",
    ],
  },
];

export default function ProjectShowcase() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-surface py-20 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto">
          <span className="text-[11px] font-medium text-accent tracking-[0.12em] uppercase">
            Project Showcase
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-forest mt-4 leading-[1.08] tracking-tighter max-w-3xl">
            Our work across India and the world
          </h1>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col gap-0">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`grid lg:grid-cols-[1fr_2fr] gap-12 py-14 border-b border-rule last:border-b-0 ${i % 2 === 0 ? "bg-white" : "bg-pale"} -mx-6 lg:-mx-12 px-6 lg:px-12`}
            >
              {/* Images */}
              <div className="flex flex-col gap-4">
                {project.images.map((img) => (
                  <div
                    key={img}
                    className="bg-pale border border-rule aspect-video flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={`/projects/${img}`}
                      alt={project.title}
                      className="w-full h-full object-contain p-4"
                    //   onError={(e) => {
                    //     (e.target as HTMLImageElement).style.display = "none";
                    //   }}
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6 justify-center">
                <div className="flex items-center gap-3">
                  <span className="font-serif text-sm text-mint font-bold">
                    {String(project.id).padStart(2, "0")}
                  </span>
                  <div className="w-8 h-0.5 bg-rule" />
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-ink leading-snug tracking-tight">
                  {project.title}
                </h2>
                <ul className="space-y-3">
                  {project.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-[14px] text-ink-muted leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}