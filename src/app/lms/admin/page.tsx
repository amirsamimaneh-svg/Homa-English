import { PanelSidebar, PIcon, type NavItem } from "@/components/panel/PanelSidebar";

export const metadata = { title: "پنل مدیریت — هما" };

const nav: NavItem[] = [
  { label: "نمای کلی", icon: <PIcon.Grid />, active: true },
  { label: "کاربران", icon: <PIcon.Users /> },
  { label: "دوره‌ها", icon: <PIcon.Lines /> },
  { label: "گزارش مالی", icon: <PIcon.Finance /> },
  { label: "تنظیمات", icon: <PIcon.Settings /> },
];

const kpis = [
  { label: "درآمد این ماه", value: "۱,۲۴۰,۰۰۰,۰۰۰", delta: "+۱۸٪ نسبت به ماه قبل", tone: "up" },
  { label: "دانشجویان فعال", value: "۲,۳۸۰", delta: "+۶٪ نسبت به ماه قبل", tone: "up" },
  { label: "دوره‌های فعال", value: "۲۲", delta: "۱۶ زبان · ۶ خلبانی", tone: "muted" },
  { label: "نرخ تکمیل دوره", value: "۷۴٪", delta: "-۲٪ نسبت به ماه قبل", tone: "down" },
] as const;

const transactions = [
  { student: "نگار احمدی", course: "آیلتس آکادمیک فشرده", amount: "۶,۵۰۰,۰۰۰", status: "موفق" },
  { student: "آرمان رضایی", course: "اصول ناوبری هوایی", amount: "۸,۹۰۰,۰۰۰", status: "موفق" },
  { student: "مهسا کریمی", course: "مکالمه روزمره انگلیسی", amount: "۳,۲۰۰,۰۰۰", status: "در انتظار" },
];

export default function AdminPanelPage() {
  return (
    <div className="bg-page min-h-screen flex text-navy-800">
      <PanelSidebar title="پنل مدیریت" items={nav} user={{ name: "پریسا کاظمی", role: "مدیر پلتفرم" }} />

      <main className="flex-1 p-6 md:p-11 max-w-[1320px]">
        <div className="flex justify-between items-center mb-8">
          <div className="text-[22px] font-extrabold">نمای کلی پلتفرم</div>
          <select className="px-4 py-2.5 rounded-lg border-[1.5px] border-line-200 text-[13.5px] bg-white outline-none">
            <option>۳۰ روز اخیر</option>
            <option>۹۰ روز اخیر</option>
            <option>امسال</option>
          </select>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px] mb-7">
          {kpis.map((k) => (
            <div key={k.label} className="card p-5">
              <div className="text-[12.5px] text-muted mb-2">{k.label}</div>
              <div className="num text-2xl font-bold">{k.value}</div>
              <div
                className={`text-xs mt-1.5 font-bold ${
                  k.tone === "up" ? "text-success" : k.tone === "down" ? "text-error" : "text-muted font-normal"
                }`}
              >
                {k.delta}
              </div>
            </div>
          ))}
        </div>

        {/* Chart + AI insight */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 mb-7">
          <div className="card p-6">
            <div className="text-[15px] font-bold mb-5">روند ثبت‌نام (۱۲ هفته اخیر)</div>
            <svg width="100%" height="160" viewBox="0 0 560 160" preserveAspectRatio="none">
              <polyline
                points="0,120 50,110 100,115 150,90 200,95 250,70 300,80 350,55 400,60 450,40 500,35 560,20"
                fill="none"
                stroke="#D98E3B"
                strokeWidth="3"
              />
              <polyline
                points="0,120 50,110 100,115 150,90 200,95 250,70 300,80 350,55 400,60 450,40 500,35 560,20 560,160 0,160"
                fill="rgba(217,142,59,0.08)"
                stroke="none"
              />
            </svg>
          </div>
          <div className="card-dark p-6">
            <div className="flex items-center gap-2 mb-3.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2l1.6 5.1L19 9l-5.4 1.9L12 16l-1.6-5.1L5 9l5.4-1.9L12 2z" fill="#D98E3B" />
              </svg>
              <span className="text-[13px] font-bold text-amber-500">تحلیل هوشمند</span>
            </div>
            <div className="text-[13px] text-navy-100 leading-[1.9] mb-3.5">
              نرخ تکمیل دوره «تافل iBT جامع» ۱۵٪ کمتر از میانگین است. علت اصلی: افت حضور در فصل ۴. پیشنهاد می‌شود
              یادآوری خودکار فعال شود.
            </div>
            <button className="w-full bg-[rgba(217,142,59,0.16)] text-amber-500 py-2.5 rounded-lg text-[13px] font-bold">
              مشاهده گزارش کامل
            </button>
          </div>
        </div>

        {/* Transactions */}
        <div className="card overflow-hidden">
          <div className="px-6 py-[18px] border-b border-[#F2F5F8] text-[15px] font-bold">آخرین تراکنش‌ها</div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[520px]">
              <thead>
                <tr className="bg-[#F9FBFC]">
                  {["دانشجو", "دوره", "مبلغ", "وضعیت"].map((h) => (
                    <th key={h} className="text-right px-6 py-3 text-[12.5px] text-muted font-semibold">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, i) => (
                  <tr key={i} className="border-t border-[#F2F5F8]">
                    <td className="px-6 py-3.5 text-[13.5px]">{t.student}</td>
                    <td className="px-6 py-3.5 text-[13.5px] text-muted">{t.course}</td>
                    <td className="px-6 py-3.5 text-[13.5px] num">{t.amount}</td>
                    <td className="px-6 py-3.5">
                      <span
                        className={`text-[11.5px] font-bold px-3 py-1 rounded-pill ${
                          t.status === "موفق" ? "bg-success-bg text-success-text" : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {t.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
