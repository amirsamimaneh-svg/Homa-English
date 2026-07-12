/**
 * A phone-shaped frame that hosts the mobile-first app / LMS / learn screens.
 * On small viewports it fills the screen; on larger ones it renders as a
 * centered device with a subtle bezel so the mobile layouts read correctly.
 */
export function PhoneFrame({
  children,
  bg = "#fff",
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <div className="min-h-screen bg-[#EAF0F5] flex items-center justify-center p-0 sm:p-8">
      <div
        className="w-full sm:w-[402px] sm:h-[860px] sm:rounded-[44px] sm:border-8 sm:border-navy-900 overflow-hidden relative flex flex-col shadow-none sm:shadow-2xl min-h-screen sm:min-h-0"
        style={{ background: bg }}
      >
        {children}
      </div>
    </div>
  );
}

/** Fixed bottom tab bar used across the app / LMS / learn modules. */
export function TabBar({ children }: { children: React.ReactNode }) {
  return (
    <nav className="border-t border-line bg-white grid grid-cols-3 sm:grid-cols-4 shrink-0">
      {children}
    </nav>
  );
}

export function TabItem({
  label,
  icon,
  active = false,
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <button
      className={`flex flex-col items-center gap-1 py-2.5 text-[11px] font-semibold transition-colors ${
        active ? "text-amber-600" : "text-faint"
      }`}
    >
      <span className={active ? "text-amber-600" : "text-faint"}>{icon}</span>
      {label}
    </button>
  );
}
