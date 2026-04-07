"use client";

import Image from "next/image";
import { useRef } from "react";

const coreTeam = [
  {
    name: "Dr. Tarun Sahni",
    role: "Healthcare Strategy Operations",
    photo: "dr-tarun-sahni.jpg",
    bullets: [
      "Dr.Tarun Sahni graduated from the Armed Forces Medical College and over the past over 25 years his growth and experience has been along two verticals: On one side clinical practice and the other side healthcare strategy consulting and operational management with exposure in India, UK and the middle East.",
      "He has a postgraduate degree in Internal Medicine and Hyperbaric medicine form UK and India. He has an Ambulatory Care Management (Harvard) and Basic & Middle Management course in Armed Forces.",
      'He is known as the "father of modern hyperbaric medicine in India" and has over 25 publications and chapters in books. He is a recognized teacher for postgraduate studies in internal and hyperbaric medicine. He was presented the title of "Adjunct Professor" for his contribution in academics.',
      "He is currently engaged in active practice in Internal Medicine and all three areas of hyperbaric medicine – clinical hyperbaric oxygen, diving medicine and compressed air works.",
      "He is the founder and Chief Executive of Advent Healthcare and has completed successfully many complex projects in healthcare consulting.",
      "He is experienced in working with organizations to address their challenges, both on strategic and operational lines, across public and private sectors.",
      "He has a track record of not only advising healthcare providers, but also implementing the strategies. He is experienced in building Greenfield business and adding significant value to the proposition.",
      "He possesses proven leadership qualities of managing delivery of complex assignment with large teams across multiple locations.",
      "He has exceptional communication and conflict resolution capabilities especially in adverse environments. His ability to understand the real challenges of healthcare service providers helps in design of patient-centric approaches while protecting interests of stakeholders",
      "He has a pleasant personality, an ability to develop good interpersonal relationships and reliable as a team player.",
      "He is a keen sportsperson having played squash at a national level and is a certified Level II squash coach. He continues to work in sports sciences and also operates a squash-training academy.",
      "Dr. Tarun Sahni is now exploring opportunities where one can implement the knowledge and experience to bring in innovativeness in the healthcare delivery system.",
    ],
  },
  {
    name: "Somnath Chakravorty",
    role: "Healthcare Operations",
    photo: "somnath-chakravorty.jpg",
    bullets: [
      "Over 25 years of expertise in Healthcare Projects and Operation, Healthcare Fund (Investment & Value Creation) Management and Pharmaceutical selling.",
      "BSc(Kolkata). Ambulatory Care Design & Management Program (Harvard). Special training : Service Excellence (Harvard);Behavior Based Interviewing (Global Mumbai, India);Managing a Small Hospital (Apollo& FICCI);",
      "He has been responsible for strategic planning, partnerships and alliances, technology development and expansion in a range of organizations from planning to operations.His expertise and interest lie in start-ups as he enormously enjoys the process of ideating and then seeing the project getting transformed into a reality.",
      "Previously he has been founding GM – Strategy & Planning of Max Healthcare, COO of Artemis Health Institute, Director- I-Ven Medicare and CEO of Modi Hospital. He has also worked as an observer in Harvard Medical College Hospitals in Boston to understand workflow process, HIS system and Operating Principals.",
    ],
  },
  {
    name: "Dr. Sangram Pundir",
    role: "Hyperbaric Consultant",
    photo: "dr-sangram-pundir.jpg",
    bullets: [
      "Consultant in Psychiatry, Marine & Hyperbaric Medicine Private Practice: 2013 – present: Pune.",
      "Assistant Professor in Psychiatry, Classified Specialist in Marine Medicine, Institute of Naval Medicine, INHS Asvini, Indian Navy Jul2008 – Jul 2013.",
      "Study Leave in Psychiatry at Armed Forces Medical College: 2005-2008.",
      "Classified Specialist in Marine Medicine, Indian Navy (Instructor, Submarine School, INS Satavahana, Vizag) 2003-2005.",
      "Graded Specialist in Marine Medicine, Indian Navy (Squadron Medical Officer, Squadron Diving Officer )1996 – 2002.",
      "Submarine Medical Officer, Indian Navy1990 – 1995.",
      "MD (Psychiatry) 2008 Armed Forces Medical College, Pune.",
      "Diploma in Marine Medicine, 1996. Institute of Naval Medicine, INHS Asvini, Mumbai 3. MBBS 1988. Armed Forces Medical College, Pune.",
      "Pre-hospital Emergency Medicare 2. Telemedicine.",
      "Sleep Disorders-Circadian rhythm and shift work disorders 4. Depression and anxiety in coronary artery disease.",
      "Psychiatric morbidity in primary and secondary care 6. Neuropsychological Assessment.",
      "Indian Navy Submarine School, Vishakhapatnam: Submarine Course, 1990 2. Indian Navy Diving School, Kochi: Ship's Diving Officer Course, 1995.",
      "Marine Medical Society of India (Secretary 2008-2011).",
      "MD (Psychiatry Thesis-Pune University) Study of the prevalence of depression in patients of coronary artery disease among uniformed personnel and their response to treatment.",
      "AFMRC Project 3780/2008 : A study of psychiatric morbidity in patients presenting to primary and secondary care.",
      "AFMRC Project no: 3948/2009 :Perchance to dream or to keep submariners fighting fit: study of the effects on submariner's sleep, alertness and cognitive performance of a conventional 3 hrs on/6 hrs off watch schedule (18 hr sleep-wake cycle) compared to a 4 hrs on/ 8 hrs off watch schedule based on circadian biorhythm 24 hrs sleep-wake cycle.",
    ],
  },
  {
    name: "Dr. Puneet Singh",
    role: "Healthcare Operations",
    photo: "dr-puneet-singh.jpg",
    bullets: [
      "Over 25 Years of experience in the healthcare arena both in the Indian Navy Medical Services and post retirement",
      "MD.DAM. Basic, Middle and Senior medical management course in the defense services.",
      "He has a wholesome overview on a wide range of positions in the Navy – strategic, advisory & operational",
      "After leaving the Navy he has worked with Advent on projects such as the Siliguri Hospital , Agroha Medical College and current works actively with an NGO in Uttarakhand",
      "He works with Advent in managing the hyperbaric services and managing day to day operations in Advent",
    ],
  },
  {
    name: "Dr. Niti Kukreja",
    role: "Healthcare Analyst (Business)",
    photo: "dr-niti-kukreja.jpg",
    bullets: [
      "Dr Niti Kukreja Business Analyst (Healthcare)",
      "She is a qualified Dentist and a Post Graduate in Public Health.",
      "Has been involved in market analysis, data validation and Interpretation of various research findings in Healthcare provider segment.",
      "Has a skill set of developing market strategy for existing & new business verticals",
      "An active member of project execution monitoring team.",
      "Demonstrate ability to identify marketplace opportunities and achieve revenue growth, as a business development analyst in professional services environment.",
    ],
  },
  {
    name: "Sapna Verma",
    role: "Sr. Research Associate",
    photo: "sapna-verma.jpg",
    bullets: [
      "She has a graduation in biotechnology and is a post graduate in Clinical Research",
      "Has been actively involved as a research coordinator in Clinical Trials conducted at Indraprastha Apollo Hospital and various research activities in the hyperbaric department.",
      "Working with academic members of the project team in order to deliver project outcomes.",
      "Responsible for writing up research papers and presenting research findings to senior managers and also at academic meetings.",
    ],
  },
  {
    name: "Shweta Gupta",
    role: "Clinical Research Manager",
    photo: "shweta-gupta.jpg",
    bullets: [
      "Dr Shweta Gupta (PT) is a certified physiotherapist and a diploma in Clinical Research and has been actively involved as a research coordinator in Clinical Trials conducted at Indraprastha Apollo Hospital and other research activities in the hyperbaric department.",
      "She has an excellent understanding of hyperbaric Medicine and has many presentations and publications to her credit.",
      "She has developed various proformas, evaluation forms, treatment protocols for patients undergoing hyperbaric therapy.",
      "She is presently working on development of online training programs in hyperbaric medicine.",
    ],
  },
  {
    name: "Vimlesh Tiwari",
    role: "Accountant",
    bullets: ["Description coming soon."],
  },
];

const advisoryTeam = [
  {
    name: "Sharon Kleefield",
    role: "Consultant Medical Quality",
    photo: "sharon-kleefield.png",
    bullets: [
      "Sharon is currently on the faculty of Harvard Medical School (HMS). She has earlier been Director of Care Improvement at the Brigham and Women's Hospital, a 720-bed Harvard affiliated teaching hospital in Boston, Massachusetts.",
      "Dr. Kleefield has extensive experience in the design and implementation of quality management programs for hospitals including major Indian Hospitals and health care systems. She held positions in professional staff development and quality management, as well as several teaching positions at Harvard University. She was also a faculty member at the Harvard Business School.",
      "Dr. Kleefield became Chair of the Quality Council for the Dubai Health Care City and is a visiting professor at the University of Nice Medical School, in France, since 2005.",
      "She will be added to the team as the project progresses and will help create customized global standards.",
    ],
  },
  {
    name: "Lalit Mawken",
    role: "Operations & Medical Equipment",
    photo: "lalit-mawken.jpg",
    bullets: [
      "34 Years with healthcare sector,15 Years with USMNC's—GE Medical , Becton Dickinson(BD-USA);6Year with healthcare Delivery majors—FORTIS Healthcare, Max healthcare;6 years with Ranbaxy and Bharti Healthcare, 7 Years as a Medical equipment Consultant and teacher at Jamia Hamdard University",
      "BSc (H) Physics; MSc(H) Physics",
      "A well rounded professional manager, with experience in various facets of Industry, sales and Marketing, Business Development, Strategy Planning and Supply Chain management.",
      "A Management Teacher teaching MBA students- Business Communication, Marketing, Supply Chain Management, Entrepreneurship.",
      "Has worked on ten Hreenfield Hospital projects in India from planning till procurement of all medical technologies .",
      "Has conducted 40 day long workshops on Supply C hain Mamagement for lose iof managers from leading Imdian houses and MNc,s.",
      "A visiting Professor with Jamia Hamdard Unibersity teaching MBA. Healthcare and MBA Pharmaceutical students and doing Medical equipment consultancy for. Green field project hospitals .",
    ],
  },
  {
    name: "Rakesh Chhabra",
    role: "Finance Accounts Advisor",
    photo: "rakesh-chhabra.jpg",
    bullets: [
      "Rakesh Chhabra was enrolled as a member of the Institute of Chartered Accountants of India in 1985, and is associated with the firm since then. He has an experience of 27 years in Company law matters, Accounting, taxation, audits specifically Internal Audit, System Audit, Internal Controls including review of controls in an ERP environment, Administration of Trusts and reviewing and advising on the Investment portfolios of Trusts, payroll accounting, Foreign Exchange Management, Management Consultancy, Due Diligence, Project Appraisals and other related areas.",
      "He carries wide experience of setting up appropriate control system and development of Management Information System and advising the Management on Control Areas and has wide experience of converting the sick Companies into profitable ones.",
    ],
  },
  {
    name: "Rang Emei",
    role: "Healthcare Architecture",
    photo: "rang-emei.jpg",
    bullets: [
      "Rang Emei has focused his professional career around healthcare facility design and has been a member of core design teams, as principal design architect, in the planning & design of over 60 healthcare facility projects spread across India, Nepal, Bhutan, Bangladesh, Sri Lanka, West Africa & the Middle East. His healthcare design experience range from single-speciality daycare health centers to complex, large-scale multi-speciality tertiary-care hospitals.",
      "During the past 15 years, Emei has worked alongside some of the most well-respected international healthcare design teams on some major hospital projects in India, Bangladesh & the Middle-East.",
      "Emei graduated in architecture from the School of Architecture & Planning (Anna University, Madras). He holds a Master's degree in Urban Design from the School of Planning and Architecture, New Delhi. He is registered with the Council of Architecture, India. He Leads the healthcare design division of helix The division provides full-service facility planning and architectural design consultancy services for various types of healthcare facility projects.",
    ],
  },
];

function TeamMember({ member }: { member: (typeof coreTeam)[0] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasPhoto = member.photo !== undefined;

  return (
    <div ref={sectionRef} className="relative">
      {/* Sticky Header - Image with Name & Role */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Full-screen background image or placeholder */}
        <div className="absolute inset-0">
          {hasPhoto ? (
            <>
              <Image
                src={`/team/${member.photo}`}
                alt={member.name}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient for readability - lighter for brighter image */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white" />
            </>
          ) : (
            /* Placeholder background for members without photos */
            <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest-mid to-white" />
          )}
        </div>

        {/* Name & Role - centered on image */}
        <div className="relative z-10 text-center px-6">
          {!hasPhoto && (
            <div className="w-32 h-32 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
              <span className="font-serif text-4xl font-bold text-white">
                {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </span>
            </div>
          )}
          <h3 className="font-serif text-4xl lg:text-6xl font-bold text-white mb-3 drop-shadow-lg">
            {member.name}
          </h3>
          <p className="text-lg lg:text-xl text-white/90 font-medium drop-shadow-md">
            {member.role}
          </p>
        </div>
      </div>

      {/* Scrollable Bullet Points */}
      <div className="relative bg-white -mt-32 lg:-mt-48 z-20 rounded-t-3xl px-0 lg:px-12 py-12 lg:py-20">
        {/* Mobile: Boxed bullets */}
        <div className="max-w-4xl mx-auto px-6 lg:hidden">
          <ul className="space-y-6">
            {member.bullets.map((bullet, i) => (
              <li
                key={i}
                className="p-6 border border-rule rounded-lg bg-white hover:border-forest/50 transition-colors"
              >
                <p className="text-[16px] text-ink-2 leading-relaxed">
                  {bullet}
                </p>
              </li>
            ))}
          </ul>
        </div>
        {/* Desktop: Original bullet style */}
        <div className="hidden lg:block max-w-4xl mx-auto px-6 lg:px-0">
          <ul className="space-y-12 lg:space-y-16">
            {member.bullets.map((bullet, i) => (
              <li
                key={i}
                className="flex gap-4 text-[18px] text-ink-2 leading-relaxed"
              >
                <span className="w-2 h-2 rounded-full bg-forest flex-shrink-0 mt-2.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-forest py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[14px] font-medium text-accent tracking-[0.12em] uppercase">
            Advent Team
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mt-4 leading-[1.08] tracking-tighter max-w-3xl">
            A team committed to transforming healthcare
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-pale py-16 px-6 lg:px-12 border-b border-rule">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16">
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
              Our people
            </span>
          </div>
          <div className="space-y-4 text-[18px] text-ink-2 leading-relaxed font-light">
            <p>
              Our core team comprises experts from the domain of healthcare as
              well as domain experts from the realms of general management,
              business process re-engineering and information technology. All
              have global experience and have been involved in pioneering work
              across healthcare delivery services, hospital administration, and
              healthcare technology implementations.
            </p>
            <p>
              We have worked with state governments, international
              organizations, private health providers, public health
              organizations, hospitals and a range of clients in the public and
              private sector, national and international.
            </p>
            <p>
              Advent team can take credit for terms such as{" "}
              <strong className="font-medium text-forest">
                "hub and spoke model"
              </strong>
              ,{" "}
              <strong className="font-medium text-forest">
                "health ecosystems"
              </strong>{" "}
              and{" "}
              <strong className="font-medium text-forest">
                "partnerships between private and public (PPP)"
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="bg-white py-20 px-0 lg:px-12">
        <div className="px-6 lg:px-0 max-w-7xl lg:mx-auto">
          <div className="w-10 h-0.5 bg-accent mb-4" />
          <h2 className="font-serif text-3xl font-bold text-ink tracking-tight mb-12">
            Core Team
          </h2>
        </div>
        <div className="flex flex-col max-w-7xl lg:mx-auto">
          {coreTeam.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </section>

      {/* Advisory Team */}
      <section className="bg-pale py-20 px-0 lg:px-12 border-t border-rule">
        <div className="px-6 lg:px-0 max-w-7xl lg:mx-auto">
          <div className="w-10 h-0.5 bg-accent mb-4" />
          <h2 className="font-serif text-3xl font-bold text-ink tracking-tight mb-4">
            Advisory Team
          </h2>
          <p className="text-[18px] text-ink-muted leading-relaxed font-light max-w-3xl mb-12">
            Advisory Team provides a 'Third-Eye' view to various
            projects/assignments with their in-depth domain expertise. Our
            Advisory team comprises experts from the various domains of
            healthcare in the fields of Medical Quality, Medical Equipment,
            Healthcare Finance and Healthcare Space/Facility Design.
          </p>
        </div>
        <div className="flex flex-col max-w-7xl lg:mx-auto">
          {advisoryTeam.map((member) => (
            <TeamMember key={member.name} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
