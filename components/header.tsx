import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="container-shell flex h-18 items-center justify-between gap-6">
        <Link href="/" className="text-base font-semibold tracking-[0.18em] uppercase">
          Aylar Plastik
        </Link>
        <nav
          aria-label="Primary"
          className="hidden text-sm text-foreground/70 md:block"
        >
          Navbar placeholder
        </nav>
      </div>
    </header>
  );
}
