import { PhoneFrame } from "@/components/app/PhoneFrame";
import { LearnTabBar } from "@/components/app/LearnTabBar";
import { Sparkle, IconShield } from "@/components/icons";

export const metadata = { title: "پروفایل — یادگیری هما" };

const badges = [
  { bg: "#FBEBD4", icon: <span className="text-2xl">🔥</span>, label: "استریک ۶۰ روزه" },
  {
    bg: "#E4F5EC",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 13l4 4L19 7" stroke="#34B37A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "۱۰۰ درس کامل",
  },
  {
    bg: "#DCE8F1",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M11 5L6 9H3v6h3l5 4V5z" fill="#16344F" />
      </svg>
    ),
    label: "تمرین گفتاری ۵۰x",
  },
  {
    bg: "#E2E8EE",
    locked: true,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="11" width="14" height="9" rx="2" stroke="#9DAEBB" strokeWidth="1.8" />
        <path d="M8 11V7a4 4 0 018 0v4" stroke="#9DAEBB" strokeWidth="1.8" />
      </svg>
    ),
    label: "آیلتس ۷ کامل",
  },
];

const skills = [
  { name: "مکالمه", level: "B2", pct: 70 },
  { name: "شنیداری", level: "B2", pct: 65 },
  { name: "نوشتاری", level: "B1", pct: 50 },
];

export default function LearnProfilePage() {
  return (
    <PhoneFrame bg="#F5F9FC">
      {/* Dark header */}
      <div className="pt-14 sm:pt-[100px] px-5 pb-6 bg-navy-800 flex flex-col items-center">
        <div className="w-[76px] h-[76px] rounded-full bg-white/15 mb-3" />
        <div className="text-[17px] font-bold text-white mb-1">مهسا کریمی</div>
        <div className="inline-flex items-center gap-1.5 bg-[rgba(217,142,59,0.18)] text-amber-500 text-xs font-bold px-3.5 py-[5px] rounded-pill">
          سطح معادل CEFR B2 · آیلتس ۶.۵
        </div>
      </div>

      <div className="flex-1 overflow-auto p-5">
        {/* Stat cards */}
        <div className="flex gap-3 mb-6">
          <StatCard icon={<span className="text-xl">🔥</span>} value="۶۱" label="روز متوالی" color="#FF7A45" />
          <StatCard icon={<Sparkle size={20} color="#34B37A" />} value="۱۲,۸۰۰" label="مجموع XP" color="#34B37A" />
          <StatCard icon={<IconShield width={20} height={20} className="text-amber-500 mx-auto" />} value="۱۴" label="نشان کسب‌شده" color="#0F2942" />
        </div>

        {/* Badges */}
        <div className="text-sm font-bold mb-3.5">نشان‌های دستاورد</div>
        <div className="grid grid-cols-4 gap-3 mb-7">
          {badges.map((b, i) => (
            <div key={i} className={`text-center ${b.locked ? "opacity-40" : ""}`}>
              <div
                className="w-full aspect-square rounded-card flex items-center justify-center mb-1.5"
                style={{ background: b.bg }}
              >
                {b.icon}
              </div>
              <div className="text-[10.5px] text-muted leading-tight">{b.label}</div>
            </div>
          ))}
        </div>

        {/* Skill CEFR bars */}
        <div className="text-sm font-bold mb-3.5">پیشرفت مهارت (CEFR)</div>
        <div className="bg-white rounded-[14px] p-[18px] mb-6">
          <div className="flex flex-col gap-3.5">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between text-[12.5px] mb-1.5">
                  <span>{s.name}</span>
                  <span className="text-muted">{s.level}</span>
                </div>
                <div className="h-1.5 bg-line rounded-pill overflow-hidden">
                  <div className="h-full bg-amber-500" style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <LearnTabBar active="profile" />
    </PhoneFrame>
  );
}

function StatCard({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="flex-1 bg-white rounded-[14px] p-4 text-center">
      <div className="mb-1.5 flex items-center justify-center h-6">{icon}</div>
      <div className="num text-lg font-bold" style={{ color }}>
        {value}
      </div>
      <div className="text-[11px] text-muted mt-0.5">{label}</div>
    </div>
  );
}
