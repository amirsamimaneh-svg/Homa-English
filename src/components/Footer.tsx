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
    <footer className="border-t border-line mt-24">
      <div className="wrap py-16 grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <div className="text-ink-950 mb-4">
            <Logo />
          </div>
          <p className="text-[14px] text-ink-500 leading-7 max-w-[240px]">
            پلتفرم مدرن یادگیری زبان انگلیسی — هدفمند، تعاملی و هوشمند.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-[13px] font-semibold text-ink-950 mb-4">{c.title}</div>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[14px] text-ink-500 hover:text-ink-950 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-line">
        <div className="wrap py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[13px] text-ink-400">
          <span>© {toFa(1403)} هما. همه حقوق محفوظ است.</span>
          <span className="latin tracking-wide">Homa English</span>
        </div>
      </div>
    </footer>
  );
}
