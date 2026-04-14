"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { withBasePath } from "@/lib/base-path";

const trustIndicators = [
  "Custom production",
  "Quality assurance",
  "Fast delivery",
];

const heroImages = [
  {
    src: withBasePath("/images/01.webp"),
    alt: "Plastic production inside an industrial manufacturing facility",
  },
  {
    src: withBasePath("/images/04.webp"),
    alt: "Industrial packaging and plastic bag production",
  },
  {
    src:withBasePath("/images/06.webp"),
    alt: "Modern factory equipment for packaging manufacturing",
  },
];

const SLIDE_INTERVAL_MS = 5600;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, SLIDE_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      id="home"
      className="scroll-mt-28 overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(214,178,74,0.08),_transparent_24%),linear-gradient(180deg,_#fcfcfb_0%,_#f5f7f8_100%)]"
      aria-labelledby="hero-title"
    >
      <div className="container-shell pt-2 pb-8 sm:pt-4 sm:pb-10 lg:pt-5 lg:pb-12">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div className="max-w-2xl">
            <div className="mb-4 flex flex-col items-start gap-3 min-[430px]:mb-5 min-[430px]:flex-row min-[430px]:items-center min-[430px]:gap-4">
              <span className="h-px w-10 bg-[linear-gradient(90deg,_rgba(214,178,74,0.84),_rgba(232,217,168,0.18))] min-[430px]:w-14" />
              <p className="max-w-full whitespace-normal rounded-full border border-[rgba(214,178,74,0.28)] bg-[rgba(247,243,232,0.92)] px-3 py-1.5 text-[9px] font-semibold leading-[1.25] tracking-[0.12em] text-[var(--accent-strong)] uppercase shadow-sm sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.24em]">
                Reliable Plastic Manufacturing
              </p>
            </div>

            <h1
              id="hero-title"
              className="max-w-3xl text-[2rem] font-semibold leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-5xl sm:leading-[1.02] lg:text-[3.6rem]"
            >
              Premium Plastic Packaging Solutions for Industrial Needs
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Aylar Plastik provides high-quality custom packaging solutions,
              including printed plastic bags, industrial packaging, and
              flexible production services tailored to your business.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#contact"
                className="inline-flex min-h-13 w-full items-center justify-center rounded-full bg-[#0A1A2F] px-7 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(10,26,47,0.18)] transition-all duration-200 hover:bg-[#132A44] hover:text-white hover:shadow-[0_18px_36px_rgba(10,26,47,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#fcfcfb] active:translate-y-px sm:w-auto"
              >
                <span className="text-white">Get a Quote</span>
              </Link>
              <Link
                href="#products"
                className="inline-flex min-h-13 w-full items-center justify-center rounded-full border border-[rgba(214,178,74,0.28)] bg-white px-7 text-sm font-semibold text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.05)] transition-all duration-200 hover:border-[rgba(214,178,74,0.5)] hover:bg-[rgba(247,243,232,0.55)] hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#fcfcfb] active:translate-y-px sm:w-auto"
              >
                Explore Products
              </Link>
            </div>

            <ul className="mt-6 flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:gap-6">
              {trustIndicators.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D6B24A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <div className="group overflow-hidden rounded-xl border border-slate-200/80 bg-white/70 p-2.5 shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:p-3">
              <div className="relative overflow-hidden rounded-xl bg-slate-100">
                <div className="relative h-[300px] min-[390px]:h-[340px] sm:h-[400px] lg:h-[490px]">
                  {heroImages.map((image, index) => (
                    <div
                      key={image.src}
                      className={`absolute inset-0 transition-all duration-[1400ms] ease-out ${
                        index === activeIndex
                          ? "translate-x-0 opacity-100"
                          : "translate-x-[4%] opacity-0"
                      }`}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                      />
                    </div>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,26,47,0.08)_0%,rgba(10,26,47,0.18)_58%,rgba(10,26,47,0.34)_100%)]" />

                <div className="absolute inset-x-0 bottom-0 flex justify-center pb-5">
                  <div className="flex items-center gap-2 rounded-full border border-white/35 bg-white/22 px-3 py-2 backdrop-blur-sm">
                    {heroImages.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        aria-label={`Show hero image ${index + 1}`}
                        aria-pressed={index === activeIndex}
                        onClick={() => setActiveIndex(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          index === activeIndex
                            ? "w-6 bg-white"
                            : "w-2.5 bg-white/55 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
