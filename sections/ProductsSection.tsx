"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProductCard = {
  label: string;
  title: string;
  description: string;
  images: string[];
  featured?: boolean;
};

const productCards: ProductCard[] = [
  {
    label: "Printed Bags",
    title: "Printed Plastic Bags",
    description:
      "Printed bag solutions for visibility, functionality, and everyday packaging use.",
    images: ["/images/01.webp", "/images/02.webp"],
  },
  {
    label: "Industrial",
    title: "Industrial Packaging Solutions",
    description:
      "Reliable plastic packaging support for production, transport, and commercial operations.",
    images: ["/images/03.webp", "/images/04.webp"],
  },
  {
    label: "Production",
    title: "Flexible Production Support",
    description:
      "Adaptable manufacturing solutions for custom orders, repeat volumes, and changing needs.",
    images: ["/images/05.webp", "/images/06.webp"],
  },
  {
    label: "Packaging",
    title: "Custom Plastic Packaging",
    description:
      "Tailored packaging formats for retail, industrial distribution, and brand-specific requirements.",
    images: ["/images/07.webp", "/images/03.webp"],
    featured: true,
  },
];

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
    <div className="relative h-full w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
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
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,47,0.04)_0%,rgba(10,26,47,0.24)_100%)]" />
        </div>
      ))}
    </div>
  );
}

export function ProductsSection() {
  const standardCards = productCards.filter((card) => !card.featured);
  const featuredCard = productCards.find((card) => card.featured);

  return (
    <section
      id="products"
      className="scroll-mt-28 pb-16 sm:pb-20 lg:pb-24"
      aria-labelledby="products-title"
    >
      <div className="container-shell">
        <div className="rounded-[2rem] border border-slate-200/80 bg-[radial-gradient(circle_at_right,_rgba(232,217,168,0.18),_transparent_24%),linear-gradient(180deg,_#ffffff_0%,_#fbfcfd_100%)] px-6 py-10 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
              Our Plastic Solutions
            </p>
            <h2
              id="products-title"
              className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl"
            >
              Discover Our Packaging Solutions
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Aylar Plastik provides custom plastic packaging solutions for
              commercial and industrial applications, including printed bags,
              flexible packaging, and dependable production support.
            </p>
          </div>

          <div className="mt-10 grid gap-5 xl:grid-cols-3">
            {standardCards.map((card, index) => (
              <article
                key={card.title}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_22px_52px_rgba(15,23,42,0.08)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ProductImageSlider
                    images={card.images}
                    alt={card.title}
                    priority={index === 0}
                  />
                </div>

                <div className="space-y-3 px-6 py-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                    {card.label}
                  </p>

                  <h3 className="text-xl font-semibold leading-7 text-slate-950">
                    {card.title}
                  </h3>

                  <p className="text-sm leading-7 text-slate-600">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {featuredCard ? (
            <article className="mt-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_46px_rgba(15,23,42,0.05)]">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="relative min-h-[280px] overflow-hidden lg:min-h-[380px]">
                  <ProductImageSlider
                    images={featuredCard.images}
                    alt={featuredCard.title}
                  />
                </div>

                <div className="flex items-center px-6 py-8 sm:px-8 lg:px-9">
                  <div className="max-w-sm space-y-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">
                      {featuredCard.label}
                    </p>

                    <h3 className="text-2xl font-semibold leading-tight text-slate-950 sm:text-[2rem]">
                      {featuredCard.title}
                    </h3>

                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      {featuredCard.description}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ) : null}
        </div>
      </div>
    </section>
  );
}
