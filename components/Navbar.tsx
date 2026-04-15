"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const navigationItems = [
  { href: "/#home", label: "Home" },
  { href: "/#products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
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
            className="hidden items-center gap-8 md:flex lg:gap-9"
          >
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative text-sm font-medium tracking-[0.02em] text-slate-600 transition-colors duration-200 hover:text-[#0A1A2F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="inline-flex min-w-31 items-center justify-center rounded-full bg-[#0A1A2F] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(10,26,47,0.22)] transition-all duration-200 hover:bg-[#11253C] hover:text-white hover:shadow-[0_16px_34px_rgba(10,26,47,0.24),0_0_0_1px_rgba(214,178,74,0.18),0_0_24px_rgba(214,178,74,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-white active:translate-y-px"
            >
              <span className="text-white">Get Quote</span>
            </Link>
          </nav>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="mr-2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition-colors duration-200 hover:border-amber-300 hover:bg-amber-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-white active:bg-amber-100 md:hidden md:h-11 md:w-11"
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
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-base font-medium text-slate-800 transition-colors duration-200 hover:bg-amber-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full bg-[#0A1A2F] px-5 py-3.5 text-base font-semibold text-white shadow-[0_12px_28px_rgba(10,26,47,0.22)] transition-all duration-200 hover:bg-[#11253C] hover:shadow-[0_16px_34px_rgba(10,26,47,0.24),0_0_0_1px_rgba(214,178,74,0.18),0_0_24px_rgba(214,178,74,0.20)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white active:translate-y-px"
            >
              <span className="text-white">Get Quote</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}