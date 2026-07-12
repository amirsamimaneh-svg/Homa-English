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
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="wrap pt-4">
        <div className="glass-strong rounded-full flex items-center justify-between h-14 pr-5 pl-2.5">
          <Link href="/" className="text-white">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-[14.5px] text-ink-300">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-white transition-colors">
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link href="/login" className="btn-ghost hidden sm:inline-flex !py-2">
              ورود
            </Link>
            <Link href="/start" className="btn-grad !px-5 !py-2.5 !text-[14px]">
              شروع رایگان
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
