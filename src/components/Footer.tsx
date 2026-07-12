import Link from "next/link";
import { Logo } from "./icons";
import { toFa } from "@/lib/data";

const cols = [
  {
    title: "محصول",
    links: [
      { href: "/courses", label: "دوره‌ها" },
      { href: "/method", label: "روش هما" },
      { href: "/pricing", label: "قیمت‌ها" },
    ],
  },
  {
    title: "شرکت",
    links: [
      { href: "/about", label: "درباره ما" },
      { href: "/blog", label: "بلاگ" },
      { href: "/contact", label: "تماس" },
    ],
  },
  {
    title: "پشتیبانی",
    links: [
      { href: "/faq", label: "سوالات متداول" },
      { href: "/help", label: "راهنما" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-28 border-t border-white/10 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] max-w-full h-[300px] blob bg-brand-violet/20" />
      <div className="relative wrap py-16 grid grid-cols-2 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="text-white mb-4">
            <Logo />
          </div>
          <p className="text-[14px] text-ink-400 leading-7 max-w-[250px]">
            پلتفرم هوشمند یادگیری زبان انگلیسی — زنده، تعاملی و شخصی‌سازی‌شده برای تو.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-[13px] font-semibold text-white mb-4">{c.title}</div>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[14px] text-ink-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="relative border-t border-white/10">
        <div className="wrap py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-ink-500">
          <span>© {toFa(1403)} هما. همه حقوق محفوظ است.</span>
          <span className="latin tracking-wide gradient-text font-semibold">Homa English</span>
        </div>
      </div>
    </footer>
  );
}
