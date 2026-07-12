import Link from "next/link";

type LearnTab = "path" | "badges" | "profile";

const IconPath = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M4 12l8-8 8 8M6 10v10h12V10" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
  </svg>
);
const IconBadge = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const tabs: { key: LearnTab; label: string; href: string; icon: React.ReactNode }[] = [
  { key: "path", label: "مسیر", href: "/learn/path", icon: <IconPath /> },
  { key: "badges", label: "نشان‌ها", href: "/learn/profile", icon: <IconBadge /> },
  { key: "profile", label: "پروفایل", href: "/learn/profile", icon: <IconUser /> },
];

/** Bottom tab bar for the gamified learning module (warm cream border). */
export function LearnTabBar({ active }: { active: LearnTab }) {
  return (
    <nav className="flex justify-around pt-3 pb-8 border-t border-[#F2E4CE] bg-white shrink-0">
      {tabs.map((t) => (
        <Link
          key={t.key}
          href={t.href}
          className={`flex flex-col items-center gap-1 text-[10.5px] font-bold transition-colors ${
            active === t.key ? "text-amber-500" : "text-faint"
          }`}
        >
          {t.icon}
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
