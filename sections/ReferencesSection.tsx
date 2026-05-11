"use client";

import Image from "next/image";
import { withBasePath } from "@/lib/base-path";
import { useLanguage } from "@/context/LanguageContext";

type ReferenceLogo = {
  src: string;
  alt: string;
};

const referenceLogos: ReferenceLogo[] = [
  { src: withBasePath("/references/r01.jpg"), alt: "Reference logo 1" },
  { src: withBasePath("/references/r02.png"), alt: "Reference logo 2" },
  { src: withBasePath("/references/r03.jpg"), alt: "Reference logo 3" },
  { src: withBasePath("/references/r04.jpg"), alt: "Reference logo 4" },
  { src: withBasePath("/references/r05.jpg"), alt: "Reference logo 5" },
  { src: withBasePath("/references/r06.jpg"), alt: "Reference logo 6" },
  { src: withBasePath("/references/r07.jpg"), alt: "Refeence logo 7" },
  { src: withBasePath("/references/r08.jpg"), alt: "Reference logo 8" },
  { src: withBasePath("/references/r09.jpg"), alt: "Reference logo 9" },
  { src: withBasePath("/references/r10.jpg"), alt: "Reference logo 10" },
  { src: withBasePath("/references/r11.png"), alt: "Reference logo 11" },
  { src: withBasePath("/references/r12.jpg"), alt: "Reference logo 12" },
  { src: withBasePath("/references/r13.jpg"), alt: "Reference logo 13" },
  { src: withBasePath("/references/r14.png"), alt: "Reference logo 14" },
  { src: withBasePath("/references/r15.jpg"), alt: "Reference logo 15" },
  { src: withBasePath("/references/r16.jpg"), alt: "Reference logo 16" },
];

export function ReferencesSection() {
  const { t } = useLanguage();

  return (
    <section className="pb-12 sm:pb-14 lg:pb-16" aria-labelledby="references-title">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white px-5 py-7 shadow-[0_18px_46px_rgba(15,23,42,0.05)] sm:px-7 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              {t.references.eyebrow}
            </p>

            <h2
              id="references-title"
              className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl"
            >
              {t.references.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
              {t.references.description}
            </p>
          </div>

          <div className="mt-7">
            <LogoRow logos={referenceLogos} />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoRow({ logos }: { logos: ReferenceLogo[] }) {
  const repeatedLogos = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />

      <div className="flex w-max gap-4 animate-reference-scroll-right">
        {repeatedLogos.map((logo, index) => (
          <div
  key={`${logo.src}-${index}`}
 className="flex h-28 w-44 shrink-0 items-center justify-center rounded-[1.25rem] border border-slate-200/80 bg-white px-5 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_38px_rgba(15,23,42,0.08)]">
  <div className="relative h-24 w-full">
    <Image
      src={logo.src}
      alt={logo.alt}
      fill
      sizes="260px"
      className="object-contain transition-all duration-300"
    />
  </div>
</div>
        ))}
      </div>
    </div>
  );
}
