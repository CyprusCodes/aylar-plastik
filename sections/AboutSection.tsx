import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

const compactHighlights = [
  "Founded in 1978",
  "Custom programs",
  "Quality control",
];

const supportingCards = [
  {
    title: "Our History",
    description:
      "Decades of manufacturing experience built around consistency, adaptability, and dependable service.",
  },
  {
    title: "Our Team",
    description:
      "Experienced professionals committed to practical production knowledge, responsive service, and dependable customer support.",
  },
  {
    title: "Our Products",
    description:
      "Plastic packaging, printed bags, and industrial production solutions tailored to different operational needs.",
    wide: true,
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 pb-14 sm:pb-16"
      aria-labelledby="about-title"
    >
      <div className="container-shell">
        <div className="rounded-[2rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top_right,_rgba(232,217,168,0.14),_transparent_26%),linear-gradient(180deg,_#ffffff_0%,_#fbfcfd_100%)] px-6 py-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-8 sm:py-8 lg:px-10">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                About Aylar Plastik
              </p>

              <h2
                id="about-title"
                className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-[3rem] lg:leading-[1.05]"
              >
                A modern plastic manufacturing and packaging partner focused on quality,
                flexibility, and reliable delivery.
              </h2>

              <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-7 text-slate-600 sm:text-base">
                <p>
                  Founded with a strong focus on practical manufacturing
                  discipline, Aylar Plastik delivers custom plastic packaging
                  solutions tailored to real business needs. Our approach
                  combines controlled production processes, flexible planning,
                  and consistent output quality.
                </p>
                <p>
                  We support a wide range of industries with scalable
                  solutions, including printed plastic bags, industrial
                  packaging, and custom production programs designed for
                  long-term operational reliability. Our agricultural
                  venture pioneered north of Cyprus to adapt to modern
                  needs in agriculture with our drip irrigation systems
                  and modern irrigation solutions.
                </p>
                <p>
                  After almost 50 years in the industry we are determined
                  to serve our customers with determination and loyalty to our values.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_58px_rgba(15,23,42,0.08)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={withBasePath("/images/07.webp")}
                    alt="Modern industrial plastic manufacturing facility"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,47,0.03)_0%,rgba(10,26,47,0.12)_100%)]" />
                </div>
              </div>

              <div className="grid gap-1 md:grid-cols-2">
                {supportingCards.map((card) => (
                  <article
                    key={card.title}
                    className={`rounded-[1.25rem] border border-slate-200 bg-white px-4 py-4 shadow-[0_12px_28px_rgba(15,23,42,0.04)] ${
                      card.wide ? "md:col-span-2" : ""
                    }`}
                  >
                    <span className="block h-px w-8 bg-[linear-gradient(90deg,_rgba(214,178,74,0.78),_rgba(232,217,168,0.08))]" />

                    <h3 className="mt-3 text-lg font-semibold text-slate-950">
                      {card.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>

             <div className="grid gap-2.5 sm:grid-cols-3">
  {compactHighlights.map((highlight) => (
    <div
      key={highlight}
      className="flex min-h-9 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.03)]"
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
      <span className="truncate">{highlight}</span>
    </div>
  ))}
</div>
            </div>
          </div>

          <div className="mt-4 rounded-[1.7rem] border border-slate-200/80 bg-[#0A1A2F] px-5 py-4 text-white shadow-[0_24px_60px_rgba(10,26,47,0.18)] sm:px-6">
            <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
              <p className="text-sm font-semibold leading-6 text-white/92">
                Quality-led production management
              </p>
              <p className="text-sm font-semibold leading-6 text-white/92">
                Custom and repeat manufacturing programs
              </p>
              <p className="text-sm font-semibold leading-6 text-white/92">
                Responsive support from inquiry to delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
