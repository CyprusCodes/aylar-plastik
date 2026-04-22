"use client";

import { useLanguage } from "@/context/LanguageContext";

export function SubscribeSection() {
  const { t } = useLanguage();

  return (
    <section className="pb-16 sm:pb-20 lg:pb-24" aria-labelledby="subscribe-title">
      <div className="container-shell">
        <div className="rounded-[2rem] border border-slate-200/80 bg-[radial-gradient(circle_at_left,_rgba(247,243,232,0.92),_transparent_24%),linear-gradient(180deg,_#ffffff_0%,_#fbfcfd_100%)] px-6 py-8 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.24em] text-[var(--accent-strong)] uppercase">
                {t.subscribe.eyebrow}
              </p>
              <h2
                id="subscribe-title"
                className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl"
              >
                {t.subscribe.title}
              </h2>
              <p className="mt-2 text-base leading-5 text-slate-600">
                {t.subscribe.description}
              </p>
            </div>

            <form action="#" className="flex w-full max-w-2xl flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="subscribe-email">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                name="email"
                placeholder={t.subscribe.emailPlaceholder}
                className="min-h-13 flex-1 rounded-full border border-slate-200 bg-white px-5 text-sm text-slate-950 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-amber-300"
              />
              <button
                type="submit"
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#0A1A2F] px-7 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(10,26,47,0.18)] transition-all duration-200 hover:bg-[#132A44] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-white active:translate-y-px"
              >
                {t.subscribe.button}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
