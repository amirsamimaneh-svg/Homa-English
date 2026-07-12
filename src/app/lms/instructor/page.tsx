import { PanelSidebar, PIcon, type NavItem } from "@/components/panel/PanelSidebar";

export const metadata = { title: "پنل مدرس — هما" };

const nav: NavItem[] = [
  { label: "داشبورد", icon: <PIcon.Grid />, active: true },
  { label: "کلاس‌های من", icon: <PIcon.Video /> },
  { label: "محتوا و آپلود", icon: <PIcon.Lines /> },
  { label: "نمره‌دهی تکالیف", icon: <PIcon.Grade /> },
  { label: "دانشجویان", icon: <PIcon.Users /> },
];

const stats = [
  { value: "۴", label: "کلاس فعال" },
  { value: "۹۲", label: "دانشجوی فعال" },
  { value: "۵", label: "تکلیف در انتظار نمره", danger: true },
  { value: "۴.۹", label: "میانگین رضایت" },
];

const grading = [
  { name: "نگار احمدی", meta: "Writing Task 2 — ارسال‌شده ۲ ساعت پیش" },
  { name: "بابک رستمی", meta: "Writing Task 2 — ارسال‌شده دیروز" },
];

export default function InstructorPanelPage() {
  return (
    <div className="bg-page min-h-screen flex text-navy-800">
      <PanelSidebar title="پنل مدرس" items={nav} user={{ name: "دکتر شیرین علوی", role: "مدرس زبان" }} />

      <main className="flex-1 p-6 md:p-11 max-w-[1240px]">
        <div className="flex justify-between items-center mb-8 gap-4 flex-wrap">
          <div>
            <div className="text-[22px] font-extrabold">سلام، شیرین 👋</div>
            <div className="text-[13.5px] text-muted mt-1">امروز ۲ کلاس و ۵ تکلیف در انتظار بررسی داری</div>
          </div>
          <button className="btn-primary !px-[22px] !py-3 !text-sm">آپلود محتوای جدید</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[18px] mb-8">
          {stats.map((s) => (
            <div key={s.label} className="card p-5">
              <div className={`num text-[26px] font-bold ${s.danger ? "text-error" : ""}`}>{s.value}</div>
              <div className="text-[13px] text-muted mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6">
          <div>
            <div className="text-[15px] font-bold mb-4">کلاس‌های امروز</div>
            <div className="card overflow-hidden">
              <div className="flex items-center justify-between px-5 py-[18px] border-b border-[#F2F5F8] gap-3">
                <div>
                  <div className="text-sm font-bold mb-1">آیلتس آکادمیک فشرده — جلسه ۱۶</div>
                  <div className="text-[12.5px] text-muted">۱۸:۰۰ تا ۱۹:۳۰ · ۲۳ دانشجو</div>
                </div>
                <button className="bg-navy-800 text-white px-[18px] py-2.5 rounded-lg text-[13px] font-bold shrink-0">
                  شروع کلاس
                </button>
              </div>
              <div className="flex items-center justify-between px-5 py-[18px]">
                <div>
                  <div className="text-sm font-bold mb-1">تافل iBT جامع — جلسه ۹</div>
                  <div className="text-[12.5px] text-muted">۲۱:۰۰ تا ۲۲:۳۰ · ۱۸ دانشجو</div>
                </div>
                <span className="text-[12.5px] text-faint">فردا</span>
              </div>
            </div>

            <div className="text-[15px] font-bold mt-7 mb-4">تکالیف در انتظار نمره‌دهی</div>
            <div className="card overflow-hidden">
              {grading.map((g, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between px-5 py-4 ${
                    i < grading.length - 1 ? "border-b border-[#F2F5F8]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-navy-100 shrink-0" />
                    <div>
                      <div className="text-[13.5px] font-bold">{g.name}</div>
                      <div className="text-xs text-muted">{g.meta}</div>
                    </div>
                  </div>
                  <button className="bg-page text-navy-800 border border-line px-4 py-2 rounded-lg text-[12.5px] font-bold shrink-0">
                    نمره‌دهی
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* AI weekly analysis */}
          <div>
            <div className="text-[15px] font-bold mb-4">تحلیل هوشمند کلاس</div>
            <div className="card-dark p-[22px]">
              <div className="flex items-center gap-2 mb-3.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l1.6 5.1L19 9l-5.4 1.9L12 16l-1.6-5.1L5 9l5.4-1.9L12 2z" fill="#D98E3B" />
                </svg>
                <span className="text-[13px] font-bold text-amber-500">تحلیل AI هفتگی</span>
              </div>
              <div className="text-[13px] text-navy-100 leading-[1.9] mb-4">
                ۶۰٪ دانشجویان کلاس آیلتس در Task 2 ضعف مشترک در جملات ارتباطی دارند. پیشنهاد می‌شود یک جلسه
                مروری اختصاص یابد.
              </div>
              <div className="h-px bg-white/10 my-4" />
              <div className="text-[13px] text-navy-100 leading-[1.9]">
                میانگین نمره تکالیف این هفته: <b className="text-white">۷۸ از ۱۰۰</b> (۵٪ بهبود نسبت به هفته قبل)
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
