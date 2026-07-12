import Link from "next/link";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { DarkHero, CTABanner } from "@/components/marketing/DarkHero";
import { getInstructors } from "@/lib/data";

export const metadata = { title: "درباره ما — هما" };

const timeline = [
  {
    year: "۱۳۹۱",
    title: "تأسیس آموزشگاه زبان هما",
    text: "شروع فعالیت با یک کلاس مکالمه عمومی در تهران، با تمرکز بر آموزش کاربردی.",
  },
  {
    year: "۱۳۹۶",
    title: "راه‌اندازی واحد آماده‌سازی خلبانی",
    text: "با همکاری خلبانان بازنشسته و مدرسان تئوری هوانوردی، واحد جدید زیر برند هما آغاز به کار کرد.",
  },
  {
    year: "۱۴۰۰",
    title: "راه‌اندازی سامانه آموزش آنلاین",
    text: "امکان برگزاری کلاس زنده، ضبط‌شده و پیگیری پیشرفت دانشجویان به‌صورت کامل آنلاین.",
  },
  {
    year: "۱۴۰۳",
    title: "مسیر یادگیری گیمیفای‌شده و دستیار هوشمند AI",
    text: "افزودن مسیر یادگیری تعاملی و بازخورد هوشمند برای تمرین روزانه زبان.",
  },
];

const credentials = [
  { title: "مجوز رسمی", text: "مجوز فعالیت از سازمان فنی و حرفه‌ای کشور" },
  { title: "استاندارد CEFR", text: "سرفصل‌های زبان منطبق با چارچوب مرجع اروپایی" },
  { title: "تأیید سازمان هواپیمایی", text: "محتوای تئوری منطبق با آزمون‌های استاندارد هوانوردی کشوری" },
];

export default function AboutPage() {
  const preview = getInstructors().slice(0, 4);

  return (
    <div className="bg-page min-h-screen">
      <Header active="/about" />
      <DarkHero
        eyebrow="درباره هما"
        title="داستانی که از یک کلاس کوچک شروع شد"
        subtitle="امروز هما دو مسیر آموزشی مستقل — زبان انگلیسی و خلبانی — را زیر یک سقف با یک استاندارد کیفی گرد هم آورده است."
      />

      {/* Timeline */}
      <section className="px-6 md:px-20 py-[88px] max-w-[1000px] mx-auto">
        <div className="text-center mb-14">
          <div className="text-[13px] font-bold text-amber-600 mb-2">تاریخچه</div>
          <h2 className="text-[28px] font-bold">مسیر رشد هما</h2>
        </div>
        <div className="flex flex-col">
          {timeline.map((t, i) => (
            <div key={t.year} className="grid grid-cols-[70px_1fr] md:grid-cols-[120px_1fr] gap-5 md:gap-7 pb-10">
              <div className="num text-[22px] font-bold text-navy-800 text-left">{t.year}</div>
              <div
                className={`ps-6 pb-2 ${i === timeline.length - 1 ? "border-s-2 border-transparent" : "border-s-2 border-line"}`}
              >
                <div className="text-[17px] font-bold mb-2">{t.title}</div>
                <div className="text-[14.5px] text-muted leading-[1.85]">{t.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instructor preview */}
      <section className="px-6 md:px-20 py-[88px] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-12">
            <div className="text-[13px] font-bold text-amber-600 mb-2">تیم آموزشی</div>
            <h2 className="text-[28px] font-bold">اساتیدی که با تجربه واقعی تدریس می‌کنند</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {preview.map((ins) => (
              <div key={ins.id} className="text-center">
                <div className="w-24 h-24 rounded-full bg-navy-100 mx-auto mb-4" />
                <div className="text-[15.5px] font-bold">{ins.name}</div>
                <div className="text-[13px] text-muted mt-1">{ins.title}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/instructors" className="text-navy-800 font-bold text-[14.5px] hover:text-amber-600">
              مشاهده همه اساتید ←
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="px-6 md:px-20 py-[88px] max-w-[1100px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <div className="text-[13px] font-bold text-amber-600 mb-2">اعتبارنامه‌ها</div>
          <h2 className="text-[28px] font-bold">استانداردهایی که به آن پایبندیم</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {credentials.map((c) => (
            <div key={c.title} className="card p-7 text-center">
              <div className="num text-lg font-bold mb-2">{c.title}</div>
              <div className="text-[13.5px] text-muted leading-[1.8]">{c.text}</div>
            </div>
          ))}
        </div>
      </section>

      <CTABanner title="مسیر یادگیری خودت را با هما شروع کن" />
      <Footer simple />
    </div>
  );
}
