import Link from "next/link";
import { Header } from "@/components/marketing/Header";
import { Footer } from "@/components/marketing/Footer";
import { CourseCard } from "@/components/marketing/CourseCard";
import { FlightPath, Sparkle, IconBook, IconPlane, IconLms, IconShield } from "@/components/icons";
import {
  getFeaturedCourses,
  trustStats,
  testimonials,
  blogPosts,
} from "@/lib/data";

export default function HomePage() {
  const featured = getFeaturedCourses();
  const posts = blogPosts.slice(0, 3);

  return (
    <div className="bg-page text-navy-800 min-h-screen">
      <Header active="/" />

      {/* Hero */}
      <section className="relative px-6 md:px-20 pt-20 pb-24 bg-navy-900 overflow-hidden">
        <FlightPath opacity={0.07} />
        <div className="relative text-center max-w-[760px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[rgba(217,142,59,0.14)] text-amber-500 px-[18px] py-[7px] rounded-pill text-[13px] font-bold mb-6">
            <Sparkle size={14} pulse />
            همراه با دستیار هوشمند یادگیری
          </div>
          <h1 className="text-[34px] md:text-[46px] font-extrabold text-white leading-[1.4] mb-5">
            مسیر خودت را انتخاب کن
          </h1>
          <p className="text-[17px] text-[#AFC3D6] leading-[1.9]">
            آموزشگاه هما، خانه‌ی یادگیری زبان انگلیسی و آماده‌سازی خلبانی — با اساتید مجرب و سامانه
            آموزش آنلاین اختصاصی.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[1040px] mx-auto">
          <Link
            href="/courses/language"
            className="bg-white rounded-[20px] p-10 flex flex-col gap-4 hover:-translate-y-1 transition-transform"
          >
            <div className="w-14 h-14 rounded-[14px] bg-amber-100 flex items-center justify-center text-amber-600">
              <IconBook width={28} height={28} />
            </div>
            <div>
              <div className="text-[22px] font-bold text-navy-800 mb-2">آموزش زبان انگلیسی</div>
              <div className="text-[14.5px] text-muted leading-[1.8]">
                عمومی، مکالمه، آیلتس/تافل و کودکان — با مسیر یادگیری گیمیفای‌شده
              </div>
            </div>
            <div className="mt-auto flex items-center gap-1.5 text-amber-600 font-bold text-[14.5px]">
              مشاهده دوره‌ها ←
            </div>
          </Link>

          <Link
            href="/courses/pilot"
            className="bg-navy-700 rounded-[20px] p-10 flex flex-col gap-4 hover:-translate-y-1 transition-transform"
          >
            <div className="w-14 h-14 rounded-[14px] bg-[rgba(217,142,59,0.16)] flex items-center justify-center text-amber-500">
              <IconPlane width={28} height={28} />
            </div>
            <div>
              <div className="text-[22px] font-bold text-white mb-2">آموزش خلبانی</div>
              <div className="text-[14.5px] text-[#AFC3D6] leading-[1.8]">
                تئوری هوانوردی و آماده‌سازی کامل برای آزمون‌های خلبانی
              </div>
            </div>
            <div className="mt-auto flex items-center gap-1.5 text-amber-500 font-bold text-[14.5px]">
              مشاهده دوره‌ها ←
            </div>
          </Link>
        </div>
      </section>

      {/* Trust bar */}
      <section className="px-6 md:px-20 py-12 bg-white border-b border-line">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[1100px] mx-auto text-center">
          {trustStats.map((s) => (
            <div key={s.label}>
              <div className="num text-[32px] font-bold text-navy-800">{s.value}</div>
              <div className="text-sm text-muted mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured courses */}
      <section className="px-6 md:px-20 py-[88px] max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-[13px] font-bold text-amber-600 mb-2">دوره‌های محبوب</div>
            <h2 className="text-[30px] font-bold">شروع کن، همین امروز</h2>
          </div>
          <Link href="/courses/language" className="text-navy-800 font-bold text-[14.5px] hover:text-amber-600">
            مشاهده همه دوره‌ها ←
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((c) => (
            <CourseCard key={c.slug} course={c} />
          ))}
        </div>
      </section>

      {/* Why Homa */}
      <section className="px-6 md:px-20 py-[88px] bg-white">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center max-w-[600px] mx-auto mb-14">
            <div className="text-[13px] font-bold text-amber-600 mb-2">چرا هما</div>
            <h2 className="text-[30px] font-bold">یادگیری، هدایت‌شده و هوشمند</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <IconLms width={26} height={26} />,
                title: "سامانه آموزش اختصاصی",
                text: "کلاس‌های زنده و ضبط‌شده، تکالیف، آزمون و گواهی — همه در یک پنل.",
              },
              {
                icon: <Sparkle size={24} color="#BD7527" />,
                title: "همراه هوشمند AI",
                text: "بازخورد فوری و توضیح گرامری فارسی برای رفع اشتباهات، در تمرین‌های زبان.",
              },
              {
                icon: <IconShield width={26} height={26} />,
                title: "اساتید معتبر",
                text: "مدرسان با گواهینامه‌های بین‌المللی زبان و خلبانی حرفه‌ای.",
              },
            ].map((f) => (
              <div key={f.title} className="text-center px-5">
                <div className="w-14 h-14 rounded-[14px] bg-amber-100 flex items-center justify-center mx-auto mb-5 text-amber-600">
                  {f.icon}
                </div>
                <div className="text-[17px] font-bold mb-2.5">{f.title}</div>
                <div className="text-[14.5px] text-muted leading-[1.85]">{f.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-20 py-[88px] max-w-[1280px] mx-auto">
        <div className="text-center max-w-[600px] mx-auto mb-12">
          <div className="text-[13px] font-bold text-amber-600 mb-2">تجربه دانشجویان</div>
          <h2 className="text-[30px] font-bold">داستان‌هایی از مسیر هما</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-page rounded-card p-7">
              <div className="text-[14.5px] text-body leading-[1.9] mb-5">«{t.quote}»</div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-navy-100" />
                <div>
                  <div className="text-sm font-bold">{t.name}</div>
                  <div className="text-xs text-muted">{t.course}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog preview */}
      <section className="px-6 md:px-20 pb-[88px] max-w-[1280px] mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-[26px] font-bold">از بلاگ هما</h2>
          <Link href="/blog" className="text-navy-800 font-bold text-[14.5px] hover:text-amber-600">
            همه مقالات ←
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog`} className="card overflow-hidden block hover:-translate-y-1 transition-transform">
              <div
                className="h-[140px]"
                style={{ background: "linear-gradient(135deg,#DCE8F1,#F5F9FC)" }}
              />
              <div className="p-5">
                <div className="text-xs text-amber-600 font-bold mb-2">{p.category}</div>
                <div className="text-[15px] font-bold leading-[1.7]">{p.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-6 md:mx-20 mb-[88px] bg-navy-900 rounded-[24px] p-10 md:p-16 text-center relative overflow-hidden">
        <svg className="flightpath" viewBox="0 0 1200 300" preserveAspectRatio="none" style={{ opacity: 0.08 }} aria-hidden>
          <path
            d="M0,220 C 300,150 500,260 800,180 C 950,140 1050,200 1200,150"
            stroke="#D98E3B"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        <div className="relative">
          <h2 className="text-[28px] font-bold text-white mb-3.5">هنوز مطمئن نیستی از کجا شروع کنی؟</h2>
          <p className="text-[15.5px] text-[#AFC3D6] mb-7">
            یک مشاوره رایگان بگیر تا مسیر مناسب خودت را پیدا کنی.
          </p>
          <Link href="/contact" className="btn-primary !px-8 !py-4">
            درخواست مشاوره رایگان
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
