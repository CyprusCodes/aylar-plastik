import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="max-w-3xl rounded-[2rem] border border-slate-200/70 bg-white/90 p-8 shadow-[0_20px_60px_rgba(10,26,47,0.08)] sm:p-10">
          <span className="inline-flex rounded-full bg-[rgba(214,178,74,0.14)] px-3 py-1 text-xs font-semibold tracking-[0.16em] text-[#0A1A2F] uppercase">
            Cookie Policy
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#0A1A2F] sm:text-4xl">
            Cookie usage on aylarplastik.com
          </h1>
          <p className="mt-5 text-base leading-8 text-slate-600">
            We use essential cookies to support site functionality and limited
            analytics cookies to understand how visitors use the website. Your
            cookie preference is stored locally on your device when you accept
            or reject the banner.
          </p>
          <p className="mt-4 text-base leading-8 text-slate-600">
            If you need more information about how we handle website data or
            want to update your preference, please contact our team through the
            contact section on the homepage.
          </p>
          <Link
            href="/#contact"
            className="mt-8 inline-flex rounded-full bg-[#0A1A2F] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(10,26,47,0.18)] transition-all duration-200 hover:bg-[#132A44] hover:shadow-[0_16px_32px_rgba(10,26,47,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-4 focus-visible:ring-offset-white active:translate-y-px"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
