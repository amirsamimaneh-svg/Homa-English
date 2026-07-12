import Link from "next/link";
import { HomaLogo } from "../icons";

const nav = [
  { href: "/", label: "خانه" },
  { href: "/courses/language", label: "دوره‌های زبان" },
  { href: "/courses/pilot", label: "دوره‌های خلبانی" },
  { href: "/instructors", label: "اساتید" },
  { href: "/blog", label: "بلاگ" },
  { href: "/about", label: "درباره ما" },
  { href: "/contact", label: "تماس با ما" },
];

export function Header({ active }: { active?: string }) {
  return (
    <header className="flex items-center justify-between px-6 md:px-20 py-[22px] bg-white border-b border-line sticky top-0 z-20">
      <Link href="/" className="flex items-center gap-3 shrink-0">
        <HomaLogo size={34} />
        <span className="text-xl font-extrabold text-navy-800">هما</span>
      </Link>
      <nav className="hidden lg:flex items-center gap-9 text-[15px] font-semibold">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              active === item.href
                ? "text-navy-800"
                : "text-body hover:text-navy-800 transition-colors"
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-3.5 shrink-0">
        <Link
          href="/app/auth"
          className="text-[15px] font-semibold text-navy-800 hover:text-amber-600 transition-colors"
        >
          ورود
        </Link>
        <Link href="/app/auth?mode=signup" className="btn-primary !px-6 !py-3 !text-[15px] !font-bold">
          ثبت‌نام رایگان
        </Link>
      </div>
    </header>
  );
}
