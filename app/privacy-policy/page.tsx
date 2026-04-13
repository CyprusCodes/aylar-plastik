import type { Metadata } from "next";

const policySections = [
  {
    title: "Information We Collect",
    description:
      "Placeholder content will be added here to explain the types of information Aylar Plastik may collect through website interactions, inquiries, and related communications.",
  },
  {
    title: "How We Use Information",
    description:
      "Placeholder content will be added here to describe how collected information may be used to respond to requests, support business communication, and improve website operations.",
  },
  {
    title: "Cookies",
    description:
      "Placeholder content will be added here to outline how cookies or similar technologies may support essential site functionality and limited website measurement.",
  },
  {
    title: "Contact",
    description:
      "Placeholder content will be added here with the appropriate contact details for privacy-related questions or requests directed to Aylar Plastik.",
  },
];

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

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
            This page will be updated with the official privacy policy content
            provided by Aylar Plastik.
          </p>

          <div className="mt-10 grid gap-4 sm:gap-5">
            {policySections.map((section) => (
              <article
                key={section.title}
                className="rounded-[1.5rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top_left,_rgba(247,243,232,0.8),_transparent_28%),linear-gradient(180deg,_#ffffff_0%,_#fbfcfd_100%)] px-5 py-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)] sm:px-6 sm:py-6"
              >
                <h2 className="text-xl font-semibold tracking-[-0.02em] text-slate-950 sm:text-2xl">
                  {section.title}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                  {section.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
