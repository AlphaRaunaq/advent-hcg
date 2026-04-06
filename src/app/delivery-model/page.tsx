export default function DeliveryModel() {
  const bullets = [
    "The healthcare domain is vast and requires a multifaceted approach.",
    "Advent core team discusses each project and identifies the resource requirement for the project. We then identify the resource best suited from within our network and work together to give the client a personalized solution from the best people in that domain. These resources are compensated on a project or assignment basis.",
    "Advent has developed core skills to deal with such issues and has also developed strategic relationships with domain experts who provide knowledge and resources in specific areas.",
    "Advent uses this networked approach to draw in 'best-of-breed' talent for solving client problems.",
    "Clients thus get optimized solutions that are custom-made for them. Over the past decade we have developed a core team, which defines and works with the experts in different vertical and deliver our outputs.",
  ];

  return (
    <main>
      <section className="bg-forest py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-[14px] font-medium text-accent tracking-[0.12em] uppercase">
            Delivery Model
          </span>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-white mt-4 leading-[1.08] tracking-tighter max-w-3xl">
            Advent's networked approach: domain experts
          </h1>
        </div>
      </section>

      <section className="bg-white py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[200px_1fr] gap-16">
          <div className="pt-1">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[14px] font-medium text-sage tracking-[0.12em] uppercase">
              Our approach
            </span>
          </div>
          <div>
            <ul className="space-y-4 mb-12">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-[18px] text-ink-2 leading-relaxed font-light"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-2" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="bg-pale border border-rule p-8 text-center text-[16px] text-ink-muted">
              Delivery model diagram — coming soon
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
