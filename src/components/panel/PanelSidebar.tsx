import { HomaLogo } from "../icons";

export interface NavItem {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}

/** Dark sidebar navigation shared by the Admin and Instructor panels. */
export function PanelSidebar({
  title,
  items,
  user,
}: {
  title: string;
  items: NavItem[];
  user: { name: string; role: string };
}) {
  return (
    <aside className="w-[250px] bg-navy-900 px-5 py-7 hidden lg:flex flex-col shrink-0 min-h-screen">
      <div className="flex items-center gap-2.5 mb-11 px-2">
        <HomaLogo size={30} stroke="#fff" />
        <span className="text-[17px] font-extrabold text-white">{title}</span>
      </div>
      <nav className="flex flex-col gap-1">
        {items.map((item) => (
          <div
            key={item.label}
            className={`flex items-center gap-3 px-3.5 py-3 rounded-btn text-sm cursor-pointer transition-colors ${
              item.active
                ? "bg-[rgba(217,142,59,0.16)] text-amber-500 font-bold"
                : "text-[#AFC3D6] font-semibold hover:bg-white/5"
            }`}
          >
            <span className={item.active ? "text-amber-500" : "text-[#AFC3D6]"}>{item.icon}</span>
            {item.label}
          </div>
        ))}
      </nav>
      <div className="mt-auto flex items-center gap-2.5 px-2 py-3.5 border-t border-white/10">
        <div className="w-9 h-9 rounded-full bg-white/15 shrink-0" />
        <div>
          <div className="text-[13px] font-bold text-white">{user.name}</div>
          <div className="text-[11px] text-[#AFC3D6]">{user.role}</div>
        </div>
      </div>
    </aside>
  );
}

/* Shared small icons for panel navs */
export const PIcon = {
  Grid: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  Users: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  ),
  Lines: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  Finance: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v10M9.5 9.5h3.5a1.5 1.5 0 010 3h-2a1.5 1.5 0 000 3h3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Settings: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M19 12a7 7 0 00-.1-1.2l2-1.6-2-3.4-2.3.9a7 7 0 00-2-1.2L14 3h-4l-.6 2.5a7 7 0 00-2 1.2l-2.3-.9-2 3.4 2 1.6A7 7 0 005 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.3-.9c.6.5 1.3.9 2 1.2L10 21h4l.6-2.5a7 7 0 002-1.2l2.3.9 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  ),
  Grade: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M9 11l2 2 4-4M5 4h14v16H5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Video: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="13" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 10l5-3v10l-5-3" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  ),
};
