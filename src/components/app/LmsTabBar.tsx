import Link from "next/link";

type LmsTab = "dashboard" | "courses" | "quizzes" | "profile";

const IconGrid = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
const IconLines = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const IconQuiz = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M9 5H5v4M15 5h4v4M9 19H5v-4M15 19h4v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4 21c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const tabs: { key: LmsTab; label: string; href: string; icon: React.ReactNode }[] = [
  { key: "dashboard", label: "داشبورد", href: "/lms/dashboard", icon: <IconGrid /> },
  { key: "courses", label: "دوره‌ها", href: "/lms/class", icon: <IconLines /> },
  { key: "quizzes", label: "آزمون‌ها", href: "/lms/quiz", icon: <IconQuiz /> },
  { key: "profile", label: "پروفایل", href: "/app/account", icon: <IconUser /> },
];

export function LmsTabBar({ active }: { active: LmsTab }) {
  return (
    <nav className="flex justify-around pt-3 pb-8 border-t border-line bg-white shrink-0">
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
