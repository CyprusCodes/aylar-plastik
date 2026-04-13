import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-0 text-slate-950 transition-opacity duration-200 hover:opacity-90 ${className}`.trim()}
      aria-label="Aylar Plastik homepage"
    >
      <div className="relative h-[3.35rem] w-[8.6rem] shrink-0 sm:h-[7rem] sm:w-[17.5rem]">
        <Image
          src="/logo.webp"
          alt="Aylar Plastik Logo"
          fill
          priority
          sizes="(max-width: 640px) 138px, 172px"
          className="object-contain"
        />
      </div>

      <div className="min-w-0 -ml-2 sm:-ml-12">
        <span className="block text-[10px] font-semibold tracking-[0.08em] text-[#0A1A2F] uppercase sm:text-[14px]">
          Aylar Plastik
        </span>

        <span className="hidden mt-0.5 text-[8px] tracking-[0.15em] text-slate-500 uppercase sm:block">
          Plastic Packaging &amp; Manufacturing
        </span>
      </div>
    </Link>
  );
}
