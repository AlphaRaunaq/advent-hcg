const clients = [
  "DMRC",
  "Sankara Eye Foundation",
  "Hyperbaric India",
  "Unique Systems",
  "AHREF",
];

export default function Clients() {
  return (
    <section className="bg-pale border-y border-rule">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">

        <div className="flex flex-col lg:flex-row lg:items-center gap-10">
          <div className="shrink-0">
            <div className="w-10 h-0.5 bg-accent mb-4" />
            <span className="text-[11px] font-medium text-sage tracking-[0.12em] uppercase block mb-1">
              Our Prestigious Clients
            </span>
            <p className="text-[13px] text-ink-muted max-w-[180px] leading-relaxed">
              Trusted by leading organisations across India and worldwide
            </p>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-rule">
            {clients.map((name) => (
              <div
                key={name}
                className="bg-white px-6 py-5 flex items-center justify-center"
              >
                <span className="text-sm font-medium text-ink-muted text-center leading-snug">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
