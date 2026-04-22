"use client";

import { useLanguage } from "@/context/LanguageContext";

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="scroll-mt-28 pb-16 sm:pb-20 lg:pb-24"
      aria-labelledby="contact-title"
    >
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-[#0A1A2F] px-6 py-10 text-white shadow-[0_24px_60px_rgba(10,26,47,0.18)] sm:px-8 sm:py-12">
            <p className="text-xs font-semibold tracking-[0.24em] text-amber-300 uppercase">
              {t.contact.eyebrow}
            </p>
            <h2
              id="contact-title"
              className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
            >
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/70">
              {t.contact.description}
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs tracking-[0.18em] text-white/70 uppercase">
                  {t.contact.email}
                </p>
                <p className="mt-2 text-lg font-semibold">info@aylarplastik.com</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.18em] text-white/70 uppercase">
                  {t.contact.phone}
                </p>
                <p className="mt-2 text-lg font-semibold">+90 (392) 364 8666</p>
                <p className="mt-2 text-lg font-semibold">+90 (533) 848 9500</p>
              </div>
              <div>
                <p className="text-xs tracking-[0.18em] text-white/70 uppercase">
                  {t.contact.address}
                </p>
                <p className="mt-2 text-lg font-semibold">
                  Hasan Güvenir Caddesi, Büyük Sanayi Bölgesi, Tuzla/Gazimağusa
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(247,243,232,0.92),_transparent_22%),linear-gradient(180deg,_#ffffff_0%,_#fbfcfd_100%)] px-6 py-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12">
            <form className="grid gap-5" action="#">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-800">
                    {t.contact.form.name}
                  </span>
                  <input
                    type="text"
                    name="name"
                    className="min-h-13 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-amber-300"
                    placeholder={t.contact.form.placeholders.name}
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-800">
                    {t.contact.form.company}
                  </span>
                  <input
                    type="text"
                    name="company"
                    className="min-h-13 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-amber-300"
                    placeholder={t.contact.form.placeholders.company}
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-800">
                    {t.contact.form.email}
                  </span>
                  <input
                    type="email"
                    name="email"
                    className="min-h-13 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-amber-300"
                    placeholder={t.contact.form.placeholders.email}
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-800">
                    {t.contact.form.phone}
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    className="min-h-13 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-slate-950 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-amber-300"
                    placeholder={t.contact.form.placeholders.phone}
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-medium text-slate-800">
                  {t.contact.form.projectDetails}
                </span>
                <textarea
                  name="message"
                  rows={6}
                  className="rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-950 outline-none transition-colors duration-200 placeholder:text-slate-400 focus:border-amber-300"
                  placeholder={t.contact.form.placeholders.message}
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#0A1A2F] px-7 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(10,26,47,0.18)] transition-all duration-200 hover:bg-[#132A44] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-white active:translate-y-px"
                >
                  {t.contact.form.submit}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
