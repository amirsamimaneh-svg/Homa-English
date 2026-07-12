import Link from "next/link";
import { HomaLogo } from "../icons";
import { toFa } from "@/lib/data";

const columns = [
  {
    title: "دوره‌ها",
    links: [
      { href: "/courses/language", label: "زبان عمومی" },
      { href: "/courses/language", label: "آیلتس/تافل" },
      { href: "/courses/pilot", label: "خلبانی" },
    ],
  },
  {
    title: "شرکت",
    links: [
      { href: "/about", label: "درباره ما" },
      { href: "/instructors", label: "اساتید" },
      { href: "/blog", label: "بلاگ" },
    ],
  },
  {
    title: "پشتیبانی",
    links: [
      { href: "/contact", label: "تماس با ما" },
      { href: "/faq", label: "سوالات متداول" },
    ],
  },
];

export function Footer({ simple = false }: { simple?: boolean }) {
  if (simple) {
    return (
      <footer className="px-6 md:px-20 py-10 bg-white border-t border-line text-center text-[13px] text-faint">
        © {toFa(1403)} آموزشگاه هما — تمامی حقوق محفوظ است.
      </footer>
    );
  }
  return (
    <footer className="px-6 md:px-20 pt-14 pb-10 bg-white border-t border-line">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 max-w-[1280px] mx-auto mb-10">
        <div>
          <div className="flex items-center gap-2.5 mb-3.5">
            <HomaLogo size={28} />
            <span className="text-lg font-extrabold">هما</span>
          </div>
          <p className="text-[13.5px] text-muted leading-[1.9] max-w-[280px]">
            آموزشگاه هما — خانه‌ی یادگیری زبان انگلیسی و آماده‌سازی خلبانی در ایران.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div className="text-sm font-bold mb-4">{col.title}</div>
            <div className="flex flex-col gap-2.5 text-[13.5px]">
              {col.links.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-muted hover:text-navy-800 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center text-[13px] text-faint border-t border-line pt-6 max-w-[1280px] mx-auto">
        © {toFa(1403)} آموزشگاه هما — تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
