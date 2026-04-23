type PolicySection = {
  title: string;
  body: string;
};

type PolicyLayoutProps = {
  badge: string;
  title: string;
  intro: string;
  sections: readonly PolicySection[];
  contactTitle: string;
  contactBody: string;
};

export function PolicyLayout({
  badge,
  title,
  intro,
  sections,
  contactTitle,
  contactBody,
}: PolicyLayoutProps) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="rounded-[2rem] border border-slate-200/70 bg-[radial-gradient(circle_at_top_right,_rgba(232,217,168,0.14),_transparent_26%),linear-gradient(180deg,_#ffffff_0%,_#fbfcfd_100%)] p-8 shadow-[0_20px_60px_rgba(10,26,47,0.08)] sm:p-10 lg:p-12">
          <span className="inline-flex rounded-full bg-[rgba(196,154,44,0.14)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[#0A1A2F] uppercase">
            {badge}
          </span>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0A1A2F] sm:text-4xl">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            {intro}
          </p>

          <div className="mt-8 grid gap-4">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-5 shadow-[0_10px_28px_rgba(15,23,42,0.04)] sm:px-6 sm:py-6"
              >
                <h2 className="text-lg font-semibold text-slate-950 sm:text-xl">
                  {section.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-base">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-slate-200/80 bg-[#0A1A2F] px-5 py-5 text-white shadow-[0_20px_50px_rgba(10,26,47,0.16)] sm:px-6 sm:py-6">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/70 uppercase">
              {contactTitle}
            </p>
            <p className="mt-2 text-sm leading-7 text-white/85 sm:text-base">
              {contactBody}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
