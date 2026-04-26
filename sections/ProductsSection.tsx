"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { withBasePath } from "@/lib/base-path";
import { useLanguage } from "@/context/LanguageContext";

type ProductCard = {
  label: string;
  title: string;
  description: string;
  items: readonly string[];
  images: string[];
};

function ProductImageSlider({
  images,
  alt,
  priority = false,
}: {
  images: string[];
  alt: string;
  priority?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [images]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-50">
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            priority={priority && index === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

function ProductCardItem({
  card,
  priority = false,
  viewProductsLabel,
  hideProductsLabel,
}: {
  card: ProductCard;
  priority?: boolean;
  viewProductsLabel: string;
  hideProductsLabel: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="group h-full overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_52px_rgba(15,23,42,0.08)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
        <ProductImageSlider
          images={card.images}
          alt={card.title}
          priority={priority}
        />
      </div>

      <div className="flex min-h-[270px] flex-col px-6 py-6">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
            {card.label}
          </p>

          <h3 className="text-xl font-semibold leading-7 text-slate-950">
            {card.title}
          </h3>

          <p className="min-h-[84px] text-sm leading-7 text-slate-600 line-clamp-3">
  {card.description}
</p>
        </div>
<div className="mt-auto pt-4">
  <button
    type="button"
    onClick={() => setIsOpen((current) => !current)}
    aria-expanded={isOpen}
    className="inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-4 text-sm font-semibold text-[#0A1A2F] shadow-[0_8px_20px_rgba(15,23,42,0.04)] transition-all duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent-tint)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
  >
    {isOpen ? hideProductsLabel : viewProductsLabel}
    <span
      className={`ml-2 inline-block transition-transform duration-300 ${
        isOpen ? "rotate-180" : ""
      }`}
      aria-hidden="true"
    >
      ↓
    </span>
  </button>
</div>

        <div
          className={`grid transition-all duration-300 ease-out ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mt-1 rounded-[1.25rem] border border-slate-200 bg-[linear-gradient(180deg,_#ffffff_0%,_#fbfcfd_100%)] p-4">
              <ul className="space-y-2">
  {card.items.map((item) => (
    <li
      key={item}
      className="flex items-start gap-2 text-sm text-slate-700"
    >
      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
      <span>{item}</span>
    </li>
  ))}
</ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProductsSection() {
  const { t } = useLanguage();

  const productCards: ProductCard[] = [
    {
      ...t.products.cards[0],
      images: [
        withBasePath("/images/02.webp"),
        withBasePath("/images/07.webp"),
      ],
    },
    {
      ...t.products.cards[1],
      images: [
        withBasePath("/images/08.jpeg"),
        withBasePath("/images/16.jpg"),
        withBasePath("/images/17.jpg"),
        withBasePath("/images/01.webp"),
      ],
    },
    {
      ...t.products.cards[2],
      images: [
        withBasePath("/images/10.jpg"),
        withBasePath("/images/11.jpg"),
        withBasePath("/images/12.jpg"),
        withBasePath("/images/13.jpg"),
        withBasePath("/images/14.jpg"),
      ],
    },
    {
      ...t.products.cards[3],
      images: [
        withBasePath("/images/15.jpg"),
        withBasePath("/images/18.jpg"),
        withBasePath("/images/19.jpg"),
        withBasePath("/images/03.webp"),
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, productCards.length - cardsPerView);

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [activeIndex, maxIndex]);

  const translatePercentage = useMemo(() => {
    return activeIndex * (100 / cardsPerView);
  }, [activeIndex, cardsPerView]);

  const goPrev = () => setActiveIndex((prev) => Math.max(0, prev - 1));
  const goNext = () => setActiveIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section
      id="products"
      className="scroll-mt-28 pb-16 sm:pb-20 lg:pb-24"
      aria-labelledby="products-title"
    >
      <div className="container-shell">
        <div className="rounded-[2rem] border border-slate-200/80 bg-[radial-gradient(circle_at_right,_rgba(232,217,168,0.18),_transparent_24%),linear-gradient(180deg,_#ffffff_0%,_#fbfcfd_100%)] px-6 py-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                {t.products.eyebrow}
              </p>
              <h2
                id="products-title"
                className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl"
              >
                {t.products.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                {t.products.description}
              </p>
            </div>

            <div className="flex items-center gap-3 self-start lg:self-auto">
              <button
                type="button"
                onClick={goPrev}
                disabled={activeIndex === 0}
                aria-label={t.products.previous}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:border-[var(--accent)] hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="text-xl leading-none">←</span>
              </button>

              <button
                type="button"
                onClick={goNext}
                disabled={activeIndex === maxIndex}
                aria-label={t.products.next}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:border-[var(--accent)] hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span className="text-xl leading-none">→</span>
              </button>
            </div>
          </div>

          <div className="mt-10 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${translatePercentage}%)`,
              }}
            >
              {productCards.map((card, index) => (
                <div
                  key={card.title}
                  className="shrink-0 self-start px-2"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <ProductCardItem
                    card={card}
                    priority={index === 0}
                    viewProductsLabel={t.products.viewProducts}
                    hideProductsLabel={t.products.hideProducts}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`${t.products.slideLabel} ${index + 1}`}
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-6 bg-[var(--accent)]"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
