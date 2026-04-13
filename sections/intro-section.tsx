export function IntroSection() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="rounded-[2rem] border border-border bg-surface px-6 py-14 shadow-[0_24px_80px_rgba(16,33,43,0.08)] sm:px-10 lg:px-14 lg:py-20">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase">
              Industrial Website Foundation
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Scalable Next.js setup for a modern plastic manufacturing brand.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-foreground/72 sm:text-lg">
              This starter establishes the core application structure, responsive
              layout system, shared sections, and clean global styles for Aylar
              Plastik without introducing complex UI prematurely.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
