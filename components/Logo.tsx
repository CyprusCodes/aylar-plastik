import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
};

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`flex min-w-0 items-center gap-1 text-slate-950 transition-opacity duration-200 hover:opacity-90 sm:gap-0 ${className}`.trim()}
      aria-label="Aylar Plastik homepage"
    >
      <div className="relative h-[2.5rem] w-[4.2rem] shrink-0 min-[360px]:w-[5rem] sm:h-[7rem] sm:w-[17.5rem]">
        <Image
          src="/logo.webp"
          alt="Aylar Plastik Logo"
          fill
          priority
          sizes="(max-width: 359px) 77px, (max-width: 639px) 86px, 172px"
          className="object-contain"
        />
      </div>

      <div className="hidden min-w-0 -ml-1 min-[360px]:block sm:-ml-12">
        <span className="block text-[9px] font-semibold tracking-[0.12em] text-[#0A1A2F] uppercase min-[360px]:text-[10px] sm:text-[14px]">
          Aylar Plastik
        </span>

        <span className="hidden mt-0.5 text-[8px] tracking-[0.15em] text-slate-500 uppercase sm:block">
          Plastic Packaging &amp; Manufacturing
        </span>
      </div>
    </Link>
  );
}
