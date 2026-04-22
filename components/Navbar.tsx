"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { useLanguage } from "@/context/LanguageContext";
import type { Locale } from "@/types/i18n";

export function Navbar() {
  const { locale, setLocale, t } = useLanguage();

  const navigationItems = [
    { href: "/#home", label: t.navbar.home },
    { href: "/#products", label: t.navbar.products },
    { href: "/#about", label: t.navbar.about },
    { href: "/#contact", label: t.navbar.contact },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleLocaleChange = (nextLocale: Locale) => {
    setLocale(nextLocale);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isMenuOpen
          ? "border-slate-200 bg-white shadow-[0_16px_36px_rgba(10,26,47,0.08)]"
          : isScrolled
            ? "border-slate-200/80 bg-[rgba(255,255,255,0.82)] shadow-[0_16px_36px_rgba(10,26,47,0.10)] backdrop-blur-xl"
            : "border-transparent bg-[rgba(255,255,255,0.96)] shadow-none"
      }`}
    >
      <div className="container-shell">
        <div
          className={`relative flex items-center justify-between gap-3 transition-all duration-300 sm:gap-6 ${
            isScrolled ? "h-[4.1rem] sm:h-[4.5rem]" : "h-[4.45rem] sm:h-20"
          }`}
        >
          <div className="flex min-w-0 max-w-[calc(100vw-5rem)] items-center pr-2 sm:max-w-none sm:pr-0">
            <Logo />
          </div>

          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 md:flex lg:gap-8"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium tracking-[0.02em] text-slate-600 transition-colors duration-200 hover:text-[#0A1A2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
              >
                {item.label}
              </Link>
            ))}

            <div
              className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1"
              aria-label={t.navbar.language}
            >
              <button
                type="button"
                onClick={() => handleLocaleChange("tr")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                  locale === "tr"
                    ? "bg-[#0A1A2F] text-white"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => handleLocaleChange("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                  locale === "en"
                    ? "bg-[#0A1A2F] text-white"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                EN
              </button>
            </div>

            <Link
              href="/#contact"
              className="inline-flex min-w-31 items-center justify-center rounded-full bg-[#0A1A2F] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(10,26,47,0.22)] transition-all duration-200 hover:bg-[#11253C] hover:text-white hover:shadow-[0_16px_34px_rgba(10,26,47,0.24),0_0_0_1px_rgba(214,178,74,0.18),0_0_24px_rgba(214,178,74,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-white active:translate-y-px"
            >
              <span className="text-white">{t.navbar.getQuote}</span>
            </Link>
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="mr-2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition-colors duration-200 hover:border-amber-300 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-white active:bg-amber-100 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "top-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 z-40 bg-white transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "pointer-events-auto top-[4.45rem] bottom-0 opacity-100"
            : "pointer-events-none top-[4.45rem] bottom-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile primary"
          className="flex h-full flex-col overflow-y-auto border-t border-slate-200 bg-white px-6 pb-8 pt-5"
        >
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-base font-medium text-slate-800 transition-colors duration-200 hover:bg-amber-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3">
            <span className="text-sm font-medium text-slate-600">
              {t.navbar.language}
            </span>

            <div className="inline-flex items-center rounded-full border border-slate-200 bg-white p-1">
              <button
                type="button"
                onClick={() => handleLocaleChange("tr")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                  locale === "tr"
                    ? "bg-[#0A1A2F] text-white"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => handleLocaleChange("en")}
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-colors duration-200 ${
                  locale === "en"
                    ? "bg-[#0A1A2F] text-white"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#0A1A2F] px-5 py-3.5 text-base font-semibold text-white shadow-[0_12px_28px_rgba(10,26,47,0.22)] transition-all duration-200 hover:bg-[#11253C] hover:shadow-[0_16px_34px_rgba(10,26,47,0.24),0_0_0_1px_rgba(214,178,74,0.18),0_0_24px_rgba(214,178,74,0.20)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px"
            >
              <span className="text-white">{t.navbar.getQuote}</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
