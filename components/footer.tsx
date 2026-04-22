"use client";

import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/base-path";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-[#0A1A2F] text-white">
      <div className="container-shell py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)_minmax(0,0.9fr)_minmax(0,0.7fr)]">
          <div className="space-y-5">
            <Link
              href="/#home"
              className="inline-flex items-center text-white transition-opacity duration-200 hover:opacity-90"
              aria-label="Aylar Plastik homepage"
            >
              <div className="relative h-[5rem] w-[7.25rem] shrink-0">
                <Image
                  src={withBasePath("/logo.webp")}
                  alt="Aylar Plastik Logo"
                  fill
                  sizes="116px"
                  className="object-contain"
                />
              </div>

              <div className="min-w-0 -ml-1.5 leading-tight">
                <span className="block text-[0.95rem] font-semibold tracking-[0.08em] uppercase text-white">
                  Aylar Plastik
                </span>
                <span className="mt-0.5 block text-[10px] tracking-[0.14em] text-white/70 uppercase">
                  {t.footer.tagline}
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-7 text-white/70">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.08em] text-white uppercase">
              {t.footer.navigationTitle}
            </h2>
            <nav aria-label="Footer" className="mt-5 grid gap-3 text-sm text-white/70">
              {t.footer.navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.08em] text-white uppercase">
              {t.footer.contactTitle}
            </h2>
            <div className="mt-5 space-y-4 text-sm text-white/70">
              <p>info@aylarplastik.com</p>
              <p>+90 (392) 364 8666</p>
              <p>+90 (533) 848 9500</p>
              <p>Hasan Güvenir Caddesi, Büyük Sanayi Bölgesi, Tuzla/Gazimağusa</p>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-[0.08em] text-white uppercase">
              {t.footer.connectTitle}
            </h2>
            <div className="mt-5 grid gap-3 text-sm text-white/70">
              {t.footer.socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/70">
          {t.footer.copyright}
        </div>
      </div>
    </footer>
  );
}
