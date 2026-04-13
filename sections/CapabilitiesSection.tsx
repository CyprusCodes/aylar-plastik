const capabilityCards = [
  {
    title: "Custom Production",
    description:
      "Flexible manufacturing workflows adapted to product dimensions, materials, and project scope.",
  },
  {
    title: "Quality Assurance",
    description:
      "Controlled production processes designed to maintain consistency, reliability, and traceable standards.",
  },
  {
    title: "Fast Delivery",
    description:
      "Efficient planning and responsive fulfillment support dependable lead times for business operations.",
  },
];

export function CapabilitiesSection() {
  return (
    <section className="pb-16 sm:pb-20 lg:pb-24">
      <div className="container-shell">
        <div className="rounded-[2rem] border border-slate-200/80 bg-white px-6 py-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-600 uppercase">
              Why Choose Us
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
              Manufacturing capabilities built around quality, flexibility, and speed.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A concise preview of the strengths that position Aylar Plastik as a dependable industrial production partner.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {capabilityCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfcfd_100%)] p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-transform duration-200 hover:-translate-y-1"
              >
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-amber-200 bg-[linear-gradient(180deg,_#fffdf6_0%,_#fff5d6_100%)] text-slate-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-amber-700">
                    {card.title
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </span>
                </div>
                <div className="mt-6">
                  <p className="text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
                    Core Capability
                  </p>
                </div>
                <h3 className="mt-3 text-xl font-semibold text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-slate-600">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
