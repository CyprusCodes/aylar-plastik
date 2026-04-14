import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy placeholder page for Aylar Plastik website visitors.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_20px_60px_rgba(10,26,47,0.08)] sm:p-10 lg:p-12">
          <span className="inline-flex rounded-full bg-[rgba(214,178,74,0.14)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[#0A1A2F] uppercase">
            Privacy Policy
          </span>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0A1A2F] sm:text-4xl">
            Privacy Policy
          </h1>
        </div>
      </div>
    </section>
  );
}
