import Link from "next/link";
import { PhoneFrame } from "@/components/app/PhoneFrame";
import { LmsTabBar } from "@/components/app/LmsTabBar";
import { FlightPath, Sparkle } from "@/components/icons";
import { enrollments, upcomingClasses, currentUser, toFa, pct } from "@/lib/data";

export const metadata = { title: "داشبورد — سامانه آموزش هما" };

export default function LmsDashboardPage() {
  return (
    <PhoneFrame bg="#F5F9FC">
      {/* Dark greeting header */}
      <div className="pt-14 sm:pt-[100px] px-5 pb-5 bg-navy-900 relative overflow-hidden">
        <FlightPath opacity={0.08} />
        <div className="relative flex justify-between items-start">
          <div>
            <div className="text-[13px] text-[#AFC3D6] mb-1">صبح بخیر،</div>
            <div className="text-[19px] font-extrabold text-white">{currentUser.name}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/15" />
        </div>
        <div className="relative flex gap-2.5 mt-5">
          {[
            { v: "۶۲٪", l: "پیشرفت کلی", amber: true },
            { v: toFa(enrollments.length), l: "دوره فعال" },
            { v: "۳", l: "تکلیف باز" },
          ].map((s) => (
            <div key={s.l} className="flex-1 bg-white/10 rounded-xl p-3 text-center">
              <div className={`num text-[18px] font-bold ${s.amber ? "text-amber-500" : "text-white"}`}>{s.v}</div>
              <div className="text-[11px] text-[#AFC3D6] mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-auto p-5">
        <div className="flex items-center justify-between mb-3.5">
          <div className="text-[14.5px] font-bold">کلاس‌های پیش رو</div>
          <span className="text-[12.5px] text-amber-600 font-semibold">تقویم کامل</span>
        </div>
        {upcomingClasses.map((c, i) => (
          <Link
            href="/lms/class"
            key={i}
            className={`bg-white rounded-[14px] p-4 flex gap-3.5 items-center mb-3 ${
              c.next ? "border-s-[3px] border-amber-500" : ""
            }`}
          >
            <div className="text-center shrink-0">
              <div className="num text-[17px] font-bold text-navy-800">{c.time}</div>
              <div className="text-[10.5px] text-muted">{c.day}</div>
            </div>
            <div>
              <div className="text-[13.5px] font-bold mb-[3px]">{c.title}</div>
              <div className="text-xs text-muted">{c.meta}</div>
            </div>
          </Link>
        ))}

        <div className="text-[14.5px] font-bold mb-3.5 mt-6">ادامه یادگیری</div>
        {enrollments.map((e) => {
          const p = pct(e.done, e.total);
          return (
            <Link href="/lms/class" key={e.title} className="block bg-white rounded-[14px] p-4 mb-3">
              <div className="text-[13.5px] font-bold mb-2.5">{e.title}</div>
              <div className="h-1.5 bg-line rounded-pill overflow-hidden mb-2">
                <div className="h-full bg-amber-500" style={{ width: `${p}%` }} />
              </div>
              <div className="flex justify-between text-[11.5px] text-muted">
                <span>
                  {toFa(e.done)} از {toFa(e.total)} جلسه
                </span>
                <span>ادامه ‹</span>
              </div>
            </Link>
          );
        })}

        {/* AI insight strip */}
        <div className="flex gap-2 items-start bg-amber-100 rounded-[14px] p-4 mt-3">
          <Sparkle size={18} color="#BD7527" pulse />
          <div className="text-[12.5px] text-amber-700 leading-[1.7]">
            <b>تحلیل هوشمند:</b> نقاط ضعف تو در Writing Task 2 شناسایی شد؛ ۳ تمرین پیشنهادی آماده است.
          </div>
        </div>
      </div>

      <LmsTabBar active="dashboard" />
    </PhoneFrame>
  );
}
