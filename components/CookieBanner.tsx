"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useLanguage } from "@/context/LanguageContext";

const STORAGE_KEY = "aylar-cookie-consent";

type ConsentChoice = "accepted" | "rejected";

const subscribe = (onStoreChange: () => void) => {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY) {
      onStoreChange();
    }
  };

  const handleConsentChange = () => {
    onStoreChange();
  };

  window.addEventListener("storage", handleStorage);
  window.addEventListener("cookie-consent-change", handleConsentChange);

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener("cookie-consent-change", handleConsentChange);
  };
};

const getSnapshot = () => window.localStorage.getItem(STORAGE_KEY);
const getServerSnapshot = () => null;

export function CookieBanner() {
  const { t } = useLanguage();

  const storedChoice = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const handleChoice = (choice: ConsentChoice) => {
    window.localStorage.setItem(STORAGE_KEY, choice);
    window.dispatchEvent(new Event("cookie-consent-change"));
  };

  if (storedChoice === "accepted" || storedChoice === "rejected") {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-3 z-50 px-4 sm:bottom-4 sm:px-6">
      <div className="pointer-events-auto mx-auto max-w-4xl rounded-2xl border border-white/10 bg-[#0A1A2F]/95 shadow-[0_12px_36px_rgba(10,26,47,0.22)] backdrop-blur-md">
        <div className="flex flex-col gap-4 px-4 py-4 sm:px-5 sm:py-3 md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex min-w-0 items-start gap-3 sm:items-center">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D6B24A]/16 ring-1 ring-[#D6B24A]/30">
              <span className="text-lg leading-none" aria-hidden="true">
                🍪
              </span>
            </div>

            <p className="text-sm leading-5 text-white/80">
              {t.cookieBanner.text}{" "}
              <Link
                href="/cookie-policy"
                className="font-medium text-[#D6B24A] underline decoration-[#D6B24A]/50 underline-offset-4 transition-colors duration-200 hover:text-[#E8D9A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1A2F]"
              >
                {t.cookieBanner.policy}
              </Link>
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-2 min-[360px]:flex-row md:w-auto">
            <button
              type="button"
              onClick={() => handleChoice("rejected")}
              className="inline-flex h-10 w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 text-sm font-medium text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1A2F] min-[360px]:w-auto"
            >
              {t.cookieBanner.reject}
            </button>

            <button
              type="button"
              onClick={() => handleChoice("accepted")}
              className="inline-flex h-10 w-full items-center justify-center rounded-full bg-[#D6B24A] px-4 text-sm font-semibold text-[#0A1A2F] transition-colors duration-200 hover:bg-[#E8D9A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1A2F] min-[360px]:w-auto"
            >
              {t.cookieBanner.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
