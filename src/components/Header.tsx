import Link from "next/link";
import { Logo } from "./icons";

const nav = [
  { href: "/courses", label: "دوره‌ها" },
  { href: "/method", label: "روش هما" },
  { href: "/pricing", label: "قیمت‌ها" },
  { href: "/about", label: "درباره" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-line">
      <div className="wrap flex items-center justify-between h-16">
        <Link href="/" className="text-ink-950">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[15px] text-ink-700">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-ink-950 transition-colors">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/login" className="btn-ghost hidden sm:inline-flex">
            ورود
          </Link>
          <Link href="/start" className="btn-primary">
            شروع رایگان
          </Link>
        </div>
      </div>
    </header>
  );
}
